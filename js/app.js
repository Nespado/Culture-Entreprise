/**
 * APPLICATION FRONTEND XELIANS : HABBO HOTEL ARCHIVAL WAREHOUSE
 * Reproduction fidèle de l'ambiance Habbo Hotel (habbo.png)
 * Scène 2.5D isométrique, zoom héroïque sur carton, ouverture 3D et lecture intégrale
 */

class XeliansHabboApp {
  constructor() {
    this.data = window.XELIANS_DATA;
    this.activeBoxId = null;
    this.activeFicheId = null;
    this.readFiches = new Set(JSON.parse(localStorage.getItem('xelians_read_fiches') || '[]'));
    this.audioEnabled = true;
    this.audioCtx = null;
    this.searchQuery = '';

    this.init();
  }

  init() {
    this.initHabboHotspots();
    this.renderHabboDock();
    this.updateProgressCounter();
    this.bindEvents();

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
        // Petit bip rétro aigu
        osc.type = 'sine';
        osc.frequency.setValueAtTime(680, now);
        osc.frequency.exponentialRampToValueAtTime(820, now + 0.03);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
        osc.start(now);
        osc.stop(now + 0.035);
      } else if (type === 'zoom') {
        // Bruit de zoom caméra / déplacement rapide
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(420, now + 0.22);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'open-box') {
        // Ouverture du carton (dépliage des rabats)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(180, now + 0.08);
        osc.frequency.linearRampToValueAtTime(320, now + 0.18);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'paper') {
        // Glissement papier d'un dossier suspendu
        osc.type = 'sine';
        osc.frequency.setValueAtTime(360, now);
        osc.frequency.exponentialRampToValueAtTime(740, now + 0.09);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
        osc.start(now);
        osc.stop(now + 0.11);
      } else if (type === 'close') {
        // Fermeture carton
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
   * Création des 7 cartons interactifs sur la scène Habbo Hotel
   */
  initHabboHotspots() {
    const layer = document.getElementById('carton-hotspots-layer');
    if (!layer) return;

    layer.innerHTML = this.data.cartons.map(b => `
      <div id="hotspot-${b.id}" class="carton-hotspot" 
           style="left: ${b.habboCoords.x}%; top: ${b.habboCoords.y}%; width: ${b.habboCoords.width}%; height: ${b.habboCoords.height}%;"
           onmouseenter="app.playSound('hover')" 
           onclick="app.zoomToBox('${b.id}')">
        
        <!-- Boîte de contour lumineuse isométrique -->
        <div class="carton-hotspot-box"></div>

        <!-- Étiquette volante Habbo avec identifiant de cote -->
        <div class="carton-tag-pill" style="border-color: ${b.color}; color: ${b.color};">
          ${b.cote}
        </div>

        <!-- Bulle de dialogue Habbo Hotel authentique au survol -->
        <div class="habbo-bubble">
          <div class="flex items-center gap-1.5 font-bold text-xs" style="color: ${b.color};">
            <span>📦</span>
            <span>${b.cote} : ${b.title}</span>
          </div>
          <div class="text-[10px] text-slate-600 mt-0.5">
            ${b.concept} • <strong>${b.fiches.length} fiches</strong>
          </div>
          <div class="text-[9px] font-mono font-bold text-sky-600 mt-1 uppercase tracking-wider">
            [ Cliquer pour zoomer et ouvrir ]
          </div>
        </div>

      </div>
    `).join('');
  }

  /**
   * Barre inférieure de raccourcis Habbo Hotel
   */
  renderHabboDock() {
    const dock = document.getElementById('habbo-carton-dock');
    if (!dock) return;

    dock.innerHTML = this.data.cartons.map(b => `
      <button onclick="app.zoomToBox('${b.id}')" 
              class="habbo-btn px-2.5 py-1 rounded text-slate-300 hover:text-white flex items-center gap-1.5 shrink-0 transition"
              title="${b.title}">
        <span class="w-2 h-2 rounded-full" style="background-color: ${b.color};"></span>
        <strong class="font-mono">${b.cote}</strong>
        <span class="text-[10px] text-slate-400 font-sans hidden md:inline">${b.tag}</span>
      </button>
    `).join('');
  }

  /**
   * ANIMATION CLÉ : ZOOM CAMÉRA VERS LE CARTON ET OUVERTURE
   */
  zoomToBox(boxId) {
    const box = this.data.cartons.find(b => b.id === boxId);
    if (!box) return;

    this.activeBoxId = boxId;

    // 1. Déclenchement son et calcul du point focal
    this.playSound('zoom');

    // 2. Zoom dynamique de la scène Habbo vers les coordonnées précises du carton
    const stage = document.getElementById('habbo-stage');
    if (stage) {
      stage.style.transformOrigin = `${box.habboCoords.x}% ${box.habboCoords.y}%`;
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

    // Animation d'ouverture des rabats 3D
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
    this.updateProgressCounter();

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
    this.updateProgressCounter();
  }

  /**
   * Compteur de progression d'audit
   */
  updateProgressCounter() {
    const total = 14;
    const read = this.readFiches.size;
    const pct = Math.round((read / total) * 100);

    const fill = document.getElementById('habbo-progress-fill');
    const text = document.getElementById('habbo-progress-text');

    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${read}/${total} (${pct}%)`;
  }

  /**
   * Recherche instantanée
   */
  onSearch(query) {
    this.searchQuery = query.toLowerCase().trim();
    const hotspots = document.querySelectorAll('.carton-hotspot');

    if (!this.searchQuery) {
      hotspots.forEach(el => el.classList.remove('carton-search-match'));
      return;
    }

    // Mettre en surbrillance les cartons qui contiennent le mot-clé
    this.data.cartons.forEach(b => {
      const match = b.fiches.some(f => 
        f.title.toLowerCase().includes(this.searchQuery) ||
        f.subtitle.toLowerCase().includes(this.searchQuery) ||
        f.content.toLowerCase().includes(this.searchQuery)
      );

      const el = document.getElementById(`hotspot-${b.id}`);
      if (el) {
        if (match) {
          el.classList.add('carton-search-match');
        } else {
          el.classList.remove('carton-search-match');
        }
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
