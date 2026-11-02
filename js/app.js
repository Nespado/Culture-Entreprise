/**
 * APPLICATION PRINCIPALE - XELIANS INTERACTIVE ARCHIVAL EXPLORER
 * Gestion du rayonnage, des cartons d'archives, de la modale de lecture,
 * du suivi d'inventaire, des filtres, du synthétiseur sonore et du mode linéaire.
 */

class XeliansArchivalApp {
  constructor() {
    this.data = window.XELIANS_DATA;
    this.currentBox = null;
    this.currentTab = 'analysis';
    this.auditedBoxes = new Set(JSON.parse(localStorage.getItem('xelians_audited_boxes') || '[]'));
    this.audioEnabled = false;
    this.audioCtx = null;
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.viewMode = 'shelf'; // 'shelf' ou 'linear'

    this.init();
  }

  init() {
    this.renderHeaderMetadata();
    this.renderShelf();
    this.renderLinearReport();
    this.renderGlossary();
    this.updateAuditProgressBar();
    this.bindEvents();
  }

  /**
   * Synthèse audio par Web Audio API (aucun fichier externe nécessaire)
   */
  playArchivalSound(type) {
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

      if (type === 'open') {
        // Son de glissement de tiroir / ouverture de carton
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.18);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'stamp') {
        // Son de tampon d'audit
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.09);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      console.warn("Audio non disponible", e);
    }
  }

  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    const btn = document.getElementById('toggle-sound-btn');
    if (btn) {
      if (this.audioEnabled) {
        btn.innerHTML = `
          <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          <span class="text-sky-300">Audio Activé</span>
        `;
        this.playArchivalSound('stamp');
      } else {
        btn.innerHTML = `
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
          <span class="text-slate-400">Audio Muet</span>
        `;
      }
    }
  }

  /**
   * Métadonnées institutionnelles dans le bandeau supérieur
   */
  renderHeaderMetadata() {
    const el = document.getElementById('project-header-meta');
    if (!el) return;
    const meta = this.data.metadata;
    el.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-800 pb-3 font-mono">
        <div class="flex items-center gap-3">
          <span class="px-2.5 py-1 rounded bg-[#1464FF]/20 text-[#0EBCFF] border border-[#1464FF]/40 font-bold">
            PROJET ACADÉMIQUE MASTER (NOTÉ /20)
          </span>
          <span class="text-slate-400">Entreprise d'alternance : <strong class="text-white">XELIANS</strong></span>
        </div>
        <div class="flex items-center gap-4 text-slate-400">
          <span>Sociologie des Organisations & Stratégie</span>
          <span class="hidden sm:inline text-slate-600">|</span>
          <span class="hidden sm:inline">Périmètre : 800 collab. / 9 000 km d'archives</span>
        </div>
      </div>
    `;
  }

  /**
   * Rendu des cartons sur le rayonnage principal
   */
  renderShelf() {
    const shelfContainer = document.getElementById('archive-shelf-container');
    if (!shelfContainer) return;

    const filtered = this.data.cartons.filter(box => {
      // Filtre catégorie
      let matchesCat = true;
      if (this.activeFilter === 'schein-1') matchesCat = box.id === 'box-01';
      else if (this.activeFilter === 'schein-2') matchesCat = box.id === 'box-02';
      else if (this.activeFilter === 'schein-3') matchesCat = box.id === 'box-03';
      else if (this.activeFilter === 'ocai') matchesCat = box.id === 'box-04';
      else if (this.activeFilter === 'strategy') matchesCat = box.id === 'box-05';
      else if (this.activeFilter === 'intra') matchesCat = box.id === 'box-06';
      else if (this.activeFilter === 'critique') matchesCat = box.id === 'box-07';

      // Filtre recherche textuelle
      let matchesQuery = true;
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        matchesQuery = box.title.toLowerCase().includes(q) ||
                       box.cote.toLowerCase().includes(q) ||
                       box.summary.toLowerCase().includes(q) ||
                       box.category.toLowerCase().includes(q);
      }

      return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
      shelfContainer.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <svg class="w-12 h-12 mx-auto mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p class="text-base font-bold text-slate-300">Aucun conteneur d'archives ne correspond à votre filtre de récolement.</p>
          <button onclick="app.resetFilters()" class="mt-4 px-4 py-2 text-xs font-mono rounded bg-sky-600 text-white hover:bg-sky-500 transition">Réinitialiser les critères</button>
        </div>
      `;
      return;
    }

    shelfContainer.innerHTML = filtered.map(box => {
      const isAudited = this.auditedBoxes.has(box.id);
      return `
        <div class="archive-box-card group p-5 flex flex-col justify-between" onclick="app.openBox('${box.id}')">
          <!-- Haut du carton : Identifiant de cote & Statut d'inventaire -->
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="font-mono text-xs font-black tracking-wider text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/80">
                ${box.cote}
              </span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded border ${box.statusClass}">
                ${box.status}
              </span>
            </div>

            <!-- Poignée découpée du carton physique -->
            <div class="box-handle my-3 transition-transform group-hover:scale-105"></div>

            <!-- Titre académique du dossier -->
            <h3 class="text-base font-extrabold text-white group-hover:text-sky-300 transition-colors mb-2 leading-snug">
              ${box.title}
            </h3>

            <!-- Échelon théorique / Catégorie -->
            <div class="inline-block text-[11px] font-semibold text-slate-400 mb-2 font-mono">
              › ${box.category}
            </div>

            <!-- Synthèse du contenu -->
            <p class="text-xs text-slate-300/90 leading-relaxed mb-4 text-justify">
              ${box.summary}
            </p>
          </div>

          <!-- Bas du carton : Code-barres stylisé, Métriques et Tampon -->
          <div class="pt-3 border-t border-slate-800/80 mt-2 space-y-3">
            <div class="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>RÉF : ${box.barcodeNumber}</span>
              <span class="text-sky-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Explorer le carton 
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </div>

            <!-- Faux code-barres -->
            <div class="barcode-strip rounded-sm opacity-60 group-hover:opacity-100 transition-opacity"></div>

            <!-- État d'audit (Inspecté / Non-ouvert) -->
            <div class="flex items-center justify-between pt-1">
              ${isAudited ? `
                <span class="stamp-audited">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  AUDITÉ & RÉCOLÉ
                </span>
              ` : `
                <span class="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span> En attente d'inspection
                </span>
              `}
              <span class="text-[10px] font-mono text-slate-400">Carton #${box.number}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /**
   * Ouverture d'un carton dans la modale plein écran / grand volet
   */
  openBox(boxId) {
    const box = this.data.cartons.find(b => b.id === boxId);
    if (!box) return;

    this.currentBox = box;
    this.currentTab = 'analysis';

    // Enregistrement de l'état d'audit
    this.auditedBoxes.add(boxId);
    localStorage.setItem('xelians_audited_boxes', JSON.stringify(Array.from(this.auditedBoxes)));
    this.updateAuditProgressBar();
    this.renderShelf(); // Mise à jour des tampons

    this.playArchivalSound('open');

    // Rendu du contenu de la modale
    this.renderModalContent();

    const modal = document.getElementById('dossier-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  }

  closeModal() {
    const modal = document.getElementById('dossier-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
    this.currentBox = null;
    this.playArchivalSound('click');
  }

  navigateBox(direction) {
    if (!this.currentBox) return;
    const currentIndex = this.data.cartons.findIndex(b => b.id === this.currentBox.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = this.data.cartons.length - 1;
    if (nextIndex >= this.data.cartons.length) nextIndex = 0;
    
    this.openBox(this.data.cartons[nextIndex].id);
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    this.playArchivalSound('click');
    this.renderModalTabsHeader();
    this.renderModalTabBody();
  }

  renderModalContent() {
    if (!this.currentBox) return;
    const box = this.currentBox;

    // En-tête de la boîte
    const headerEl = document.getElementById('modal-box-header');
    if (headerEl) {
      headerEl.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="font-mono text-xs font-bold text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                ${box.cote}
              </span>
              <span class="text-xs font-mono px-2 py-0.5 rounded border ${box.statusClass}">
                ${box.status}
              </span>
              <span class="stamp-audited text-[10px]">
                AUDITÉ LE ${new Date().toLocaleDateString('fr-FR')}
              </span>
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-white">
              ${box.title}
            </h2>
            <p class="text-xs text-sky-300 font-mono mt-0.5">
              Cadre conceptuel : ${box.theoreticalConcept}
            </p>
          </div>

          <!-- Boutons navigation Précédent / Suivant et Fermer -->
          <div class="flex items-center gap-2">
            <button onclick="app.navigateBox(-1)" title="Carton précédent" class="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <span class="text-xs font-mono text-slate-400 px-1">
              ${box.number} / 07
            </span>
            <button onclick="app.navigateBox(1)" title="Carton suivant" class="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
            <button onclick="app.closeModal()" title="Fermer le dossier" class="ml-2 p-2 rounded bg-rose-950/60 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-800 transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      `;
    }

    this.renderModalTabsHeader();
    this.renderModalTabBody();
  }

  renderModalTabsHeader() {
    const tabsContainer = document.getElementById('modal-tabs-header');
    if (!tabsContainer) return;

    const tabs = [
      { 
        id: 'analysis', 
        label: '1. Analyse Sociologique Approfondie', 
        icon: '<svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' 
      },
      { 
        id: 'illustration', 
        label: '2. Illustration Décryptée & Métadonnées', 
        icon: '<svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' 
      },
      { 
        id: 'metrics', 
        label: '3. Données Empiriques & Indicateurs', 
        icon: '<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>' 
      },
      { 
        id: 'theory', 
        label: '4. Cadre Théorique & Notations Master', 
        icon: '<svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>' 
      }
    ];

    tabsContainer.innerHTML = tabs.map(t => `
      <button onclick="app.switchTab('${t.id}')" class="dossier-tab-btn ${this.currentTab === t.id ? 'active' : ''}">
        ${t.icon}
        <span>${t.label}</span>
      </button>
    `).join('');
  }

  renderModalTabBody() {
    const bodyEl = document.getElementById('modal-tab-body');
    if (!bodyEl || !this.currentBox) return;

    const box = this.currentBox;

    if (this.currentTab === 'analysis') {
      bodyEl.innerHTML = `
        <div class="space-y-6 academic-prose">
          ${box.sections.map(sec => `
            <div class="bg-slate-900/40 p-5 rounded-lg border border-slate-800">
              <h3 class="!mt-0 text-sky-400 font-bold">${sec.heading}</h3>
              <div class="text-slate-300 text-sm leading-relaxed">${sec.content}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (this.currentTab === 'illustration') {
      bodyEl.innerHTML = `
        <div id="modal-illustration-slot" class="space-y-4"></div>
      `;
      // Rendu de l'illustration associée
      if (box.illustrationRef === 'ill-01') window.XELIANS_ILLUSTRATIONS.renderIllustration1('modal-illustration-slot');
      else if (box.illustrationRef === 'ill-02') window.XELIANS_ILLUSTRATIONS.renderIllustration2('modal-illustration-slot');
      else if (box.illustrationRef === 'ill-03') window.XELIANS_ILLUSTRATIONS.renderIllustration3('modal-illustration-slot');
      else if (box.illustrationRef === 'ill-04') window.XELIANS_ILLUSTRATIONS.renderIllustration4('modal-illustration-slot');
      else if (box.illustrationRef === 'ill-05') window.XELIANS_ILLUSTRATIONS.renderIllustration5('modal-illustration-slot');
    } else if (this.currentTab === 'metrics') {
      bodyEl.innerHTML = `
        <div class="space-y-5">
          <div class="p-4 bg-sky-950/30 rounded border border-sky-500/30">
            <h4 class="font-bold text-sky-300 text-sm mb-1">Indicateurs clés du dossier ${box.cote}</h4>
            <p class="text-xs text-slate-300">Données empiriques vérifiées d'après les documents institutionnels et rapports d'activité Xelians 2026.</p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${box.keyMetrics.map(m => `
              <div class="p-4 bg-slate-900 rounded-lg border border-slate-800 text-center">
                <span class="text-xs font-mono text-slate-400 block mb-1">${m.label}</span>
                <span class="text-xl sm:text-2xl font-black text-sky-400">${m.value}</span>
              </div>
            `).join('')}
          </div>

          <div class="p-4 bg-slate-900/60 rounded border border-slate-800 text-xs text-slate-300 space-y-2">
            <span class="font-bold text-white block">Traçabilité & Décharge de Récolement :</span>
            <p>Ce conteneur est soumis au régime d'archivage haute sécurité. L'accès à ce document académique est protégé par empreinte eIDAS et scellé numérique.</p>
            <div class="flex items-center gap-3 font-mono text-[11px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Code Barres : ${box.barcodeNumber}</span>
              <span>•</span>
              <span>Certification : NF Z40-350 / ISO 27001</span>
            </div>
          </div>
        </div>
      `;
    } else if (this.currentTab === 'theory') {
      bodyEl.innerHTML = `
        <div class="space-y-4">
          <div class="p-4 bg-slate-900/90 rounded-lg border-l-4 border-indigo-500 text-xs text-slate-300 space-y-2">
            <span class="font-bold text-white text-sm block">Ancrage Théorique & Grille d'Évaluation Master 2 (Notation /20)</span>
            <p><strong>Concept mobilisé :</strong> ${box.theoreticalConcept}</p>
            <p class="text-justify">
              Cette analyse déconstruit le fonctionnement interne de Xelians en confrontant les postulats sociologiques classiques (Schein, Crozier, Cameron & Quinn, Stalk, D'Aveni) avec la réalité opérationnelle observée sur le terrain durant mon alternance.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 bg-slate-900/60 rounded border border-slate-800">
              <span class="font-bold text-sky-400 block mb-2">Points Clés de la Démonstration Académique</span>
              <ul class="list-disc pl-4 space-y-1.5 text-slate-300">
                <li>Réfutation de la vision naïve réduisant Xelians à un simple logisticien ou à un pur éditeur SaaS.</li>
                <li>Mise en évidence de la tension entre le temps long de la conservation patrimoniale et la course au temps réel du BPO.</li>
                <li>Rigueur des références normatives (NF Z40-350, NF Z42-026, SIAF, HDS).</li>
              </ul>
            </div>

            <div class="p-4 bg-slate-900/60 rounded border border-slate-800">
              <span class="font-bold text-emerald-400 block mb-2">Posture de l'Observateur en Alternance</span>
              <p class="text-slate-300 text-justify">
                En tant qu'alternant chez Xelians, l'immersion prolongée permet de dépasser la rhétorique publicitaire corporate pour saisir les micro-arbitrages quotidiens dictés par la peur de la sanction légale et la sacralisation de la trace écrite.
              </p>
            </div>
          </div>
        </div>
      `;
    }
  }

  /**
   * Suivi de la barre de progression d'audit de l'évaluateur
   */
  updateAuditProgressBar() {
    const total = this.data.cartons.length;
    const count = this.auditedBoxes.size;
    const percent = Math.round((count / total) * 100);

    const labelEl = document.getElementById('audit-progress-label');
    const barEl = document.getElementById('audit-progress-bar');

    if (labelEl) {
      labelEl.innerHTML = `Inventaire d'audit : <strong>${count}/${total}</strong> cartons explorés (${percent}%)`;
    }
    if (barEl) {
      barEl.style.width = `${percent}%`;
    }
  }

  resetAuditProgress() {
    if (confirm("Voulez-vous réinitialiser votre progression d'audit de récolement ?")) {
      this.auditedBoxes.clear();
      localStorage.removeItem('xelians_audited_boxes');
      this.updateAuditProgressBar();
      this.renderShelf();
      this.playArchivalSound('stamp');
    }
  }

  /**
   * Mode Rapport Linéaire (Lecture continue de thèse / monograph)
   */
  renderLinearReport() {
    const container = document.getElementById('linear-report-container');
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-12 max-w-4xl mx-auto py-6">
        <div class="p-6 bg-slate-900 rounded-lg border border-sky-500/30 text-center">
          <span class="font-mono text-xs text-sky-400 uppercase font-bold tracking-widest block mb-1">MÉMOIRE ACADÉMIQUE DE CULTURE D'ENTREPRISE</span>
          <h1 class="text-2xl sm:text-3xl font-black text-white mb-2">XELIANS : ENTRE SANCTUARISATION DOCUMENTAIRE ET HYPERVÉLOCITÉ SAAS</h1>
          <p class="text-sm text-slate-300 max-w-2xl mx-auto">
            Rapport complet d'analyse sociologique et stratégique de l'entreprise d'alternance. Support autonome de notation académique (sur 20 points).
          </p>
        </div>

        ${this.data.cartons.map(box => `
          <article class="p-6 sm:p-8 bg-slate-900/80 rounded-xl border border-slate-800 shadow-xl space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span class="font-mono text-xs font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                  ${box.cote}
                </span>
                <h2 class="text-xl sm:text-2xl font-black text-white mt-2">${box.title}</h2>
                <span class="text-xs font-mono text-slate-400">Échelon : ${box.category}</span>
              </div>
              <span class="text-xs font-mono px-3 py-1 rounded border ${box.statusClass}">${box.status}</span>
            </div>

            <!-- Sections rédigées complètes -->
            <div class="academic-prose space-y-6 text-sm">
              ${box.sections.map(sec => `
                <div>
                  <h3 class="text-base font-bold text-sky-300 border-l-2 border-sky-400 pl-3 mb-2">${sec.heading}</h3>
                  <div class="text-slate-300 leading-relaxed">${sec.content}</div>
                </div>
              `).join('')}
            </div>

            <!-- Emplacement de l'illustration obligatoire dans le flux linéaire -->
            <div class="pt-4 border-t border-slate-800">
              <h4 class="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Illustration associée au dossier :</h4>
              <div id="linear-ill-${box.id}"></div>
            </div>
          </article>
        `).join('')}
      </div>
    `;

    // Rendu des 5 illustrations obligatoires dans le flux linéaire
    setTimeout(() => {
      window.XELIANS_ILLUSTRATIONS.renderIllustration1('linear-ill-box-01');
      window.XELIANS_ILLUSTRATIONS.renderIllustration2('linear-ill-box-02');
      window.XELIANS_ILLUSTRATIONS.renderIllustration3('linear-ill-box-03');
      window.XELIANS_ILLUSTRATIONS.renderIllustration4('linear-ill-box-04');
      window.XELIANS_ILLUSTRATIONS.renderIllustration5('linear-ill-box-05');
    }, 100);
  }

  toggleViewMode(mode) {
    this.viewMode = mode;
    this.playArchivalSound('click');

    const shelfSection = document.getElementById('shelf-view-section');
    const linearSection = document.getElementById('linear-view-section');
    const btnShelf = document.getElementById('btn-view-shelf');
    const btnLinear = document.getElementById('btn-view-linear');

    if (mode === 'shelf') {
      shelfSection?.classList.remove('hidden');
      linearSection?.classList.add('hidden');
      btnShelf?.classList.add('bg-sky-600', 'text-white');
      btnShelf?.classList.remove('text-slate-400');
      btnLinear?.classList.remove('bg-sky-600', 'text-white');
      btnLinear?.classList.add('text-slate-400');
    } else {
      shelfSection?.classList.add('hidden');
      linearSection?.classList.remove('hidden');
      btnLinear?.classList.add('bg-sky-600', 'text-white');
      btnLinear?.classList.remove('text-slate-400');
      btnShelf?.classList.remove('bg-sky-600', 'text-white');
      btnShelf?.classList.add('text-slate-400');
    }
  }

  /**
   * Glossaire & Lexique interactif
   */
  renderGlossary() {
    const container = document.getElementById('glossary-modal-content');
    if (!container) return;

    container.innerHTML = `
      <div class="grid sm:grid-cols-2 gap-3 text-xs">
        ${this.data.glossary.map(item => `
          <div class="p-3.5 bg-slate-900 rounded border border-slate-800 hover:border-sky-500/50 transition">
            <span class="font-bold text-sky-400 block mb-1 text-sm">${item.term}</span>
            <p class="text-slate-300 leading-relaxed text-justify">${item.def}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  openGlossary() {
    const modal = document.getElementById('glossary-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    this.playArchivalSound('click');
  }

  closeGlossary() {
    const modal = document.getElementById('glossary-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
    this.playArchivalSound('click');
  }

  /**
   * Filtres et recherche
   */
  filterCategory(cat) {
    this.activeFilter = cat;
    this.playArchivalSound('click');

    // Mise à jour de la classe active sur les boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.dataset.filter === cat) {
        btn.classList.add('bg-sky-600', 'text-white', 'border-sky-400');
        btn.classList.remove('text-slate-400', 'border-slate-700');
      } else {
        btn.classList.remove('bg-sky-600', 'text-white', 'border-sky-400');
        btn.classList.add('text-slate-400', 'border-slate-700');
      }
    });

    this.renderShelf();
  }

  onSearch(query) {
    this.searchQuery = query.trim();
    this.renderShelf();
  }

  resetFilters() {
    this.activeFilter = 'all';
    this.searchQuery = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    this.filterCategory('all');
  }

  /**
   * Événements globaux et raccourcis clavier
   */
  bindEvents() {
    // Raccourcis clavier (Échap pour fermer, Flèches pour naviguer)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeGlossary();
      } else if (e.key === 'ArrowLeft' && this.currentBox) {
        this.navigateBox(-1);
      } else if (e.key === 'ArrowRight' && this.currentBox) {
        this.navigateBox(1);
      }
    });
  }
}

// Initialisation globale au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  window.app = new XeliansArchivalApp();
});
