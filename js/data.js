/**
 * DONNÉES ACADÉMIQUES DU PROJET DE RECHERCHE - CULTURE D'ENTREPRISE XELIANS
 * Analyse sociologique des organisations (Modèle Schein, OCAI Cameron & Quinn, Crozier, D'Aveni, Stalk)
 * Auteur : Étudiant-Alternant chez Xelians (Consultant Junior en Organisation & Stratégie)
 * Niveau académique : Master 2 / Bac+5 (Projet noté sur 20)
 */

window.XELIANS_DATA = {
  metadata: {
    title: "Xelians : Anatomie Sociologique d'une Forteresse Documentaire",
    subtitle: "Déconstruction d'une culture d'entreprise hybride : entre mémoire physique sanctuarisée et impératif de vélocité logicielle",
    author: "Étudiant-Alternant Xelians",
    academicYear: "2025 - 2026",
    institution: "Master Stratégie d'Entreprise & Sociologie des Organisations",
    evaluationFramework: "Grille d'évaluation Master Bac+5 (Notation /20)",
    company: {
      name: "Xelians",
      groupHolding: "DTI Group (ex-Archiveco / Locarchives)",
      headcount: 800,
      turnover: "89 M€ (exercice consolidé)",
      physicalHoldings: "9 000 km linéaires d'archives",
      datacenters: "3 datacenters souverains en France",
      facilities: "29 sites de conservation haute sécurité (dont 26 agréés SIAF)",
      cac40Trust: "36 entreprises du CAC 40 sur 40",
      rdCommitment: "20 % du CA investi en R&D et solutions IT"
    }
  },

  cartons: [
    {
      id: "box-01",
      number: "01",
      cote: "BOX-01 / ARTEFACTS & INFRASTRUCTURE",
      title: "Ce qui se voit : Les Artefacts et la Sanctuarisation",
      category: "Niveau 1 de Schein",
      status: "Scellé NF Z40-350",
      statusClass: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
      barcodeNumber: "376024-XEL-01-ART",
      summary: "Cartographie de l'empreinte matérielle et rituelle de Xelians : 9 000 km d'archives, 29 forteresses physiques, 3 datacenters souverains et un lexique d'inviolabilité procédurale.",
      keyMetrics: [
        { label: "Collaborateurs", value: "800" },
        { label: "Chiffre d'Affaires", value: "89 M€" },
        { label: "Archives Physiques", value: "9 000 km" },
        { label: "Sites / Agréés SIAF", value: "29 / 26" },
        { label: "Datacenters Souverains", value: "3 en France" },
        { label: "Confiance CAC 40", value: "36 / 40" }
      ],
      sections: [
        {
          heading: "1. Présentation de l'organisation et dualité matricielle",
          content: `
<p class="mb-4 text-justify">
<strong>Xelians</strong> se positionne aujourd'hui comme le leader français indépendant du traitement documentaire global, articulant une double polarité unique sur le marché : le tiers-archivage physique patrimonial et la gestion dématérialisée des flux d'information (BPO, GED, SAE). Fort de <strong>800 collaborateurs</strong> et d'un chiffre d'affaires consolidé de <strong>89 millions d'euros</strong>, le groupe assure la garde souveraine de plus de <strong>9 000 kilomètres linéaires d'archives</strong> (soit l'équivalent de la distance Paris-Tokyo) réparties sur <strong>29 sites de conservation sécurisés</strong>, dont <strong>26 bénéficient de l'agrément ministériel du Service Interministériel des Archives de France (SIAF)</strong> pour la conservation des archives publiques courantes et intermédiaires. En parallèle, Xelians opère <strong>3 datacenters souverains</strong> situés exclusivement sur le territoire national métropolitain.
</p>
<p class="mb-4 text-justify">
Cette envergure contemporaine est le produit d'une histoire dense entamée il y a près d'un demi-siècle. L'entreprise est née de la fusion d'acteurs pionniers de l'archivage en France : <strong>Archiveco</strong> (fondée en 1977) et <strong>Locarchives</strong> (fondée en 1982), fédérés initialement sous l'égide de la holding DTI avant de converger en 2019 sous la marque unifiée <em>Xelians</em>. Loin d'une simple juxtaposition marchande, cette trajectoire historique s'est complétée par une politique ciblée de croissance externe logicielle et industrielle : absorption de <strong>Scaneco</strong> en 2004 (amorce du BPO de numérisation de masse), de <strong>CD-Doc</strong> en 2017 (dématérialisation comptable et fiscale), de l'éditeur open source <strong>Maarch</strong> (système d'archivage électronique et gestion de courrier), puis de <strong>DIS</strong> (2023) et <strong>Sodoc</strong> (2025). Il en résulte une organisation sociologiquement hybride, oscillant en permanence entre la temporalité séculaire de l'entrepôt d'archives et la vélocité immédiate de la plateforme SaaS.
</p>
`
        },
        {
          heading: "2. Artefact 1 - L'environnement physique et la sanctuarisation architecturale",
          content: `
<p class="mb-4 text-justify">
Selon la grille théorique d'<strong>Edgar Schein</strong> (1985), les <em>artefacts</em> constituent la couche superficielle mais hautement révélatrice de la culture organisationnelle : tout ce qui peut être vu, entendu et ressenti par un observateur extérieur. Chez Xelians, l'espace physique n'est pas un cadre de travail neutre ; il s'apparente à une véritable <strong>sanctuarisation matérielle</strong>. Les 29 entrepôts d'archives constituent de gigantesques coffres-forts industriels soumis à des cahiers des charges d'une rigueur absolue.
</p>
<ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
  <li><strong>Régulation thermo-hygrométrique permanente :</strong> Maintien strict de la température entre 18°C et 20°C et d'un taux d'humidité relative à 50% ± 5% pour neutraliser les dégradations chimiques des fibres cellulosiques et la prolifération fongique, conformément à la norme <em>NF Z40-350</em> (marque de certification NF 342).</li>
  <li><strong>Systèmes d'extinction par gaz inerte :</strong> Banissement total de l'eau (qui anéantirait le patrimoine papier). Utilisation de dispositifs automatisés par gaz inerte (Novec 1230 / Inergen) réduisant le taux d'oxygène pour étouffer toute combustion instantanément sans endommager les supports ni les baies de serveurs.</li>
  <li><strong>Barrières de sécurité étanches :</strong> Sas anti-intrusion, lecture biométrique, détection volumétrique infrarouge, surveillance vidéo 24/7/365 avec télé-surveillance de classe P3, clôtures périphériques électrifiées et confinement de classe bunker.</li>
  <li><strong>Datacenters souverains HDS & ISO 27001 :</strong> Réplication des exigences physiques dans l'univers numérique grâce aux certifications d'Hébergement de Données de Santé (HDS) et ISO/IEC 27001, imposant une compartimentation rigide des accès serveurs.</li>
</ul>
<p class="mb-4 text-justify">
<strong>Analyse sociologique de l'artefact :</strong> Cette forteresse matérielle dicte une posture psychologique et comportementale quotidienne d'<strong>extrême vigilance</strong>. Le collaborateur qui franchit les sas de Xelians ne pénètre pas dans un bureau ordinaire ; il intègre un temple de la mémoire légale. La manipulation d'un conteneur n'est jamais vécue comme le déplacement d'un simple objet logistique, mais comme la garde scellée d'un secret d'État ou d'un actif juridique capital pour une entreprise du CAC 40. L'espace physique façonne ainsi une éthique de la prudence et du sang-froid.
</p>
`
        },
        {
          heading: "3. Artefact 2 - Le vocabulaire normatif et les rituels de traçabilité",
          content: `
<p class="mb-4 text-justify">
Le langage et les cérémonials partagés constituent le second artefact majeur identifié chez Xelians. L'ensemble des interactions professionnelles est irrigué par un métalangage juridique et archivistique hautement codifié, inaccessible au profane :
</p>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="p-3 bg-slate-900/60 rounded border border-slate-700">
    <span class="text-sky-400 font-bold block mb-1">DUA (Durée d'Utilité Administrative)</span>
    <span class="text-xs text-slate-300">Délai légal ou réglementaire durant lequel un document doit être conservé sous sa forme probante avant son tri, son versement patrimonial ou son élimination certifiée.</span>
  </div>
  <div class="p-3 bg-slate-900/60 rounded border border-slate-700">
    <span class="text-sky-400 font-bold block mb-1">Valeur Probante & Copie Fidèle</span>
    <span class="text-xs text-slate-300">Norme <em>NF Z42-026</em> (NF 544) conférant à la numérisation la même force juridique que l'original papier grâce au scellement cryptographique et à l'intégrité garantie.</span>
  </div>
  <div class="p-3 bg-slate-900/60 rounded border border-slate-700">
    <span class="text-sky-400 font-bold block mb-1">Bordereau de Versement & Récolement</span>
    <span class="text-xs text-slate-300">Contrat juridique actant le transfert de garde d'un fonds documentaire et contrôle contradictoire exhaustif de conformité boîte par boîte.</span>
  </div>
  <div class="p-3 bg-slate-900/60 rounded border border-slate-700">
    <span class="text-sky-400 font-bold block mb-1">Gestion du Vrac Numérique</span>
    <span class="text-xs text-slate-300">Dépollution sémantique et typologique des gigaoctets de messageries et répertoires réseau non structurés pour restaurer la gouvernance de données.</span>
  </div>
</div>
<p class="mb-4 text-justify">
<strong>Les Rituels de signature et de contre-signature :</strong> Aucun carton ne peut être déplacé, ouvert, déplacé de travée ou détruit sans la génération conjointe d'un bordereau physique ou électronique d'émargement. L'opérateur appose un scellé numéroté inviolable, scanne le code-barres 2D via un terminal durci étalonné, consignant instantanément l'action dans une piste d'audit non altérable (audit trail).
</p>
<p class="mb-4 text-justify">
<strong>Portée théorique (Michel Crozier - Le Phénomène bureaucratique) :</strong> Ces rituels ne sont pas de simples formalités logistiques ; ils représentent des mécanismes vitaux de <em>réduction de l'incertitude</em>. Dans l'univers d'archive, l'incertitude est synonyme de litige judiciaire ou d'amende CNIL. En institutionnalisant ces rituels de traçabilité, Xelians sécurise ses salariés en leur fournissant une couverture procédurale irréfutable : la règle écrite protège l'agent autant qu'elle assujettit son action.
</p>
`
        }
      ],
      illustrationRef: "ill-01",
      illustrationTitle: "Plan architectural & vue en coupe d'un site de conservation haute sécurité certifié NF Z40-350 / ISO 27001",
      theoreticalConcept: "Niveau 1 de Schein : Artefacts visibles & Sanctuarisation physique des organisations"
    },

    {
      id: "box-02",
      number: "02",
      cote: "BOX-02 / VALEURS & RHÉTORIQUE OFFICIELLE",
      title: "Ce que l'entreprise dit d'elle-même : Les Valeurs Affichées",
      category: "Niveau 2 de Schein",
      status: "Homologué Direction",
      statusClass: "border-sky-500 text-sky-400 bg-sky-950/40",
      barcodeNumber: "376024-XEL-02-VAL",
      summary: "Décryptage des 4 piliers axiologiques officiels (Collectif, Autonomie, Efficacité, Transparence), de la devise institutionnelle et du sponsoring nautique Mini 6.50 comme projection de haute vélocité.",
      keyMetrics: [
        { label: "Valeurs Cardinales", value: "4 piliers" },
        { label: "Devise Groupe", value: "Plus que des données, votre avenir" },
        { label: "Vecteur Métaphorique", value: "Mini 6.50 à Foils" },
        { label: "Skippers Partenaires", value: "C. Boule & B. Marie" },
        { label: "Investissement R&D", value: "20% du CA" },
        { label: "Alignement RSE", value: "Bilan Carbone & Papiers 100% Recyclés" }
      ],
      sections: [
        {
          heading: "1. Les 4 valeurs cardinales du groupe Xelians",
          content: `
<p class="mb-4 text-justify">
Au deuxième niveau du modèle d'<strong>Edgar Schein</strong> figurent les <em>valeurs déclarées ou affichées</em> (espoused values). Elles représentent l'idéologie officielle, les justifications conscientes et les principes proclamés par le top management pour fédérer le corps social et séduire les parties prenantes externes (clients, régulateurs, candidats).
</p>
<div class="space-y-4 mb-4">
  <div class="border-l-4 border-sky-400 pl-4 py-1">
    <h4 class="font-bold text-white text-base">I. Le Sens du Collectif</h4>
    <p class="text-sm text-slate-300 text-justify">
      Revendiqué comme l'héritage solidaire des équipes historiques d'Archiveco et Locarchives. Dans une chaîne de traitement où une seule omission sur une ligne de récolement compromet l'ensemble du dossier client, la solidarité d'équipe et l'interdépendance fonctionnelle (entre manutentionnaires, archivistes diplômés, opérateurs de scanner et ingénieurs dev) sont érigées en impératif moral.
    </p>
  </div>
  <div class="border-l-4 border-blue-600 pl-4 py-1">
    <h4 class="font-bold text-white text-base">II. L'Autonomie</h4>
    <p class="text-sm text-slate-300 text-justify">
      Affichée comme la capacité donnée à chaque collaborateur de piloter son périmètre de responsabilité, de prendre des initiatives opérationnelles sur les chantiers de numérisation ou la gestion de compte client, et de s'auto-organiser dans un cadre responsabilisant.
    </p>
  </div>
  <div class="border-l-4 border-indigo-500 pl-4 py-1">
    <h4 class="font-bold text-white text-base">III. L'Efficacité</h4>
    <p class="text-sm text-slate-300 text-justify">
      Déclinée sous l'angle de la rigueur opérationnelle et du respect millimétré des engagements de service (SLA). L'efficacité chez Xelians se mesure au taux d'erreur tendanciellement nul (zéro défaut de récolement, zéro perte de paquet de données au sein du SAE).
    </p>
  </div>
  <div class="border-l-4 border-rose-500 pl-4 py-1">
    <h4 class="font-bold text-white text-base">IV. La Transparence</h4>
    <p class="text-sm text-slate-300 text-justify">
      Promesse faite aux clients et aux collaborateurs d'une traçabilité absolue des actions. Le client doit pouvoir auditer à tout instant la localisation exacte de son carton ou consulter les logs horodatés de son coffre-fort numérique souverain.
    </p>
  </div>
</div>
`
        },
        {
          heading: "2. La devise institutionnelle : « Plus que des données, votre avenir »",
          content: `
<p class="mb-4 text-justify">
La signature institutionnelle de Xelians – <em>« Plus que des données, votre avenir »</em> (déclinée à l'international sous la formule <em>« More than data, business »</em>) – traduit un basculement narratif stratégique. L'entreprise ne souhaite plus être perçue comme un simple « gardien de boîtes poussiéreuses » stockées au fond d'un hangar francilien, mais comme un <strong>catalyseur de performance décisionnelle</strong>. 
</p>
<p class="mb-4 text-justify">
Le terme « données » ancre l'entreprise dans la modernité numérique et l'économie immatérielle, tandis que le mot « avenir » évacue le caractère anxiogène ou mortifère souvent associé aux archives mortes (successions, litiges, faillites, passif environnemental) pour le convertir en actif stratégique d'anticipation et de gouvernance souveraine.
</p>
`
        },
        {
          heading: "3. Analyse sémiotique du sponsoring voile : Le Mini 6.50 à foils",
          content: `
<p class="mb-4 text-justify">
L'un des vecteurs symboliques les plus puissants de la communication externe de Xelians est son engagement dans la course au large, en sponsorisant le prototype <strong>Mini 6.50 à foils</strong> barré par <strong>Caroline Boule</strong> et <strong>Benoît Marie</strong>. D'un point de vue sociologique, le choix de la voile hauturière technologique remplit une fonction de <em>compensation imaginaire</em> :
</p>
<ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
  <li><strong>La dialectique de la pesanteur et de l'aérien :</strong> Alors que l'activité historique de l'archivage évoque la lourdeur du papier, la masse physique (des milliers de tonnes de cellulose) et l'inertie des rayonnages statiques, le Mini 6.50 à foils incarne la légèreté absolue, la sustentation au-dessus de l'eau, la rupture technologique et la vitesse pure.</li>
  <li><strong>L'analogie de la haute technicité et des conditions extrêmes :</strong> Tout comme un bateau à foils exige une précision millimétrique de réglage pour voler sans chavirer au milieu de l'Atlantique, la gestion documentaire moderne requiert une architecture informatique de pointe (IA générative souveraine, cryptographie, résilience face aux cyberattaques).</li>
  <li><strong>Le mythe du dépassement de soi et de l'agilité :</strong> Dans une entreprise d'archivage réglementée où les cadences peuvent être répétitives, projeter l'image de marins d'élite affrontant les éléments permet d'insuffler une culture de l'exploit individuel et de l'audace technique.</li>
</ul>
`
        }
      ],
      illustrationRef: "ill-02",
      illustrationTitle: "Charte chromatique officielle Xelians et sémiologie du logo à boucle infinie",
      theoreticalConcept: "Niveau 2 de Schein : Valeurs déclarées, mythes fondateurs et projections symboliques"
    },

    {
      id: "box-03",
      number: "03",
      cote: "BOX-03 / PRÉSUPPOSÉS FONDAMENTAUX & ÉCART DU RÉEL",
      title: "Ce qui se vit réellement : Présupposés Inconscients et Dissonance",
      category: "Niveau 3 de Schein",
      status: "Audit Critique - Non Masqué",
      statusClass: "border-rose-500 text-rose-400 bg-rose-950/40",
      barcodeNumber: "376024-XEL-03-PRE",
      summary: "Mise au jour du présupposé invisible de Schein : l'angoisse de la faute existentielle irréparable, et analyse sociologique des tensions entre le discours agile et la pesanteur procédurale.",
      keyMetrics: [
        { label: "Niveau de Risque Toléré", value: "0 % (Zéro défaut)" },
        { label: "Nature du Présupposé", value: "Inviolabilité & Traçabilité" },
        { label: "Écart Axiologique", value: "Autonomie vs Contrôle" },
        { label: "Impact Managérial", value: "Pyramide de Décharge Légale" },
        { label: "Source d'Inquiétude", value: "Fuite, Altération, Perte" },
        { label: "Régime de Responsabilité", value: "Pénal & Contractuel" }
      ],
      sections: [
        {
          heading: "1. Formulation du présupposé fondamental sous-jacent (Schein)",
          content: `
<p class="mb-4 text-justify">
Au niveau le plus profond et le plus stable de l'analyse sociologique d'<strong>Edgar Schein</strong> se nichent les <em>présupposés fondamentaux inconscients</em> (basic underlying assumptions). Ce sont les croyances tacites, non discutées, invisibles et intériorisées par tous les membres du collectif, dictant de manière automatique la perception de la réalité, les arbitrages quotidiens et les jugements moraux au travail.
</p>
<div class="p-4 rounded-lg bg-slate-900 border-2 border-rose-500/80 my-4 shadow-lg shadow-rose-950/30">
  <p class="text-sm font-semibold text-rose-300 uppercase tracking-wider mb-2 flex items-center gap-2">
    <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
    Thèse centrale - Axiome culturel fondamental chez Xelians :
  </p>
  <blockquote class="text-base italic text-white font-serif leading-relaxed">
    « Un document égaré, altéré ou divulgué constitue une faute existentielle irréparable ; la conformité réglementaire et la rigueur procédurale priment sur l'initiative individuelle spontanée. »
  </blockquote>
</div>
<p class="mb-4 text-justify">
Ce postulat matriciel découle directement du métier historique de l'archivage. Dans la culture bancaire, pharmaceutique ou étatique qui forme le socle de clientèle de Xelians, la perte d'un dossier de prêt original, d'un brevet de molécule chimique ou d'un acte notarié engage la responsabilité pénale et la survie économique de l'organisation mandante. Ainsi, chaque salarié a intériorisé qu'un document n'est pas un flux recyclable banal, mais un <strong>titre juridique vivant</strong> dont la garde confère un devoir quasi-religieux d'intégrité.
</p>
`
        },
        {
          heading: "2. Analyse critique des écarts : Confrontation du discours corporate et du terrain",
          content: `
<p class="mb-4 text-justify">
L'immersion empirique et l'analyse sociologique révèlent une <strong>dissonance organisationnelle aiguë</strong> entre l'affichage des valeurs managériales modernes (Carton 02) et la réalité vécue dans les ateliers de numérisation et les dépôts de conservation :
</p>
<div class="space-y-4 mb-4">
  <div class="p-4 bg-slate-900/80 rounded border border-slate-700">
    <div class="flex items-center justify-between mb-2">
      <span class="font-bold text-sky-400">Dissonance 1 : La promesse d'« Autonomie » face à la cage d'acier procédurale</span>
      <span class="text-xs px-2 py-0.5 rounded bg-rose-950 text-rose-400 border border-rose-800">Écart Majeur</span>
    </div>
    <p class="text-xs text-slate-300 text-justify">
      Alors que les plaquettes RH vantent l'« autonomie » et l'émancipation des collaborateurs, le travail quotidien est enserré dans des gammes opératoires millimétrées régies par les normes NF Z42-026 et NF Z40-350. Tout écart par rapport à la consigne de numérisation ou au mode de classement d'un conteneur est traqué par les audits qualité. L'autonomie réelle se résume ainsi à une <em>liberté d'exécution confinée dans un couloir hautement balisé</em>.
    </p>
  </div>
  <div class="p-4 bg-slate-900/80 rounded border border-slate-700">
    <div class="flex items-center justify-between mb-2">
      <span class="font-bold text-sky-400">Dissonance 2 : L'injonction d'« Agilité logicielle » face à la rente du papier</span>
      <span class="text-xs px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">Tension Économique</span>
    </div>
    <p class="text-xs text-slate-300 text-justify">
      La direction prône une transition vers le modèle SaaS récurrent et les API cloud ultra-réactives. Or, le modèle économique historique et la trésorerie la plus stable restent alimentés par la rente d'entreposage physique : les DUA s'étendant sur 10, 20 ou 30 ans garantissent une facturation récurrente d'espace au mètre linéaire sans requérir de refonte technologique permanente. Ce contraste génère une fracture culturelle sourde entre les « gens du papier » (garants des marges historiques) et les « gens du software » (investisseurs de capitaux).
    </p>
  </div>
  <div class="p-4 bg-slate-900/80 rounded border border-slate-700">
    <div class="flex items-center justify-between mb-2">
      <span class="font-bold text-sky-400">Dissonance 3 : L'affichage de la « Transparence » face au secret d'État</span>
      <span class="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">Dilemme Opérationnel</span>
    </div>
    <p class="text-xs text-slate-300 text-justify">
      Le groupe proclame la transparence absolue envers ses parties prenantes. Cependant, en raison des agréments SIAF pour la Défense nationale et les ministères régaliens, ainsi que de la certification HDS (secret médical), la rétention prudente de l'information reste un réflexe de survie professionnelle. Le cloisonnement étanche prévaut systématiquement sur la libre circulation interne du savoir.
    </p>
  </div>
</div>
`
        },
        {
          heading: "3. La pyramide de validation et le syndrome de la couverture légale",
          content: `
<p class="mb-4 text-justify">
Cette prégnance du présupposé de zéro défaut engendre ce que la sociologie des bureaucraties qualifie de <strong>décharge hiérarchique pyramidale</strong> : personne ne souhaite endosser seul la responsabilité juridique d'un déclassement ou d'une anomalie de scellé. Les décisions nécessitent des contre-signatures multiples, créant une inertie organisationnelle perçue par les nouveaux arrivants (notamment les profils développeurs tech) comme une lourdeur anachronique, mais vécue par les archivistes seniors comme le garant fondamental de la survie de la marque.
</p>
`
        }
      ],
      illustrationRef: "ill-03",
      illustrationTitle: "Le voilier Mini 6.50 à foils sponsorisé par Xelians (Skippers Caroline Boule & Benoît Marie)",
      theoreticalConcept: "Niveau 3 de Schein : Présupposés fondamentaux inconscients et analyse des écarts du réel"
    },

    {
      id: "box-04",
      number: "04",
      cote: "BOX-04 / DIAGNOSTIC OCAI (CAMERON & QUINN)",
      title: "Diagnostic sur la Grille OCAI : Hiérarchie et Marché",
      category: "Modèle Cameron & Quinn",
      status: "Cartographié & Étalonné",
      statusClass: "border-purple-500 text-purple-400 bg-purple-950/40",
      barcodeNumber: "376024-XEL-04-OCA",
      summary: "Modélisation quantitative sur le Competing Values Framework : un profil hyper-hiérarchique (42%) axé sur la conformité, couplé à une dynamique de marché agressive (28%) portée par les SLA.",
      keyMetrics: [
        { label: "Culture Hiérarchique", value: "42 % (Dominante)" },
        { label: "Culture Marché", value: "28 % (Secondaire)" },
        { label: "Culture Clan", value: "18 % (Résiduelle)" },
        { label: "Culture Adhocratie", value: "12 % (Émergente)" },
        { label: "Axe Prépondérant", value: "Stabilité & Contrôle (70%)" },
        { label: "Axe Secondaire", value: "Orientation Externe (40%)" }
      ],
      sections: [
        {
          heading: "1. Positionnement sur les 4 quadrants du Competing Values Framework",
          content: `
<p class="mb-4 text-justify">
Le modèle <strong>OCAI (Organizational Culture Assessment Instrument)</strong> développé par <strong>Kim Cameron et Robert Quinn</strong> (1999) permet d'évaluer la culture d'une entreprise le long de deux axes orthogonaux majeurs :
</p>
<ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
  <li>L'axe vertical : <strong>Flexibilité et Dynamisme</strong> opposé à <strong>Stabilité et Contrôle</strong>.</li>
  <li>L'axe horizontal : <strong>Orientation Interne et Intégration</strong> opposée à <strong>Orientation Externe et Différenciation</strong>.</li>
</ul>
<p class="mb-4 text-justify">
L'analyse menée chez Xelians aboutit à une distribution fortement polarisée :
</p>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-center">
  <div class="p-3 bg-purple-950/40 border border-purple-500 rounded">
    <div class="text-2xl font-black text-purple-400">42 %</div>
    <div class="text-xs font-bold text-white uppercase mt-1">Hiérarchie</div>
    <div class="text-[10px] text-slate-400">Contrôle, stabilité, procédures, conformité NF/ISO</div>
  </div>
  <div class="p-3 bg-blue-950/40 border border-blue-500 rounded">
    <div class="text-2xl font-black text-blue-400">28 %</div>
    <div class="text-xs font-bold text-white uppercase mt-1">Marché</div>
    <div class="text-[10px] text-slate-400">Compétitivité, SLA stricts, rentabilité BPO</div>
  </div>
  <div class="p-3 bg-emerald-950/40 border border-emerald-500 rounded">
    <div class="text-2xl font-black text-emerald-400">18 %</div>
    <div class="text-xs font-bold text-white uppercase mt-1">Clan</div>
    <div class="text-[10px] text-slate-400">Cohésion d'équipe, mémoire Archiveco, loyauté</div>
  </div>
  <div class="p-3 bg-rose-950/40 border border-rose-500 rounded">
    <div class="text-2xl font-black text-rose-400">12 %</div>
    <div class="text-xs font-bold text-white uppercase mt-1">Adhocratie</div>
    <div class="text-[10px] text-slate-400">Innovation disruptive, prise de risque, R&D IA</div>
  </div>
</div>
<p class="mb-4 text-justify">
<strong>Interprétation sociologique :</strong> Xelians présente un <strong>profil combiné Hiérarchie-Marché</strong>. L'écrasante prédominance de la <em>Hiérarchie</em> (42%) découle directement des exigences normatives et de la sanctuarisation réglementaire. La composante <em>Marché</em> (28%) traduit l'environnement hautement concurrentiel des prestations BPO et SaaS, où les clients du CAC 40 exigent des pénalités financières immédiates au moindre manquement de délai de traitement. Le <em>Clan</em> (18%) subsiste dans la convivialité locale des dépôts régionaux mais recule face à la financiarisation. Enfin, l'<em>Adhocratie</em> (12%) demeure le quadrant le plus faible, l'organisation récompensant la conformité et sanctionnant l'expérimentation hasardeuse.
</p>
`
        },
        {
          heading: "2. Cas concret d'illustration du profil hiérarchique : La procédure de destruction certifiée",
          content: `
<p class="mb-4 text-justify">
Rien n'illustre mieux la prégnance du quadrant Hiérarchique chez Xelians que le déroulement d'une opération de <strong>destruction physique certifiée (pilonnage confidentiel)</strong> de conteneurs arrivés à échéance de DUA :
</p>
<ol class="list-decimal pl-6 mb-4 space-y-2 text-slate-300">
  <li><strong>Émission du bordereau contradictoire :</strong> Notification automatisée au mandataire légal du client via le portail client sécurisé. L'ordre de destruction doit être visé et signé par deux autorités juridiques habilitées du client (pouvoirs formels).</li>
  <li><strong>Double vérification d'absence de gel légal (Legal Hold) :</strong> Interrogation croisée des bases de données juridiques pour garantir qu'aucune procédure contentieuse ou enquête fiscale en cours ne suspend la destruction.</li>
  <li><strong>Extraction robotisée sous témoin :</strong> Sortie des cartons par le cariste muni d'un lecteur RFID/code-barres avec confirmation sonore et visuelle de conformité de l'identifiant de boîte.</li>
  <li><strong>Transfert sécurisé en zone de confinement scellée :</strong> Pesée étalonnée au gramme près et transit dans un camion sécurisé géolocalisé avec scellés inviolables vers le centre de broyage agréé.</li>
  <li><strong>Broyage DIN 66399 classe P4/P5 :</strong> Lacération des documents en particules millimétriques irréversibles en présence d'un huissier ou d'un contrôleur assermenté.</li>
  <li><strong>Émission du certificat de destruction infalsifiable :</strong> Horodatage cryptographique eIDAS, inscription dans le registre légal et traçabilité de la revalorisation de la pulpe de papier à 100% dans la filière papetière française.</li>
</ol>
<p class="mb-4 text-justify">
Chaque millimètre de cette procédure répond au paradigme hiérarchique : éliminer toute déviation humaine par une succession irréversible de contrôles croisés.
</p>
`
        },
        {
          heading: "3. La qualification d'un flux de numérisation à valeur probante (NF Z42-026)",
          content: `
<p class="mb-4 text-justify">
Sur le versant numérique, le profil de contrôle s'exprime avec la même rigueur lors de la mise en place d'une chaîne de numérisation fidèle. Les scanners industriels sont étalonnés chaque matin à l'aide de mires optiques pour mesurer la fidélité colorimétrique et géométrique. Dès la capture de l'image, une <strong>empreinte cryptographique SHA-256</strong> est générée, scellée avec le certificat serveur Xelians et injectée dans le Système d'Archivage Électronique (SAE) audité ISO 14641, neutralisant tout risque de requalification juridique.
</p>
`
        }
      ],
      illustrationRef: "ill-04",
      illustrationTitle: "Radar OCAI modélisant le profil organisationnel actuel et souhaité de Xelians (Cameron & Quinn)",
      theoreticalConcept: "Grille OCAI (Cameron & Quinn) : Competing Values Framework et cartographie culturelle"
    },

    {
      id: "box-05",
      number: "05",
      cote: "BOX-05 / HYPERCOMPÉTITION & CHRONO-STRATÉGIE",
      title: "Rapport à la Compétition : Hypercompétition et Chrono-compétition",
      category: "Théories de D'Aveni & Stalk",
      status: "Fonds Stratégique R&D",
      statusClass: "border-amber-500 text-amber-400 bg-amber-950/40",
      barcodeNumber: "376024-XEL-05-COM",
      summary: "Analyse de la guerre des délais en BPO (60 millions de documents/an), de la résistance face aux géants mondiaux (Iron Mountain, AWS) et de l'accélération M&A vers l'IA souveraine.",
      keyMetrics: [
        { label: "Documents BPO / an", value: "60 Millions" },
        { label: "SLA Délais BPO", value: "H+4 à H+24" },
        { label: "Investissement R&D", value: "20 % du CA" },
        { label: "Gain Productivité IA", value: "-40 % de temps" },
        { label: "Acquisitions Clés", value: "DIS (2023), Sodoc (2025)" },
        { label: "Entités Récents", value: "XIS (2024), IA Générative (2026)" }
      ],
      sections: [
        {
          heading: "1. Chrono-compétition : Le temps comme variable d'arbitrage stratégique (George Stalk)",
          content: `
<p class="mb-4 text-justify">
Dans les théories du management stratégique fondées sur le temps (<strong>Time-Based Competition</strong> de <strong>George Stalk</strong>, 1988), la vitesse de traitement et la compression des cycles opérationnels constituent le premier facteur de différenciation concurrentielle. Chez Xelians, cette chrono-compétition s'incarne dans les plateformes de <strong>BPO (Business Process Outsourcing) documentaire</strong> :
</p>
<ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
  <li><strong>Traitement de masse continu :</strong> Plus de <strong>60 millions de pages numérisées, océrisées et indexées chaque année</strong> pour le compte de banques, assurances, mutuelles et administrations publiques.</li>
  <li><strong>Des SLA d'une exigence draconienne :</strong> Les contrats BPO imposent un traitement sous <strong>H+4 à H+24</strong> pour la prise en charge des courriers de réclamation, des pièces justificatives de crédit immobilier ou des constats de sinistres. Le non-respect de ces fenêtres temporelles déclenche des pénalités financières automatiques de plusieurs dizaines de milliers d'euros.</li>
  <li><strong>La course technologique aux délais :</strong> Face aux fintechs et aux pure players du cloud, Xelians ne peut plus se contenter d'une numérisation différée. La captation des flux doit être quasi-synchrone avec l'émission du document.</li>
</ul>
`
        },
        {
          heading: "2. Hypercompétition (Richard D'Aveni) et stratégie de croissance externe",
          content: `
<p class="mb-4 text-justify">
Selon <strong>Richard D'Aveni</strong> (1994), l'<em>hypercompétition</em> survient lorsque les barrières traditionnelles à l'entrée s'effondrent et que les avantages concurrentiels stables deviennent éphémères. Xelians fait face à une double pression systémique :
</p>
<ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
  <li><strong>L'érosion programmée de l'archivage papier physique :</strong> Bien que stable à court terme grâce à la conservation patrimoniale, le volume de papier neuf créé diminue régulièrement (-3% à -5% par an selon les secteurs). Se cantonner à l'entreposage reviendrait à gérer un déclin programmé.</li>
  <li><strong>La menace des géants mondiaux :</strong> L'américain <em>Iron Mountain</em> pèse plus de 5 milliards de dollars de CA dans l'archivage mondial, tandis que les <em>hyperscalers du cloud</em> (Amazon Web Services, Microsoft Azure, Google Cloud) captent les flux de données brutes des grandes entreprises.</li>
</ul>
<p class="mb-4 text-justify">
Pour survivre et croître dans cette arène, Xelians déploie une stratégie d'<strong>acquisitions ciblées et de diversification verticale</strong> :
</p>
<div class="space-y-3 mb-4">
  <div class="p-3 bg-slate-900 border-l-4 border-sky-400 text-xs">
    <strong class="text-white text-sm block">2023 : Rachat de DIS (Document Image Solutions)</strong>
    Renforcement immédiat des briques d'extraction automatisée de données (LAD/RAD) et de reconnaissance sémantique assistée par ordinateur, convertissant les scanners en processeurs d'information intelligente.
  </div>
  <div class="p-3 bg-slate-900 border-l-4 border-blue-500 text-xs">
    <strong class="text-white text-sm block">2024 : Lancement de Xelians Intégration Services (XIS)</strong>
    Création d'une division dédiée à l'intégration des solutions de GED (Gestion Électronique de Documents) et de SAE auprès du secteur public et des grandes collectivités territoriales, capitalisant sur la souveraineté.
  </div>
  <div class="p-3 bg-slate-900 border-l-4 border-indigo-500 text-xs">
    <strong class="text-white text-sm block">2025 : Rachat de Sodoc</strong>
    Intégration directe de la GED souveraine Xelians dans l'environnement natif <em>Microsoft 365 / SharePoint / Teams</em>. Cette manœuvre permet d'archiver les flux de travail collaboratifs sans contraindre les utilisateurs à quitter leur environnement bureautique quotidien.
  </div>
  <div class="p-3 bg-slate-900 border-l-4 border-rose-500 text-xs">
    <strong class="text-white text-sm block">2026 : Déploiement de modules d'IA Générative Souveraine</strong>
    Consécration de <strong>20 % du chiffre d'affaires annuel à la R&D et aux infrastructures IT</strong>. Intégration de modèles de fondation open-source hébergés localement dans les datacenters souverains pour la synthèse automatique de dossiers juridiques volumineux et la classification instantanée des courriers, apportant un <strong>gain de productivité mesuré de 40 %</strong> sur les chaînes de tri BPO.
  </div>
</div>
`
        }
      ],
      illustrationRef: "ill-05",
      illustrationTitle: "Frise chronologique et cartographie stratégique des acquisitions M&A du groupe Xelians (2004 - 2026)",
      theoreticalConcept: "Chrono-compétition (Stalk) & Hypercompétition (D'Aveni) : adaptation par pivots technologiques"
    },

    {
      id: "box-06",
      number: "06",
      cote: "BOX-06 / L'INTRAPRENEURIAT : FREINS & PROPOSITIONS",
      title: "La Place pour l'Intrapreneuriat : Du Carcan Normatif à l'Atelier X-Lab",
      category: "Innovation & Dynamique RH",
      status: "Projet Prototype Actif",
      statusClass: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
      barcodeNumber: "376024-XEL-06-INT",
      summary: "Diagnostic de la rigidité bureaucratique et proposition d'un dispositif de rupture : l'Atelier X-Lab (concours semestriel, 15% de temps détaché, incubateur d'IA et éco-responsabilité).",
      keyMetrics: [
        { label: "Propension Spontanée", value: "Faible (Carcan ISO/NF)" },
        { label: "Temps Détaché X-Lab", value: "15 % (1 trimestre)" },
        { label: "Budget Amorçage", value: "25 000 € / projet" },
        { label: "Cibles de Recyclage", value: "100 % papier revalorisé" },
        { label: "Bénéficiaires", value: "Archivistes, BPO, Devs" },
        { label: "Rythme de Session", value: "Semestriel (2 promos/an)" }
      ],
      sections: [
        {
          heading: "1. Diagnostic sociologique : Les freins structurels à l'innovation ascendante",
          content: `
<p class="mb-4 text-justify">
L'intrapreneuriat – défini comme la capacité d'un salarié à se comporter en entrepreneur au sein d'une structure existante pour développer un nouveau produit, service ou processus – se heurte chez Xelians à un <strong>plafond de verre normatif</strong>. 
</p>
<ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
  <li><strong>La tyrannie de l'audit permanent :</strong> Les certifications NF Z40-350, ISO 27001 et HDS impliquent des audits inopinés et annuels où chaque écart à la procédure écrite est consigné comme une « non-conformité majeure ». Dans ce cadre, toute initiative spontanée ou tentative d'optimisation non validée par la Direction Qualité est perçue comme un facteur de risque insensé.</li>
  <li><strong>Le compartimentage des métiers :</strong> Comme l'a théorisé <strong>Michel Crozier</strong> dans son analyse des zones d'incertitude et des systèmes bureaucratiques, les agents s'enferment dans la stricte définition de leur poste pour se protéger. L'archiviste en entrepôt échange rarement avec l'ingénieur en traitement d'images ou le commercial grands comptes.</li>
  <li><strong>L'inhibition de la prise de risque :</strong> Le système de rétribution interne valorise la conformité parfaite aux SLA et l'absence d'incident, plutôt que l'expérimentation exploratoire.</li>
</ul>
`
        },
        {
          heading: "2. Dispositif de rupture préconisé : « L'Atelier X-Lab »",
          content: `
<p class="mb-4 text-justify">
Pour libérer le potentiel d'innovation sans fragiliser le socle de sécurité documentaire, nous préconisons la mise en place formelle d'un incubateur interne : <strong>« L'Atelier X-Lab »</strong>. Ce dispositif institutionnalise une zone d'agilité contrôlée, affranchie temporairement des contraintes bureaucratiques habituelles.
</p>
<div class="p-4 bg-slate-900 rounded-lg border border-emerald-500/60 my-4">
  <h4 class="font-bold text-emerald-400 text-base mb-2">Modalités et Architecture de l'Atelier X-Lab :</h4>
  <div class="space-y-3 text-xs text-slate-300">
    <div class="flex items-start gap-2">
      <span class="px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded font-mono font-bold">1</span>
      <div><strong>Concours d'idéation semestriel universel :</strong> Tout collaborateur (manutentionnaire de dépôt, opérateur BPO, archiviste, chef de projet logiciel) peut déposer une proposition de prototype en réponse à un défi métier concret. Deux sessions par an (printemps / automne).</div>
    </div>
    <div class="flex items-start gap-2">
      <span class="px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded font-mono font-bold">2</span>
      <div><strong>Détachement protégé de 15 % du temps de travail :</strong> Les lauréats (3 équipes de 2 à 4 personnes par promotion) bénéficient d'une décharge officielle de 15 % de leur temps de travail contractuel durant un trimestre entier pour incuber leur projet.</div>
    </div>
    <div class="flex items-start gap-2">
      <span class="px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded font-mono font-bold">3</span>
      <div><strong>Financement et parrainage d'élite :</strong> Enveloppe d'amorçage de <strong>25 000 €</strong> allouée par la Direction Générale et tutorat direct par un Lead Développeur IA de la R&D et un membre du Comité Exécutif.</div>
    </div>
  </div>
</div>
`
        },
        {
          heading: "3. Deux projets pilotes immédiats pour l'Atelier X-Lab",
          content: `
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="p-4 bg-slate-900/90 rounded border border-slate-700">
    <h5 class="text-sky-400 font-bold text-sm mb-2">Pilote 1 : Brique IA de Reconnaissance Paléographique & Manuscrits</h5>
    <p class="text-xs text-slate-300 text-justify">
      Développement par un binôme archiviste / ingénieur IA d'un modèle de vision par ordinateur local (offline) capable de retranscrire automatiquement des fonds d'archives manuscrites des XIXe et XXe siècles (minutes notariales, registres de délibérations communales). Ce service ouvre un nouveau marché à haute valeur ajoutée auprès des généalogistes et des collectivités sans rompre la souveraineté.
    </p>
  </div>
  <div class="p-4 bg-slate-900/90 rounded border border-slate-700">
    <h5 class="text-emerald-400 font-bold text-sm mb-2">Pilote 2 : Boucle Circulaire « Zéro Déchet Cellulose »</h5>
    <p class="text-xs text-slate-300 text-justify">
      Conçu par des opérateurs de destruction certifiée : valoriser les 100 % de pulpe de papier sécurisée broyée lors des opérations de pilonnage confidentiel pour concevoir des cartons de conservation d'archives écologiques, fabriqués en France, certifiés pH neutre et sans acide, refermant une boucle d'économie circulaire vertueuse.
    </p>
  </div>
</div>
`
        }
      ],
      illustrationRef: "ill-04",
      illustrationTitle: "Modélisation de l'impact souhaité de l'Atelier X-Lab sur le quadrant Adhocratie",
      theoreticalConcept: "Dynamique d'innovation ascendante, zones d'incertitude (Crozier) et organisation ambidextre"
    },

    {
      id: "box-07",
      number: "07",
      cote: "BOX-07 / BILAN CRITIQUE & PERSPECTIVES D'AVENIR",
      title: "Bilan Critique et Perspectives : Forteresse Souveraine vs Agilité SaaS",
      category: "Synthèse Stratégique & Prospective",
      status: "Conclusion de Recherche",
      statusClass: "border-sky-500 text-sky-400 bg-sky-950/40",
      barcodeNumber: "376024-XEL-07-SYN",
      summary: "Bilan stratégique global : la souveraineté documentaire et la confiance du CAC 40 constituent un rempart inattaquable, mais le risque de sclérose face aux pure players du cloud exige une ambidextrie organisationnelle.",
      keyMetrics: [
        { label: "Pénétration CAC 40", value: "36 / 40 (90 %)" },
        { label: "Souveraineté", value: "100 % France Métropolitaine" },
        { label: "Risque Majeur", value: "Piège de la Compétence" },
        { label: "Modèle Préconisé", value: "Organisation Ambidextre" },
        { label: "Croissance Cible", value: "+12 % par an (IT/BPO)" },
        { label: "Pérennité Modèle", value: "Hybridation Physique / Numérique" }
      ],
      sections: [
        {
          heading: "1. Atout ou fragilité face aux mutations du marché ?",
          content: `
<p class="mb-4 text-justify">
Au terme de cette analyse sociologique et stratégique approfondie, la culture de Xelians – caractérisée par l'inviolabilité procédurale, la sanctuarisation de la preuve et la suprématie de la hiérarchie – apparaît comme une <strong>lame à double tranchant</strong> :
</p>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="p-4 bg-emerald-950/30 rounded border border-emerald-500/80">
    <div class="flex items-center gap-2 mb-2 text-emerald-400 font-bold">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      L'Atout Stratégique : La Forteresse de Confiance Souveraine
    </div>
    <p class="text-xs text-slate-300 text-justify">
      Dans une époque minée par les cyberattaques, les rançongiciels et les craintes légitimes d'extraterritorialité juridique (Cloud Act et FISA américains), Xelians propose un rempart inviolable. Les <strong>36 entreprises du CAC 40</strong> et les ministères de souveraineté ne choisissent pas Xelians pour sa fantaisie marketing, mais parce que son refus du compromis et ses 26 sites agréés SIAF garantissent une sécurité juridique absolue. Cette culture de la rigueur forme une barrière à l'entrée quasi-infranchissable pour les nouveaux entrants.
    </p>
  </div>
  <div class="p-4 bg-rose-950/30 rounded border border-rose-500/80">
    <div class="flex items-center gap-2 mb-2 text-rose-400 font-bold">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      La Fragilité Structurelle : Le Piège de la Compétence (Levitt & March)
    </div>
    <p class="text-xs text-slate-300 text-justify">
      Enfermée dans l'excellence de son métier historique d'archivage physique, l'organisation risque de succomber au <em>piège de la compétence</em> (competency trap) théorisé par Barbara Levitt et James March. Si Xelians applique aux projets logiciels agiles et à l'IA la même inertie de vérification et de contre-signature que celle requise pour la garde d'un carton pendant 30 ans, elle sera inéluctablement dépassée en vélocité par les éditeurs SaaS américains et les scale-ups européennes qui itèrent en sprints hebdomadaires.
    </p>
  </div>
</div>
`
        },
        {
          heading: "2. Recommandation prospective : La théorie de l'organisation ambidextre (O'Reilly & Tushman)",
          content: `
<p class="mb-4 text-justify">
Pour concilier ces deux impératifs apparemment irréconciliables, la réponse organisationnelle réside dans le déploiement d'une <strong>structure organisationnelle ambidextre</strong> (Charles O'Reilly & Michael Tushman, 1996) :
</p>
<ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
  <li><strong>Le bras d'Exploitation (La Forteresse Documentaire) :</strong> Maintien et renforcement intransigeant du modèle hiérarchique, des normes NF Z40-350, ISO 27001 et SIAF sur les 29 dépôts et les 3 datacenters. Ce pôle assure la rentabilité récurrente, la trésorerie et la confiance inébranlable des 36 fleurons du CAC 40.</li>
  <li><strong>Le bras d'Exploration (Le Hub Logiciel & IA) :</strong> Octroi d'une autonomie culturelle, spatiale et managériale réelle aux entités tech (Xelians Intégration Services, filiales logicielles, R&D). Ce pôle doit adopter des modes de gouvernance adhocratiques (méthodes agiles, rituels de rétroaction rapide, droit à l'erreur mesuré) pour rivaliser avec la vélocité des géants mondiaux.</li>
</ul>
<p class="mb-4 text-justify">
C'est à cette unique condition d'hybridation équilibrée que Xelians convertira sa devise – <em>« Plus que des données, votre avenir »</em> – en un avantage concurrentiel durable pour le demi-siècle à venir.
</p>
`
        }
      ],
      illustrationRef: "ill-05",
      illustrationTitle: "Synthèse prospective de l'ambidextrie organisationnelle : équilibre Forteresse & Vélocité Logicielle",
      theoreticalConcept: "Théorie de l'Organisation Ambidextre (O'Reilly & Tushman) & Piège de la compétence (March)"
    }
  ],

  illustrations: [
    {
      id: "ill-01",
      number: 1,
      title: "Plan architectural & vue en coupe d'un site de stockage haute sécurité certifié NF Z40-350 / ISO 27001",
      cartonId: "box-01",
      legend: "Source : Xelians Présentation Corporate 2026 — Notion de cours : Artefacts physiques & sanctuarisation de Schein",
      description: "Coupe technique d'un bâtiment de conservation haute sécurité Xelians : sas biométrique étanche, régulation hygrométrique 50% HR, système d'extinction par gaz inerte Novec/Inergen, rayonnages mobiles automatisés grande hauteur et confinement anti-intrusion de classe P3."
    },
    {
      id: "ill-02",
      number: 2,
      title: "Charte chromatique officielle Xelians et sémiologie du logo à boucle infinie",
      cartonId: "box-02",
      legend: "Source : Charte de style Xelians 2019 — Notion de cours : Artefacts symboliques et transmission des valeurs",
      description: "Décomposition chromatique officielle (Bleu ciel #0EBCFF, Bleu roi #1464FF, Bleu nuit #241F63, Sombre support #0F0D2D, Accent Framboise #FF4A54) et analyse du logotype en boucle d'infinité stylisée figurant la pérennité du cycle de vie documentaire."
    },
    {
      id: "ill-03",
      number: 3,
      title: "Le voilier de course au large Mini 6.50 sponsorisé par Xelians (Skippers Caroline Boule & Benoît Marie)",
      cartonId: "box-03",
      legend: "Source : Xelians RSE & Innovation 2026 — Notion de cours : Valeurs déclarées vs image externe de dépassement",
      description: "Le prototype Mini 6.50 à foils aux couleurs de Xelians en vol au-dessus de l'eau. Vecteur métaphorique projetant l'agilité, la haute technologie et le dépassement de soi en contrepoint à la pesanteur historique des 9 000 km d'archives physiques."
    },
    {
      id: "ill-04",
      number: 4,
      title: "Radar OCAI modélisant le profil organisationnel de Xelians (Cameron & Quinn)",
      cartonId: "box-04",
      legend: "Analyse OCAI d'après la grille de Cameron & Quinn — Notion de cours : Diagnostic de culture organisationnelle",
      description: "Modélisation en radar des quatre quadrants du Competing Values Framework : hyper-dominance Hiérarchique (42%) et forte composante Marché (28%), confrontées au profil souhaité pour relever le défi de l'IA (Adhocratie à 30%)."
    },
    {
      id: "ill-05",
      number: 5,
      title: "Frise chronologique et cartographie stratégique des acquisitions M&A du groupe Xelians (2004 - 2026)",
      cartonId: "box-05",
      legend: "Source : Document Institutionnel 2026 — Notion de cours : Chrono-compétition et adaptation stratégique",
      description: "Évolution de la trajectoire du groupe : de la conservation pure (Archiveco 1977 / Locarchives 1982) au BPO (Scaneco 2004, CD-Doc 2017), à l'extraction automatisée (DIS 2023), à l'intégration M365 (Sodoc 2025) et à l'IA générative souveraine 2026 financée par 20% de CA en R&D."
    }
  ],

  glossary: [
    {
      term: "DUA (Durée d'Utilité Administrative)",
      def: "Période pendant laquelle un document d'archive doit être conservé dans un état permettant son utilisation immédiate à des fins juridiques, contentieuses ou administratives. Déterminée par la législation française (Code de commerce, Code civil, Code du travail)."
    },
    {
      term: "Valeur Probante",
      def: "Propriété conférée à un document électronique lui permettant de produire les mêmes effets juridiques et probatoires qu'un original papier devant un tribunal (article 1366 du Code civil français)."
    },
    {
      term: "NF Z40-350 / Marque NF 342",
      def: "Norme française homologuée d'exigence pour les prestations de gestion et de conservation d'archives physiques (bâtiments, climatisation, sécurité incendie, traçabilité des boîtes)."
    },
    {
      term: "NF Z42-026 / Marque NF 544",
      def: "Norme définissant les conditions de numérisation fidèle des documents sur support papier, garantissant la conformité de la copie numérique et l'intégrité de l'empreinte cryptographique."
    },
    {
      term: "SIAF (Service Interministériel des Archives de France)",
      def: "Autorité de tutelle étatique relevant du Ministère de la Culture, délivrant l'agrément obligatoire pour conserver des archives publiques courantes et intermédiaires des ministères et administrations."
    },
    {
      term: "HDS (Hébergeur de Données de Santé)",
      def: "Certification obligatoire délivrée selon le référentiel de l'Agence du Numérique en Santé (ANS) pour tout prestataire hébergeant des données médicales à caractère personnel."
    },
    {
      term: "SAE (Système d'Archivage Électronique) NF Z42-013",
      def: "Système informatique hautement sécurisé assurant la pérennité, la confidentialité, l'intégrité et la lisibilité des archives électroniques sur de très longues périodes."
    },
    {
      term: "Modèle de Schein (1985)",
      def: "Théorie de sociologie des organisations structurant la culture en trois strates superposées : 1) Les artefacts visibles, 2) Les valeurs affichées, 3) Les présupposés fondamentaux inconscients."
    },
    {
      term: "Modèle OCAI de Cameron & Quinn",
      def: "Organizational Culture Assessment Instrument : grille d'évaluation des cultures d'entreprise répartissant les postures sur quatre quadrants : Clan, Adhocratie, Hiérarchie, Marché."
    },
    {
      term: "Chrono-compétition (George Stalk)",
      def: "Approche stratégique selon laquelle la rapidité de traitement de l'information et la compression des délais d'exécution constituent l'avantage concurrentiel déterminant face aux rivaux."
    },
    {
      term: "Organisation Ambidextre (O'Reilly & Tushman)",
      def: "Capacité d'une entreprise à mener de front deux dynamiques contradictoires : l'exploitation efficiente de son cœur de métier historique et l'exploration risquée d'innovations de rupture."
    }
  ]
};
