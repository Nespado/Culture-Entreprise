/**
 * MOTEUR GRAPHIQUE & ILLUSTRATIONS VECTORIELLES INTERACTIVES
 * 5 Illustrations obligatoires avec métadonnées académiques complètes
 */

window.XELIANS_ILLUSTRATIONS = {
  /**
   * Illustration 1 : Plan architectural & coupe d'un site de stockage haute sécurité NF Z40-350 / ISO 27001
   */
  renderIllustration1: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Cadre graphique SVG interactif -->
        <div class="relative bg-gradient-to-b from-[#0F0D2D] to-[#161245] p-4 rounded-lg border border-sky-500/30 overflow-hidden shadow-2xl">
          <div class="flex items-center justify-between mb-3 border-b border-slate-700/60 pb-2">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="font-mono text-xs uppercase text-sky-300 font-bold tracking-wider">Coupe Technique d'Infrastructure — Site Agréé SIAF #24</span>
            </div>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">NF Z40-350 & ISO 27001</span>
          </div>

          <svg viewBox="0 0 850 440" class="w-full h-auto select-none rounded" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));">
            <defs>
              <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1e1b4b"/>
                <stop offset="100%" stop-color="#0f0d2d"/>
              </linearGradient>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0EBCFF" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#1464FF" stop-opacity="0.05"/>
              </linearGradient>
              <pattern id="shelfGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 188, 255, 0.15)" stroke-width="1"/>
              </pattern>
            </defs>

            <!-- Fond et structure extérieure du hangar -->
            <rect x="20" y="40" width="810" height="360" rx="8" fill="url(#wallGrad)" stroke="#1464FF" stroke-width="2"/>
            <rect x="25" y="45" width="800" height="350" fill="url(#shelfGrid)"/>

            <!-- Toiture & Centrale de traitement d'air (CTA) -->
            <rect x="20" y="20" width="810" height="25" rx="4" fill="#241F63" stroke="#0EBCFF" stroke-width="1.5"/>
            <text x="40" y="37" fill="#0EBCFF" font-size="11" font-family="monospace" font-weight="bold">ISOLATION THERMIQUE DOUBLE PEAU — RÉSISTANCE AU FEU COUPE-FEU 4 HEURES (REI 240)</text>

            <!-- ZONE 1 : Sas Biométrique & Contrôle d'accès -->
            <g class="cursor-pointer group">
              <rect x="40" y="80" width="160" height="300" rx="6" fill="#141B3B" stroke="#0EBCFF" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="120" y="105" text-anchor="middle" fill="#0EBCFF" font-size="12" font-weight="bold">SAS BIOMÉTRIQUE</text>
              <text x="120" y="122" text-anchor="middle" fill="#94A3B8" font-size="9">Double barrière anti-intrusion</text>
              
              <!-- Sas porte sas -->
              <rect x="60" y="140" width="120" height="70" rx="4" fill="#0F0D2D" stroke="#1464FF"/>
              <circle cx="120" cy="175" r="14" fill="#0EBCFF" fill-opacity="0.2" stroke="#0EBCFF"/>
              <path d="M115 175 L120 180 L126 170" fill="none" stroke="#0EBCFF" stroke-width="2"/>
              <text x="120" y="225" text-anchor="middle" fill="#38BDF8" font-size="10" font-family="monospace">LECTEUR DIGITAL & BADGE P3</text>

              <!-- Détection volumétrique -->
              <circle cx="120" cy="270" r="18" fill="#FF4A54" fill-opacity="0.2" stroke="#FF4A54"/>
              <text x="120" y="274" text-anchor="middle" fill="#FF4A54" font-size="9" font-weight="bold">RADAR IR</text>
              <text x="120" y="300" text-anchor="middle" fill="#CBD5E1" font-size="9">Vidéosurveillance 24/7</text>
              <text x="120" y="350" text-anchor="middle" fill="#64748B" font-size="9" font-family="monospace">Piste d'audit horodatée</text>
            </g>

            <!-- ZONE 2 : Hangar Principal - Rayonnages mobiles automatisés (9 000 km) -->
            <g>
              <rect x="220" y="80" width="370" height="300" rx="6" fill="#111636" stroke="#38BDF8" stroke-width="1.5"/>
              <text x="405" y="105" text-anchor="middle" fill="#38BDF8" font-size="12" font-weight="bold">RAYONNAGES MOBILES COMPACTS SUR RAILS</text>
              <text x="405" y="122" text-anchor="middle" fill="#94A3B8" font-size="9">Densité optimisée : capacité 9 000 km linéaires d'archives</text>

              <!-- Représentation des travées de rayonnage et boîtes -->
              <g transform="translate(240, 140)">
                <!-- Travée 1 -->
                <rect x="0" y="0" width="60" height="200" fill="#1e293b" stroke="#0EBCFF" stroke-width="1"/>
                <line x1="0" y1="40" x2="60" y2="40" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="0" y1="80" x2="60" y2="80" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="0" y1="120" x2="60" y2="120" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="0" y1="160" x2="60" y2="160" stroke="#0EBCFF" stroke-width="0.5"/>
                <!-- Boîtes rangées -->
                <rect x="6" y="8" width="48" height="24" rx="2" fill="#D97706" fill-opacity="0.8"/>
                <rect x="6" y="48" width="48" height="24" rx="2" fill="#D97706" fill-opacity="0.8"/>
                <rect x="6" y="88" width="48" height="24" rx="2" fill="#0284C7" fill-opacity="0.8"/>
                <rect x="6" y="128" width="48" height="24" rx="2" fill="#0284C7" fill-opacity="0.8"/>
                <rect x="6" y="168" width="48" height="24" rx="2" fill="#0EBCFF" fill-opacity="0.9"/>
                <text x="30" y="24" text-anchor="middle" fill="#000" font-size="7" font-weight="bold">NF-342</text>
                <text x="30" y="64" text-anchor="middle" fill="#000" font-size="7" font-weight="bold">SIAF</text>
                <text x="30" y="104" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">DUA 30A</text>
                <text x="30" y="144" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">DUA 10A</text>
                <text x="30" y="184" text-anchor="middle" fill="#000" font-size="7" font-weight="bold">XELIANS</text>

                <!-- Travée 2 -->
                <rect x="80" y="0" width="60" height="200" fill="#1e293b" stroke="#0EBCFF" stroke-width="1"/>
                <line x1="80" y1="40" x2="140" y2="40" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="80" y1="80" x2="140" y2="80" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="80" y1="120" x2="140" y2="120" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="80" y1="160" x2="140" y2="160" stroke="#0EBCFF" stroke-width="0.5"/>
                <rect x="86" y="8" width="48" height="24" rx="2" fill="#0284C7" fill-opacity="0.8"/>
                <rect x="86" y="48" width="48" height="24" rx="2" fill="#0284C7" fill-opacity="0.8"/>
                <rect x="86" y="88" width="48" height="24" rx="2" fill="#D97706" fill-opacity="0.8"/>
                <rect x="86" y="128" width="48" height="24" rx="2" fill="#D97706" fill-opacity="0.8"/>
                <rect x="86" y="168" width="48" height="24" rx="2" fill="#0EBCFF" fill-opacity="0.9"/>

                <!-- Travée 3 -->
                <rect x="160" y="0" width="60" height="200" fill="#1e293b" stroke="#0EBCFF" stroke-width="1"/>
                <line x1="160" y1="40" x2="220" y2="40" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="160" y1="80" x2="220" y2="80" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="160" y1="120" x2="220" y2="120" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="160" y1="160" x2="220" y2="160" stroke="#0EBCFF" stroke-width="0.5"/>
                <rect x="166" y="8" width="48" height="24" rx="2" fill="#D97706" fill-opacity="0.8"/>
                <rect x="166" y="48" width="48" height="24" rx="2" fill="#0EBCFF" fill-opacity="0.8"/>
                <rect x="166" y="88" width="48" height="24" rx="2" fill="#0284C7" fill-opacity="0.8"/>
                <rect x="166" y="128" width="48" height="24" rx="2" fill="#D97706" fill-opacity="0.8"/>
                <rect x="166" y="168" width="48" height="24" rx="2" fill="#0EBCFF" fill-opacity="0.9"/>

                <!-- Allée et cariste robotisé -->
                <rect x="235" y="30" width="85" height="150" rx="4" fill="#0F0D2D" stroke="#64748B" stroke-dasharray="3,3"/>
                <text x="277" y="55" text-anchor="middle" fill="#38BDF8" font-size="9" font-weight="bold">ALLÉE GUIDÉE</text>
                <circle cx="277" cy="95" r="14" fill="#0EBCFF" fill-opacity="0.2" stroke="#0EBCFF"/>
                <path d="M272 95 L282 95 M277 90 L277 100" stroke="#0EBCFF" stroke-width="1.5"/>
                <text x="277" y="125" text-anchor="middle" fill="#CBD5E1" font-size="8">Chariot guidé</text>
                <text x="277" y="140" text-anchor="middle" fill="#FBBF24" font-size="8" font-family="monospace">RFID & 2D Scan</text>
              </g>

              <!-- Buses d'extinction Gaz Inerte au plafond -->
              <circle cx="280" cy="95" r="5" fill="#38BDF8" stroke="#fff" stroke-width="1"/>
              <circle cx="380" cy="95" r="5" fill="#38BDF8" stroke="#fff" stroke-width="1"/>
              <circle cx="480" cy="95" r="5" fill="#38BDF8" stroke="#fff" stroke-width="1"/>
              <path d="M280 95 L275 110 M280 95 L285 110 M380 95 L375 110 M380 95 L385 110 M480 95 L475 110 M480 95 L485 110" stroke="#38BDF8" stroke-width="1" stroke-dasharray="1,2"/>
              <text x="380" y="88" text-anchor="middle" fill="#38BDF8" font-size="8" font-family="monospace">RAMPE INERGEN / NOVEC 1230 (ZÉRO EAU)</text>
            </g>

            <!-- ZONE 3 : Datacenter Souverain & Salle Serveurs HDS / ISO 27001 -->
            <g class="cursor-pointer group">
              <rect x="610" y="80" width="200" height="300" rx="6" fill="#141B3B" stroke="#818CF8" stroke-width="1.5"/>
              <text x="710" y="105" text-anchor="middle" fill="#818CF8" font-size="12" font-weight="bold">DATACENTER SOUVERAIN</text>
              <text x="710" y="122" text-anchor="middle" fill="#94A3B8" font-size="9">Hébergement HDS & ISO 27001 (France)</text>

              <!-- Baies de serveurs -->
              <g transform="translate(630, 140)">
                <rect x="0" y="0" width="45" height="180" rx="3" fill="#020617" stroke="#818CF8" stroke-width="1"/>
                <line x1="5" y1="20" x2="40" y2="20" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="5" y1="40" x2="40" y2="40" stroke="#10B981" stroke-width="1.5"/>
                <line x1="5" y1="60" x2="40" y2="60" stroke="#10B981" stroke-width="1.5"/>
                <line x1="5" y1="80" x2="40" y2="80" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="5" y1="100" x2="40" y2="100" stroke="#10B981" stroke-width="1.5"/>
                <line x1="5" y1="120" x2="40" y2="120" stroke="#818CF8" stroke-width="1.5"/>
                <line x1="5" y1="140" x2="40" y2="140" stroke="#10B981" stroke-width="1.5"/>
                <line x1="5" y1="160" x2="40" y2="160" stroke="#0EBCFF" stroke-width="1.5"/>

                <rect x="55" y="0" width="45" height="180" rx="3" fill="#020617" stroke="#818CF8" stroke-width="1"/>
                <line x1="60" y1="20" x2="95" y2="20" stroke="#10B981" stroke-width="1.5"/>
                <line x1="60" y1="40" x2="95" y2="40" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="60" y1="60" x2="95" y2="60" stroke="#10B981" stroke-width="1.5"/>
                <line x1="60" y1="80" x2="95" y2="80" stroke="#10B981" stroke-width="1.5"/>
                <line x1="60" y1="100" x2="95" y2="100" stroke="#818CF8" stroke-width="1.5"/>
                <line x1="60" y1="120" x2="95" y2="120" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="60" y1="140" x2="95" y2="140" stroke="#10B981" stroke-width="1.5"/>
                <line x1="60" y1="160" x2="95" y2="160" stroke="#10B981" stroke-width="1.5"/>

                <rect x="110" y="0" width="45" height="180" rx="3" fill="#020617" stroke="#818CF8" stroke-width="1"/>
                <line x1="115" y1="20" x2="150" y2="20" stroke="#10B981" stroke-width="1.5"/>
                <line x1="115" y1="40" x2="150" y2="40" stroke="#10B981" stroke-width="1.5"/>
                <line x1="115" y1="60" x2="150" y2="60" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="115" y1="80" x2="150" y2="80" stroke="#818CF8" stroke-width="1.5"/>
                <line x1="115" y1="100" x2="150" y2="100" stroke="#10B981" stroke-width="1.5"/>
                <line x1="115" y1="120" x2="150" y2="120" stroke="#10B981" stroke-width="1.5"/>
                <line x1="115" y1="140" x2="150" y2="140" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="115" y1="160" x2="150" y2="160" stroke="#10B981" stroke-width="1.5"/>
              </g>

              <text x="710" y="345" text-anchor="middle" fill="#38BDF8" font-size="9" font-family="monospace">SAE NF Z42-013 & CHRÉO</text>
              <text x="710" y="360" text-anchor="middle" fill="#CBD5E1" font-size="8">Chiffrement AES-256 + HSM</text>
            </g>

            <!-- Climatisation & Hygrométrie Indicateur -->
            <rect x="250" y="390" width="310" height="26" rx="4" fill="#0F0D2D" stroke="#0EBCFF" stroke-width="1"/>
            <text x="405" y="407" text-anchor="middle" fill="#0EBCFF" font-size="10" font-family="monospace">TEMPÉRATURE : 18°C ± 2°C | HYGROMÉTRIE : 50% ± 5% HR CONSTANTE</text>
          </svg>
        </div>

        <!-- Cadre de métadonnées complet -->
        <div class="p-3 bg-slate-900/90 rounded border-l-4 border-sky-400 text-xs text-slate-300 space-y-1 font-mono">
          <div class="flex items-center justify-between text-slate-400">
            <span class="text-sky-300 font-bold uppercase">Illustration 1 / 5</span>
            <span class="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-sky-400">Artefacts Schein Niveau 1</span>
          </div>
          <p class="font-bold text-white text-sm">Plan architectural et coupe technique d'un site de stockage haute sécurité certifié NF Z40-350 / ISO 27001</p>
          <p class="text-slate-400"><strong>Légende officielle :</strong> Source Xelians Présentation Corporate 2026 — Notion de cours : Artefacts physiques & sanctuarisation de Schein.</p>
          <p class="text-[11px] text-slate-400 leading-relaxed font-sans">
            <em>Décryptage sociologique :</em> Cette infrastructure ultra-sécurisée n'est pas qu'un outil technique : elle constitue l'artefact primaire qui discipline les corps et les esprits. La sanctuarisation architecturale (sas biométrique, gaz inerte, température régulée) impose au salarié un sentiment de révérence envers la mémoire juridique et matérialise l'impératif du risque zéro.
          </p>
        </div>
      </div>
    `;
  },

  /**
   * Illustration 2 : Charte chromatique officielle et sémiologie du logo à boucle infinie
   */
  renderIllustration2: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-4">
        <div class="bg-gradient-to-br from-[#0F0D2D] via-[#241F63] to-[#0F0D2D] p-5 rounded-lg border border-sky-500/30 shadow-2xl">
          <div class="flex items-center justify-between mb-4 border-b border-slate-700/60 pb-2">
            <span class="font-mono text-xs uppercase text-sky-300 font-bold">Charte Graphique Officielle Xelians & Sémiologie</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">Typo : Muli / Mulish</span>
          </div>

          <!-- Logo Xelians stylisé officiel -->
          <div class="flex flex-col items-center justify-center p-6 bg-slate-950/60 rounded-lg border border-slate-800 my-3">
            <svg viewBox="0 0 400 120" class="w-72 h-auto">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#0EBCFF"/>
                  <stop offset="60%" stop-color="#1464FF"/>
                  <stop offset="100%" stop-color="#FF4A54"/>
                </linearGradient>
              </defs>
              
              <!-- Boucle infinie stylisée Xelians -->
              <path d="M 60 60 C 60 40, 90 35, 110 60 C 130 85, 160 80, 160 60 C 160 40, 130 35, 110 60 C 90 85, 60 80, 60 60 Z" 
                    fill="none" stroke="url(#logoGrad)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="110" cy="60" r="5" fill="#FFFFFF"/>

              <!-- Typographie XELIANS -->
              <text x="185" y="70" fill="#FFFFFF" font-family="'Muli', sans-serif" font-size="34" font-weight="900" letter-spacing="3">XELIANS</text>
              <text x="187" y="90" fill="#0EBCFF" font-family="'Muli', sans-serif" font-size="10" font-weight="600" letter-spacing="1.5">PLUS QUE DES DONNÉES, VOTRE AVENIR</text>
            </svg>
            <p class="text-[11px] text-slate-400 mt-2 text-center max-w-md font-sans">
              Le logotype combine la lettre « X » stylisée en boucle d'infinité (cycle perpétuel du document : création, versement, conservation, numérisation, valorisation IA ou destruction certifiée).
            </p>
          </div>

          <!-- Nuancier officiel avec valeurs Hex, RGB et rôle -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-2">
            <!-- 1. Bleu Ciel -->
            <div class="bg-slate-900 rounded p-2 border border-slate-800 text-center">
              <div class="w-full h-12 rounded mb-2 shadow" style="background-color: #0EBCFF;"></div>
              <span class="text-xs font-bold text-white block">Bleu Ciel</span>
              <span class="text-[10px] font-mono text-sky-400">#0EBCFF</span>
              <span class="text-[9px] text-slate-400 block mt-1">Primaire / Clarté</span>
            </div>

            <!-- 2. Bleu Roi -->
            <div class="bg-slate-900 rounded p-2 border border-slate-800 text-center">
              <div class="w-full h-12 rounded mb-2 shadow" style="background-color: #1464FF;"></div>
              <span class="text-xs font-bold text-white block">Bleu Roi</span>
              <span class="text-[10px] font-mono text-blue-400">#1464FF</span>
              <span class="text-[9px] text-slate-400 block mt-1">Électrique / Énergie</span>
            </div>

            <!-- 3. Bleu Nuit -->
            <div class="bg-slate-900 rounded p-2 border border-slate-800 text-center">
              <div class="w-full h-12 rounded mb-2 shadow" style="background-color: #241F63;"></div>
              <span class="text-xs font-bold text-white block">Bleu Nuit</span>
              <span class="text-[10px] font-mono text-indigo-400">#241F63</span>
              <span class="text-[9px] text-slate-400 block mt-1">Profondeur / Rigueur</span>
            </div>

            <!-- 4. Sombre Support -->
            <div class="bg-slate-900 rounded p-2 border border-slate-800 text-center">
              <div class="w-full h-12 rounded mb-2 shadow border border-slate-700" style="background-color: #0F0D2D;"></div>
              <span class="text-xs font-bold text-white block">Sombre Base</span>
              <span class="text-[10px] font-mono text-slate-300">#0F0D2D</span>
              <span class="text-[9px] text-slate-400 block mt-1">Biseau 4° / Socle</span>
            </div>

            <!-- 5. Framboise Accent -->
            <div class="bg-slate-900 rounded p-2 border border-slate-800 text-center">
              <div class="w-full h-12 rounded mb-2 shadow" style="background-color: #FF4A54;"></div>
              <span class="text-xs font-bold text-white block">Framboise</span>
              <span class="text-[10px] font-mono text-rose-400">#FF4A54</span>
              <span class="text-[9px] text-slate-400 block mt-1">Accent / Alerte</span>
            </div>

            <!-- 6. Fond Respiration -->
            <div class="bg-slate-900 rounded p-2 border border-slate-800 text-center">
              <div class="w-full h-12 rounded mb-2 shadow border border-slate-600" style="background-color: #F7F9FE;"></div>
              <span class="text-xs font-bold text-slate-900 bg-white/90 px-1 rounded block">Respiration</span>
              <span class="text-[10px] font-mono text-slate-300">#F7F9FE</span>
              <span class="text-[9px] text-slate-400 block mt-1">Fond clair / Sérénité</span>
            </div>
          </div>
        </div>

        <!-- Cadre de métadonnées complet -->
        <div class="p-3 bg-slate-900/90 rounded border-l-4 border-sky-400 text-xs text-slate-300 space-y-1 font-mono">
          <div class="flex items-center justify-between text-slate-400">
            <span class="text-sky-300 font-bold uppercase">Illustration 2 / 5</span>
            <span class="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-sky-400">Artefacts Symboliques Schein Niveau 2</span>
          </div>
          <p class="font-bold text-white text-sm">Charte chromatique et logo dégradé Xelians avec symbole infini</p>
          <p class="text-slate-400"><strong>Légende officielle :</strong> Source Charte de style Xelians 2019 — Notion de cours : Artefacts symboliques et transmission des valeurs.</p>
          <p class="text-[11px] text-slate-400 leading-relaxed font-sans">
            <em>Décryptage sociologique :</em> La rupture opérée en 2019 visait à effacer la rusticité des marques originelles (Archiveco / Locarchives) au profit d'une esthétique technologique (bleu roi électrique, rose framboise) évoquant le cloud et l'agilité, tout en maintenant l'ancrage profond de sécurité via le bleu nuit #241F63.
          </p>
        </div>
      </div>
    `;
  },

  /**
   * Illustration 3 : Le voilier de course au large Mini 6.50 à foils de Xelians
   */
  renderIllustration3: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-4">
        <div class="relative bg-gradient-to-b from-[#0F0D2D] via-[#161B48] to-[#0A2540] p-4 rounded-lg border border-sky-500/30 overflow-hidden shadow-2xl">
          <div class="flex items-center justify-between mb-3 border-b border-slate-700/60 pb-2">
            <span class="font-mono text-xs uppercase text-sky-300 font-bold">Vecteur Symbolique : Course au Large Mini 6.50 à Foils</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">Skippers : C. Boule & B. Marie</span>
          </div>

          <!-- Représentation vectorielle du voilier à foils en vol -->
          <svg viewBox="0 0 800 420" class="w-full h-auto rounded select-none">
            <defs>
              <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0EBCFF" stop-opacity="0.8"/>
                <stop offset="40%" stop-color="#1464FF" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="#0F0D2D"/>
              </linearGradient>
              <linearGradient id="sailGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#FFFFFF"/>
                <stop offset="80%" stop-color="#E2E8F0"/>
                <stop offset="100%" stop-color="#0EBCFF"/>
              </linearGradient>
              <linearGradient id="spinnakerGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#FF4A54"/>
                <stop offset="100%" stop-color="#1464FF"/>
              </linearGradient>
            </defs>

            <!-- Ciel & embruns -->
            <rect x="0" y="0" width="800" height="320" fill="transparent"/>
            
            <!-- Vagues stylisées -->
            <path d="M 0 340 Q 150 310, 300 340 T 600 330 T 800 345 L 800 420 L 0 420 Z" fill="url(#seaGrad)"/>
            <path d="M 0 355 Q 200 335, 400 360 T 800 350 L 800 420 L 0 420 Z" fill="#0F0D2D" fill-opacity="0.6"/>

            <!-- Sillage et écume du foil -->
            <path d="M 330 350 Q 220 370, 80 395" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-dasharray="8,6" opacity="0.8"/>
            <path d="M 360 365 Q 250 390, 110 410" stroke="#0EBCFF" stroke-width="3" stroke-linecap="round" opacity="0.6"/>

            <!-- FOIL EN CARBONE (profil en T/L sortant de l'eau) -->
            <path d="M 390 280 L 410 350 L 450 340 L 400 365" fill="none" stroke="#FF4A54" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="410" cy="350" r="3" fill="#FFF"/>
            <text x="460" y="345" fill="#FF4A54" font-size="10" font-family="monospace" font-weight="bold">FOIL CARBONE EN SUSTENTATION</text>

            <!-- COQUE DU MINI 6.50 (en sustentation à 30cm au-dessus de la ligne d'eau) -->
            <path d="M 270 270 Q 380 280, 510 250 L 530 260 Q 380 300, 260 280 Z" fill="#0F0D2D" stroke="#0EBCFF" stroke-width="2.5"/>
            <!-- Lettrage coque XELIANS -->
            <text x="360" y="277" fill="#FFFFFF" font-family="'Muli', sans-serif" font-size="14" font-weight="900" letter-spacing="1.5">XELIANS</text>
            <circle cx="345" cy="274" r="4" fill="#FF4A54"/>

            <!-- MÂT ET GRÉEMENT -->
            <line x1="390" y1="265" x2="380" y2="40" stroke="#CBD5E1" stroke-width="3.5"/>
            <!-- Haubans -->
            <line x1="380" y1="40" x2="270" y2="270" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="380" y1="40" x2="490" y2="255" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2,2"/>

            <!-- GRAND-VOILE CORNE CARBONE HAUTE PERFORMANCE -->
            <path d="M 380 40 L 390 255 L 290 245 L 340 45 Z" fill="url(#sailGrad)" stroke="#1464FF" stroke-width="1.5" opacity="0.95"/>
            <!-- Marquage voile logo boucle infinie -->
            <path d="M 330 140 C 330 130, 345 125, 355 140 C 365 155, 380 150, 380 140 C 380 130, 365 125, 355 140 C 345 155, 330 150, 330 140 Z" 
                  fill="none" stroke="#1464FF" stroke-width="4"/>
            <text x="355" y="170" text-anchor="middle" fill="#0F0D2D" font-size="11" font-weight="bold">FRA 1081</text>
            <text x="355" y="185" text-anchor="middle" fill="#1464FF" font-size="9" font-weight="bold">XELIANS FOILS</text>

            <!-- GÉNOIS / FOILER SPY AVANT -->
            <path d="M 380 45 L 530 240 Q 460 210, 390 255 Z" fill="url(#spinnakerGrad)" opacity="0.85" stroke="#FF4A54" stroke-width="1"/>
            <text x="440" y="160" fill="#FFFFFF" font-size="10" font-weight="bold" transform="rotate(35 440 160)">MORE THAN DATA</text>

            <!-- Skipper en rappel -->
            <circle cx="330" cy="255" r="5" fill="#FF4A54"/>
            <path d="M 330 260 L 325 272" stroke="#FF4A54" stroke-width="3"/>
          </svg>
        </div>

        <!-- Cadre de métadonnées complet -->
        <div class="p-3 bg-slate-900/90 rounded border-l-4 border-sky-400 text-xs text-slate-300 space-y-1 font-mono">
          <div class="flex items-center justify-between text-slate-400">
            <span class="text-sky-300 font-bold uppercase">Illustration 3 / 5</span>
            <span class="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-sky-400">Valeurs Déclarées vs Réel Schein</span>
          </div>
          <p class="font-bold text-white text-sm">Le bateau de course Mini 6.50 à foils sponsorisé par Xelians</p>
          <p class="text-slate-400"><strong>Légende officielle :</strong> Source Xelians RSE & Innovation 2026 — Notion de cours : Valeurs déclarées vs image externe de dépassement.</p>
          <p class="text-[11px] text-slate-400 leading-relaxed font-sans">
            <em>Décryptage sociologique :</em> Le voilier volant à foils opère comme une <strong>prothèse symbolique d'agilité</strong>. En affichant un bolide high-tech fendant l'océan à 25 nœuds, Xelians compense l'inertie perçue de ses 9 000 km d'archives statiques et projette une culture de l'exploit technologique, de la résilience et de l'anticipation météo/marché.
          </p>
        </div>
      </div>
    `;
  },

  /**
   * Illustration 4 : Radar OCAI modélisant le profil organisationnel (Cameron & Quinn)
   */
  ocaiInstances: {},

  renderIllustration4: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const canvasId = 'ocaiCanvas_' + containerId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const btnPrefix = 'ocaiBtn_' + containerId.replace(/[^a-zA-Z0-9_-]/g, '_');

    container.innerHTML = `
      <div class="space-y-4">
        <div class="bg-gradient-to-br from-[#0F0D2D] via-[#1A1646] to-[#0F0D2D] p-5 rounded-lg border border-purple-500/40 shadow-2xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-700/60 pb-3">
            <div>
              <span class="font-mono text-xs uppercase text-purple-300 font-bold block">Cartographie OCAI — Competing Values Framework</span>
              <span class="text-[11px] text-slate-400">Évaluation culturelle selon Cameron & Quinn (1999)</span>
            </div>
            <!-- Boutons de bascule interactive de scénario -->
            <div class="flex items-center gap-1 bg-slate-900 p-1 rounded border border-slate-700 text-xs font-mono">
              <button id="${btnPrefix}-current" onclick="window.XELIANS_ILLUSTRATIONS.switchOcaiMode('${containerId}', 'current')" class="px-2.5 py-1 rounded bg-purple-600 text-white font-bold transition">Culture Réelle</button>
              <button id="${btnPrefix}-desired" onclick="window.XELIANS_ILLUSTRATIONS.switchOcaiMode('${containerId}', 'desired')" class="px-2.5 py-1 rounded text-slate-400 hover:text-white transition">Culture Affichée</button>
              <button id="${btnPrefix}-compare" onclick="window.XELIANS_ILLUSTRATIONS.switchOcaiMode('${containerId}', 'compare')" class="px-2.5 py-1 rounded text-slate-400 hover:text-white transition">Superposition</button>
            </div>
          </div>

          <!-- Zone du Canvas Radar Chart -->
          <div class="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-2">
            <canvas id="${canvasId}"></canvas>
          </div>

          <!-- Grille explicative des 4 quadrants -->
          <div class="grid grid-cols-2 gap-3 mt-4 text-xs font-sans">
            <div class="p-2.5 rounded bg-slate-900/80 border-t-2 border-purple-500">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-purple-300">HIÉRARCHIE (42%)</span>
                <span class="text-[10px] font-mono text-purple-400 font-bold">Dominante</span>
              </div>
              <p class="text-[11px] text-slate-300">Orientation Interne & Contrôle. Respect scrupuleux des normes NF Z40-350, ISO 27001, HDS, pistes d'audit et DUA.</p>
            </div>
            <div class="p-2.5 rounded bg-slate-900/80 border-t-2 border-blue-500">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-blue-300">MARCHÉ (28%)</span>
                <span class="text-[10px] font-mono text-blue-400 font-bold">Secondaire</span>
              </div>
              <p class="text-[11px] text-slate-300">Orientation Externe & Contrôle. Compétitivité féroce, respect millimétré des SLA BPO (H+4/H+24), rentabilité de la rente.</p>
            </div>
            <div class="p-2.5 rounded bg-slate-900/80 border-t-2 border-emerald-500">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-emerald-300">CLAN (18%)</span>
                <span class="text-[10px] font-mono text-emerald-400">Résiduelle</span>
              </div>
              <p class="text-[11px] text-slate-300">Orientation Interne & Flexibilité. Solidarité d'équipe historique issue d'Archiveco et Locarchives, paternalisme social local.</p>
            </div>
            <div class="p-2.5 rounded bg-slate-900/80 border-t-2 border-rose-500">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-rose-300">ADHOCRATIE (12%)</span>
                <span class="text-[10px] font-mono text-rose-400">À Développer</span>
              </div>
              <p class="text-[11px] text-slate-300">Orientation Externe & Flexibilité. Innovation disruptive, R&D en IA souveraine et incubateur « L'Atelier X-Lab ».</p>
            </div>
          </div>
        </div>

        <!-- Cadre de métadonnées complet -->
        <div class="p-3 bg-slate-900/90 rounded border-l-4 border-purple-500 text-xs text-slate-300 space-y-1 font-mono">
          <div class="flex items-center justify-between text-slate-400">
            <span class="text-purple-300 font-bold uppercase">Illustration 4 / 5</span>
            <span class="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-purple-400">Modèle Cameron & Quinn</span>
          </div>
          <p class="font-bold text-white text-sm">Radar OCAI modélisant le profil organisationnel de Xelians (Dominance Hiérarchie & Marché)</p>
          <p class="text-slate-400"><strong>Légende officielle :</strong> Analyse OCAI d'après la grille de Cameron & Quinn — Notion de cours : Diagnostic de culture organisationnelle.</p>
          <p class="text-[11px] text-slate-400 leading-relaxed font-sans">
            <em>Décryptage sociologique :</em> Avec 70% cumulés sur l'axe du Contrôle et de la Stabilité (42% Hiérarchie + 28% Marché), Xelians privilégie la prévisibilité absolue. Le grand défi stratégique consiste à faire passer l'Adhocratie de 12% à 25-30% sans disloquer la rigueur de la chaîne de confiance.
          </p>
        </div>
      </div>
    `;

    this.initOcaiChart(containerId, 'current');
  },

  initOcaiChart: function(containerId, mode) {
    const canvasId = 'ocaiCanvas_' + containerId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    if (this.ocaiInstances[containerId]) {
      this.ocaiInstances[containerId].destroy();
    }

    const labels = ['CLAN (Flexibilité Interne)', 'ADHOCRATIE (Flexibilité Externe)', 'MARCHÉ (Stabilité Externe)', 'HIÉRARCHIE (Stabilité Interne)'];
    
    let datasets = [];

    if (mode === 'current') {
      datasets = [{
        label: 'Culture Réelle Actuelle (Diagnostic terrain)',
        data: [18, 12, 28, 42],
        backgroundColor: 'rgba(147, 51, 234, 0.35)',
        borderColor: '#A855F7',
        borderWidth: 3,
        pointBackgroundColor: '#C084FC',
        pointBorderColor: '#FFF',
        pointHoverRadius: 6,
        pointRadius: 5
      }];
    } else if (mode === 'desired') {
      datasets = [{
        label: 'Culture Affichée / Revendiquée (Discours RH)',
        data: [30, 30, 25, 15],
        backgroundColor: 'rgba(14, 188, 255, 0.35)',
        borderColor: '#0EBCFF',
        borderWidth: 3,
        pointBackgroundColor: '#38BDF8',
        pointBorderColor: '#FFF',
        pointHoverRadius: 6,
        pointRadius: 5
      }];
    } else {
      datasets = [
        {
          label: 'Culture Réelle (Hiérarchie dominante)',
          data: [18, 12, 28, 42],
          backgroundColor: 'rgba(147, 51, 234, 0.25)',
          borderColor: '#A855F7',
          borderWidth: 2.5,
          pointBackgroundColor: '#C084FC',
          pointRadius: 4
        },
        {
          label: 'Culture Cible 2026 (Atelier X-Lab & Ambidextrie)',
          data: [22, 28, 25, 25],
          backgroundColor: 'rgba(16, 185, 129, 0.25)',
          borderColor: '#10B981',
          borderWidth: 2.5,
          pointBackgroundColor: '#34D399',
          pointRadius: 4
        }
      ];
    }

    this.ocaiInstances[containerId] = new Chart(canvas, {
      type: 'radar',
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#F1F5F9',
              font: { family: "'Mulish', sans-serif", size: 12, weight: 'bold' }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return ` ${context.dataset.label}: ${context.raw} %`;
              }
            }
          }
        },
        scales: {
          r: {
            angleLines: { color: 'rgba(148, 163, 184, 0.2)' },
            grid: { color: 'rgba(148, 163, 184, 0.15)' },
            pointLabels: {
              color: '#38BDF8',
              font: { family: "'Mulish', monospace", size: 11, weight: 'bold' }
            },
            ticks: {
              backdropColor: 'transparent',
              color: '#94A3B8',
              font: { size: 9 },
              stepSize: 10,
              min: 0,
              max: 50
            }
          }
        }
      }
    });
  },

  switchOcaiMode: function(containerId, mode) {
    const btnPrefix = 'ocaiBtn_' + containerId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const btnCurrent = document.getElementById(btnPrefix + '-current');
    const btnDesired = document.getElementById(btnPrefix + '-desired');
    const btnCompare = document.getElementById(btnPrefix + '-compare');

    [btnCurrent, btnDesired, btnCompare].forEach(b => {
      if (!b) return;
      b.className = "px-2.5 py-1 rounded text-slate-400 hover:text-white transition";
    });

    if (mode === 'current' && btnCurrent) {
      btnCurrent.className = "px-2.5 py-1 rounded bg-purple-600 text-white font-bold transition";
    } else if (mode === 'desired' && btnDesired) {
      btnDesired.className = "px-2.5 py-1 rounded bg-sky-600 text-white font-bold transition";
    } else if (mode === 'compare' && btnCompare) {
      btnCompare.className = "px-2.5 py-1 rounded bg-emerald-600 text-white font-bold transition";
    }

    this.initOcaiChart(containerId, mode);
  },

  /**
   * Illustration 5 : Frise chronologique et cartographie stratégique des acquisitions M&A
   */
  renderIllustration5: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-4">
        <div class="bg-gradient-to-br from-[#0F0D2D] via-[#141B3E] to-[#0F0D2D] p-5 rounded-lg border border-amber-500/40 shadow-2xl">
          <div class="flex items-center justify-between mb-4 border-b border-slate-700/60 pb-2">
            <span class="font-mono text-xs uppercase text-amber-300 font-bold">Trajectoire M&A & Pivots Stratégiques (2004 — 2026)</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">Chrono-compétition & Diversification</span>
          </div>

          <!-- Ligne de temps interactive -->
          <div class="relative pl-6 sm:pl-10 space-y-6 before:absolute before:left-2.5 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-blue-500 before:to-rose-500">
            
            <!-- 1. Origines 1977-1982 -->
            <div class="relative group">
              <span class="absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              </span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800 hover:border-sky-500 transition">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-sky-400 text-sm">1977 — 1982 : Fondation du socle physique</span>
                  <span class="text-[10px] font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded">Archiveco & Locarchives</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Création des leaders français de l'archivage physique d'entreprises. Établissement de la réputation de sécurité et acquisition des premiers agréments de l'État.</p>
              </div>
            </div>

            <!-- 2. 2004 : Scaneco -->
            <div class="relative group">
              <span class="absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-400 flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              </span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800 hover:border-blue-500 transition">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-blue-400 text-sm">2004 : Rachat de Scaneco</span>
                  <span class="text-[10px] font-mono bg-blue-950 text-blue-300 px-2 py-0.5 rounded">BPO Industriel</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Premier pas vers l'hybridation : ouverture d'ateliers de numérisation industrielle de masse pour répondre aux premières vagues de dématérialisation bancaire.</p>
              </div>
            </div>

            <!-- 3. 2017 : CD-Doc -->
            <div class="relative group">
              <span class="absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-400 flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              </span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800 hover:border-indigo-500 transition">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-indigo-400 text-sm">2017 : Rachat de CD-Doc</span>
                  <span class="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">Dématérialisation Fiscale</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Acquisition de briques d'intégration pour la facture électronique, la gestion automatisée des flux comptables et les coffres-forts numériques.</p>
              </div>
            </div>

            <!-- 4. 2019 : Naissance de XELIANS -->
            <div class="relative group">
              <span class="absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800 hover:border-emerald-500 transition">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-emerald-400 text-sm">2019 : Naissance officielle de la marque XELIANS</span>
                  <span class="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded">Unification Identitaire</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Convergence des 800 collaborateurs sous une marque ombrelle unique, refonte de la charte de style et lancement de la devise « Plus que des données, votre avenir ».</p>
              </div>
            </div>

            <!-- 5. 2023 : Rachat de DIS -->
            <div class="relative group">
              <span class="absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800 hover:border-amber-500 transition">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-amber-400 text-sm">2023 : Rachat de DIS (Document Image Solutions)</span>
                  <span class="text-[10px] font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded">LAD / RAD & OCR Avancé</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Intégration d'algorithmes de lecture automatique de documents pour traiter les 60 millions de pages BPO annuelles en réduisant drastiquement les délais de traitement.</p>
              </div>
            </div>

            <!-- 6. 2024 : Xelians Intégration Services (XIS) -->
            <div class="relative group">
              <span class="absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              </span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800 hover:border-cyan-500 transition">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-cyan-400 text-sm">2024 : Lancement de Xelians Intégration Services (XIS)</span>
                  <span class="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded">GED / SAE Secteur Public</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Pôle conseil et déploiement de solutions logicielles souveraines (notamment Maarch Courrier et SAE) auprès des ministères et grandes collectivités territoriales.</p>
              </div>
            </div>

            <!-- 7. 2025 : Rachat de Sodoc -->
            <div class="relative group">
              <span class="absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-400 flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              </span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800 hover:border-violet-500 transition">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-violet-400 text-sm">2025 : Rachat de Sodoc (Intégration Microsoft 365)</span>
                  <span class="text-[10px] font-mono bg-violet-950 text-violet-300 px-2 py-0.5 rounded">Pont GED SharePoint</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Arrimage direct de la GED souveraine dans SharePoint et Teams, permettant aux clients de conserver leur ergonomie bureautique tout en garantissant un archivage légal conforme en arrière-plan.</p>
              </div>
            </div>

            <!-- 8. 2026 : IA Générative Souveraine & 20% R&D -->
            <div class="relative group">
              <span class="absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-rose-500 flex items-center justify-center">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
              </span>
              <div class="p-3 bg-slate-900/90 rounded border-2 border-rose-500/80 shadow-lg shadow-rose-950/40">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-rose-400 text-sm">2026 : Déploiement IA Générative Souveraine & R&D 20%</span>
                  <span class="text-[10px] font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800">Horizon Actuel</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">20 % du CA investi en R&D et IT. Modèles d'IA hébergés localement en datacenters souverains : synthèse de dossiers juridiques, classification automatique des courriers avec 40 % de gain de productivité.</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Cadre de métadonnées complet -->
        <div class="p-3 bg-slate-900/90 rounded border-l-4 border-amber-400 text-xs text-slate-300 space-y-1 font-mono">
          <div class="flex items-center justify-between text-slate-400">
            <span class="text-amber-300 font-bold uppercase">Illustration 5 / 5</span>
            <span class="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-amber-400">Chrono-compétition & M&A</span>
          </div>
          <p class="font-bold text-white text-sm">Frise chronologique des acquisitions et pivots stratégiques de Xelians (Scaneco, CD-Doc, DIS, Sodoc, IA 2026)</p>
          <p class="text-slate-400"><strong>Légende officielle :</strong> Source Document Institutionnel 2026 — Notion de cours : Chrono-compétition et adaptation stratégique.</p>
          <p class="text-[11px] text-slate-400 leading-relaxed font-sans">
            <em>Décryptage sociologique :</em> Cette frise prouve que pour résister à l'ubérisation du stockage par les hyperscalers (AWS, Azure) et au rouleau compresseur mondial d'Iron Mountain, Xelians a dû transformer sa culture par greffes externes successives, achetant la compétence technologique pour injecter de la vitesse dans une organisation traditionnellement orientée vers le temps long.
          </p>
        </div>
      </div>
    `;
  }
};
