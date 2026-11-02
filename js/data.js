/**
 * DONNÉES ACADÉMIQUES DU PROJET DE RECHERCHE - CULTURE D'ENTREPRISE XELIANS
 * Architecture : 7 Cartons d'archives isométriques x 14 Fiches d'analyse approfondie
 * Direction : Habbo Hotel x Hangar d'Archivage Isométrique
 * Auteur : Étudiant-Alternant chez Xelians (Niveau Master 2 / Bac+5, Noté sur 20)
 */

window.XELIANS_DATA = {
  metadata: {
    title: "Xelians : Anatomie Sociologique d'une Forteresse Documentaire",
    subtitle: "Exploration isométrique 2.5D d'un hangar d'archives haute sécurité",
    author: "Étudiant-Alternant Xelians",
    academicYear: "2025 - 2026",
    evaluationFramework: "Master 2 - Stratégie & Sociologie des Organisations (Noté sur 20)",
    company: {
      name: "Xelians",
      headcount: "800 collaborateurs",
      turnover: "89 M€ de CA",
      physicalHoldings: "9 000 km linéaires d'archives",
      datacenters: "3 datacenters souverains en France",
      facilities: "29 sites de conservation (dont 26 agréés SIAF)",
      cac40Trust: "36 entreprises du CAC 40 sur 40",
      rdCommitment: "20 % du CA investi en R&D et solutions IT"
    }
  },

  cartons: [
    {
      id: "box-01",
      isoBox: {
        // Coordonnées isométriques sur habbo.png (1672 x 941 px)
        // Vous pouvez ajuster les sommets du contour [X, Y] ci-dessous :
        poly: [[538, 276], [620, 316], [620, 376], [538, 416], [456, 376], [456, 316]],
        center: [538, 356],
        zoomOrigin: { x: 32.2, y: 36.8 }
      },
      number: "01",
      cote: "BOX-01",
      title: "Ce qui se voit : Les Artefacts visibles",
      concept: "Niveau 1 de Schein : Artefacts visibles & Sanctuarisation physique",
      color: "#0EBCFF",
      tag: "Artefacts Schein",
      summary: "9 000 km d'archives, 29 forteresses physiques, 3 datacenters souverains et un rituel de traçabilité absolue.",
      fiches: [
        {
          id: "fiche-1a",
          code: "FICHE 1A",
          title: "Les Gigas-Hangars & La Sanctuarisation Architecturale",
          subtitle: "L'empreinte matérielle d'une forteresse documentaire",
          illustrationRef: "ill-01",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <div class="bg-blue-50/70 border-l-4 border-[#0EBCFF] p-4 rounded-r-lg text-sm mb-4">
                <span class="font-bold text-[#0F0D2D] block mb-1">Chiffres clés du périmètre d'alternance :</span>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs text-slate-700 mt-2">
                  <div>• <strong>800</strong> collaborateurs</div>
                  <div>• <strong>89 M€</strong> de CA consolidé</div>
                  <div>• <strong>9 000 km</strong> linéaires gérés</div>
                  <div>• <strong>29 sites</strong> de conservation</div>
                  <div>• <strong>26 sites</strong> agréés SIAF</div>
                  <div>• <strong>3 datacenters</strong> souverains</div>
                </div>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2">1. La matérialité de l'infrastructure selon Edgar Schein</h4>
              <p>
                Selon la typologie fondatrice d'<strong>Edgar Schein</strong> (1985), les <em>artefacts</em> constituent la première couche visible d'une organisation : les locaux, l'agencement spatial, le mobilier, les technologies et les règles vestimentaires ou d'accès. Chez Xelians, cette strate matérielle ne relève pas d'une scénographie tertiaire standard, mais d'une <strong>sanctuarisation quasi-monastique de la donnée physique et numérique</strong>.
              </p>
              <p>
                Les 29 sites de conservation répartis sur le territoire national fonctionnent comme de véritables coffres-forts industriels. Chaque hangar répond à un faisceau de contraintes normatives impératives :
              </p>
              <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li><strong>Régulation thermo-hygrométrique continue :</strong> Maintien permanent de la température entre 18°C et 20°C et d'un taux d'humidité relative de 50% ± 5% pour neutraliser l'hydrolyse acide du papier et prévenir l'apparition de micro-champignons, conformément à la norme <strong>NF Z40-350 (Marque NF 342)</strong>.</li>
                <li><strong>Extinction automatique par gaz inerte (Novec 1230 / Inergen) :</strong> L'eau étant fatale pour la pâte à papier et les serveurs, les hangars et salles d'archives utilisent des gaz neutres qui étouffent instantanément tout départ de feu en abaissant le taux d'oxygène sans choc thermique ni résidu liquide.</li>
                <li><strong>Sas de sécurité étanches et biométrie :</strong> Accès contrôlé par sas anti-intrusion avec pesée, badge P3 et reconnaissance biométrique. Aucune personne non habilitée ne peut pénétrer seule dans les travées.</li>
                <li><strong>Souveraineté numérique et certifications HDS / ISO 27001 :</strong> Les 3 datacenters du groupe, situés exclusivement en France, répliquent cette étanchéité physique dans l'univers digital, hébergeant des données médicales hautement sensibles et des archives probantes de ministères régaliens.</li>
              </ul>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">2. Analyse sociologique de la sanctuarisation</h4>
              <p>
                Cette architecture n'est pas qu'un outil de production logistique : elle <strong>discipline les corps et façonne la psychologie au travail</strong>. L'alternant ou le salarié franchissant les sas ne se sent pas dans un entrepôt ordinaire. Il manipule des conteneurs dont la perte ou la détérioration entraînerait la responsabilité pénale des mandataires de l'entreprise ou mettrait en péril le passif juridique d'un fleuron du CAC 40. L'espace physique impose ainsi une posture quotidienne d'humilité, de vigilance extrême et de respect sacré de la règle.
              </p>
            </div>
          `
        },
        {
          id: "fiche-1b",
          code: "FICHE 1B",
          title: "Le Langage Codifié & Les Rituels de Traçabilité",
          subtitle: "Jargon normatif et réduction de l'incertitude bureaucratique",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2">1. Un lexique technique inaccessible au profane</h4>
              <p>
                Le second artefact saillant chez Xelians réside dans l'omniprésence d'un métalangage juridique, technique et archivistique qui cadenasse chaque échange professionnel :
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span class="font-bold text-[#1464FF] text-sm block">DUA (Durée d'Utilité Administrative)</span>
                  <p class="text-xs text-slate-600 mt-1">Délai légal ou réglementaire imposant la conservation stricte d'un document avant son versement patrimonial ou son pilonnage certifié.</p>
                </div>
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span class="font-bold text-[#1464FF] text-sm block">Récolement d'inventaire</span>
                  <p class="text-xs text-slate-600 mt-1">Opération minutieuse de pointage contradictoire vérifiant boîte par boîte, cote par cote, la présence et l'intégrité de chaque unité d'archivage.</p>
                </div>
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span class="font-bold text-[#1464FF] text-sm block">Bordereau de versement</span>
                  <p class="text-xs text-slate-600 mt-1">Acte contractuel et juridique transférant la responsabilité de garde du client vers Xelians, doté d'une signature légale opposable.</p>
                </div>
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span class="font-bold text-[#1464FF] text-sm block">Valeur Probante & Copie Fidèle (NF 544)</span>
                  <p class="text-xs text-slate-600 mt-1">Norme NF Z42-026 conférant à la numérisation la même force probatoire devant un tribunal que l'original papier.</p>
                </div>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">2. Les rituels comme mécanismes de protection (Michel Crozier)</h4>
              <p>
                Chaque manipulation d'un carton donne lieu à un rituel millimétré : scan au terminal durci 2D, scellement plastique numéroté à usage unique, double émargement physique et électronique. Aucun conteneur ne change de travée sans générer un enregistrement non modifiable dans la piste d'audit (audit trail).
              </p>
              <p>
                Comme l'a théorisé <strong>Michel Crozier</strong> dans <em>Le Phénomène bureaucratique</em>, ces rituels et cette codification extrême remplissent une fonction essentielle : <strong>la réduction de l'incertitude</strong>. Face à l'aléa juridique permanent et au risque de pénalité contractuelle, le collaborateur se protège derrière le strict respect du rituel. La procédure écrite devient un bouclier qui immunise l'agent contre la faute personnelle en la diluant dans la régularité du processus.
              </p>
            </div>
          `
        }
      ]
    },

    {
      id: "box-02",
      isoBox: {
        poly: [[766, 194], [820, 222], [820, 268], [766, 296], [712, 268], [712, 222]],
        center: [766, 250],
        zoomOrigin: { x: 45.8, y: 26.1 }
      },
      number: "02",
      cote: "BOX-02",
      title: "Ce que l'entreprise dit d'elle-même : Les 4 Valeurs",
      concept: "Niveau 2 de Schein : Valeurs déclarées & Rhétorique managériale",
      color: "#1464FF",
      tag: "Valeurs Affichées",
      summary: "Les 4 valeurs officielles rédigées mot pour mot, la baseline « More than data, business » et le Mini 6.50 à foils.",
      fiches: [
        {
          id: "fiche-2a",
          code: "FICHE 2A",
          title: "Valeur 1 : « Sens du collectif »",
          subtitle: "La première valeur cardinale officielle de Xelians",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <div class="p-5 bg-blue-50 border-l-4 border-[#1464FF] rounded-r-lg shadow-sm">
                <span class="text-xs font-mono font-bold text-[#1464FF] uppercase tracking-wider block mb-2">Formulation officielle mot pour mot :</span>
                <blockquote class="italic text-base font-semibold text-[#0F0D2D]">
                  "Chez Xelians, la force de l’équipe fait la différence. Nos experts – archivistes, consultants, tech leads – unissent leurs compétences pour offrir des solutions performantes et adaptées aux enjeux de nos clients."
                </blockquote>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">Analyse sociologique de la valeur</h4>
              <p>
                Cette valeur puise sa légitimité dans l'interdépendance technique absolue des métiers de Xelians. La chaîne de valeur documentaire ne tolère aucune rupture : si l'opérateur de tri amont commet une erreur de dégrappage ou si le cariste intervertit deux boîtes en travée, le travail de l'ingénieur en reconnaissance sémantique (OCR/LAD) ou du consultant GED devient vain.
              </p>
              <p>
                Le « Sens du collectif » sert également de ciment d'intégration pour amortir les chocs culturels issus de l'histoire du groupe : faire cohabiter sous une même bannière les salariés historiques d'Archiveco et de Locarchives, les opérateurs d'ateliers de numérisation BPO et les développeurs logiciels issus des filiales rachetées (DIS, Sodoc).
              </p>
            </div>
          `
        },
        {
          id: "fiche-2b",
          code: "FICHE 2B",
          title: "Valeur 2 : « Autonomie »",
          subtitle: "La promesse managériale d'agilité et d'initiative",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <div class="p-5 bg-sky-50 border-l-4 border-[#0EBCFF] rounded-r-lg shadow-sm">
                <span class="text-xs font-mono font-bold text-[#0EBCFF] uppercase tracking-wider block mb-2">Formulation officielle mot pour mot :</span>
                <blockquote class="italic text-base font-semibold text-[#0F0D2D]">
                  "Encourager l’initiative et la responsabilité : nos équipes sont agiles et expertes, capables d’innover et d’adapter nos solutions aux défis documentaires de chaque client."
                </blockquote>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">Analyse sociologique de la valeur</h4>
              <p>
                Dans la communication institutionnelle, l'« Autonomie » est présentée comme le vecteur d'émancipation professionnelle nécessaire à la transformation digitale. Elle valorise la capacité des chefs de projet et des consultants à s'adapter aux configurations informatiques hétérogènes des clients.
              </p>
              <p>
                Cependant, comme nous le verrons dans le Carton 03, cette valeur affichée entre en collision directe avec le présupposé fondamental de conformité réglementaire : dans un métier certifié NF et HDS, l'autonomie ne peut jamais être une liberté anarchique d'improvisation, mais une <em>responsabilité d'application rigoureuse du cadre</em>.
              </p>
            </div>
          `
        },
        {
          id: "fiche-2c",
          code: "FICHE 2C",
          title: "Valeur 3 : « Efficacité »",
          subtitle: "Le culte de la tenue des engagements et des SLA",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <div class="p-5 bg-indigo-50 border-l-4 border-[#241F63] rounded-r-lg shadow-sm">
                <span class="text-xs font-mono font-bold text-[#241F63] uppercase tracking-wider block mb-2">Formulation officielle mot pour mot :</span>
                <blockquote class="italic text-base font-semibold text-[#0F0D2D]">
                  "Notre efficacité repose sur la réactivité et le pragmatisme de nos équipes, pour offrir à chaque client une réponse rapide et adaptée à ses besoins."
                </blockquote>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">Analyse sociologique de la valeur</h4>
              <p>
                L'« Efficacité » incarne le pont entre le conservateur d'archives et le prestataire de services BPO. Dans une activité où les pénalités contractuelles de retard se chiffrent en milliers d'euros dès qu'un pli bancaire ou un dossier d'assurance n'est pas restitué sous H+4, l'efficacité est directement indexée sur la productivité horaire, la suppression des temps morts et la fluidité des flux de travail.
              </p>
            </div>
          `
        },
        {
          id: "fiche-2d",
          code: "FICHE 2D",
          title: "Valeur 4 : « Transparence »",
          subtitle: "L'éthique de la traçabilité et de la relation de confiance",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <div class="p-5 bg-rose-50 border-l-4 border-[#FF4A54] rounded-r-lg shadow-sm">
                <span class="text-xs font-mono font-bold text-[#FF4A54] uppercase tracking-wider block mb-2">Formulation officielle mot pour mot :</span>
                <blockquote class="italic text-base font-semibold text-[#0F0D2D]">
                  "Nous construisons des relations de confiance grâce à une communication claire, des engagements tenus et une approche éthique, garantissant la conformité et la pérennité des données."
                </blockquote>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">Analyse sociologique de la valeur</h4>
              <p>
                La transparence chez Xelians est inséparable de la notion d'<strong>auditabilité permanente</strong>. Elle engage l'entreprise à fournir à ses clients et aux régulateurs de l'État (SIAF, ANS, CNIL) la preuve mathématique et juridique que leurs fonds documentaires n'ont subi aucune altération, aucune fuite et aucun transfert illicite hors de l'Union européenne.
              </p>
            </div>
          `
        },
        {
          id: "fiche-2e",
          code: "FICHE 2E",
          title: "Symboles, Baseline & Sponsoring Nautique",
          subtitle: "Le Mini 6.50 à foils et la devise « More than data, business »",
          illustrationRef: "ill-02",
          illustrationRefSecondary: "ill-03",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2">1. La signature institutionnelle : « More than data, business »</h4>
              <p>
                La baseline officielle de Xelians – <em>« More than data, business »</em> (déclinée en français sous la formule <em>« Plus que des données, votre avenir »</em>) – marque un tournant stratégique majeur. Il ne s'agit plus de valoriser des malles d'archives passives stockées sur des étagères poussiéreuses, mais d'affirmer que <strong>la gouvernance documentaire est le carburant de la prise de décision stratégique des entreprises</strong>.
              </p>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">2. Analyse sémiotique du voilier Mini 6.50 à foils</h4>
              <p>
                L'un des choix de communication les plus spectaculaires de Xelians est le sponsoring de course au large du <strong>Mini 6.50 à foils</strong> barré par <strong>Caroline Boule</strong> et <strong>Benoît Marie</strong>.
              </p>
              <p>
                Sociologiquement, ce sponsoring agit comme une <strong>prothèse symbolique d'agilité et de haute vélocité</strong> :
              </p>
              <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
                <li>Le métier historique d'archivage physique évoque l'inertie, la pesanteur de milliers de tonnes de papier et le temps long des siècles.</li>
                <li>Le Mini 6.50 à foils incarne au contraire la sustentation au-dessus de l'eau, la fibre de carbone, les calculs hydrodynamiques de pointe et la vitesse pure (plus de 25 nœuds).</li>
                <li>Cette métaphore permet au groupe de séduire les jeunes talents de la tech et de projeter une image d'audace, de résilience face aux tempêtes et d'innovation technologique de rupture.</li>
              </ul>
            </div>
          `
        }
      ]
    },

    {
      id: "box-03",
      isoBox: {
        poly: [[806, 384], [890, 426], [890, 484], [806, 526], [724, 484], [724, 426]],
        center: [806, 466],
        zoomOrigin: { x: 48.2, y: 48.4 }
      },
      number: "03",
      cote: "BOX-03",
      title: "Ce qui se vit réellement : Présupposé & Dissonance",
      concept: "Niveau 3 de Schein : Présupposés fondamentaux inconscients & Écart du réel",
      color: "#FF4A54",
      tag: "Dissonance & Réel",
      summary: "L'axiome du zéro défaut existentiel et la confrontation critique avec la promesse d'autonomie.",
      fiches: [
        {
          id: "fiche-3a",
          code: "FICHE 3A",
          title: "L'Hypothèse du Présupposé Fondamental (Schein)",
          subtitle: "L'injonction d'intégrité absolue et la peur de la faute éliminatoire",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <p>
                Au niveau 3 du modèle d'<strong>Edgar Schein</strong> se situent les <em>présupposés fondamentaux inconscients</em> : les croyances invisibles, tenues pour acquises et non négociables, qui dictent secrètement les comportements quotidiens des acteurs.
              </p>

              <div class="p-5 bg-red-50 border-2 border-[#FF4A54] rounded-lg my-3 shadow-md">
                <span class="text-xs font-mono font-bold text-[#FF4A54] uppercase tracking-wider block mb-2">Thèse sociologique centrale de notre recherche :</span>
                <blockquote class="italic text-base font-bold text-[#0F0D2D] font-serif leading-relaxed">
                  "L'intégrité de la donnée est absolue ; une erreur, une fuite ou un document égaré constitue une faute éliminatoire. La norme et la conformité juridique priment toujours sur l'initiative personnelle."
                </blockquote>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">Origine et intériorisation du présupposé</h4>
              <p>
                Ce postulat s'explique par la nature des clients de Xelians : banques d'investissement, laboratoires pharmaceutiques, ministères des Armées et de la Justice, directions juridiques du CAC 40. Dans ces secteurs, un contrat de prêt égaré entraîne la nullité de la créance ; un dossier de lot clinique manquant bloque l'autorisation de mise sur le marché d'un médicament ; une pièce d'identité divulguée expose à des sanctions pénales immédiates de la CNIL.
              </p>
              <p>
                En conséquence, chaque salarié a profondément intériorisé que l'erreur n'est pas un incident de parcours formateur, mais une <strong>menace existentielle pour l'organisation</strong>.
              </p>
            </div>
          `
        },
        {
          id: "fiche-3b",
          code: "FICHE 3B",
          title: "L'Écart Critique avec la Valeur « Autonomie »",
          subtitle: "Confrontation entre le discours corporate et le vécu de terrain",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2">Une liberté sous surveillance procédurale étroite</h4>
              <p>
                L'observation participante menée durant notre alternance fait éclater une <strong>dissonance organisationnelle majeure</strong> entre l'affichage corporate et l'expérience vécue en atelier de numérisation ou en dépôt :
              </p>
              
              <div class="space-y-3 my-4">
                <div class="p-3 bg-slate-50 border-l-4 border-slate-400 rounded">
                  <strong class="text-[#0F0D2D] text-sm block">1. L'Autonomie proclamée vs La Cage d'Acier Normative :</strong>
                  <p class="text-xs text-slate-600 mt-1">
                    Les discours de la direction valorisent l'esprit d'initiative, l'agilité et l'autonomie des collaborateurs. Pourtant, sur le terrain, chaque geste opérationnel (du dégrappage au scellement RFID) est enserré dans des gammes opératoires strictes d'audits NF et ISO. L'autonomie réelle est une « liberté d'exécution dans un couloir hautement balisé ».
                  </p>
                </div>
                <div class="p-3 bg-slate-50 border-l-4 border-slate-400 rounded">
                  <strong class="text-[#0F0D2D] text-sm block">2. Le syndrome de la décharge hiérarchique pyramidale :</strong>
                  <p class="text-xs text-slate-600 mt-1">
                    Puisque l'erreur constitue une faute éliminatoire, aucun collaborateur ne prend le risque de déroger seul à la consigne. Tout incident déclenche une remontée vers les échelons supérieurs pour obtenir un visa ou une double signature de décharge. L'organisation cultive ainsi malgré elle une culture de prudence extrême et de rétention d'initiative.
                  </p>
                </div>
                <div class="p-3 bg-slate-50 border-l-4 border-slate-400 rounded">
                  <strong class="text-[#0F0D2D] text-sm block">3. La rente d'entreposage face à l'injonction d'agilité SaaS :</strong>
                  <p class="text-xs text-slate-600 mt-1">
                    Alors que le top management exhorte à accélérer vers le modèle SaaS récurrent, la trésorerie la plus stable de Xelians reste assise sur la rente des loyers d'archives physiques garantis par des DUA de 10 à 30 ans. Cette dualité économique entretient un fossé culturel entre les « archivistes du papier » et les « développeurs du cloud ».
                  </p>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    {
      id: "box-04",
      isoBox: {
        poly: [[843, 508], [900, 537], [900, 584], [843, 613], [787, 584], [787, 537]],
        center: [843, 565],
        zoomOrigin: { x: 50.4, y: 59.5 }
      },
      number: "04",
      cote: "BOX-04",
      title: "Diagnostic sur la Grille OCAI (Cameron & Quinn)",
      concept: "Competing Values Framework : Typologie culturelle Hiérarchie & Marché",
      color: "#8B5CF6",
      tag: "Modèle OCAI",
      summary: "Modélisation en radar : dominance Hiérarchique (42%) et Marché (28%), cas concrets de pilonnage et numérisation.",
      fiches: [
        {
          id: "fiche-4a",
          code: "FICHE 4A",
          title: "Profil Culturel Dominant : Hiérarchie & Marché",
          subtitle: "Cartographie quantitative sur le Competing Values Framework",
          illustrationRef: "ill-04",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <p>
                L'évaluation par la grille <strong>OCAI (Organizational Culture Assessment Instrument)</strong> de <strong>Cameron & Quinn</strong> (1999) modélise la culture selon deux axes : <em>Flexibilité vs Stabilité</em> et <em>Orientation Interne vs Orientation Externe</em>.
              </p>

              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3 text-center font-mono">
                <div class="p-3 bg-purple-50 border border-purple-300 rounded">
                  <span class="text-xl font-black text-purple-700 block">42 %</span>
                  <span class="text-xs font-bold text-slate-700 uppercase">Hiérarchie</span>
                  <span class="text-[10px] text-slate-500 block">Règles & Stabilité</span>
                </div>
                <div class="p-3 bg-blue-50 border border-blue-300 rounded">
                  <span class="text-xl font-black text-blue-700 block">28 %</span>
                  <span class="text-xs font-bold text-slate-700 uppercase">Marché</span>
                  <span class="text-[10px] text-slate-500 block">SLA & Compétitivité</span>
                </div>
                <div class="p-3 bg-emerald-50 border border-emerald-300 rounded">
                  <span class="text-xl font-black text-emerald-700 block">18 %</span>
                  <span class="text-xs font-bold text-slate-700 uppercase">Clan</span>
                  <span class="text-[10px] text-slate-500 block">Mémoire historique</span>
                </div>
                <div class="p-3 bg-rose-50 border border-rose-300 rounded">
                  <span class="text-xl font-black text-rose-700 block">12 %</span>
                  <span class="text-xs font-bold text-slate-700 uppercase">Adhocratie</span>
                  <span class="text-[10px] text-slate-500 block">Innovation & R&D</span>
                </div>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">Interprétation stratégique</h4>
              <p>
                Xelians présente un <strong>profil combiné Hiérarchie-Marché cumulant 70 % sur l'axe du Contrôle et de la Stabilité</strong>.
              </p>
              <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
                <li><strong>La Hiérarchie (42%)</strong> traduit la suprématie des certifications (NF 342, NF 461, HDS, ISO 27001) et la bureaucratisation protectrice.</li>
                <li><strong>Le Marché (28%)</strong> reflète l'impératif commercial des SLA en BPO documentaire, la productivité horaire et la rentabilité exigée par l'actionnariat.</li>
                <li><strong>Le Clan (18%)</strong> subsiste dans la mémoire affective des équipes pionnières d'Archiveco et Locarchives.</li>
                <li><strong>L'Adhocratie (12%)</strong> reste le quadrant le plus faible, l'expérimentation disruptive étant bridée par la peur du risque de non-conformité.</li>
              </ul>
            </div>
          `
        },
        {
          id: "fiche-4b",
          code: "FICHE 4B",
          title: "Cas Pratique : Destruction Certifiée & Numérisation Fidèle",
          subtitle: "L'expression empirique du profil de contrôle absolu",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2">1. La procédure de destruction certifiée (Pilonnage)</h4>
              <p>
                La procédure de destruction d'archives physiques chez Xelians illustre à la perfection la dominance du quadrant Hiérarchique :
              </p>
              <ol class="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                <li><strong>Avis d'échéance de DUA :</strong> Déclenchement automatique par le progiciel de gestion d'entrepôt après expiration du délai légal.</li>
                <li><strong>Bordereau contradictoire et vérification de Legal Hold :</strong> Vérification qu'aucun blocage judiciaire ou enquête fiscale ne gèle les conteneurs. Double signature autorisée du client mandataire.</li>
                <li><strong>Extraction robotisée sous témoin :</strong> Scan RFID du carton, scellé inviolable de transport.</li>
                <li><strong>Broyage DIN 66399 (Classe P4/P5) :</strong> Lacération mécanique en micro-particules irréversibles en présence d'un contrôleur assermenté.</li>
                <li><strong>Certificat de destruction infalsifiable :</strong> Horodatage cryptographique eIDAS, inscription dans le registre légal et réinjection de 100% de la matière dans la filière papetière française.</li>
              </ol>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">2. Le flux de numérisation fidèle NF 544</h4>
              <p>
                Sur le front numérique, les scanners industriels sont calibrés chaque matin à l'aide de mires colorimétriques. Dès l'acquisition, une <strong>empreinte SHA-256</strong> est scellée par jeton d'horodatage RFC 3161 et versée dans un Système d'Archivage Électronique (SAE) certifié NF Z42-013, garantissant l'inviolabilité juridique sans aucune intervention humaine discrétionnaire.
              </p>
            </div>
          `
        }
      ]
    },

    {
      id: "box-05",
      isoBox: {
        poly: [[1076, 276], [1138, 307], [1138, 356], [1076, 386], [1014, 356], [1014, 307]],
        center: [1076, 336],
        zoomOrigin: { x: 64.4, y: 35.2 }
      },
      number: "05",
      cote: "BOX-05",
      title: "Rapport à la Compétition : Chrono & Hypercompétition",
      concept: "Théories de George Stalk & Richard D'Aveni : Pivots et absorptions M&A",
      color: "#F59E0B",
      tag: "Compétition & M&A",
      summary: "60 millions de documents/an en flux tendu, stratégie M&A (DIS 2023, Sodoc 2025) et IA souveraine 2026.",
      fiches: [
        {
          id: "fiche-5a",
          code: "FICHE 5A",
          title: "Chrono-Compétition : La Guerre des Délais (BPO)",
          subtitle: "Le temps comme variable stratégique d'arbitrage (George Stalk)",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <p>
                Selon la théorie de la <strong>Time-Based Competition</strong> de <strong>George Stalk</strong> (1988), la vitesse de réponse et la réduction des cycles de traitement constituent le facteur discriminant dans les marchés saturés.
              </p>
              <p>
                Chez Xelians, cette chrono-compétition s'exprime dans ses centres de <strong>BPO (Business Process Outsourcing) documentaire</strong> :
              </p>
              <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li><strong>Un volume industriel massif :</strong> Plus de <strong>60 millions de documents numérisés, océrisés et indexés chaque année</strong> pour des banques, mutuelles et administrations.</li>
                <li><strong>La tyrannie des SLA en temps réel :</strong> Des fenêtres d'engagement de service ultra-courtes (traitement sous <strong>H+4 à H+24</strong>) pour les courriers de sinistres, factures fournisseurs ou dossiers de crédit immobilier. Tout retard génère des indemnités contractuelles immédiates.</li>
                <li><strong>L'obsolescence de la numérisation différée :</strong> Face aux fintechs et aux acteurs SaaS qui capturent la donnée à la source via smartphone, Xelians a dû industrialiser ses cadences pour offrir une restitution quasi-synchrone.</li>
              </ul>
            </div>
          `
        },
        {
          id: "fiche-5b",
          code: "FICHE 5B",
          title: "Hypercompétition & M&A Datées (DIS, XIS, Sodoc, IA)",
          subtitle: "Acquisitions ciblées et bascule vers l'IA souveraine face aux géants",
          illustrationRef: "ill-05",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <p>
                Selon <strong>Richard D'Aveni</strong> (1994), l'<em>hypercompétition</em> se caractérise par des ruptures permanentes et l'effondrement des barrières traditionnelles. Xelians doit résister au rouleau compresseur mondial de l'archivage physique (<em>Iron Mountain</em>, 5 Md$ de CA) et aux hyperscalers cloud américains (AWS, Azure, Google Cloud).
              </p>
              <p>
                Pour échapper à la commoditisation, Xelians a opéré une mutation stratégique par acquisitions successives :
              </p>

              <div class="space-y-3 my-3">
                <div class="p-3 bg-amber-50/70 border-l-4 border-amber-500 rounded">
                  <strong class="text-[#0F0D2D] text-sm block">2023 : Acquisition de DIS (Document Image Solutions)</strong>
                  <p class="text-xs text-slate-600 mt-1">Rachat d'une brique clé d'extraction automatique de data (RAD/LAD) pour booster l'automatisation sémantique des flux de numérisation BPO.</p>
                </div>
                <div class="p-3 bg-blue-50/70 border-l-4 border-blue-500 rounded">
                  <strong class="text-[#0F0D2D] text-sm block">2024 : Lancement de Xelians Intégration Services (XIS)</strong>
                  <p class="text-xs text-slate-600 mt-1">Division d'intégration de solutions logicielles souveraines (notamment Maarch Courrier et SAE) pour les ministères et les grandes collectivités territoriales.</p>
                </div>
                <div class="p-3 bg-indigo-50/70 border-l-4 border-indigo-500 rounded">
                  <strong class="text-[#0F0D2D] text-sm block">2025 : Rachat de Sodoc</strong>
                  <p class="text-xs text-slate-600 mt-1">Intégration native de la GED souveraine dans l'écosystème <em>Microsoft 365 / SharePoint / Teams</em>. Ce pont permet aux clients d'archiver légalement sans changer d'environnement bureautique.</p>
                </div>
                <div class="p-3 bg-purple-50/70 border-l-4 border-purple-500 rounded">
                  <strong class="text-[#0F0D2D] text-sm block">2026 : Déploiement d'IA Générative Souveraine</strong>
                  <p class="text-xs text-slate-600 mt-1">Intégration de modèles de fondation hébergés en datacenters souverains, finançant un <strong>gain estimé de 40 % sur le traitement des courriers entrants</strong> grâce aux <strong>20 % du CA consacrés à la R&D/IT</strong>.</p>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    {
      id: "box-06",
      isoBox: {
        poly: [[886, 746], [952, 779], [952, 840], [886, 874], [820, 840], [820, 779]],
        center: [886, 812],
        zoomOrigin: { x: 53.0, y: 86.1 }
      },
      number: "06",
      cote: "BOX-06",
      title: "L'Intrapreneuriat : Diagnostic & X-Arch Lab",
      concept: "Zones d'incertitude (Crozier) & Dispositif de rupture managériale",
      color: "#10B981",
      tag: "Innovation & RH",
      summary: "Diagnostic des freins normatifs et création du challenge semestriel « X-Arch Innovation Lab ».",
      fiches: [
        {
          id: "fiche-6a",
          code: "FICHE 6A",
          title: "L'Intrapreneuriat : Diagnostic de l'Existant",
          subtitle: "Pourquoi la conformité étouffe la prise de risque spontanée",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2">Les freins structurels à l'innovation ascendante</h4>
              <p>
                L'intrapreneuriat – la capacité d'un salarié à porter un projet novateur au sein de l'entreprise – est aujourd'hui <strong>quasiment inexistant de manière spontanée chez Xelians</strong>. Cette atrophie s'explique par trois facteurs sociologiques identifiés sur le terrain :
              </p>
              <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li><strong>La tyrannie de l'audit permanent :</strong> Les audits annuels ISO, HDS et NF consignent tout écart à la procédure comme une anomalie critique. L'audace ou l'expérimentation spontanée y est mécaniquement perçue comme un facteur de risque inacceptable.</li>
                <li><strong>Le cloisonnement des univers métier (Michel Crozier) :</strong> L'archiviste d'entrepôt, l'opérateur de scanner, le consultant d'affaires et le développeur cloud travaillent dans des silos étanches et ne disposent d'aucun canal informel pour faire émerger des synergies.</li>
                <li><strong>L'absence de droit à l'erreur :</strong> Le système de rétribution et d'évaluation valorise le zéro défaut et la tenue des délais contractuels, mais ne récompense pas l'exploration risquée d'idées nouvelles.</li>
              </ul>
            </div>
          `
        },
        {
          id: "fiche-6b",
          code: "FICHE 6B",
          title: "Dispositif Proposé : « X-Arch Innovation Lab »",
          subtitle: "Challenge semestriel, 10% de temps banalisé et prototypage souverain",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2">Architecture du dispositif préconisé</h4>
              <p>
                Pour stimuler l'intrapreneuriat sans ébranler la chaîne de confiance et de sécurité, nous proposons la mise en place officielle du <strong>« X-Arch Innovation Lab »</strong> :
              </p>

              <div class="p-4 bg-emerald-50 border border-emerald-300 rounded-lg space-y-2 text-sm text-slate-700 my-3">
                <div class="flex items-start gap-2">
                  <span class="px-2 py-0.5 rounded bg-emerald-700 text-white font-mono text-xs font-bold">1</span>
                  <p><strong>Challenge semestriel universel :</strong> Concours d'idéation ouvert à tous les collaborateurs (opérateurs de numérisation, archivistes de dépôt, chefs de projet IT, consultants) pour résoudre un irritant métier ou imaginer un nouveau service.</p>
                </div>
                <div class="flex items-start gap-2">
                  <span class="px-2 py-0.5 rounded bg-emerald-700 text-white font-mono text-xs font-bold">2</span>
                  <p><strong>10 % de temps banalisé pendant un trimestre :</strong> Les équipes lauréates sont officiellement déchargées d'une demi-journée par semaine sur leur temps de travail pour prototyper leur solution.</p>
                </div>
                <div class="flex items-start gap-2">
                  <span class="px-2 py-0.5 rounded bg-emerald-700 text-white font-mono text-xs font-bold">3</span>
                  <p><strong>Budget d'amorçage et parrainage exécutif :</strong> Dotation de 15 000 € à 25 000 € par projet et tutorat direct par un membre du Comité Exécutif et un Lead Développeur IA de la R&D.</p>
                </div>
              </div>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">Deux projets pilotes concrets pour le X-Arch Lab</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
                <div class="p-3 bg-white border border-slate-200 rounded shadow-sm">
                  <strong class="text-emerald-700 text-sm block">Projet 1 : IA Paléographique Souveraine</strong>
                  <p class="text-xs text-slate-600 mt-1">Modèle de vision offline développé en binôme archiviste/data engineer pour transcrire automatiquement des registres cadastraux ou actes d'état civil anciens manuscrits sans rupture de souveraineté.</p>
                </div>
                <div class="p-3 bg-white border border-slate-200 rounded shadow-sm">
                  <strong class="text-emerald-700 text-sm block">Projet 2 : Réemploi 100% Déchets Cellulose</strong>
                  <p class="text-xs text-slate-600 mt-1">Valorisation intégrale de la pulpe de papier broyée lors des destructions certifiées pour fabriquer les propres cartons de conservation d'archives de Xelians en circuit court éco-responsable.</p>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    {
      id: "box-07",
      isoBox: {
        poly: [[1160, 706], [1228, 740], [1228, 794], [1160, 828], [1092, 794], [1092, 740]],
        center: [1160, 772],
        zoomOrigin: { x: 69.4, y: 81.5 }
      },
      number: "07",
      cote: "BOX-07",
      title: "Bilan Critique & Perspectives Stratégiques",
      concept: "Piège de la compétence (Levitt & March) & Organisation Ambidextre",
      color: "#0EBCFF",
      tag: "Synthèse & Avenir",
      summary: "36 entreprises du CAC 40 sur 40, risque de sclérose face au cloud et recommandation d'ambidextrie.",
      fiches: [
        {
          id: "fiche-7a",
          code: "FICHE 7A",
          title: "Bilan Critique : Atout Souverain ou Fragilité Bureaucratique ?",
          subtitle: "La théorie de l'organisation ambidextre (O'Reilly & Tushman)",
          content: `
            <div class="space-y-4 text-slate-800 leading-relaxed text-justify">
              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2">1. L'Atout Décisif : La Forteresse de Confiance Souveraine</h4>
              <p>
                La culture du contrôle et de la conformité de Xelians constitue un rempart concurrentiel inestimable. À l'heure du <em>Cloud Act</em> américain, des risques d'extraterritorialité juridique et des cyberattaques de masse, les <strong>36 entreprises du CAC 40 sur 40</strong> qui confient leurs archives à Xelians ne cherchent pas l'effet de mode, mais la <strong>certitude juridique absolue</strong>. Ses 26 sites agréés SIAF et ses 3 datacenters en France représentent une barrière à l'entrée impossible à répliquer rapidement pour un nouvel entrant.
              </p>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">2. La Fragilité : Le « Piège de la Compétence » (Levitt & March)</h4>
              <p>
                Enfermée dans l'excellence de son métier historique d'archivage physique, Xelians encourt le risque du <em>piège de la compétence</em> (competency trap) théorisé par Barbara Levitt et James March. Si l'organisation applique aux développements logiciels agiles et aux modèles d'IA générative la même lenteur décisionnelle et les mêmes cascades de visas que pour l'entreposage d'un carton pendant 30 ans, elle sera inévitablement distancée par la vélocité des scale-ups SaaS européennes et américaines qui déploient en production plusieurs fois par semaine.
              </p>

              <h4 class="font-bold text-lg text-[#0F0D2D] border-b pb-2 pt-2">3. Recommandation prospective : L'Organisation Ambidextre</h4>
              <p>
                Pour conjuguer rigueur patrimoniale et vélocité technologique, nous préconisons la mise en œuvre d'une <strong>structure organisationnelle ambidextre</strong> (Charles O'Reilly & Michael Tushman, 1996) :
              </p>
              <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li><strong>Le pôle d'Exploitation (La Forteresse) :</strong> Maintien intransigeant de la culture hiérarchique, des normes NF Z40-350 et des audits stricts sur les 29 dépôts et 3 datacenters, assurant la rentabilité récurrente et la confiance des clients régaliens.</li>
                <li><strong>Le pôle d'Exploration (Le Hub Logiciel & IA) :</strong> Octroi d'une réelle autonomie managériale et spatiale aux filiales logicielles (Xelians Intégration Services, R&D IA) avec gouvernance agile, sprints courts et tolérance mesurée à l'erreur pour rivaliser avec la chrono-compétition internationale.</li>
              </ul>
            </div>
          `
        }
      ]
    }
  ],

  illustrations: [
    {
      id: "ill-01",
      number: 1,
      title: "Plan architectural & vue en coupe d'un site de stockage haute sécurité certifié NF Z40-350 / ISO 27001",
      source: "Doc Institutionnel Xelians 2026",
      courseConcept: "Artefacts physiques selon Schein",
      legend: "Source : Doc Institutionnel Xelians 2026 — Notion de cours : Artefacts physiques selon Schein",
      description: "Coupe technique d'un site de conservation haute sécurité Xelians : sas biométrique, régulation 50% HR / 18°C, système d'extinction par gaz inerte (Inergen/Novec), rayonnages mobiles automatisés (9 000 km) et datacenters souverains HDS."
    },
    {
      id: "ill-02",
      number: 2,
      title: "Le Logo Xelians & Symbole Infini (Charte de Style 2019)",
      source: "Charte de Style 2019",
      courseConcept: "Artefact symbolique",
      legend: "Source : Charte de Style 2019 — Notion de cours : Artefact symbolique",
      description: "Dégradé officiel (Bleu ciel #0EBCFF vers Bleu roi #1464FF et Accent framboise #FF4A54) et analyse sémiologique de la boucle infinie symbolisant le cycle de vie perpétuel du document."
    },
    {
      id: "ill-03",
      number: 3,
      title: "Le Mini 6.50 à Foils sponsorisé par Xelians (Caroline Boule & Benoît Marie)",
      source: "Sponsoring RSE 2026",
      courseConcept: "Valeurs affichées vs identité métier",
      legend: "Source : Sponsoring RSE 2026 — Notion de cours : Valeurs affichées vs identité métier",
      description: "Prototype Mini 6.50 à foils aux couleurs de Xelians en sustentation au-dessus des vagues. Symbole d'agilité et de haute technologie en contrepoint à la masse physique des 9 000 km d'archives."
    },
    {
      id: "ill-04",
      number: 4,
      title: "Radar OCAI modélisant le profil organisationnel de Xelians (Cameron & Quinn)",
      source: "Modèle Cameron & Quinn",
      courseConcept: "Profil Hiérarchie & Marché",
      legend: "Source : Modèle Cameron & Quinn — Notion de cours : Profil Hiérarchie & Marché",
      description: "Radar OCAI : hyper-dominance Hiérarchique (42%) et composante Marché (28%), avec comparatif interactif entre culture réelle et culture affichée."
    },
    {
      id: "ill-05",
      number: 5,
      title: "Frise Chronologique des Rapprochements et Stratégie M&A (2004 - 2026)",
      source: "Historique Xelians 2026",
      courseConcept: "Chrono-compétition et adaptation",
      legend: "Source : Historique Xelians 2026 — Notion de cours : Chrono-compétition et adaptation",
      description: "Pivots stratégiques : Archiveco/Locarchives (1977-1982), Scaneco (2004), CD-Doc (2017), Xelians (2019), DIS (2023), XIS (2024), Sodoc (2025) et IA Souveraine (2026)."
    }
  ]
};
