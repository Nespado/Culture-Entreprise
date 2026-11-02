/**
 * MOTEUR D'ILLUSTRATIONS ACADÉMIQUES VECTORIELLES & INTERACTIVES
 * 5 Illustrations obligatoires avec cartouches académiques complets :
 * 1. Titre de l'illustration
 * 2. Source & Date
 * 3. Lien avec le cours (notion théorique)
 * 4. Décryptage sociologique
 */

window.XELIANS_ILLUSTRATIONS = {
  ocaiInstances: {},

  /**
   * Illustration 1 : L'Entrepôt Haute Sécurité (Coupe architecturale NF Z40-350 / ISO 27001)
   */
  renderIllustration1: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-md bg-white">
        <!-- Cadre graphique de l'entrepôt -->
        <div class="bg-[#0F111E] p-4 border-b border-slate-200">
          <div class="flex items-center justify-between mb-2">
            <span class="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Coupe Technique d'Infrastructure — Site Agréé SIAF #24
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">NF Z40-350 & ISO 27001</span>
          </div>

          <svg viewBox="0 0 850 420" class="w-full h-auto select-none rounded bg-[#0A0C16]">
            <defs>
              <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#161A2D"/>
                <stop offset="100%" stop-color="#0B0D18"/>
              </linearGradient>
              <pattern id="gridIso" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 188, 255, 0.12)" stroke-width="1"/>
              </pattern>
            </defs>

            <!-- Structure globale du hangar -->
            <rect x="20" y="35" width="810" height="365" rx="8" fill="url(#wallGrad)" stroke="#1464FF" stroke-width="1.5"/>
            <rect x="25" y="40" width="800" height="355" fill="url(#gridIso)"/>

            <!-- Toiture & Centrale de traitement d'air (CTA) -->
            <rect x="20" y="15" width="810" height="25" rx="4" fill="#1E2338" stroke="#0EBCFF" stroke-width="1"/>
            <text x="40" y="32" fill="#0EBCFF" font-size="10" font-family="monospace" font-weight="bold">ISOLATION THERMIQUE DOUBLE PEAU — RÉSISTANCE AU FEU REI 240 (COUPE-FEU 4 HEURES)</text>

            <!-- ZONE 1 : Sas Biométrique & Contrôle d'accès -->
            <g>
              <rect x="40" y="70" width="165" height="310" rx="6" fill="#111425" stroke="#0EBCFF" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="122" y="95" text-anchor="middle" fill="#0EBCFF" font-size="11" font-weight="bold">SAS BIOMÉTRIQUE</text>
              <text x="122" y="110" text-anchor="middle" fill="#94A3B8" font-size="9">Double barrière étanche</text>

              <rect x="62" y="130" width="120" height="70" rx="4" fill="#060810" stroke="#1464FF"/>
              <circle cx="122" cy="165" r="14" fill="#0EBCFF" fill-opacity="0.2" stroke="#0EBCFF"/>
              <path d="M117 165 L121 169 L128 160" fill="none" stroke="#0EBCFF" stroke-width="2"/>
              <text x="122" y="215" text-anchor="middle" fill="#38BDF8" font-size="9" font-family="monospace">LECTEUR DIGITAL & P3</text>

              <circle cx="122" cy="260" r="16" fill="#FF4A54" fill-opacity="0.2" stroke="#FF4A54"/>
              <text x="122" y="264" text-anchor="middle" fill="#FF4A54" font-size="9" font-weight="bold">RADAR IR</text>
              <text x="122" y="290" text-anchor="middle" fill="#CBD5E1" font-size="8">Vidéosurveillance 24/7</text>
              <text x="122" y="345" text-anchor="middle" fill="#64748B" font-size="8" font-family="monospace">Piste d'audit horodatée</text>
            </g>

            <!-- ZONE 2 : Hangar Principal - Rayonnages mobiles automatisés (9 000 km) -->
            <g>
              <rect x="225" y="70" width="370" height="310" rx="6" fill="#111528" stroke="#38BDF8" stroke-width="1.5"/>
              <text x="410" y="95" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="bold">RAYONNAGES MOBILES SUR RAILS (9 000 KM)</text>
              <text x="410" y="110" text-anchor="middle" fill="#94A3B8" font-size="9">Densité optimisée : archives physiques protégées</text>

              <!-- Travées et cartons kraft -->
              <g transform="translate(245, 130)">
                <!-- Travée A -->
                <rect x="0" y="0" width="60" height="210" fill="#1E243A" stroke="#0EBCFF" stroke-width="1"/>
                <line x1="0" y1="42" x2="60" y2="42" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="0" y1="84" x2="60" y2="84" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="0" y1="126" x2="60" y2="126" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="0" y1="168" x2="60" y2="168" stroke="#0EBCFF" stroke-width="0.5"/>
                <!-- Cartons -->
                <rect x="6" y="8" width="48" height="26" rx="2" fill="#D97706" fill-opacity="0.85"/>
                <rect x="6" y="50" width="48" height="26" rx="2" fill="#D97706" fill-opacity="0.85"/>
                <rect x="6" y="92" width="48" height="26" rx="2" fill="#0284C7" fill-opacity="0.85"/>
                <rect x="6" y="134" width="48" height="26" rx="2" fill="#0284C7" fill-opacity="0.85"/>
                <rect x="6" y="176" width="48" height="26" rx="2" fill="#0EBCFF" fill-opacity="0.9"/>
                <text x="30" y="24" text-anchor="middle" fill="#000" font-size="7" font-weight="bold">NF-342</text>
                <text x="30" y="66" text-anchor="middle" fill="#000" font-size="7" font-weight="bold">SIAF</text>
                <text x="30" y="108" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">DUA 30A</text>
                <text x="30" y="150" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">DUA 10A</text>
                <text x="30" y="192" text-anchor="middle" fill="#000" font-size="7" font-weight="bold">XELIANS</text>

                <!-- Travée B -->
                <rect x="80" y="0" width="60" height="210" fill="#1E243A" stroke="#0EBCFF" stroke-width="1"/>
                <line x1="80" y1="42" x2="140" y2="42" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="80" y1="84" x2="140" y2="84" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="80" y1="126" x2="140" y2="126" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="80" y1="168" x2="140" y2="168" stroke="#0EBCFF" stroke-width="0.5"/>
                <rect x="86" y="8" width="48" height="26" rx="2" fill="#0284C7" fill-opacity="0.85"/>
                <rect x="86" y="50" width="48" height="26" rx="2" fill="#0284C7" fill-opacity="0.85"/>
                <rect x="86" y="92" width="48" height="26" rx="2" fill="#D97706" fill-opacity="0.85"/>
                <rect x="86" y="134" width="48" height="26" rx="2" fill="#D97706" fill-opacity="0.85"/>
                <rect x="86" y="176" width="48" height="26" rx="2" fill="#0EBCFF" fill-opacity="0.9"/>

                <!-- Travée C -->
                <rect x="160" y="0" width="60" height="210" fill="#1E243A" stroke="#0EBCFF" stroke-width="1"/>
                <line x1="160" y1="42" x2="220" y2="42" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="160" y1="84" x2="220" y2="84" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="160" y1="126" x2="220" y2="126" stroke="#0EBCFF" stroke-width="0.5"/>
                <line x1="160" y1="168" x2="220" y2="168" stroke="#0EBCFF" stroke-width="0.5"/>
                <rect x="166" y="8" width="48" height="26" rx="2" fill="#D97706" fill-opacity="0.85"/>
                <rect x="166" y="50" width="48" height="26" rx="2" fill="#0EBCFF" fill-opacity="0.85"/>
                <rect x="166" y="92" width="48" height="26" rx="2" fill="#0284C7" fill-opacity="0.85"/>
                <rect x="166" y="134" width="48" height="26" rx="2" fill="#D97706" fill-opacity="0.85"/>
                <rect x="166" y="176" width="48" height="26" rx="2" fill="#0EBCFF" fill-opacity="0.9"/>

                <!-- Allée guidée -->
                <rect x="235" y="30" width="85" height="155" rx="4" fill="#080A14" stroke="#475569" stroke-dasharray="3,3"/>
                <text x="277" y="55" text-anchor="middle" fill="#38BDF8" font-size="9" font-weight="bold">ALLÉE GUIDÉE</text>
                <circle cx="277" cy="95" r="14" fill="#0EBCFF" fill-opacity="0.2" stroke="#0EBCFF"/>
                <path d="M272 95 L282 95 M277 90 L277 100" stroke="#0EBCFF" stroke-width="1.5"/>
                <text x="277" y="125" text-anchor="middle" fill="#CBD5E1" font-size="8">Chariot guidé</text>
                <text x="277" y="140" text-anchor="middle" fill="#FBBF24" font-size="8" font-family="monospace">RFID & 2D Scan</text>
              </g>

              <!-- Buses gaz inerte -->
              <circle cx="280" cy="85" r="4" fill="#38BDF8"/>
              <circle cx="380" cy="85" r="4" fill="#38BDF8"/>
              <circle cx="480" cy="85" r="4" fill="#38BDF8"/>
              <text x="380" y="80" text-anchor="middle" fill="#38BDF8" font-size="8" font-family="monospace">RAMPE INERGEN / NOVEC 1230 (ZÉRO EAU)</text>
            </g>

            <!-- ZONE 3 : Datacenter Souverain HDS / ISO 27001 -->
            <g>
              <rect x="615" y="70" width="195" height="310" rx="6" fill="#111425" stroke="#818CF8" stroke-width="1.5"/>
              <text x="712" y="95" text-anchor="middle" fill="#818CF8" font-size="11" font-weight="bold">DATACENTER SOUVERAIN</text>
              <text x="712" y="110" text-anchor="middle" fill="#94A3B8" font-size="9">HDS & ISO 27001 (France)</text>

              <!-- Baies serveurs -->
              <g transform="translate(635, 130)">
                <rect x="0" y="0" width="45" height="190" rx="3" fill="#030712" stroke="#818CF8" stroke-width="1"/>
                <line x1="5" y1="20" x2="40" y2="20" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="5" y1="40" x2="40" y2="40" stroke="#10B981" stroke-width="1.5"/>
                <line x1="5" y1="60" x2="40" y2="60" stroke="#10B981" stroke-width="1.5"/>
                <line x1="5" y1="80" x2="40" y2="80" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="5" y1="100" x2="40" y2="100" stroke="#10B981" stroke-width="1.5"/>
                <line x1="5" y1="120" x2="40" y2="120" stroke="#818CF8" stroke-width="1.5"/>
                <line x1="5" y1="140" x2="40" y2="140" stroke="#10B981" stroke-width="1.5"/>
                <line x1="5" y1="160" x2="40" y2="160" stroke="#0EBCFF" stroke-width="1.5"/>

                <rect x="55" y="0" width="45" height="190" rx="3" fill="#030712" stroke="#818CF8" stroke-width="1"/>
                <line x1="60" y1="20" x2="95" y2="20" stroke="#10B981" stroke-width="1.5"/>
                <line x1="60" y1="40" x2="95" y2="40" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="60" y1="60" x2="95" y2="60" stroke="#10B981" stroke-width="1.5"/>
                <line x1="60" y1="80" x2="95" y2="80" stroke="#10B981" stroke-width="1.5"/>
                <line x1="60" y1="100" x2="95" y2="100" stroke="#818CF8" stroke-width="1.5"/>
                <line x1="60" y1="120" x2="95" y2="120" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="60" y1="140" x2="95" y2="140" stroke="#10B981" stroke-width="1.5"/>
                <line x1="60" y1="160" x2="95" y2="160" stroke="#10B981" stroke-width="1.5"/>

                <rect x="110" y="0" width="45" height="190" rx="3" fill="#030712" stroke="#818CF8" stroke-width="1"/>
                <line x1="115" y1="20" x2="150" y2="20" stroke="#10B981" stroke-width="1.5"/>
                <line x1="115" y1="40" x2="150" y2="40" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="115" y1="60" x2="150" y2="60" stroke="#10B981" stroke-width="1.5"/>
                <line x1="115" y1="80" x2="150" y2="80" stroke="#818CF8" stroke-width="1.5"/>
                <line x1="115" y1="100" x2="150" y2="100" stroke="#10B981" stroke-width="1.5"/>
                <line x1="115" y1="120" x2="150" y2="120" stroke="#10B981" stroke-width="1.5"/>
                <line x1="115" y1="140" x2="150" y2="140" stroke="#0EBCFF" stroke-width="1.5"/>
                <line x1="115" y1="160" x2="150" y2="160" stroke="#10B981" stroke-width="1.5"/>
              </g>

              <text x="712" y="345" text-anchor="middle" fill="#38BDF8" font-size="9" font-family="monospace">SAE NF Z42-013</text>
              <text x="712" y="360" text-anchor="middle" fill="#CBD5E1" font-size="8">Chiffrement AES-256 + HSM</text>
            </g>

            <rect x="250" y="390" width="310" height="24" rx="4" fill="#080A14" stroke="#0EBCFF" stroke-width="1"/>
            <text x="405" y="406" text-anchor="middle" fill="#0EBCFF" font-size="9" font-family="monospace">TEMPÉRATURE : 18°C ± 2°C | HYGROMÉTRIE : 50% ± 5% HR</text>
          </svg>
        </div>

        <!-- Cartouche académique obligatoire -->
        <div class="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-slate-500">
            <span class="text-[#1464FF] font-bold uppercase">Illustration 1 / 5</span>
            <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">Artefacts physiques selon Schein</span>
          </div>
          <div class="font-bold text-slate-900 text-sm">L'Entrepôt Haute Sécurité certifié NF Z40-350 / ISO 27001</div>
          <div><strong>Source & Date :</strong> Doc Institutionnel Xelians 2026</div>
          <div><strong>Lien avec le cours :</strong> Artefacts physiques & sanctuarisation de Schein (Niveau 1).</div>
          <p class="text-slate-600 leading-relaxed pt-1 text-justify">
            <em>Légende officielle & décryptage :</em> Cette coupe d'infrastructure matérielle illustre la sanctuarisation de la donnée chez Xelians. La cohabitation de 9 000 km d'archives physiques et de 3 datacenters souverains sous régulation d'atmosphère et extinction par gaz inerte conditionne le comportement des collaborateurs : l'espace physique impose le respect absolu de la conformité et le rejet du risque.
          </p>
        </div>
      </div>
    `;
  },

  /**
   * Illustration 2 : Le Logo Xelians & Symbole Infini (Charte de Style 2019)
   */
  renderIllustration2: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-md bg-white">
        <div class="bg-gradient-to-br from-[#0F0D2D] via-[#1B1745] to-[#0F0D2D] p-6 text-center">
          <!-- Logo vectoriel officiel Xelians -->
          <div class="inline-block p-6 bg-slate-950/70 rounded-xl border border-slate-800 my-2">
            <svg viewBox="0 0 380 110" class="w-64 sm:w-80 h-auto mx-auto">
              <defs>
                <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#0EBCFF"/>
                  <stop offset="65%" stop-color="#1464FF"/>
                  <stop offset="100%" stop-color="#FF4A54"/>
                </linearGradient>
              </defs>
              <path d="M 60 55 C 60 38, 88 32, 108 55 C 128 78, 156 72, 156 55 C 156 38, 128 32, 108 55 C 88 78, 60 72, 60 55 Z" 
                    fill="none" stroke="url(#logoGrad2)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="108" cy="55" r="4" fill="#FFFFFF"/>
              <text x="175" y="65" fill="#FFFFFF" font-family="'Mulish', sans-serif" font-size="32" font-weight="900" letter-spacing="2">XELIANS</text>
              <text x="177" y="83" fill="#0EBCFF" font-family="'Mulish', sans-serif" font-size="9" font-weight="700" letter-spacing="1.2">MORE THAN DATA, BUSINESS</text>
            </svg>
          </div>

          <!-- Nuancier officiel -->
          <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4 max-w-xl mx-auto">
            <div class="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div class="h-8 rounded mb-1.5 shadow" style="background-color: #0EBCFF;"></div>
              <span class="text-[11px] font-bold text-white block">Bleu Ciel</span>
              <span class="text-[10px] font-mono text-sky-400">#0EBCFF</span>
            </div>
            <div class="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div class="h-8 rounded mb-1.5 shadow" style="background-color: #1464FF;"></div>
              <span class="text-[11px] font-bold text-white block">Bleu Roi</span>
              <span class="text-[10px] font-mono text-blue-400">#1464FF</span>
            </div>
            <div class="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div class="h-8 rounded mb-1.5 shadow" style="background-color: #241F63;"></div>
              <span class="text-[11px] font-bold text-white block">Bleu Nuit</span>
              <span class="text-[10px] font-mono text-indigo-400">#241F63</span>
            </div>
            <div class="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div class="h-8 rounded mb-1.5 shadow border border-slate-700" style="background-color: #0F0D2D;"></div>
              <span class="text-[11px] font-bold text-white block">Sombre</span>
              <span class="text-[10px] font-mono text-slate-300">#0F0D2D</span>
            </div>
            <div class="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div class="h-8 rounded mb-1.5 shadow" style="background-color: #FF4A54;"></div>
              <span class="text-[11px] font-bold text-white block">Framboise</span>
              <span class="text-[10px] font-mono text-rose-400">#FF4A54</span>
            </div>
            <div class="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div class="h-8 rounded mb-1.5 shadow border border-slate-600" style="background-color: #F7F9FE;"></div>
              <span class="text-[11px] font-bold text-white block">Respiration</span>
              <span class="text-[10px] font-mono text-slate-300">#F7F9FE</span>
            </div>
          </div>
        </div>

        <!-- Cartouche académique obligatoire -->
        <div class="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-slate-500">
            <span class="text-[#1464FF] font-bold uppercase">Illustration 2 / 5</span>
            <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">Artefact symbolique selon Schein</span>
          </div>
          <div class="font-bold text-slate-900 text-sm">Le Logo Xelians & Symbole Infini</div>
          <div><strong>Source & Date :</strong> Charte de Style Xelians 2019</div>
          <div><strong>Lien avec le cours :</strong> Artefact symbolique et transmission des valeurs (Niveau 2).</div>
          <p class="text-slate-600 leading-relaxed pt-1 text-justify">
            <em>Légende officielle & décryptage :</em> Le ruban d'infinité unifie les métiers physiques et digitaux du groupe, figurant le cycle continu du document : production, classement, numérisation, valorisation sémantique et élimination sécurisée. La palette associe la sérénité protectrice du bleu nuit à l'énergie dynamique du bleu ciel et du rose framboise.
          </p>
        </div>
      </div>
    `;
  },

  /**
   * Illustration 3 : Le Mini 6.50 à Foils (Sponsoring RSE 2026)
   */
  renderIllustration3: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-md bg-white">
        <div class="bg-gradient-to-b from-[#0F0D2D] via-[#141B44] to-[#0A223D] p-4 text-center">
          <svg viewBox="0 0 800 400" class="w-full h-auto rounded select-none">
            <defs>
              <linearGradient id="seaGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0EBCFF" stop-opacity="0.8"/>
                <stop offset="50%" stop-color="#1464FF" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="#0F0D2D"/>
              </linearGradient>
              <linearGradient id="sailGrad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#FFFFFF"/>
                <stop offset="80%" stop-color="#E2E8F0"/>
                <stop offset="100%" stop-color="#0EBCFF"/>
              </linearGradient>
            </defs>

            <!-- Vagues stylisées -->
            <path d="M 0 330 Q 150 300, 300 330 T 600 320 T 800 335 L 800 400 L 0 400 Z" fill="url(#seaGrad2)"/>
            <path d="M 330 340 Q 220 360, 80 380" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="8,6" opacity="0.8"/>

            <!-- FOIL CARBONE -->
            <path d="M 390 270 L 410 340 L 450 330 L 400 355" fill="none" stroke="#FF4A54" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="410" cy="340" r="3" fill="#FFF"/>
            <text x="460" y="335" fill="#FF4A54" font-size="9" font-family="monospace" font-weight="bold">FOIL EN SUSTENTATION</text>

            <!-- COQUE MINI 6.50 -->
            <path d="M 270 260 Q 380 270, 510 240 L 530 250 Q 380 290, 260 270 Z" fill="#0F0D2D" stroke="#0EBCFF" stroke-width="2"/>
            <text x="360" y="267" fill="#FFFFFF" font-family="'Mulish', sans-serif" font-size="13" font-weight="900" letter-spacing="1.2">XELIANS</text>
            <circle cx="345" cy="264" r="3.5" fill="#FF4A54"/>

            <!-- GRÉEMENT -->
            <line x1="390" y1="255" x2="380" y2="35" stroke="#CBD5E1" stroke-width="3"/>
            <line x1="380" y1="35" x2="270" y2="260" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="380" y1="35" x2="490" y2="245" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2,2"/>

            <!-- VOILES -->
            <path d="M 380 35 L 390 245 L 290 235 L 340 40 Z" fill="url(#sailGrad2)" stroke="#1464FF" stroke-width="1.5" opacity="0.95"/>
            <text x="355" y="155" text-anchor="middle" fill="#0F0D2D" font-size="10" font-weight="bold">FRA 1081</text>
            <text x="355" y="170" text-anchor="middle" fill="#1464FF" font-size="8" font-weight="bold">XELIANS FOILS</text>

            <path d="M 380 40 L 530 230 Q 460 200, 390 245 Z" fill="#FF4A54" opacity="0.85" stroke="#FF4A54" stroke-width="1"/>
            <text x="440" y="150" fill="#FFFFFF" font-size="9" font-weight="bold" transform="rotate(35 440 150)">MORE THAN DATA</text>
          </svg>
        </div>

        <!-- Cartouche académique obligatoire -->
        <div class="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-slate-500">
            <span class="text-[#1464FF] font-bold uppercase">Illustration 3 / 5</span>
            <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">Valeurs affichées vs identité métier</span>
          </div>
          <div class="font-bold text-slate-900 text-sm">Le Voilier de Course Mini 6.50 à Foils</div>
          <div><strong>Source & Date :</strong> Sponsoring RSE 2026 (Skippers Caroline Boule & Benoît Marie)</div>
          <div><strong>Lien avec le cours :</strong> Valeurs affichées vs identité métier (agilité contre pesanteur physique).</div>
          <p class="text-slate-600 leading-relaxed pt-1 text-justify">
            <em>Légende officielle & décryptage :</em> Le voilier volant à foils opère comme une prothèse symbolique d'agilité. Face à l'imaginaire d'inertie associé aux milliers de tonnes de papier archivé, ce bolide technologique volant au-dessus de l'océan projette une culture du dépassement de soi, de la haute technologie et de la vélocité decisionnelle.
          </p>
        </div>
      </div>
    `;
  },

  /**
   * Illustration 4 : Radar OCAI de Xelians (Cameron & Quinn)
   */
  renderIllustration4: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const canvasId = 'ocaiCanvas_' + containerId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const btnPrefix = 'ocaiBtn_' + containerId.replace(/[^a-zA-Z0-9_-]/g, '_');

    container.innerHTML = `
      <div class="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-md bg-white">
        <div class="bg-[#0F111E] p-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 border-b border-slate-800 pb-3">
            <div>
              <span class="font-mono text-xs uppercase text-purple-400 font-bold block">Cartographie OCAI — Competing Values Framework</span>
              <span class="text-[11px] text-slate-400">Évaluation culturelle selon Cameron & Quinn (1999)</span>
            </div>
            <!-- Bascule interactive de scénario -->
            <div class="flex items-center gap-1 bg-slate-900 p-1 rounded border border-slate-800 text-xs font-mono">
              <button id="${btnPrefix}-current" onclick="window.XELIANS_ILLUSTRATIONS.switchOcaiMode('${containerId}', 'current')" class="px-2.5 py-1 rounded bg-purple-600 text-white font-bold transition">Culture Réelle</button>
              <button id="${btnPrefix}-desired" onclick="window.XELIANS_ILLUSTRATIONS.switchOcaiMode('${containerId}', 'desired')" class="px-2.5 py-1 rounded text-slate-400 hover:text-white transition">Culture Affichée</button>
              <button id="${btnPrefix}-compare" onclick="window.XELIANS_ILLUSTRATIONS.switchOcaiMode('${containerId}', 'compare')" class="px-2.5 py-1 rounded text-slate-400 hover:text-white transition">Superposition</button>
            </div>
          </div>

          <!-- Radar Chart Canvas -->
          <div class="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center p-2">
            <canvas id="${canvasId}"></canvas>
          </div>
        </div>

        <!-- Cartouche académique obligatoire -->
        <div class="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-slate-500">
            <span class="text-purple-700 font-bold uppercase">Illustration 4 / 5</span>
            <span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-semibold">Profil Hiérarchie & Marché</span>
          </div>
          <div class="font-bold text-slate-900 text-sm">Radar OCAI de Xelians (Cameron & Quinn)</div>
          <div><strong>Source & Date :</strong> Modèle Cameron & Quinn / Analyse Académique 2026</div>
          <div><strong>Lien avec le cours :</strong> Diagnostic de culture organisationnelle (Competing Values Framework).</div>
          <p class="text-slate-600 leading-relaxed pt-1 text-justify">
            <em>Légende officielle & décryptage :</em> Avec 70 % cumulés sur l'axe du Contrôle et de la Stabilité (42% Hiérarchie + 28% Marché), Xelians privilégie la prévisibilité réglementaire et la tenue stricte des SLA en BPO. Le défi stratégique consiste à faire grandir le quadrant Adhocratie (12%) vers 25% via l'innovation IA sans disloquer la rigueur de confiance.
          </p>
        </div>
      </div>
    `;

    this.initOcaiChart(containerId, 'current');
  },

  initOcaiChart: function(containerId, mode) {
    const canvasId = 'ocaiCanvas_' + containerId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const canvas = document.getElementById(canvasId);
    if (!canvas || typeof Chart === 'undefined') return;

    if (this.ocaiInstances[containerId]) {
      this.ocaiInstances[containerId].destroy();
    }

    const labels = ['CLAN (Interne / Flexibilité)', 'ADHOCRATIE (Externe / Flexibilité)', 'MARCHÉ (Externe / Contrôle)', 'HIÉRARCHIE (Interne / Contrôle)'];
    let datasets = [];

    if (mode === 'current') {
      datasets = [{
        label: 'Culture Réelle (Diagnostic terrain)',
        data: [18, 12, 28, 42],
        backgroundColor: 'rgba(168, 85, 247, 0.35)',
        borderColor: '#A855F7',
        borderWidth: 3,
        pointBackgroundColor: '#C084FC',
        pointBorderColor: '#FFF',
        pointRadius: 5
      }];
    } else if (mode === 'desired') {
      datasets = [{
        label: 'Culture Affichée (Discours managérial)',
        data: [30, 30, 25, 15],
        backgroundColor: 'rgba(14, 188, 255, 0.35)',
        borderColor: '#0EBCFF',
        borderWidth: 3,
        pointBackgroundColor: '#38BDF8',
        pointBorderColor: '#FFF',
        pointRadius: 5
      }];
    } else {
      datasets = [
        {
          label: 'Culture Réelle (Hiérarchie dominante)',
          data: [18, 12, 28, 42],
          backgroundColor: 'rgba(168, 85, 247, 0.25)',
          borderColor: '#A855F7',
          borderWidth: 2.5,
          pointBackgroundColor: '#C084FC',
          pointRadius: 4
        },
        {
          label: 'Culture Cible (X-Arch Lab & Ambidextrie)',
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
              font: { family: "'Mulish', sans-serif", size: 11, weight: 'bold' }
            }
          }
        },
        scales: {
          r: {
            angleLines: { color: 'rgba(148, 163, 184, 0.2)' },
            grid: { color: 'rgba(148, 163, 184, 0.15)' },
            pointLabels: {
              color: '#38BDF8',
              font: { family: "'Mulish', sans-serif", size: 10, weight: 'bold' }
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
   * Illustration 5 : Frise Chronologique des Rapprochements (2004-2025/2026)
   */
  renderIllustration5: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-md bg-white">
        <div class="bg-[#0F111E] p-5">
          <div class="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
            <span class="font-mono text-xs uppercase text-amber-300 font-bold">Trajectoire M&A & Pivots Stratégiques (2004 — 2026)</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">Chrono-compétition</span>
          </div>

          <div class="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 via-blue-500 to-rose-500">
            
            <div class="relative">
              <span class="absolute -left-[23px] sm:-left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center"></span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800">
                <div class="flex justify-between items-center text-xs">
                  <strong class="text-sky-400">1977 — 1982 : Fondation physique</strong>
                  <span class="font-mono text-[10px] text-slate-400">Archiveco & Locarchives</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Établissement du tiers-archivage physique et acquisition des premiers agréments de l'État.</p>
              </div>
            </div>

            <div class="relative">
              <span class="absolute -left-[23px] sm:-left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-blue-400 flex items-center justify-center"></span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800">
                <div class="flex justify-between items-center text-xs">
                  <strong class="text-blue-400">2004 : Rachat de Scaneco</strong>
                  <span class="font-mono text-[10px] text-slate-400">BPO Industriel</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Création des chaînes de numérisation de masse pour absorber les flux de dématérialisation bancaire.</p>
              </div>
            </div>

            <div class="relative">
              <span class="absolute -left-[23px] sm:-left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-indigo-400 flex items-center justify-center"></span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800">
                <div class="flex justify-between items-center text-xs">
                  <strong class="text-indigo-400">2017 : Rachat de CD-Doc</strong>
                  <span class="font-mono text-[10px] text-slate-400">Dématérialisation Fiscale</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Facture électronique, automatisation comptable et coffres-forts numériques souverains.</p>
              </div>
            </div>

            <div class="relative">
              <span class="absolute -left-[23px] sm:-left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center"></span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800">
                <div class="flex justify-between items-center text-xs">
                  <strong class="text-emerald-400">2019 : Unification sous la marque XELIANS</strong>
                  <span class="font-mono text-[10px] text-slate-400">800 Salariés Réunis</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Nouvelle charte de style, logo à boucle infinie et baseline « More than data, business ».</p>
              </div>
            </div>

            <div class="relative">
              <span class="absolute -left-[23px] sm:-left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center"></span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800">
                <div class="flex justify-between items-center text-xs">
                  <strong class="text-amber-400">2023 : Rachat de DIS (Document Image Solutions)</strong>
                  <span class="font-mono text-[10px] text-slate-400">RAD / LAD & OCR</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Extraction automatisée de données sur les 60 millions de pages BPO annuelles.</p>
              </div>
            </div>

            <div class="relative">
              <span class="absolute -left-[23px] sm:-left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center"></span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800">
                <div class="flex justify-between items-center text-xs">
                  <strong class="text-cyan-400">2024 : Xelians Intégration Services (XIS)</strong>
                  <span class="font-mono text-[10px] text-slate-400">Secteur Public</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Pôle conseil et déploiement de solutions logicielles souveraines (Maarch Courrier et SAE).</p>
              </div>
            </div>

            <div class="relative">
              <span class="absolute -left-[23px] sm:-left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-violet-400 flex items-center justify-center"></span>
              <div class="p-3 bg-slate-900/90 rounded border border-slate-800">
                <div class="flex justify-between items-center text-xs">
                  <strong class="text-violet-400">2025 : Rachat de Sodoc</strong>
                  <span class="font-mono text-[10px] text-slate-400">Microsoft 365 / SharePoint</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Pont GED direct dans SharePoint et Teams, archivant les flux collaboratifs sans rupture d'ergonomie.</p>
              </div>
            </div>

            <div class="relative">
              <span class="absolute -left-[23px] sm:-left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-rose-500 flex items-center justify-center"></span>
              <div class="p-3 bg-slate-900/90 rounded border border-rose-500/80">
                <div class="flex justify-between items-center text-xs">
                  <strong class="text-rose-400">2026 : Déploiement d'IA Générative Souveraine</strong>
                  <span class="font-mono text-[10px] text-rose-300">20% CA en R&D</span>
                </div>
                <p class="text-xs text-slate-300 mt-1">Modèles de fondation souverains apportant 40% de gain sur le traitement des courriers entrants.</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Cartouche académique obligatoire -->
        <div class="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 space-y-1.5 font-sans">
          <div class="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-slate-500">
            <span class="text-amber-700 font-bold uppercase">Illustration 5 / 5</span>
            <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">Chrono-compétition et adaptation</span>
          </div>
          <div class="font-bold text-slate-900 text-sm">Frise Chronologique des Rapprochements (2004-2025)</div>
          <div><strong>Source & Date :</strong> Historique Xelians 2026</div>
          <div><strong>Lien avec le cours :</strong> Chrono-compétition (Stalk) et adaptation stratégique face à l'hypercompétition (D'Aveni).</div>
          <p class="text-slate-600 leading-relaxed pt-1 text-justify">
            <em>Légende officielle & décryptage :</em> Cette frise montre comment Xelians a transformé sa culture par acquisitions ciblées, injectant la vélocité technologique (BPO, LAD, intégration Microsoft 365, IA générative) dans une organisation dont le métier historique repose sur le temps long des archives patrimoniales.
          </p>
        </div>
      </div>
    `;
  }
};
