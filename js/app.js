/**
 * LOGIQUE APPLICATIVE - XELIANS ISOMETRIC ARCHIVAL EXPLORER
 * Habbo Hotel x Hangar d'Archivage Isométrique
 * Gestion de la scène 2.5D, des cartons cubiques, des chemises suspendues
 * et du volet de lecture central épuré blanc.
 */

class XeliansIsoApp {
  constructor() {
    this.data = window.XELIANS_DATA;
    this.activeBoxId = null;
    this.activeFicheId = null;
    this.readFiches = new Set(JSON.parse(localStorage.getItem('xelians_read_fiches') || '[]'));
    this.audioEnabled = false;
    this.audioCtx = null;
    this.searchQuery = '';

    this.init();
  }

  init() {
    this.renderHeaderInfo();
    this.initIsoWarehouseScene();
    this.renderQuickInventoryDock();
    this.updateProgressCounter();
    this.bindEvents();

    // Ouvrir le premier carton par défaut pour orienter l'évaluateur immédiatement
    this.selectBox('box-01', false);
  }

  /**
   * Synthèse sonore rétro (Web Audio API)
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
        osc.frequency.setValueAtTime(520, now);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'open-box') {
        // Son ouverture carton
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(380, now + 0.14);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.16);
      } else if (type === 'paper') {
        // Son glissement fiche
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      }
    } catch (e) {
      console.warn("Audio non disponible", e);
    }
  }

  toggleSound() {
    this.audioEnabled = !this.audioEnabled;
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
      if (this.audioEnabled) {
        btn.innerHTML = `
          <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          <span class="text-sky-300">Sons Rétro : ON</span>
        `;
        this.playSound('open-box');
      } else {
        btn.innerHTML = `
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
          <span class="text-slate-400">Sons Rétro : OFF</span>
        `;
      }
    }
  }

  renderHeaderInfo() {
    const metaEl = document.getElementById('academic-meta-header');
    if (!metaEl) return;
    metaEl.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-slate-800 pb-2.5">
        <div class="flex items-center gap-3">
          <span class="px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 font-bold">
            MASTER 2 • ÉVALUATION NOTÉE / 20
          </span>
          <span class="text-slate-400">Entreprise : <strong class="text-white">XELIANS</strong></span>
        </div>
        <div class="flex items-center gap-4 text-slate-400 text-[11px]">
          <span>800 collab. | 9 000 km d'archives | 29 sites</span>
          <span class="hidden sm:inline">•</span>
          <span class="text-emerald-400">Support 100% autonome</span>
        </div>
      </div>
    `;
  }

  /**
   * Scène Isométrique 2.5D Hangar d'Archivage
   */
  initIsoWarehouseScene() {
    const sceneContainer = document.getElementById('iso-scene-canvas-container');
    if (!sceneContainer) return;

    // Configuration des 7 cartons dans l'espace isométrique du hangar
    // [id, x, y, cote, title, shelfLevel]
    const boxConfigs = [
      { id: "box-01", x: 190, y: 310, shelf: "Rack A - Niveau 1", label: "BOX-01 : ARTEFACTS" },
      { id: "box-02", x: 330, y: 240, shelf: "Rack A - Niveau 2", label: "BOX-02 : VALEURS" },
      { id: "box-03", x: 470, y: 170, shelf: "Rack A - Niveau 3", label: "BOX-03 : PRÉSUPPOSÉS" },
      { id: "box-04", x: 620, y: 350, shelf: "Palette Centrale", label: "BOX-04 : DIAGNOSTIC OCAI" },
      { id: "box-05", x: 770, y: 280, shelf: "Rack B - Niveau 1", label: "BOX-05 : COMPÉTITION & M&A" },
      { id: "box-06", x: 910, y: 210, shelf: "Rack B - Niveau 2", label: "BOX-06 : INTRAPRENEURIAT" },
      { id: "box-07", x: 1050, y: 140, shelf: "Rack B - Niveau 3", label: "BOX-07 : BILAN & AMBIDEXTRIE" }
    ];

    sceneContainer.innerHTML = `
      <svg viewBox="0 0 1200 640" class="w-full h-auto select-none rounded-xl" id="iso-warehouse-svg">
        <defs>
          <!-- Filtre de halo néon Habbo -->
          <filter id="habbo-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#0EBCFF" flood-opacity="0.8"/>
          </filter>
          
          <!-- Hachures de sécurité sol industriel jaune/noir -->
          <pattern id="hazardStripes" width="20" height="20" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="20" stroke="#F59E0B" stroke-width="8" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="#111827" stroke-width="8" />
          </pattern>

          <!-- Texture sol dalle béton isométrique -->
          <pattern id="isoTiles" width="60" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 60 15 L 30 30 L 0 15 Z" fill="#13172B" stroke="#1C233F" stroke-width="1"/>
          </pattern>
        </defs>

        <!-- 1. FOND HANGAR & MURS ISOMÉTRIQUES -->
        <rect x="0" y="0" width="1200" height="640" fill="#0A0C16"/>
        
        <!-- Panneaux muraux de fond -->
        <polygon points="0,0 1200,0 1200,160 0,160" fill="#0F1222"/>
        <line x1="0" y1="160" x2="1200" y2="160" stroke="#1E2646" stroke-width="2"/>
        
        <!-- Poutres métalliques murales -->
        <line x1="150" y1="0" x2="150" y2="160" stroke="#182038" stroke-width="6"/>
        <line x1="450" y1="0" x2="450" y2="160" stroke="#182038" stroke-width="6"/>
        <line x1="750" y1="0" x2="750" y2="160" stroke="#182038" stroke-width="6"/>
        <line x1="1050" y1="0" x2="1050" y2="160" stroke="#182038" stroke-width="6"/>

        <!-- Panneau indicateur LED d'ambiance industrielle -->
        <g transform="translate(430, 25)">
          <rect x="0" y="0" width="340" height="36" rx="4" fill="#05070D" stroke="#0EBCFF" stroke-width="1.5"/>
          <circle cx="16" cy="18" r="4" fill="#10B981" class="animate-pulse"/>
          <text x="32" y="22" fill="#0EBCFF" font-family="'Mulish', monospace" font-size="11" font-weight="bold">
            SITE SIAF #26 • TEMP: 18.2°C • HYGRO: 49.6% HR
          </text>
        </g>

        <!-- Caméra de surveillance avec voyant rouge clignotant -->
        <g transform="translate(1080, 40)">
          <rect x="0" y="0" width="24" height="12" rx="2" fill="#334155"/>
          <path d="M 0 12 L -8 20 L 0 20 Z" fill="#1E293B"/>
          <circle cx="2" cy="16" r="3" fill="#EF4444"/>
          <circle cx="2" cy="16" r="6" fill="#EF4444" opacity="0.3" class="animate-ping"/>
        </g>

        <!-- 2. SOL ISOMÉTRIQUE EN BÉTON QUADRILLÉ (STYLE HABBO) -->
        <polygon points="0,160 1200,160 1200,640 0,640" fill="url(#isoTiles)"/>

        <!-- Lignes de sécurité piétonne jaune/noir au sol -->
        <polygon points="50,620 560,360 610,385 100,640" fill="url(#hazardStripes)" opacity="0.8"/>
        <polygon points="630,375 1140,625 1090,640 580,390" fill="url(#hazardStripes)" opacity="0.8"/>

        <!-- 3. RACKS D'ARCHIVES INDUSTRIELS EN ACIER (Structure Isométrique) -->
        <!-- RACK GAUCHE (Cartons 01, 02, 03) -->
        <g>
          <!-- Montants verticaux bleus industriels -->
          <rect x="110" y="200" width="10" height="240" fill="#1464FF" stroke="#0EBCFF" stroke-width="0.5"/>
          <rect x="250" y="130" width="10" height="240" fill="#1464FF" stroke="#0EBCFF" stroke-width="0.5"/>
          <rect x="390" y="60" width="10" height="240" fill="#1464FF" stroke="#0EBCFF" stroke-width="0.5"/>
          <rect x="530" y="-10" width="10" height="240" fill="#1464FF" stroke="#0EBCFF" stroke-width="0.5"/>

          <!-- Étagères horizontales orange sécurité -->
          <polygon points="110,410 530,200 540,205 120,415" fill="#EA580C" stroke="#F97316"/>
          <polygon points="110,340 530,130 540,135 120,345" fill="#EA580C" stroke="#F97316"/>
          <polygon points="110,270 530,60 540,65 120,275" fill="#EA580C" stroke="#F97316"/>
        </g>

        <!-- PALETTE EN BOIS CENTRALE (Carton 04) -->
        <g transform="translate(560, 420)">
          <polygon points="60,0 150,45 90,75 0,30" fill="#92400E" stroke="#B45309" stroke-width="1"/>
          <polygon points="0,30 90,75 90,87 0,42" fill="#78350F"/>
          <polygon points="90,75 150,45 150,57 90,87" fill="#58240A"/>
          <!-- Lattes supérieures -->
          <polygon points="10,25 70,-5 82,1 22,31" fill="#B45309"/>
          <polygon points="30,35 90,5 102,11 42,41" fill="#B45309"/>
          <polygon points="50,45 110,15 122,21 62,51" fill="#B45309"/>
        </g>

        <!-- RACK DROITE (Cartons 05, 06, 07) -->
        <g>
          <rect x="690" y="170" width="10" height="240" fill="#1464FF" stroke="#0EBCFF" stroke-width="0.5"/>
          <rect x="830" y="100" width="10" height="240" fill="#1464FF" stroke="#0EBCFF" stroke-width="0.5"/>
          <rect x="970" y="30" width="10" height="240" fill="#1464FF" stroke="#0EBCFF" stroke-width="0.5"/>
          <rect x="1110" y="-40" width="10" height="240" fill="#1464FF" stroke="#0EBCFF" stroke-width="0.5"/>

          <polygon points="690,380 1110,170 1120,175 700,385" fill="#EA580C" stroke="#F97316"/>
          <polygon points="690,310 1110,100 1120,105 700,315" fill="#EA580C" stroke="#F97316"/>
          <polygon points="690,240 1110,30 1120,35 700,245" fill="#EA580C" stroke="#F97316"/>
        </g>

        <!-- 4. LES 7 CARTONS D'ARCHIVES KRAFT ISOMÉTRIQUES (CLIQUABLES) -->
        <g id="iso-boxes-layer">
          ${boxConfigs.map((cfg, idx) => {
            const boxData = this.data.cartons.find(b => b.id === cfg.id);
            const isBoxRead = boxData.fiches.every(f => this.readFiches.has(f.id));
            const x = cfg.x;
            const y = cfg.y;

            return `
              <g class="iso-box-group" id="svg-box-${cfg.id}" 
                 onclick="app.selectBox('${cfg.id}')"
                 onmouseenter="app.onBoxHover('${cfg.id}', ${x}, ${y - 45})"
                 onmouseleave="app.onBoxLeave()">
                
                <!-- Ombre portée sous le carton -->
                <ellipse cx="${x + 40}" cy="${y + 70}" rx="46" ry="18" fill="#000000" opacity="0.45"/>

                <!-- Face supérieure (Top - Kraft clair) -->
                <polygon points="${x + 40},${y} ${x + 85},${y + 22} ${x + 45},${y + 42} ${x},${y + 20}" 
                         fill="#E7CDA7" stroke="#C9A676" stroke-width="1.2"/>
                <!-- Bande adhésive bleue de scellé sur le dessus -->
                <polygon points="${x + 18},${y + 9} ${x + 65},${y + 32} ${x + 55},${y + 37} ${x + 8},${y + 14}" 
                         fill="#1464FF" opacity="0.85"/>

                <!-- Face avant-gauche (Front Left - Kraft ombre) -->
                <polygon points="${x},${y + 20} ${x + 45},${y + 42} ${x + 45},${y + 98} ${x},${y + 76}" 
                         fill="#B89467" stroke="#A07A4E" stroke-width="1.2"/>
                <!-- Poignée découpée sur la face gauche -->
                <polygon points="${x + 14},${y + 44} ${x + 30},${y + 52} ${x + 30},${y + 58} ${x + 14},${y + 50}" 
                         fill="#0A0C16" stroke="#8D6538"/>

                <!-- Face avant-droite (Front Right - Kraft médium avec Logo & Étiquette) -->
                <polygon points="${x + 45},${y + 42} ${x + 85},${y + 22} ${x + 85},${y + 78} ${x + 45},${y + 98}" 
                         fill="#CCA97E" stroke="#B08B5D" stroke-width="1.2"/>

                <!-- ÉTIQUETTE BLANCHE DE COTE (BOX-01, etc.) -->
                <polygon points="${x + 52},${y + 46} ${x + 78},${y + 33} ${x + 78},${y + 60} ${x + 52},${y + 73}" 
                         fill="#FFFFFF" stroke="#0EBCFF" stroke-width="1"/>
                <text x="${x + 65}" y="${y + 55}" text-anchor="middle" fill="#0F0D2D" 
                      font-family="'Mulish', monospace" font-size="7.5" font-weight="900" transform="rotate(-26 ${x + 65} ${y + 55})">
                  ${boxData.cote}
                </text>

                <!-- LOGO XELIANS (Boucle infinie) sur la face droite -->
                <path d="M ${x + 56} ${y + 83} C ${x + 56} ${y + 78}, ${x + 63} ${y + 77}, ${x + 68} ${y + 83} C ${x + 73} ${y + 89}, ${x + 80} ${y + 88}, ${x + 80} ${y + 83} C ${x + 80} ${y + 78}, ${x + 73} ${y + 77}, ${x + 68} ${y + 83} Z" 
                      fill="none" stroke="#1464FF" stroke-width="2.5" stroke-linecap="round"/>

                <!-- Indicateur badge d'état sur le carton -->
                <circle cx="${x + 45}" cy="${y + 10}" r="9" fill="${isBoxRead ? '#10B981' : '#0EBCFF'}" stroke="#FFFFFF" stroke-width="1.5"/>
                <text x="${x + 45}" y="${y + 13}" text-anchor="middle" fill="#FFFFFF" font-family="'Mulish', sans-serif" font-size="9" font-weight="900">
                  ${idx + 1}
                </text>
              </g>
            `;
          }).join('')}
        </g>
      </svg>

      <!-- Bulle volante Habbo Hotel (positionnée dynamiquement) -->
      <div id="habbo-tooltip-bubble" class="habbo-bubble hidden"></div>
    `;
  }

  onBoxHover(boxId, x, y) {
    this.playSound('hover');
    const bubble = document.getElementById('habbo-tooltip-bubble');
    const box = this.data.cartons.find(b => b.id === boxId);
    if (!bubble || !box) return;

    bubble.innerHTML = `
      <div class="flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>📦 <strong>${box.cote}</strong> : ${box.title}</span>
        <span class="text-sky-300 ml-1">(${box.fiches.length} Fiches)</span>
      </div>
    `;

    // Positionnement relatif sur le conteneur SVG
    const svg = document.getElementById('iso-warehouse-svg');
    if (svg) {
      const rect = svg.getBoundingClientRect();
      const scaleX = rect.width / 1200;
      const scaleY = rect.height / 640;
      bubble.style.left = `${(x + 42) * scaleX}px`;
      bubble.style.top = `${y * scaleY}px`;
      bubble.classList.remove('hidden');
    }
  }

  onBoxLeave() {
    const bubble = document.getElementById('habbo-tooltip-bubble');
    if (bubble) bubble.classList.add('hidden');
  }

  /**
   * Sélection d'un carton : animation et déploiement des fiches suspendues
   */
  selectBox(boxId, triggerSound = true) {
    const box = this.data.cartons.find(b => b.id === boxId);
    if (!box) return;

    this.activeBoxId = boxId;
    if (triggerSound) this.playSound('open-box');

    // Mettre en surbrillance le carton SVG
    document.querySelectorAll('.iso-box-group').forEach(el => el.classList.remove('active-box'));
    const svgBox = document.getElementById(`svg-box-${boxId}`);
    if (svgBox) svgBox.classList.add('active-box');

    // Mettre à jour les boutons du dock
    document.querySelectorAll('.dock-box-btn').forEach(btn => {
      if (btn.dataset.box === boxId) {
        btn.classList.add('border-sky-400', 'bg-sky-950/80', 'text-white');
        btn.classList.remove('border-slate-800', 'text-slate-400');
      } else {
        btn.classList.remove('border-sky-400', 'bg-sky-950/80', 'text-white');
        btn.classList.add('border-slate-800', 'text-slate-400');
      }
    });

    // Déployer les fiches suspendues qui sortent de ce carton
    this.renderHangingFoldersTray(box);
  }

  /**
   * Rendu des fiches suspendues sortant du carton actif
   */
  renderHangingFoldersTray(box) {
    const trayContainer = document.getElementById('hanging-folders-tray');
    if (!trayContainer) return;

    trayContainer.innerHTML = `
      <div class="p-5 bg-gradient-to-r from-[#111425] via-[#161B33] to-[#0E1020] rounded-xl border border-sky-500/30 shadow-xl space-y-4">
        <!-- En-tête du carton ouvert -->
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-sky-400 animate-ping"></span>
            <div>
              <span class="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">${box.cote} OUVERT</span>
              <h3 class="text-lg font-black text-white leading-tight">${box.title}</h3>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
              ${box.fiches.length} fiches suspendues prêtes à être explorées
            </span>
          </div>
        </div>

        <p class="text-xs text-slate-300">
          › <em>Cadre théorique :</em> <span class="text-sky-300 font-medium">${box.concept}</span>
        </p>

        <!-- Liste des chemises suspendues -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          ${box.fiches.map(fiche => {
            const isRead = this.readFiches.has(fiche.id);
            return `
              <div class="hanging-folder-card ${isRead ? 'read' : ''} group" onclick="app.openFicheReader('${fiche.id}')">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="folder-tab ${isRead ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-sky-950 text-sky-300 border border-sky-800'}">
                      ${fiche.code}
                    </span>
                    ${isRead ? `
                      <span class="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        Examiné
                      </span>
                    ` : `
                      <span class="text-[10px] font-mono text-amber-400">À consulter</span>
                    `}
                  </div>
                  <h4 class="text-sm font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                    ${fiche.title}
                  </h4>
                  <p class="text-[11px] text-slate-400 mt-1 line-clamp-1">
                    ${fiche.subtitle}
                  </p>
                </div>
                <div class="ml-2 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 transition-all">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  /**
   * VOLET DE LECTURE CENTRAL (NET, BLANC, MINIMALISTE ET TRÈS LISIBLE)
   */
  openFicheReader(ficheId) {
    let targetFiche = null;
    let parentBox = null;

    for (let box of this.data.cartons) {
      const f = box.fiches.find(item => item.id === ficheId);
      if (f) {
        targetFiche = f;
        parentBox = box;
        break;
      }
    }

    if (!targetFiche || !parentBox) return;

    this.activeFicheId = ficheId;
    this.readFiches.add(ficheId);
    localStorage.setItem('xelians_read_fiches', JSON.stringify(Array.from(this.readFiches)));
    this.updateProgressCounter();
    this.renderHangingFoldersTray(parentBox);
    this.playSound('paper');

    const drawerOverlay = document.getElementById('fiche-reading-drawer');
    const sheetBody = document.getElementById('reading-sheet-body');
    const sheetHeader = document.getElementById('reading-sheet-header');

    if (sheetHeader) {
      sheetHeader.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-2 py-0.5 rounded bg-blue-100 text-[#1464FF] font-mono font-bold text-xs">
                ${targetFiche.code}
              </span>
              <span class="text-xs font-mono text-slate-500">
                ${parentBox.cote} › ${parentBox.title}
              </span>
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              ${targetFiche.title}
            </h2>
            <p class="text-xs font-medium text-slate-500 mt-1">
              ${targetFiche.subtitle}
            </p>
          </div>

          <!-- Actions de navigation de la fiche -->
          <div class="flex items-center gap-2">
            <button onclick="app.navigateFiche(-1)" title="Fiche précédente" class="px-2.5 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-mono font-bold transition flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Précédente
            </button>
            <button onclick="app.navigateFiche(1)" title="Fiche suivante" class="px-2.5 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-mono font-bold transition flex items-center gap-1">
              Suivante
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
            <button onclick="window.print()" title="Imprimer la fiche" class="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            </button>
            <button onclick="app.closeFicheReader()" title="Fermer (Échap)" class="p-2 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-300 transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      `;
    }

    if (sheetBody) {
      sheetBody.innerHTML = `
        <div class="academic-reading-text">
          ${targetFiche.content}

          <!-- Emplacement illustration principale si présente -->
          ${targetFiche.illustrationRef ? `<div id="fiche-illustration-primary"></div>` : ''}

          <!-- Emplacement illustration secondaire si présente (ex: Fiche 2E) -->
          ${targetFiche.illustrationRefSecondary ? `<div id="fiche-illustration-secondary"></div>` : ''}
        </div>
      `;

      // Déclencher le rendu des illustrations correspondantes
      if (targetFiche.illustrationRef === 'ill-01') window.XELIANS_ILLUSTRATIONS.renderIllustration1('fiche-illustration-primary');
      if (targetFiche.illustrationRef === 'ill-02') window.XELIANS_ILLUSTRATIONS.renderIllustration2('fiche-illustration-primary');
      if (targetFiche.illustrationRefSecondary === 'ill-03') window.XELIANS_ILLUSTRATIONS.renderIllustration3('fiche-illustration-secondary');
      if (targetFiche.illustrationRef === 'ill-04') window.XELIANS_ILLUSTRATIONS.renderIllustration4('fiche-illustration-primary');
      if (targetFiche.illustrationRef === 'ill-05') window.XELIANS_ILLUSTRATIONS.renderIllustration5('fiche-illustration-primary');
    }

    if (drawerOverlay) {
      drawerOverlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  }

  closeFicheReader() {
    const drawerOverlay = document.getElementById('fiche-reading-drawer');
    if (drawerOverlay) {
      drawerOverlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
    this.activeFicheId = null;
    this.playSound('open-box');
  }

  navigateFiche(delta) {
    // Liste plate de toutes les fiches
    const allFiches = [];
    this.data.cartons.forEach(b => {
      b.fiches.forEach(f => allFiches.push(f.id));
    });

    const currentIndex = allFiches.indexOf(this.activeFicheId);
    let nextIndex = currentIndex + delta;
    if (nextIndex < 0) nextIndex = allFiches.length - 1;
    if (nextIndex >= allFiches.length) nextIndex = 0;

    this.openFicheReader(allFiches[nextIndex]);
  }

  /**
   * Dock de sélection directe des cartons d'archives
   */
  renderQuickInventoryDock() {
    const dockContainer = document.getElementById('quick-inventory-dock');
    if (!dockContainer) return;

    dockContainer.innerHTML = `
      <div class="flex items-center gap-2 overflow-x-auto pb-2">
        ${this.data.cartons.map(b => `
          <button data-box="${b.id}" onclick="app.selectBox('${b.id}')" 
                  class="dock-box-btn px-3 py-2 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-mono whitespace-nowrap transition flex items-center gap-2">
            <span class="w-2 h-2 rounded-full" style="background-color: ${b.color};"></span>
            <strong>${b.cote}</strong>
            <span class="text-[10px] text-slate-500 font-sans">(${b.tag})</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  /**
   * Compteur de progression d'audit pour l'évaluateur
   */
  updateProgressCounter() {
    const totalFiches = 14;
    const readCount = this.readFiches.size;
    const percent = Math.round((readCount / totalFiches) * 100);

    const label = document.getElementById('audit-counter-label');
    const bar = document.getElementById('audit-counter-bar');

    if (label) {
      label.innerHTML = `Audit de récolement : <strong>${readCount} / ${totalFiches}</strong> fiches examinées (${percent}%)`;
    }
    if (bar) {
      bar.style.width = `${percent}%`;
    }
  }

  resetAudit() {
    if (confirm("Réinitialiser le suivi de vos fiches examinées ?")) {
      this.readFiches.clear();
      localStorage.removeItem('xelians_read_fiches');
      this.updateProgressCounter();
      if (this.activeBoxId) {
        const box = this.data.cartons.find(b => b.id === this.activeBoxId);
        if (box) this.renderHangingFoldersTray(box);
      }
      this.initIsoWarehouseScene();
    }
  }

  onSearch(query) {
    this.searchQuery = query.toLowerCase().trim();
    if (!this.searchQuery) {
      // Revenir au carton sélectionné
      if (this.activeBoxId) this.selectBox(this.activeBoxId, false);
      return;
    }

    // Trouver toutes les fiches correspondant à la recherche
    const matchedFiches = [];
    this.data.cartons.forEach(b => {
      b.fiches.forEach(f => {
        if (f.title.toLowerCase().includes(this.searchQuery) ||
            f.subtitle.toLowerCase().includes(this.searchQuery) ||
            f.content.toLowerCase().includes(this.searchQuery)) {
          matchedFiches.push({ fiche: f, box: b });
        }
      });
    });

    const trayContainer = document.getElementById('hanging-folders-tray');
    if (!trayContainer) return;

    if (matchedFiches.length === 0) {
      trayContainer.innerHTML = `
        <div class="p-8 bg-slate-900 rounded-xl border border-slate-800 text-center text-slate-400">
          <p class="font-bold text-slate-300">Aucune fiche ne correspond à « ${query} ».</p>
          <button onclick="document.getElementById('search-input').value=''; app.onSearch('');" class="mt-3 px-3 py-1.5 rounded bg-sky-600 text-white text-xs font-mono">Effacer la recherche</button>
        </div>
      `;
      return;
    }

    trayContainer.innerHTML = `
      <div class="p-5 bg-slate-900 rounded-xl border border-sky-500/40 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <span class="font-mono text-xs text-sky-400 font-bold uppercase">Résultats pour « ${query} » (${matchedFiches.length} fiches trouvées)</span>
          <button onclick="document.getElementById('search-input').value=''; app.onSearch('');" class="text-xs text-slate-400 hover:text-white underline font-mono">Réinitialiser</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${matchedFiches.map(({ fiche, box }) => `
            <div class="hanging-folder-card group" onclick="app.openFicheReader('${fiche.id}')">
              <div>
                <span class="folder-tab bg-sky-950 text-sky-300 border border-sky-800 mb-1 inline-block">${fiche.code} • ${box.cote}</span>
                <h4 class="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">${fiche.title}</h4>
                <p class="text-[11px] text-slate-400 mt-0.5 line-clamp-1">${fiche.subtitle}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  bindEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeFicheReader();
      } else if (e.key === 'ArrowLeft' && this.activeFicheId) {
        this.navigateFiche(-1);
      } else if (e.key === 'ArrowRight' && this.activeFicheId) {
        this.navigateFiche(1);
      }
    });
  }
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
  window.app = new XeliansIsoApp();
});
