/**
 * APPLICATION FRONTEND XELIANS : HABBO HOTEL ARCHIVAL WAREHOUSE
 * Reproduction fidèle de l'ambiance Habbo Hotel (habbo.png)
 * Scène 2.5D isométrique, contours SVG 100% fidèles aux cartons, zoom héroïque et lecture intégrale
 */

class XeliansHabboApp {
  constructor() {
    this.data = window.XELIANS_DATA;
    this.activeBoxId = null;
    this.activeFicheId = null;
    this.readFiches = new Set(JSON.parse(localStorage.getItem('xelians_read_fiches') || '[]'));
    this.audioEnabled = true;
    this.audioCtx = null;

    this.init();
  }

  init() {
    this.initHabboIsometricContours();
    this.bindEvents();
    this.setupCalibrationHelper();

    // Support des paramètres URL pour accès direct (?box=box-01 ou ?fiche=fiche-1a)
    const params = new URLSearchParams(window.location.search);
    const boxParam = params.get('box');
    const ficheParam = params.get('fiche');

    if (ficheParam) {
      this.openFicheReader(ficheParam);
      const scrollParam = params.get('scroll');
      if (scrollParam) {
        setTimeout(() => {
          const bodyEl = document.getElementById('reader-fiche-body');
          if (bodyEl) bodyEl.scrollTop = parseInt(scrollParam, 10);
        }, 100);
      }
    } else if (boxParam) {
      this.zoomToBox(boxParam);
    } else {
      const hoverParam = params.get('hover');
      if (hoverParam) {
        this.onBoxHover(hoverParam);
      }
    }
  }

  /**
   * Synthétiseur audio Web Audio API rétro 8-bit (Style Habbo Hotel)
   */
  playSound(type) {
    if (!this.audioEnabled) return;
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      const now = this.audioCtx.currentTime;

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(680, now);
        osc.frequency.exponentialRampToValueAtTime(820, now + 0.03);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
        osc.start(now);
        osc.stop(now + 0.035);
      } else if (type === 'zoom') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(420, now + 0.22);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'open-box') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(180, now + 0.08);
        osc.frequency.linearRampToValueAtTime(320, now + 0.18);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'paper') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(360, now);
        osc.frequency.exponentialRampToValueAtTime(740, now + 0.09);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
        osc.start(now);
        osc.stop(now + 0.11);
      } else if (type === 'close') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(380, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.16);
      }
    } catch (e) {
      console.warn("Audio Web API non supporté ou bloqué", e);
    }
  }

  toggleSound() {
    this.audioEnabled = !this.audioEnabled;
    const btnIcon = document.getElementById('sound-icon');
    const btnLabel = document.getElementById('sound-label');
    if (this.audioEnabled) {
      if (btnIcon) btnIcon.textContent = '🔊';
      if (btnLabel) btnLabel.textContent = 'ON';
      this.playSound('hover');
    } else {
      if (btnIcon) btnIcon.textContent = '🔇';
      if (btnLabel) btnLabel.textContent = 'OFF';
    }
  }

  /**
   * Création des 7 contours isométriques SVG fidèles aux cartons de habbo.png
   */
  initHabboIsometricContours() {
    const svgLayer = document.getElementById('carton-hotspots-svg');
    const bubblesLayer = document.getElementById('habbo-speech-bubbles-layer');
    if (!svgLayer) return;

    let svgHtml = '';
    let bubblesHtml = '';

    this.data.cartons.forEach(b => {
      const poly = b.isoBox.poly;
      const center = b.isoBox.center;
      const pointsStr = poly.map(p => p.join(',')).join(' ');

      // Sommet supérieur du carton pour placer le badge et la bulle
      const topX = poly[0][0];
      const topY = poly[0][1];

      // Groupe SVG interactif pour chaque carton
      svgHtml += `
        <g id="iso-box-${b.id}" class="carton-iso-group" 
           onclick="app.zoomToBox('${b.id}')" 
           onmouseenter="app.onBoxHover('${b.id}')" 
           onmouseleave="app.onBoxLeave('${b.id}')">
          
          <!-- Silhouette polygonale isométrique 3D du carton -->
          <polygon points="${pointsStr}" class="carton-iso-poly" style="stroke: ${b.color};" />

          <!-- Arêtes internes 3D isométriques qui se rejoignent au sommet central -->
          <line x1="${center[0]}" y1="${center[1]}" x2="${poly[1][0]}" y2="${poly[1][1]}" class="carton-iso-edge" style="stroke: ${b.color};" />
          <line x1="${center[0]}" y1="${center[1]}" x2="${poly[5][0]}" y2="${poly[5][1]}" class="carton-iso-edge" style="stroke: ${b.color};" />
          <line x1="${center[0]}" y1="${center[1]}" x2="${poly[3][0]}" y2="${poly[3][1]}" class="carton-iso-edge" style="stroke: ${b.color};" />

          <!-- Étiquette volante Habbo stylisée : agrandie et très lisible -->
          <g transform="translate(${topX}, ${topY - 24})" class="carton-iso-tag">
            <g class="carton-tag-inner">
              <rect x="-48" y="-16" width="96" height="32" rx="6" fill="#0F0D2D" stroke="${b.color}" stroke-width="2.5" />
              <circle cx="-30" cy="0" r="4.5" fill="${b.color}" />
              <text x="8" y="1" fill="#FFFFFF" font-family="'Mulish', monospace" font-size="15" font-weight="900" letter-spacing="1.2" text-anchor="middle" dominant-baseline="middle">${b.cote}</text>
            </g>
          </g>

        </g>
      `;

      // Bulle de dialogue Habbo Hotel positionnée au sommet du carton
      const pctLeft = ((topX / 1672) * 100).toFixed(2);
      const pctTop = ((topY / 941) * 100).toFixed(2);

      bubblesHtml += `
        <div id="bubble-${b.id}" class="habbo-bubble" style="left: ${pctLeft}%; top: ${pctTop}%;">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-mono font-black text-white shrink-0" style="background-color: ${b.color};">
              ${b.cote}
            </span>
            <span class="font-black text-sm text-[#0F0D2D]">
              ${b.title}
            </span>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate-600 mt-1.5 font-medium">
            <span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">${b.concept}</span>
            <span>•</span>
            <span class="font-bold text-slate-800">📂 ${b.fiches.length} fiches suspendues</span>
          </div>
          <div class="mt-2 text-xs font-mono font-black text-[#1464FF] bg-sky-50 px-2.5 py-1 rounded border border-sky-200 inline-flex items-center gap-1.5">
            <span>📦</span>
            <span>Cliquer pour zoomer et ouvrir</span>
          </div>
        </div>
      `;
    });

    svgLayer.innerHTML = svgHtml;
    if (bubblesLayer) bubblesLayer.innerHTML = bubblesHtml;
  }

  onBoxHover(boxId) {
    this.playSound('hover');
    const bubble = document.getElementById(`bubble-${boxId}`);
    if (bubble) {
      bubble.classList.add('is-visible');
    }
  }

  onBoxLeave(boxId) {
    const bubble = document.getElementById(`bubble-${boxId}`);
    if (bubble) {
      bubble.classList.remove('is-visible');
    }
  }

  /**
   * ANIMATION CLÉ : ZOOM CAMÉRA VERS LE CARTON ET OUVERTURE
   */
  zoomToBox(boxId) {
    const box = this.data.cartons.find(b => b.id === boxId);
    if (!box) return;

    this.activeBoxId = boxId;
    this.onBoxLeave(boxId);

    // 1. Déclenchement son et calcul du point focal
    this.playSound('zoom');

    // 2. Zoom dynamique de la scène Habbo vers les coordonnées précises du carton
    const stage = document.getElementById('habbo-stage');
    if (stage) {
      stage.style.transformOrigin = `${box.isoBox.zoomOrigin.x}% ${box.isoBox.zoomOrigin.y}%`;
      stage.style.transform = 'scale(3.2)';
      stage.classList.add('is-zoomed');
    }

    // 3. Mise à jour des informations du carton héroïque
    const badgeEl = document.getElementById('zoomed-box-badge');
    const conceptEl = document.getElementById('zoomed-box-concept');
    const titleEl = document.getElementById('zoomed-box-title');
    const coteEl = document.getElementById('box-front-cote');

    if (badgeEl) badgeEl.textContent = box.cote;
    if (conceptEl) conceptEl.textContent = box.concept;
    if (titleEl) titleEl.textContent = box.title;
    if (coteEl) coteEl.textContent = `${box.cote} / ${box.tag.toUpperCase()}`;

    // 4. Rendu des dossiers suspendus (fiches) dans le carton
    this.renderHangingFoldersInsideBox(box);

    // 5. Affichage du carton grandeur héroïque et déclenchement de l'ouverture
    const modal = document.getElementById('zoomed-box-modal');
    const heroBox = document.getElementById('archival-hero-box');

    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('active');
    }

    if (heroBox) {
      heroBox.classList.add('is-open');
      this.playSound('open-box');
    }
  }

  /**
   * Rendu des dossiers suspendus à l'intérieur du carton ouvert
   */
  renderHangingFoldersInsideBox(box) {
    const container = document.getElementById('zoomed-box-folders');
    if (!container) return;

    container.innerHTML = box.fiches.map((fiche, index) => {
      const isRead = this.readFiches.has(fiche.id);
      return `
        <div class="hanging-folder-item" 
             style="animation-delay: ${index * 80}ms;"
             onmouseenter="app.playSound('hover')"
             onclick="app.openFicheReader('${fiche.id}')">
          
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <!-- Onglet plastique supérieur du dossier suspendu -->
              <span class="folder-tab" style="background-color: ${box.color}; color: #0F0D2D;">
                <span>📂</span>
                <span>${fiche.code}</span>
              </span>
              <div>
                <h4 class="text-sm font-bold text-[#0F0D2D] leading-tight">
                  ${fiche.title}
                </h4>
                <p class="text-xs text-slate-600 mt-0.5 line-clamp-1">
                  ${fiche.subtitle}
                </p>
              </div>
            </div>

            <!-- Statut de lecture & CTA -->
            <div class="flex items-center gap-2 shrink-0">
              ${isRead 
                ? '<span class="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">✓ Lu</span>' 
                : '<span class="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Non lu</span>'
              }
              <span class="text-xs text-sky-600 font-bold hidden sm:inline">Lire →</span>
            </div>
          </div>

        </div>
      `;
    }).join('');
  }

  /**
   * Refermer le carton zoomé et revenir à la vue globale du hangar
   */
  closeZoomedBox() {
    this.playSound('close');

    const heroBox = document.getElementById('archival-hero-box');
    if (heroBox) heroBox.classList.remove('is-open');

    const modal = document.getElementById('zoomed-box-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.classList.add('hidden');
    }

    // Réinitialisation du zoom de la scène Habbo
    const stage = document.getElementById('habbo-stage');
    if (stage) {
      stage.style.transform = 'scale(1)';
      stage.classList.remove('is-zoomed');
    }

    this.activeBoxId = null;
  }

  /**
   * OUVERTURE D'UNE FICHE SUSPENDUE EN PLEIN ÉCRAN POUR LECTURE COMPLÈTE
   */
  openFicheReader(ficheId) {
    // Trouver la fiche et son carton parent
    let foundFiche = null;
    let foundBox = null;

    for (const b of this.data.cartons) {
      const f = b.fiches.find(item => item.id === ficheId);
      if (f) {
        foundFiche = f;
        foundBox = b;
        break;
      }
    }

    if (!foundFiche || !foundBox) return;

    this.activeFicheId = ficheId;
    this.playSound('paper');

    // Marquer automatiquement comme lue
    this.readFiches.add(ficheId);
    localStorage.setItem('xelians_read_fiches', JSON.stringify([...this.readFiches]));

    // Remplir les métadonnées de l'en-tête de lecture
    const codeEl = document.getElementById('reader-fiche-code');
    const cartonEl = document.getElementById('reader-fiche-carton');
    const titleEl = document.getElementById('reader-fiche-title');
    const subtitleEl = document.getElementById('reader-fiche-subtitle');
    const checkboxEl = document.getElementById('reader-read-checkbox');
    const bodyEl = document.getElementById('reader-fiche-body');

    if (codeEl) {
      codeEl.textContent = foundFiche.code;
      codeEl.style.backgroundColor = `${foundBox.color}25`;
      codeEl.style.color = '#0F0D2D';
    }
    if (cartonEl) cartonEl.textContent = `${foundBox.cote} : ${foundBox.title}`;
    if (titleEl) titleEl.textContent = foundFiche.title;
    if (subtitleEl) subtitleEl.textContent = foundFiche.subtitle;
    if (checkboxEl) checkboxEl.checked = true;

    // Rendu du texte académique Bac+5 exhaustif et des illustrations
    if (bodyEl) {
      let illustrationMount = '';
      if (foundFiche.illustrationRef) {
        illustrationMount = '<div id="fiche-illustration-mount" class="mt-6"></div>';
      }

      bodyEl.innerHTML = `
        <div class="space-y-4">
          ${foundFiche.content}
          ${illustrationMount}
        </div>
      `;

      // Défilement en haut de la fiche
      bodyEl.scrollTop = 0;

      // Injection de l'illustration technique correspondante
      if (foundFiche.illustrationRef && window.XELIANS_ILLUSTRATIONS) {
        const illMap = {
          'ill-01': 'renderIllustration1',
          'ill-02': 'renderIllustration2',
          'ill-03': 'renderIllustration3',
          'ill-04': 'renderIllustration4',
          'ill-05': 'renderIllustration5'
        };
        const funcName = illMap[foundFiche.illustrationRef];
        if (funcName && typeof window.XELIANS_ILLUSTRATIONS[funcName] === 'function') {
          window.XELIANS_ILLUSTRATIONS[funcName]('fiche-illustration-mount');
        }
      }
    }

    // Afficher le volet de lecture épuré blanc
    const modal = document.getElementById('fiche-reader-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('active');
    }
  }

  /**
   * Replacer la fiche lue dans le carton
   */
  closeFicheReader() {
    this.playSound('close');

    const modal = document.getElementById('fiche-reader-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.classList.add('hidden');
    }

    this.activeFicheId = null;

    // Mettre à jour l'affichage des dossiers dans le carton pour refléter le statut "✓ Lu"
    if (this.activeBoxId) {
      const box = this.data.cartons.find(b => b.id === this.activeBoxId);
      if (box) this.renderHangingFoldersInsideBox(box);
    }
  }

  /**
   * Navigation entre fiches
   */
  navigateFiche(direction) {
    if (!this.activeFicheId) return;

    // Aplatir toutes les fiches
    const allFiches = [];
    this.data.cartons.forEach(b => {
      b.fiches.forEach(f => allFiches.push({ fiche: f, box: b }));
    });

    const currentIndex = allFiches.findIndex(item => item.fiche.id === this.activeFicheId);
    if (currentIndex === -1) return;

    let targetIndex = currentIndex + direction;
    if (targetIndex < 0) targetIndex = allFiches.length - 1;
    if (targetIndex >= allFiches.length) targetIndex = 0;

    const target = allFiches[targetIndex];
    this.activeBoxId = target.box.id;
    this.openFicheReader(target.fiche.id);
  }

  toggleReadStatus(checked) {
    if (!this.activeFicheId) return;
    if (checked) {
      this.readFiches.add(this.activeFicheId);
    } else {
      this.readFiches.delete(this.activeFicheId);
    }
    localStorage.setItem('xelians_read_fiches', JSON.stringify([...this.readFiches]));
  }

  /**
   * Outil de calibration pour l'utilisateur :
   * Shift + Clic sur l'entrepôt affiche et copie les coordonnées exactes [X, Y]
   */
  setupCalibrationHelper() {
    const stage = document.getElementById('habbo-stage');
    if (!stage || !stage.addEventListener) return;

    stage.addEventListener('click', (e) => {
      if (!e.shiftKey) return; // Actif uniquement si Shift est maintenu

      const rect = stage.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Conversion vers le référentiel natif 1672 x 941
      const nativeX = Math.round((clickX / rect.width) * 1672);
      const nativeY = Math.round((clickY / rect.height) * 941);
      const coordStr = `[${nativeX}, ${nativeY}]`;

      console.log(`%c[CALIBRATION XELIANS] Point cliqué : ${coordStr}`, 'color: #0EBCFF; font-weight: bold;');

      // Toast visuel
      const toast = document.getElementById('coord-toast');
      if (toast) {
        toast.textContent = `📍 Coordonnée cliquée : ${coordStr} (copié)`;
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, 2200);
      }

      if (navigator.clipboard) {
        navigator.clipboard.writeText(coordStr).catch(() => {});
      }
    });
  }

  bindEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.activeFicheId) {
          this.closeFicheReader();
        } else if (this.activeBoxId) {
          this.closeZoomedBox();
        }
      } else if (e.key === 'ArrowLeft' && this.activeFicheId) {
        this.navigateFiche(-1);
      } else if (e.key === 'ArrowRight' && this.activeFicheId) {
        this.navigateFiche(1);
      }
    });
  }
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  window.app = new XeliansHabboApp();
});
