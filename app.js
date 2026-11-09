/* İklim Akademisi — çalışan prototip (içerik sürümü 2.3).
   Veri: js/content.js (tools/build_app.py ile 2.3 paketinden üretilir). Sunucu gerektirmez. */
(function () {
'use strict';
const C = window.IKO_CONTENT;
const LANGS = ['tr', 'en', 'fr'];
const POSE = { M01: 'thermometer', M04: 'magnifier', M05: 'apple' };
const DEMO_IDS = Object.keys(C.locales.tr.demo_modules);

/* ---------- Arayüz metinleri (JSON'da bulunmayan uygulama etiketleri; EN/FR çeviri taslağı) ---------- */
const T = {
tr: {
 skip:'İçeriğe geç', nav:{home:'Ana sayfa',games:'Oyunlar',about:'Akademimiz',child:'Çocuklar',teacher:'Belge merkezi',adult:'Yetişkinler',visitor:'Ziyaretçi turu',ages:'Yaş grupları',catalog:'Modüller',sources:'Kaynaklar ve sürüm'},
 banner:'COP31 Tema 1 · Yeşil Beceri ve İklim Okuryazarlığı · Pilot proje önerisi, Konya · İçerik sürümü {v}',
 chooseEntry:'Nereden başlamak istersiniz?', entry:{child:'İKO ile 7–12 yaş etkinlikleri',teacher:'Öğretmen paketleri, kartlar ve katalog',adult:'Ev, iş ve tüketim kararları',visitor:'90 saniyelik görsel tur'},
 child:{hello:'Merhaba! Ben İKO.',pick:'Yaşını seç:',acts:'Etkinlikler',play:'Kart oyununu oyna',open:'Etkinliği aç',
   does:{M01:'İKO termometreye bakıyor: Gözünle bak, ölçümü oku, hissini ayrı yaz.',M04:'İKO büyüteçle yakından bakıyor: Toprağı ve samanı gözle, eldivenle dokun.',M05:'İKO elma tabağı tutuyor: Bak, dokun; istersen kokla ve tat. İstemezsen kartla aynı görevi yaparsın.'}},
 home:{chip:'GÖZLE · ÖLÇ · DENE · İZLE',h1a:'İklim',h1b:'Akademisine hoş geldiniz',bubble:'Merhaba, ben İKO! Birlikte keşfedelim mi?',sticker:'Merak et',lead:'Her yaştan katılımcı için iklimi kendi çevremizde okumaya dayanan etkinlikler: gözlemden kanıta, kanıttan küçük bir eyleme. Çocuklar İKO ile keşfeder, öğretmenler hazır paketlere ulaşır, yetişkinler ev ve iş kararlarını inceler.',go:'Yaş gruplarını gör',play:'Çocuklar için oyun',stats:['8 yaş grubu · 60 modül','60 ayrıntılı öğretmen paketi','7–12 yaş pilot programı'],kick:'BÖLÜMÜNÜ SEÇ',pick:'Bugün nereden başlamak istersiniz?',more:'Akademiyi tanıyın',greet:'Merhaba, küçük doğa dostu! İKO ile oyna, doğayı tanı ve yeni şeyler dene. Hazırsan macera başlasın!'},
 teacher:{title:'Öğretmen ve belge merkezi',ws:'Öğrenci çalışma sayfası (renkli)',wsl:'Öğrenci çalışma sayfası (az mürekkep)',proj:'Proje önerisi',agepdf:'Yaş grubu müfredatı',dl:'İndirilebilir dosyalar',packs:'Gösterim modülü paketleri (Türkçe PDF)',pack:'Öğretmen paketi',cards:'Kesilebilir kartlar (çift taraflı)',other:'Diğer belgeler',
   sense:'Beş duyu haritası',mat:'Materyal listesi',cons:'Otomatik tutarlılık raporu',chg:'Değişiklik kaydı',catalog:'Akademi kataloğu',
   missing:'Henüz hazırlanmadı: ses kayıtları, fotoğraf kartları ve resmî iklim normali grafiği. Uygulama bunların yerine metin alternatifi gösterir.'},
 adult:{title:'Yetişkin katılımcılar',ex:'Yetişkin programından örnek modüller',note:'Yetişkin modülleri genişleme programı için hazırlanmıştır. Kişisel fatura, gelir veya sağlık bilgisi istenmez.'},
 visitor:{title:'Ziyaretçi turu',step:'Adım {i} / {n}',next:'İleri',prev:'Geri',outcome:'Öğrenme sonucu',dl:'Ziyaretçi kartları (PDF)',start:'Turu başlat'},
 ages:{title:'Yaş grupları',open:'Modülleri gör',pilot:'Pilot',ext:'Genişleme programı'},
 cat:{title:'Modül kataloğu (60)',all:'Tümü',demo:'Ayrıntılı paket · içerik 2.4',orig:'Özet tasarım',detailed:'Ayrıntılı paket · içerik 2.4',summary:'Yalnız özet çevrildi; ayrıntı Türkçe',partial:'Yapılandırılmış içerik; tam paket Türkçe',open:'Aç',min:'dk'},
 mod:{back:'← Kataloğa dön',tgoal:'Öğretmen için amaç',lgoal:'Katılımcı için amaç',steps:'Katılımcı adımları',flow:'Dakikalı akış',protocol:'Standart protokol',game:'Oyun notu',sci:'Bilimsel not',senses:'Beş duyu: ekranda ve masada',screen:'Ekranda (uygulama)',physical:'Masada (fiziksel malzemeyle)',safety:'Güvenlik',assess:'Değerlendirme',calc:'Hesaplama kuralı',cards:'Ana kartlar',dls:'İndirmeler',pdfTr:'Türkçe PDF',play:'M01 kart oyununu aç',
   none:'Bu modülün ayrıntılı içeriği bu dilde yok. Yalnız başlık ve özet çevrildi.',openTr:'Türkçe sürümü aç',trFile:'Özgün Türkçe tasarım dosyası (Markdown)',
   orig:'Bu metin modülün Türkçe özet tasarımıdır.',partialNote:'Bu dilde yapılandırılmış özet içerik var. Tam öğretmen paketi, çalışma kâğıdı ve bütün kartlar yalnız Türkçe.',
   section:'Bölüm',child:'Çocuk için',teacherView:'Öğretmen için',st:{content:'İçerik hazırlığı',expert_review:'Uzman incelemesi',field:'Saha uygulaması'},guide:'Öğretmen kılavuzunun tamamı (Türkçe)',meb:'MEB öğretim programı (tematik ilişki)',srcs:'Kaynaklar',dtl:'Ayrıntılı modül paketi (içerik 2.4). Uzman incelemesi ve saha uygulaması pilot sürecinde yapılacaktır.',docxT:'Öğretmen kılavuzu (Word)',docxL:'Çalışma sayfası (Word)',docxA:'Cevap anahtarı (Word)',dgame:'İlgili dijital oyunu aç',mats:'Temin edilecek materyaller'},
 senseName:{sight:'Görme',hearing:'İşitme',touch:'Dokunma',smell:'Koku',taste:'Tat'},
 screen:{
  M01:{sight:'Kart metnini ve simgesini oku; resmî grafik hazırlanmadı (metin alternatifi aşağıda).',hearing:'Ses kaydı hazırlanmadı: aşağıdaki metin alternatifini dinle veya oku.',touch:'Ekranda dokunma görevi yok; kartı tıkla veya sürükle.',smell:'—',taste:'—'},
  M04:{sight:'Bulanıklık ölçeğini ekranda gör (1 berrak – 3 çok bulanık).',hearing:'Ekranda ses yok; süreyi masada say.',touch:'Ekranda dokunma görevi yok.',smell:'Kullanılmaz.',taste:'Kullanılmaz.'},
  M05:{sight:'Fotoğraf kartı hazırlanmadı: metin alternatifini oku.',hearing:'Isırma sesi kaydı hazırlanmadı: metin alternatifini oku.',touch:'Ekranda dokunma görevi yok.',smell:'Ekranda yalnız güvenlik hatırlatması; koklama isteğe bağlı ve masada.',taste:'Ekranda yalnız güvenlik hatırlatması; tadım isteğe bağlı ve masada, izin ve alerji kontrolünden sonra.'}},
 media:{audio:'Ses kaydı hazırlanmadı',audioM01:'Metin alternatifi: Birinci kayıt — yağmur damlalarının pencereye ve çatıya düzenli vuruşu. İkinci kayıt — ağaç dallarını sallayan, kesik kesik esen rüzgârın uğultusu.',
   audioM05:'Metin alternatifi: Taze elma dilimi ısırılınca kısa ve net bir “çıtır” sesi çıkar.',photo:'Fotoğraf kartı hazırlanmadı',photoM05:'Metin alternatifi: Örnek 1 düzgün ve parlak kabuklu bir elma dilimi; Örnek 2 aynı çeşitten, kabuğunda küçük lekeler olan, kenarı düzensiz bir dilim.',
   graph:'Resmî iklim normali grafiği hazırlanmadı',graphTxt:'Grafik yalnız Meteoroloji Genel Müdürlüğü verisi kurum ve dönem bilgisiyle doğrulandıktan sonra eklenecek. Uygulama grafik veya değer uydurmaz; kart 4 bu sırada sözlü işlenir.'},
 game:{title:'Zaman Dedektifi',how:'Bir kartı seç (tıkla, sürükle ya da Tab ile gelip Enter’a bas), sonra bir sepete koy (sepete tıkla ya da {keys} tuşuna bas).',sel:'Seçili kart',placed:'{a} / {n} kart yerleşti',
   ok:'Doğru sepet!',bad:'Bu seçim beklenen yanıt değil.',hint:'İpucu: Kartta zamanı anlatan kelimeyi bul ve yeniden dene.',reason:'Gerekçe',again:'Yeniden dene',reset:'Baştan başla',done:'Bütün kartlar yerleşti. Şimdi bir arkadaşına bir kartın gerekçesini anlat.',
   bins07:{today:'BUGÜN — hava',years:'UZUN YILLAR — iklim'},bins10:{obs:'Hava gözlemi',forecast:'Hava tahmini',climate:'İklim',faulty:'Hatalı çıkarım'},choose:'Yaş düzeyi:',deck:'Kartlar',demo:'DEMO: sonuçlar kaydedilmez ve kimseyle paylaşılmaz.'},
 src:{title:'Kaynaklar ve içerik sürümü',ver:'İçerik sürümü',built:'Derleme tarihi',check:{archive_copy:'Kurumun resmî arşiv kopyası okundu (canlı sayfa açılamadı)',opened:'Resmî sayfa bu çalışmada açılarak kontrol edildi',opened_partial:'Resmî sayfalar kısmen doğrulandı',search:'Arama sonuçlarıyla karşılaştırıldı',secondary:'Raporu aktaran ikincil kaynaklarla karşılaştırıldı',record_only:'Ana dosya kaydına dayanır; bu çalışmada yeniden açılmadı'},
   noteLang:'',trans:'Çeviri durumu',transTxt:'İngilizce ve Fransızca metinlerin tamamı çeviri taslağıdır ve dil uzmanı kontrolü bekler.',files:'Paket belgeleri'},
 a11y:'Erişilebilirlik', foot:'İklim Akademisi · COP31 Tema 1 · İçerik sürümü {v} · Güncelleme {d} · Kişisel veri toplanmaz.'
},
en: {
 skip:'Skip to content', nav:{home:'Home',games:'Games',about:'Our academy',child:'Children',teacher:'Documents',adult:'Adults',visitor:'Visitor tour',ages:'Age groups',catalog:'Modules',sources:'Sources and version'},
 banner:'COP31 Theme 1 · Green Skills and Climate Literacy · Pilot project proposal, Konya · Content version {v}',_b0:'yet tested in practice · No participant data collected, no results stored.',
 chooseEntry:'Where would you like to start?', entry:{child:'Activities for ages 7–12 with İKO',teacher:'Teacher packs, cards and catalogue',adult:'Decisions at home, at work and as consumers',visitor:'A 90-second visual tour'},
 child:{hello:'Hello! I am İKO.',pick:'Choose your age:',acts:'Activities',play:'Play the card game',open:'Open the activity',
   does:{M01:'İKO is looking at a thermometer: look with your eyes, read the measurement, write your feeling separately.',M04:'İKO is looking closely with a magnifier: observe the soil and straw, touch them with gloves.',M05:'İKO is holding a plate of apple: look and touch; if you want, smell and taste. If not, you do the same task with cards.'}},
 home:{chip:'OBSERVE · MEASURE · TEST · TRACK',h1a:'Welcome to the',h1b:'Climate Academy',bubble:'Hi, I am İKO! Shall we explore together?',sticker:'Be curious',lead:'Activities for every age built on reading the climate in our own surroundings: from observation to evidence, from evidence to one small action. Children explore with İKO, teachers find ready-to-use packs, adults examine decisions at home and at work.',go:'See the age groups',play:'A game for children',stats:['8 age groups · 60 module designs','60 detailed teacher packs (Turkish)','Pilot for ages 7–12'],kick:'CHOOSE YOUR SECTION',pick:'Where would you like to start today?',more:'About the academy',greet:'Hello, young friend of nature! Play with İKO, get to know nature and try new things. Ready? Let the adventure begin!'},
 teacher:{title:'Teacher and document centre',ws:'Student worksheet (colour)',wsl:'Student worksheet (low ink)',proj:'Project proposal',agepdf:'Age-group curriculum',dl:'Downloads',packs:'Demonstration module packs (PDF in Turkish)',pack:'Teacher pack',cards:'Cut-out cards (double-sided)',other:'Other documents',
   sense:'Five-senses map',mat:'Materials list',cons:'Automated consistency report',chg:'Change log',catalog:'Academy catalogue',
   missing:'Not yet prepared: audio recordings, photo cards and the official climate-normal graph. The app shows a text alternative instead.'},
 adult:{title:'Adult participants',ex:'Example modules from the adult programme',note:'Adult modules are prepared for the extension programme. No bills, income or health information are requested.'},
 visitor:{title:'Visitor tour',step:'Step {i} of {n}',next:'Next',prev:'Back',outcome:'Learning outcome',dl:'Visitor cards (PDF)',start:'Start the tour'},
 ages:{title:'Age groups',open:'See modules',pilot:'Pilot',ext:'Extension programme'},
 cat:{title:'Module catalogue (60)',all:'All',demo:'Detailed pack · content 2.4',orig:'Summary design',detailed:'Detailed in Turkish · content 2.4',summary:'Summary only; details in Turkish',partial:'Structured content; full pack in Turkish',open:'Open',min:'min'},
 mod:{back:'← Back to catalogue',tgoal:'Goal (teacher)',lgoal:'Goal (participant)',steps:'Participant steps',flow:'Timed plan',protocol:'Standard protocol',game:'Game note',sci:'Science note',senses:'Five senses: on screen and at the table',screen:'On screen (app)',physical:'At the table (with physical materials)',safety:'Safety',assess:'Assessment',calc:'Calculation rule',cards:'Main cards',dls:'Downloads',pdfTr:'PDF in Turkish',play:'Open the M01 card game',
   none:'Detailed content for this module is not available in this language. Only the title and summary have been translated.',openTr:'Open the Turkish version',trFile:'Original Turkish design file (Markdown)',
   orig:'',partialNote:'Structured summary content is available in this language. The full teacher pack, worksheet and all cards are in Turkish only.',
   section:'Section',child:'For children',teacherView:'For teachers',st:{content:'Content preparation',expert_review:'Expert review',field:'Field use'},guide:'Full teacher guide (Turkish)',meb:'Turkish national curriculum (thematic link)',srcs:'Sources',dtl:'Detailed module pack (content 2.4). Expert review and classroom delivery take place during the pilot.',docxT:'Teacher guide (Word)',docxL:'Worksheet (Word)',docxA:'Answer key (Word)',dgame:'Open the related digital game',mats:'Materials to obtain'},
 senseName:{sight:'Sight',hearing:'Hearing',touch:'Touch',smell:'Smell',taste:'Taste'},
 screen:{
  M01:{sight:'Read the card text and icon; the official graph is not prepared (text alternative below).',hearing:'Audio not prepared: read or listen to the text alternative below.',touch:'No touch task on screen; click or drag the card.',smell:'—',taste:'—'},
  M04:{sight:'See the cloudiness scale on screen (1 clear – 3 very cloudy).',hearing:'No sound on screen; count the time at the table.',touch:'No touch task on screen.',smell:'Not used.',taste:'Not used.'},
  M05:{sight:'Photo card not prepared: read the text alternative.',hearing:'Crunch recording not prepared: read the text alternative.',touch:'No touch task on screen.',smell:'On screen only a safety reminder; smelling is optional and done at the table.',taste:'On screen only a safety reminder; tasting is optional, at the table, after consent and allergy checks.'}},
 media:{audio:'Audio recording not prepared',audioM01:'Text alternative: Recording 1 — steady raindrops tapping on a window and roof. Recording 2 — the gusting roar of wind shaking tree branches.',
   audioM05:'Text alternative: biting a fresh apple slice makes a short, clear “crunch”.',photo:'Photo card not prepared',photoM05:'Text alternative: Sample 1 is a regular apple slice with shiny skin; Sample 2 is from the same variety, with small spots on the skin and an uneven edge.',
   graph:'Official climate-normal graph not prepared',graphTxt:'The graph will be added only after the national meteorological service data have been verified with institution and period. The app does not invent graphs or values; card 4 is discussed orally meanwhile.'},
 game:{title:'Time Detective',how:'Choose a card (click, drag, or Tab to it and press Enter), then put it in a basket (click the basket or press {keys}).',sel:'Selected card',placed:'{a} of {n} cards placed',
   ok:'Right basket!',bad:'That is not the expected answer.',hint:'Hint: find the word on the card that tells you the time, then try again.',reason:'Reason',again:'Try again',reset:'Start again',done:'All cards are placed. Now explain one card’s reason to a classmate.',
   bins07:{today:'TODAY — weather',years:'MANY YEARS — climate'},bins10:{obs:'Weather observation',forecast:'Weather forecast',climate:'Climate',faulty:'Faulty inference'},choose:'Level:',deck:'Cards',demo:'DEMO: results are not stored or shared.'},
 src:{title:'Sources and content version',ver:'Content version',built:'Build date',check:{archive_copy:'The agency’s official archived copy was read (live page could not be opened)',opened:'Official page opened and checked in this work',opened_partial:'Official pages partly verified',search:'Compared with search results',secondary:'Compared with secondary sources reporting the study',record_only:'Based on the main-file record; not reopened in this work'},
   noteLang:'Note in Turkish:',trans:'Translation status',transTxt:'All English and French texts are translation drafts awaiting review by a language specialist.',files:'Package documents'},
 a11y:'Accessibility', foot:'Climate Academy · COP31 Theme 1 · Content version {v} · Updated {d} · No personal data collected.'
},
fr: {
 skip:'Aller au contenu', nav:{home:'Accueil',games:'Jeux',about:'Notre académie',child:'Enfants',teacher:'Documents',adult:'Adultes',visitor:'Visite guidée',ages:'Tranches d’âge',catalog:'Modules',sources:'Sources et version'},
 banner:'COP31 Thème 1 · Compétences vertes et culture climatique · Projet pilote proposé, Konya · Version du contenu {v}',_b0:' encore testées en situation réelle · Aucune donnée de participant collectée, aucun résultat enregistré.',
 chooseEntry:'Par où souhaitez-vous commencer ?', entry:{child:'Activités pour les 7–12 ans avec İKO',teacher:'Dossiers pédagogiques, cartes et catalogue',adult:'Décisions à la maison, au travail et comme consommateur',visitor:'Visite visuelle de 90 secondes'},
 child:{hello:'Bonjour ! Je suis İKO.',pick:'Choisis ton âge :',acts:'Activités',play:'Jouer au jeu de cartes',open:'Ouvrir l’activité',
   does:{M01:'İKO regarde un thermomètre : observe avec tes yeux, lis la mesure, note ton ressenti à part.',M04:'İKO observe de près avec une loupe : regarde la terre et la paille, touche-les avec des gants.',M05:'İKO tient une assiette de pomme : regarde et touche ; si tu veux, sens et goûte. Sinon, tu fais la même activité avec des cartes.'}},
 home:{chip:'OBSERVER · MESURER · TESTER · SUIVRE',h1a:'Bienvenue à',h1b:'l’Académie du climat',bubble:'Bonjour, je suis İKO ! On explore ensemble ?',sticker:'Sois curieux',lead:'Des activités pour tous les âges, fondées sur la lecture du climat dans notre propre environnement : de l’observation à la preuve, de la preuve à une petite action. Les enfants explorent avec İKO, les enseignants trouvent des dossiers prêts à l’emploi, les adultes examinent leurs décisions à la maison et au travail.',go:'Voir les tranches d’âge',play:'Un jeu pour les enfants',stats:['8 tranches d’âge · 60 modules conçus','60 dossiers enseignants détaillés (en turc)','Pilote pour les 7–12 ans'],kick:'CHOISISSEZ VOTRE ESPACE',pick:'Par où souhaitez-vous commencer aujourd’hui ?',more:'Découvrir l’Académie',greet:'Bonjour, petit ami de la nature ! Joue avec İKO, découvre la nature et essaie de nouvelles choses. Prêt ? Que l’aventure commence !'},
 teacher:{title:'Espace enseignants et documents',ws:'Fiche élève (couleur)',wsl:'Fiche élève (peu d’encre)',proj:'Proposition de projet',agepdf:'Programme de la tranche d’âge',dl:'Téléchargements',packs:'Dossiers des modules de démonstration (PDF en turc)',pack:'Dossier pédagogique',cards:'Cartes à découper (recto verso)',other:'Autres documents',
   sense:'Carte des cinq sens',mat:'Liste du matériel',cons:'Rapport de cohérence automatique',chg:'Journal des modifications',catalog:'Catalogue de l’Académie',
   missing:'Pas encore préparés : enregistrements audio, cartes photo et graphique officiel des normales climatiques. L’application affiche à la place une alternative textuelle.'},
 adult:{title:'Participants adultes',ex:'Exemples de modules du programme pour adultes',note:'Les modules adultes sont préparés pour le programme d’extension. Aucune facture, aucun revenu ni aucune information de santé ne vous sont demandés.'},
 visitor:{title:'Visite guidée',step:'Étape {i} sur {n}',next:'Suivant',prev:'Retour',outcome:'Ce que l’on apprend',dl:'Fiches visiteurs (PDF)',start:'Commencer la visite'},
 ages:{title:'Tranches d’âge',open:'Voir les modules',pilot:'Pilote',ext:'Programme d’extension'},
 cat:{title:'Catalogue des modules (60)',all:'Tous',demo:'Dossier détaillé · contenu 2.4',orig:'Conception résumée',detailed:'Détaillé en turc · contenu 2.4',summary:'Résumé seulement ; détails en turc',partial:'Contenu structuré ; dossier complet en turc',open:'Ouvrir',min:'min'},
 mod:{back:'← Retour au catalogue',tgoal:'Objectif (enseignant)',lgoal:'Objectif (participant)',steps:'Étapes pour le participant',flow:'Déroulé minuté',protocol:'Protocole standard',game:'Note sur le jeu',sci:'Repère scientifique',senses:'Cinq sens : à l’écran et sur la table',screen:'À l’écran (application)',physical:'Sur la table (avec du matériel)',safety:'Sécurité',assess:'Évaluation',calc:'Règle de calcul',cards:'Cartes principales',dls:'Téléchargements',pdfTr:'PDF en turc',play:'Ouvrir le jeu de cartes M01',
   none:'Le contenu détaillé de ce module n’est pas disponible dans cette langue. Seuls le titre et le résumé ont été traduits.',openTr:'Ouvrir la version turque',trFile:'Fichier de conception original en turc (Markdown)',
   orig:'',partialNote:'Un contenu résumé et structuré existe dans cette langue. Le dossier pédagogique complet, la fiche élève et toutes les cartes n’existent qu’en turc.',
   section:'Section',child:'Pour les enfants',teacherView:'Pour les enseignants',st:{content:'Préparation du contenu',expert_review:'Relecture experte',field:'Mise en œuvre sur le terrain'},guide:'Guide complet de l’enseignant (turc)',meb:'Programme national turc (lien thématique)',srcs:'Sources',dtl:'Dossier de module détaillé (contenu 2.4). La relecture experte et la mise en œuvre en classe ont lieu pendant le pilote.',docxT:'Guide de l’enseignant (Word)',docxL:'Fiche (Word)',docxA:'Corrigé (Word)',dgame:'Ouvrir le jeu numérique associé',mats:'Matériel à se procurer'},
 senseName:{sight:'Vue',hearing:'Ouïe',touch:'Toucher',smell:'Odorat',taste:'Goût'},
 screen:{
  M01:{sight:'Lis le texte et le symbole de la carte ; le graphique officiel n’est pas prêt (alternative textuelle ci-dessous).',hearing:'Enregistrement non préparé : lis l’alternative textuelle ci-dessous.',touch:'Pas de toucher à l’écran ; clique sur la carte ou fais-la glisser.',smell:'—',taste:'—'},
  M04:{sight:'Vois l’échelle de turbidité à l’écran (1 claire – 3 très trouble).',hearing:'Pas de son à l’écran ; compte le temps sur la table.',touch:'Pas de toucher à l’écran.',smell:'Non utilisé.',taste:'Non utilisé.'},
  M05:{sight:'Carte photo non préparée : lis l’alternative textuelle.',hearing:'Enregistrement du croquant non préparé : lis l’alternative textuelle.',touch:'Pas de toucher à l’écran.',smell:'À l’écran, seulement un rappel de sécurité ; sentir est facultatif et se fait sur la table.',taste:'À l’écran, seulement un rappel de sécurité ; goûter est facultatif, sur la table, après autorisation et vérification des allergies.'}},
 media:{audio:'Enregistrement audio non préparé',audioM01:'Alternative textuelle : enregistrement 1 — des gouttes de pluie qui tapent régulièrement sur une fenêtre et un toit. Enregistrement 2 — le grondement d’un vent en rafales qui secoue les branches.',
   audioM05:'Alternative textuelle : croquer une tranche de pomme fraîche produit un « crac » court et net.',photo:'Carte photo non préparée',photoM05:'Alternative textuelle : l’Échantillon 1 est une tranche de pomme régulière à la peau brillante ; l’Échantillon 2, de la même variété, a de petites taches sur la peau et un bord irrégulier.',
   graph:'Graphique officiel des normales climatiques non préparé',graphTxt:'Le graphique ne sera ajouté qu’après vérification des données du service météorologique national (institution et période). L’application n’invente ni graphique ni valeur ; en attendant, la carte 4 est traitée à l’oral.'},
 game:{title:'Détective du temps',how:'Choisis une carte (clique, fais-la glisser, ou atteins-la avec Tab et appuie sur Entrée), puis mets-la dans un panier (clique sur le panier ou appuie sur {keys}).',sel:'Carte choisie',placed:'{a} cartes placées sur {n}',
   ok:'Bon panier !',bad:'Ce n’est pas la réponse attendue.',hint:'Indice : trouve sur la carte le mot qui indique le temps, puis réessaie.',reason:'Justification',again:'Réessayer',reset:'Recommencer',done:'Toutes les cartes sont placées. Explique maintenant la justification d’une carte à un camarade.',
   bins07:{today:'AUJOURD’HUI — météo',years:'DE NOMBREUSES ANNÉES — climat'},bins10:{obs:'Observation météo',forecast:'Prévision météo',climate:'Climat',faulty:'Conclusion abusive'},choose:'Niveau :',deck:'Cartes',demo:'DÉMO : les résultats ne sont ni enregistrés ni partagés.'},
 src:{title:'Sources et version du contenu',ver:'Version du contenu',built:'Date de génération',check:{archive_copy:'Copie d’archive officielle de l’organisme consultée (page en ligne non accessible)',opened:'Page officielle ouverte et vérifiée dans ce travail',opened_partial:'Pages officielles vérifiées en partie',search:'Comparé à des résultats de recherche',secondary:'Comparé à des sources secondaires citant l’étude',record_only:'Fondé sur la fiche du dossier principal ; non rouvert dans ce travail'},
   noteLang:'Note en turc :',trans:'État de la traduction',transTxt:'Tous les textes anglais et français sont des projets de traduction en attente de relecture par un spécialiste.',files:'Documents du dossier'},
 a11y:'Accessibilité', foot:'Académie du climat · COP31 Thème 1 · Version du contenu {v} · Mise à jour {d} · Aucune donnée personnelle collectée.'
}};
/* Doğru kategoriler (sabit kart kimlikleriyle) */
const ANSWER = {
 '07_09-M01-C01':'today','07_09-M01-C02':'today','07_09-M01-C03':'years','07_09-M01-C04':'years',
 '10_12-M01-C01':'obs','10_12-M01-C02':'forecast','10_12-M01-C03':'climate','10_12-M01-C04':'climate',
 '10_12-M01-C05':'obs','10_12-M01-C06':'climate','10_12-M01-C07':'faulty','10_12-M01-C08':'climate'};

/* ---------- Durum ---------- */
const store = { get(k){ try{return localStorage.getItem(k);}catch(e){return null;} }, set(k,v){ try{localStorage.setItem(k,v);}catch(e){} } };
let lang = LANGS.includes(store.get('iko-lang')) ? store.get('iko-lang') : 'tr';
const game = { mid:null, placed:{}, tries:{}, selected:null, feedback:null };

/* ---------- Yardımcılar ---------- */
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const L = () => C.locales[lang];
const t = () => T[lang];
const fmt = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k]);
const svg = k => C.icons[k] ? `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${C.icons[k]}</svg>` : '';
const iko = (pose, cls='', alt='') => `<img src="iko_${pose}_web.png" class="${cls}" alt="${esc(alt)}">`;
const topic = mid => mid.split('-')[1];
const ageOf = mid => mid.split('-')[0];
const DLT = {
 tr:{dl:'PDF indir',mb:'MB',prep:'Dosya hazırlanıyor…',ask:'İndirme onayı için açılan pencereyi onaylayın.',ok:'Dosya indirildi.',no:'İndirme iptal edildi.',busy:'Bir indirme penceresi zaten açık; birkaç saniye sonra tekrar deneyin.',na:'Bu görünümde indirme kullanılamıyor. Dosyalar proje paketinde de yer alır.',err:'Dosya açılamadı. Lütfen tekrar deneyin.',
   docsCta:'Bütün belgeler (PDF)',lead:'Bütün modül paketleri, çalışma sayfaları, kartlar ve program belgeleri PDF olarak buradadır. Bir yaş grubu seçin, istediğiniz belgeyi indirin.',featured:'Temel belgeler',fCat:'Akademinin amacı, yaş grupları ve modüllerin özeti',fSense:'Modüllerde hangi duyunun nasıl kullanıldığı',fMat:'Modüller için gereken malzemeler',fProj:'Projenin amacı, yöntemi ve uygulama planı',cur:'Yaş grubu müfredatları',curNote:'Her yaş grubunun amaçları, süreleri, etkinlikleri ve materyalleri.',packs:'Modül paketleri',packsNote:'Her modül için öğretmen paketi, öğrenci çalışma sayfası, az mürekkepli baskı ve kesilebilir kartlar.',mod:'Modül',files:'Belgeler',pack:'Öğretmen paketi',ws:'Çalışma sayfası',wsl:'Az mürekkep',cards:'Kartlar',games:'Oyun kartları (ekransız sürüm)',gamesNote:'Dijital oyunların sınıfta ekransız oynanabilen kart setleri.',count:'{n} PDF belge'},
 en:{dl:'Download PDF',mb:'MB',prep:'Preparing the file…',ask:'Please confirm the download in the window that opens.',ok:'File downloaded.',no:'Download cancelled.',busy:'A download window is already open; try again in a few seconds.',na:'Downloads are not available in this view. The files are also included in the project package.',err:'The file could not be opened. Please try again.',
   docsCta:'All documents (PDF)',lead:'All module packs, worksheets, cards and programme documents are here as PDFs. Choose an age group and download what you need.',featured:'Key documents',fCat:'Aims, age groups and module overview',fSense:'How each sense is used in the modules',fMat:'Materials needed for the modules',fProj:'Aim, method and delivery plan',cur:'Age-group curricula',curNote:'Aims, durations, activities and materials for each age group.',packs:'Module packs',packsNote:'For each module: teacher pack, student worksheet, low-ink print and cut-out cards (Turkish).',mod:'Module',files:'Documents',pack:'Teacher pack',ws:'Worksheet',wsl:'Low ink',cards:'Cards',games:'Game cards (screen-free version)',gamesNote:'Card sets for playing the digital games in class without screens.',count:'{n} PDF documents'},
 fr:{dl:'Télécharger le PDF',mb:'Mo',prep:'Préparation du fichier…',ask:'Veuillez confirmer le téléchargement dans la fenêtre qui s’ouvre.',ok:'Fichier téléchargé.',no:'Téléchargement annulé.',busy:'Une fenêtre de téléchargement est déjà ouverte ; réessayez dans quelques secondes.',na:'Le téléchargement n’est pas disponible dans cette vue. Les fichiers figurent aussi dans le dossier du projet.',err:'Le fichier n’a pas pu être ouvert. Veuillez réessayer.',
   docsCta:'Tous les documents (PDF)',lead:'Tous les dossiers de modules, fiches, cartes et documents de programme sont ici en PDF. Choisissez une tranche d’âge et téléchargez ce dont vous avez besoin.',featured:'Documents clés',fCat:'Objectifs, tranches d’âge et aperçu des modules',fSense:'Utilisation de chaque sens dans les modules',fMat:'Matériel nécessaire aux modules',fProj:'Objectif, méthode et plan de mise en œuvre',cur:'Programmes par tranche d’âge',curNote:'Objectifs, durées, activités et matériel de chaque tranche d’âge.',packs:'Dossiers des modules',packsNote:'Pour chaque module : dossier enseignant, fiche élève, impression économe et cartes à découper (en turc).',mod:'Module',files:'Documents',pack:'Dossier enseignant',ws:'Fiche élève',wsl:'Peu d’encre',cards:'Cartes',games:'Cartes de jeu (version sans écran)',gamesNote:'Jeux de cartes pour jouer en classe sans écran.',count:'{n} documents PDF'}};
const D = () => DLT[lang];
const mbOf = b => (b/1048576).toLocaleString(lang==='tr'?'tr-TR':(lang==='fr'?'fr-FR':'en-GB'),{maximumFractionDigits:1, minimumFractionDigits:1});
const PDF_IC = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 2.5h8l4.5 4.5v14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-18A.5.5 0 0 1 6 2.5z" fill="#fff" stroke="currentColor" stroke-width="1.5"/><path d="M14 2.5V7h4.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8.5 13.5h7M8.5 16.5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
const DL_IC = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function fileLink(key, label){
  const f = C.files[key];
  if (!f) return '';                                   // dosya yoksa bağlantı üretilmez
  const lg = f.lang !== lang ? ` <span class="badge none">${esc(f.lang.toUpperCase())}</span>` : '';
  return `<div class="dl"><span class="dl-l"><span class="pdf-ic">${PDF_IC}</span>${esc(label)}${lg}</span><a class="btn sec dl-btn" href="${esc(f.href)}" download="${esc(f.name)}" data-file="${esc(key)}">${DL_IC}<span>${esc(D().dl)} · ${mbOf(f.bytes)} ${esc(D().mb)}</span></a></div>`;
}
function chip(key, label){
  const f = C.files[key]; if (!f) return '';
  return `<a class="pchip" href="${esc(f.href)}" download="${esc(f.name)}" data-file="${esc(key)}" title="${esc(f.name)}"><span class="pdf-ic">${PDF_IC}</span><span>${esc(label)}<small>${mbOf(f.bytes)} ${esc(D().mb)}</small></span></a>`;
}
function docCard(key, title, desc){
  const f = C.files[key]; if (!f) return '';
  return `<a class="card link doc" href="${esc(f.href)}" download="${esc(f.name)}" data-file="${esc(key)}"><span class="doc-ic">${PDF_IC}</span><span class="doc-t"><b>${esc(title)}</b><span class="muted">${esc(desc)}</span><small>PDF · ${mbOf(f.bytes)} ${esc(D().mb)}</small></span><span class="doc-go">${DL_IC}</span></a>`;
}
function say(msg){ const el=$('#live'); el.textContent=''; setTimeout(()=>{el.textContent=msg;},30); }

/* ---------- Kabuk ---------- */
function shell(route){
  document.documentElement.lang = lang;
  $('#skip-link').textContent = t().skip;
  $('#brand-name').textContent = L().academy.name;
  const items = ['home','about','child','games','teacher','adult','visitor','catalog','ages','sources'];
  const cur = route[0] === 'module' ? 'catalog' : (route[0] === 'play' ? 'games' : route[0]);
  $('#mainnav').innerHTML = items.map(k => `<a href="#/${k}" ${k===cur?'aria-current="page"':''}>${esc(t().nav[k])}</a>`).join('');
  $('#lang-group').setAttribute('aria-label', L().ui.menu.language);
  $('#lang-group').innerHTML = LANGS.map(l => `<button type="button" data-lang="${l}" aria-pressed="${l===lang}" lang="${l}">${esc(C.locales[l].ui.languages[l])}</button>`).join('');
  $('#a11y-toggle').setAttribute('aria-label', t().a11y);
  const a = L().ui.accessibility;
  $('#a11y-panel').innerHTML = [['large',a.large_text],['contrast',a.high_contrast],['reduce',a.reduce_motion]].map(([c,lbl]) =>
    `<label><input type="checkbox" data-a11y="${c}" ${document.body.classList.contains(c)?'checked':''}> ${esc(lbl)}</label>`).join('') + `<span class="muted">${esc(a.keyboard)} ✓ · ${esc(a.captions)}: ${esc(t().media.audio)}</span>`;
  $('#demo-banner').textContent = fmt(t().banner, {v:C.version});
  $('#foot').textContent = fmt(t().foot, {v:C.version, d:C.built});
}

/* ---------- Sayfalar ---------- */
const PICK_ICO = {"book": "<svg viewBox=\"0 0 24 24\" width=\"64\" height=\"64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 4.5A1.5 1.5 0 0 1 5.5 3H11v17H5.5A1.5 1.5 0 0 1 4 18.5zM20 4.5A1.5 1.5 0 0 0 18.5 3H13v17h5.5a1.5 1.5 0 0 0 1.5-1.5z\"/></svg>", "home": "<svg viewBox=\"0 0 24 24\" width=\"64\" height=\"64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3.5 11 12 4l8.5 7\"/><path d=\"M6 9.5V20h12V9.5\"/><path d=\"M10 20v-5h4v5\"/></svg>", "globe": "<svg viewBox=\"0 0 24 24\" width=\"64\" height=\"64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z\"/></svg>"};
function pageHome(){
  const e = t().entry, hm = t().home;
  const tile = (k, pose, ic) => `<a class="card link pick" href="#/${k}"><span class="pick-ic">${ic ? `<span class="pick-svg">${PICK_ICO[ic]}</span>` : iko(pose)}</span><h3>${esc(t().nav[k])}</h3><p class="muted">${esc(e[k])}</p><span class="pick-go">→</span></a>`;
  return `<section class="welcome">
   <div class="w-art"><div class="w-bubble">${esc(hm.bubble)}</div><div class="w-stage"><img src="iko_wave.png" alt="İKO" class="w-iko"><span class="w-sticker">✦ ${esc(hm.sticker)}</span></div></div>
   <div class="w-text"><span class="w-chip">✳ ${esc(hm.chip)}</span><h1 class="w-h1">${esc(hm.h1a)}<span>${esc(hm.h1b)}</span></h1>
    <p class="w-lead">${esc(hm.lead)}</p>
    <div class="w-btns"><a class="btn big" href="#/teacher">${esc(D().docsCta)} →</a><a class="btn sec big" href="#/ages">${esc(hm.go)} ↗</a><a class="btn sec big" href="#/games">${esc(hm.play)} →</a></div>
    <div class="w-stats">${hm.stats.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>
  </section>
  <section class="adv"><p class="kick">${esc(hm.kick)}</p><h2>${esc(hm.pick)}</h2>
   <div class="grid picks">${tile('child','wave')}${tile('teacher','magnifier','book')}${tile('adult','thermometer','home')}${tile('visitor','apple','globe')}</div>
   <p style="text-align:center"><a href="#/about">${esc(hm.more)} →</a></p></section>`;
}
function pageAbout(){
  const a = L().academy;
  return `<h1>${esc(a.name)}</h1><p class="lead">${esc(a.project_summary)}</p><div class="note">${esc(a.event_status)}</div>
  <h2>${esc(L().ui.menu.academy)}</h2><ol>${a.learning_cycle.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>
  <div class="grid">${['teacher','child','adult','visitor'].map(k=>`<div class="card"><h3>${esc(t().nav[k==='child'?'child':k])}</h3><p>${esc(a.audiences[k])}</p></div>`).join('')}</div>
  <h2>${esc(t().src.title)}</h2><p class="muted">${esc(a.evidence_principles)}</p><p><a href="#/sources">${esc(t().nav.sources)} →</a></p>`;
}
function pageChild(route){
  const a = L().academy, age = route[1];
  let h = `<div class="hero">${iko('wave','', 'İKO')}<div class="bubble"><h1>${esc(t().child.hello)}</h1><p class="lead">${esc(t().home.greet)}</p><p>${esc(a.audiences.child)}</p></div></div>
  <h2>${esc(t().child.pick)}</h2><div class="filters">${['07_09','10_12'].map(b=>`<a href="#/child/${b}" ${b===age?'aria-current="true"':''}>${esc(L().age_groups[b].label)}</a>`).join('')}</div>`;
  if (age) {
    h += `<h2>${esc(t().child.acts)}</h2><div class="grid">` + ['M01','M04','M05'].map(m => {
      const mid = `${age}-${m}`, d = L().demo_modules[mid];
      return `<div class="card">${iko(POSE[m],'iko-sm','İKO')}<h3>${esc(d.title)}</h3><p>${esc(d.learner_goal)}</p><p class="muted">${esc(t().child.does[m])}</p>
       <a class="btn sec" href="#/module/${mid}">${esc(t().child.open)}</a>${m==='M01'?`<a class="btn" href="#/play/time_detective/${age}">${esc(t().child.play)}</a>`:''}</div>`;
    }).join('') + '</div>';
    h += `<div class="info"><b>${esc(L().ui.menu.accessibility)}:</b> ${esc(a.safety_general.join(' '))}</div>`;
  }
  return h;
}
function pageTeacher(route){
  const tt = t().teacher, d = D(), ag = L().age_groups, bands = Object.keys(ag);
  const sel = bands.includes(route && route[1]) ? route[1] : '07_09';
  const n = Object.keys(C.files).length;
  let h = `<div class="doc-hero"><div><h1>${esc(tt.title)}</h1><p class="lead">${esc(d.lead)}</p><span class="badge">${esc(fmt(d.count,{n}))}</span></div>${iko('magnifier','iko-md','İKO')}</div>`;
  h += `<h2>${esc(d.featured)}</h2><div class="doc-grid">${docCard('catalog:'+lang, tt.catalog, d.fCat)}${docCard('project', tt.proj, d.fProj)}${docCard('sense_map', tt.sense, d.fSense)}${docCard('materials', tt.mat, d.fMat)}</div>`;
  h += `<h2>${esc(d.cur)}</h2><p class="muted">${esc(d.curNote)}</p><div class="chips">${bands.map(b => chip('srcpdf:Mufredat_'+b, ag[b].label)).join('')}</div>`;
  h += `<h2 id="paketler">${esc(d.packs)}</h2><p class="muted">${esc(d.packsNote)}</p><div class="filters" role="navigation">` +
    bands.map(b => `<a href="#/teacher/${b}" ${b===sel?'aria-current="true"':''}>${esc(ag[b].label)}</a>`).join('') + '</div>';
  const mods = Object.entries(L().modules).filter(([,m]) => m.age_group === sel);
  h += `<div class="pack-list">` + mods.map(([mid,m]) => `<div class="pack-row"><div class="pack-name"><span class="pack-id">${esc(mid.split('-')[1])}</span><a href="#/module/${mid}">${esc(m.title)}</a><span class="muted small">${m.duration_minutes} ${esc(t().cat.min)}</span></div><div class="pack-files">${chip('pack:'+mid, d.pack)}${chip('learner:'+mid, d.ws)}${chip('learner_lowink:'+mid, d.wsl)}${chip('cards:'+mid, d.cards)}</div></div>`).join('') + '</div>';
  const gl = (C.games[lang] || C.games.tr).games;
  const gchips = gl.map(x => chip('gamecards:'+x.id+':'+lang, x.title) || chip('gamecards:'+x.id+':tr', x.title)).join('');
  if (gchips) h += `<h2>${esc(d.games)}</h2><p class="muted">${esc(d.gamesNote)}</p><div class="chips">${gchips}</div>`;
  return h;
}
function pageAdult(){
  const ta = t().adult, ag = L().age_groups;
  let h = `<h1>${iko('wave','iko-sm','')}${esc(ta.title)}</h1><p class="lead">${esc(L().academy.audiences.adult)}</p><div class="note">${esc(ta.note)}</div><h2>${esc(ta.ex)}</h2>`;
  ['19_25','26_59','60_plus'].forEach(b => {
    h += `<h3>${esc(ag[b].label)} · ${esc(ag[b].format)}</h3><p class="muted">${esc(ag[b].description)}</p><div class="grid">`;
    Object.entries(L().modules).filter(([,m])=>m.age_group===b).forEach(([mid,m]) => { h += moduleTile(mid,m); });
    h += '</div>';
  });
  return h;
}
let tourStep = 0;
function pageVisitor(){
  const vc = L().visitor_cards, ids = Object.keys(vc.cards), n = ids.length;
  tourStep = Math.max(0, Math.min(tourStep, n-1));
  const id = ids[tourStep], c = vc.cards[id];
  return `<h1>${iko('wave','iko-sm','')}${esc(t().visitor.title)}</h1><p>${esc(L().academy.audiences.visitor)}</p>
  <div class="tour" aria-roledescription="carousel"><div class="tstep" id="tstep" data-card="${esc(id)}"><div class="vis">${c.visual.map(svg).join('')}</div>
   <div style="flex:1;min-width:220px"><p class="muted">${esc(fmt(t().visitor.step,{i:tourStep+1,n}))} · ${esc(c.modules)}</p><h2 style="margin-top:0">${esc(c.title)}</h2>
   <ol>${c.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><div class="outcome"><b>${esc(t().visitor.outcome)}:</b> ${esc(c.outcome)}</div></div></div>
   <div class="dots" aria-hidden="true">${ids.map((_,i)=>`<span class="${i===tourStep?'on':''}"></span>`).join('')}</div>
   <div><button class="btn sec" data-tour="-1" ${tourStep===0?'aria-disabled="true"':''}>${esc(t().visitor.prev)}</button><button class="btn" data-tour="1" ${tourStep===n-1?'aria-disabled="true"':''}>${esc(t().visitor.next)}</button></div></div>
  <p class="muted">${esc(vc.footer)}</p><div class="note">${esc(L().academy.event_status)}</div>${fileLink('visitor:'+lang, t().visitor.dl)}`;
}
function pageAges(){
  const ag = L().age_groups;
  return `<h1>${esc(t().ages.title)}</h1><div class="grid">` + Object.entries(ag).map(([b,g]) => {
    const pilot = b==='07_09'||b==='10_12';
    return `<div class="card"><span class="badge ${pilot?'':'none'}">${esc(pilot?t().ages.pilot:t().ages.ext)}</span><h3>${esc(g.label)}</h3><p><b>${esc(g.format)}</b></p><p>${esc(g.description)}</p><p class="muted">${esc(g.status)}</p><a class="btn sec" href="#/catalog/${b}">${esc(t().ages.open)}</a></div>`;
  }).join('') + '</div>';
}
function statusBadge(m){
  if (m.is_demo) return `<span class="badge">${esc(t().cat.demo)}</span>` + (lang!=='tr' ? `<span class="badge warn">${esc(t().cat.partial)}</span>` : '');
  if (m.is_detailed) return lang==='tr' ? `<span class="badge">${esc(t().cat.detailed)}</span>` : `<span class="badge none">${esc(t().cat.summary)}</span>`;
  if (lang === 'tr') return `<span class="badge warn">${esc(t().cat.orig)}</span>`;
  return `<span class="badge none">${esc(t().cat.summary)}</span>`;
}
function statusLine(m){
  if (!m.status_label) return '';
  const st = t().mod.st;
  return `<p class="status-line" data-status="${esc(m.status.content)}|${esc(m.status.expert_review)}|${esc(m.status.field)}">` +
    ['content','expert_review','field'].map(k=>`<span class="st"><b>${esc(st[k])}:</b> ${esc(m.status_label[k])}</span>`).join('') + '</p>';
}
function pageDetailed(mid, m){
  const d = L().detailed_modules[mid], tm = t().mod, tt = t().teacher;
  if (!d) return '';
  let h = `<div class="info" data-level="detailed">${esc(tm.dtl)}</div>`;
  h += `<h2>${esc(tm.dls)}</h2><div class="card dl-top">${fileLink('pack:'+mid, tt.pack)}${fileLink('learner:'+mid, tt.ws)}${fileLink('learner_lowink:'+mid, tt.wsl)}${fileLink('cards:'+mid, tt.cards)}</div>`;
  if (d.digital_game) h += `<a class="btn" href="#/play/${esc(d.digital_game)}/${ageOf(mid)}">${esc(tm.dgame)}</a>`;
  h += `<div class="grid two" style="margin-top:12px"><div class="card">${iko(d.pose,'iko-sm','İKO')}<h2 style="margin-top:0">${esc(tm.child)}</h2><p class="muted">${esc(d.question)}</p><p><b>${esc(tm.lgoal)}:</b> ${esc(d.learner_goal)}</p><h3>${esc(tm.steps)}</h3><ol>${d.learner_steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div>
    <div class="card"><h2 style="margin-top:0">${esc(tm.teacherView)}</h2><p><b>${esc(tm.tgoal)}:</b> ${esc(d.teacher_goal)}</p><h3>${esc(tm.flow)}</h3><ul>${d.teacher_flow.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div></div>`;
  if (d.game_note) h += `<div class="info"><b>${esc(tm.game)}:</b> ${esc(d.game_note)}</div>`;
  h += `<h2>${esc(tm.senses)}</h2><div class="tbl-wrap"><table class="sense-tbl"><tr><th></th><th>${esc(tm.physical)}</th></tr>` +
    ['sight','hearing','touch','smell','taste'].map(s => `<tr><td>${esc(t().senseName[s])}</td><td>${esc(d.senses[s])}</td></tr>`).join('') + '</table></div>';
  h += `<h2>${esc(tm.sci)}</h2><p>${esc(d.science_note)}</p><h2>${esc(tm.safety)}</h2><ul>${d.safety.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><h2>${esc(tm.assess)}</h2><p>${esc(d.assessment)}</p>`;
  h += `<h2>${esc(tm.meb)}</h2><p>${d.meb.length ? esc(d.meb.join(' · ')) : '—'}</p><p class="muted">${esc(d.meb_checked)}</p>`;
  const nr = d.materials_status.filter(x=>!x.status.startsWith('Mevcut'));
  if (nr.length) h += `<h2>${esc(tm.mats)}</h2><ul>${nr.map(x=>`<li><b>${esc(x.status)}:</b> ${esc(x.item)}${x.note?` <span class="muted">(${esc(x.note)})</span>`:''}</li>`).join('')}</ul>`;
  h += `<h2>${esc(tm.cards)}</h2><div class="tbl-wrap"><table>` + d.cards.map(c => `<tr data-card="${esc(c.id)}"><td><span class="muted">${esc(c.id)}</span><br><b>${esc(c.label)}</b><br>${esc(c.text)}</td><td class="muted">${esc(c.teacher_note)}</td></tr>`).join('') + '</table></div>';
  h += `<p class="muted">${esc(tm.srcs)}: ${esc(d.source_ids.join(', '))} — <a href="#/sources">${esc(t().nav.sources)}</a></p>`;
  h += `<details class="card guide"><summary><b>${esc(tm.guide)}</b></summary><div class="sec-html" lang="tr">${C.guides_tr[mid]||''}</div></details>`;
  return h;
}
function moduleTile(mid, m){
  return `<a class="card link" href="#/module/${mid}" data-module="${esc(mid)}"><span class="muted">${esc(mid)} · ${m.duration_minutes} ${esc(t().cat.min)}</span><h3>${esc(m.title)}</h3><p>${esc(m.summary)}</p>${statusBadge(m)}</a>`;
}
function pageCatalog(route){
  const sel = route[1] || '', ag = L().age_groups;
  let h = `<h1>${esc(t().cat.title)}</h1><div class="filters"><a href="#/catalog" ${!sel?'aria-current="true"':''}>${esc(t().cat.all)}</a>` +
    Object.keys(ag).map(b=>`<a href="#/catalog/${b}" ${b===sel?'aria-current="true"':''}>${esc(ag[b].label)}</a>`).join('') + '</div>';
  Object.keys(ag).filter(b=>!sel||b===sel).forEach(b => {
    h += `<h2>${esc(ag[b].label)}</h2><div class="grid">`;
    Object.entries(L().modules).filter(([,m])=>m.age_group===b).forEach(([mid,m]) => { h += moduleTile(mid,m); });
    h += '</div>';
  });
  return h;
}
function mediaAlt(title, text){ return `<div class="media-alt" role="note"><b>${esc(title)}</b>${esc(text)}</div>`; }
function pageModule(route){
  const mid = route[1], m = L().modules[mid];
  if (!m) return `<p>${esc(mid)}?</p><a href="#/catalog">${esc(t().mod.back)}</a>`;
  const tm = t().mod, lvl = m.detail_in_this_language;
  let h = `<a href="#/catalog/${m.age_group}">${esc(tm.back)}</a><h1>${esc(m.title)}</h1><p class="muted">${esc(mid)} · ${esc(L().age_groups[m.age_group].label)} · ${m.duration_minutes} ${esc(t().cat.min)}</p>${statusBadge(m)}${statusLine(m)}<p class="lead">${esc(m.summary)}</p>`;
  // detail_in_this_language: full | partial_json | none — "none" hiçbir zaman içerik varmış gibi işlenmez
  if (lvl === 'none') {
    h += `<div class="note" data-level="none">${esc(tm.none)}<br><span class="muted">${esc(m.missing_in_this_language||'')}</span></div>
      <button class="btn" data-lang="tr" data-keep="1">${esc(tm.openTr)}</button>${m.detail_tr.path.startsWith('kaynak/') ? fileLink('src:'+m.detail_tr.path.split('/').pop().replace('.md',''), tm.trFile) + fileLink('srcpdf:'+m.detail_tr.path.split('/').pop().replace('.md',''), t().teacher.agepdf) : ''}`;
    return h;
  }
  if (!m.is_demo && m.is_detailed) return h + pageDetailed(mid, m);
  if (!m.is_demo) {   // TR full: özgün tasarım metni
    h += `<div class="note" data-level="full-original">${esc(T.tr.mod.orig)}</div><p class="muted">${esc(tm.section)}: ${esc(m.detail_tr.section)}</p><div class="card sec-html">${C.sections_tr[mid]}</div>`
       + fileLink('src:'+m.detail_tr.path.split('/').pop().replace('.md',''), tm.trFile) + fileLink('srcpdf:'+m.detail_tr.path.split('/').pop().replace('.md',''), t().teacher.agepdf);
    return h;
  }
  const d = L().demo_modules[mid], tp = topic(mid);
  if (lvl === 'partial_json') h += `<div class="note" data-level="partial_json">${esc(tm.partialNote)}<br><span class="muted">${esc(m.missing_in_this_language||'')}</span></div>`;
  else h += `<div class="info" data-level="full">${esc(L().ui.messages.designed_not_piloted)}</div>`;
  h += `<h2>${esc(tm.dls)}</h2><div class="card dl-top">${fileLink('pack:'+mid, t().teacher.pack)}${fileLink('learner:'+mid, t().teacher.ws)}${fileLink('learner_lowink:'+mid, t().teacher.wsl)}${fileLink('cards:'+mid, t().teacher.cards)}</div>`;
  if (tp === 'M01') h += `<a class="btn" href="#/play/time_detective/${ageOf(mid)}">${esc(tm.play)}</a>`;
  h += `<div class="grid two" style="margin-top:12px"><div class="card">${iko(POSE[tp],'iko-sm','İKO')}<h2 style="margin-top:0">${esc(tm.child)}</h2><p><b>${esc(tm.lgoal)}:</b> ${esc(d.learner_goal)}</p><h3>${esc(tm.steps)}</h3><ol>${d.learner_steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><p class="muted">${esc(t().child.does[tp])}</p></div>
    <div class="card"><h2 style="margin-top:0">${esc(tm.teacherView)}</h2><p><b>${esc(tm.tgoal)}:</b> ${esc(d.teacher_goal)}</p><h3>${esc(tm.flow)}</h3><ul>${d.teacher_flow.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div></div>`;
  if (d.protocol) h += `<h2>${esc(tm.protocol)}</h2><p>${esc(d.protocol)}</p>`;
  if (d.game_note) h += `<div class="info"><b>${esc(tm.game)}:</b> ${esc(d.game_note)}</div>`;
  if (d.calculation_rule) h += `<h2>${esc(tm.calc)}</h2><div class="info">${esc(d.calculation_rule)}</div>`;
  h += `<h2>${esc(tm.senses)}</h2><div class="tbl-wrap"><table class="sense-tbl"><tr><th></th><th>${esc(tm.screen)}</th><th>${esc(tm.physical)}</th></tr>` +
    ['sight','hearing','touch','smell','taste'].map(s => `<tr><td>${esc(t().senseName[s])}</td><td>${esc(t().screen[tp][s])}</td><td>${esc(d.senses[s])}</td></tr>`).join('') + '</table></div>';
  if (tp === 'M01') h += mediaAlt(t().media.audio, t().media.audioM01) + mediaAlt(t().media.graph, t().media.graphTxt);
  if (tp === 'M05') h += mediaAlt(t().media.photo, t().media.photoM05) + mediaAlt(t().media.audio, t().media.audioM05);
  h += `<h2>${esc(tm.sci)}</h2><p>${esc(d.science_note)}</p><h2>${esc(tm.safety)}</h2><ul>${d.safety.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><h2>${esc(tm.assess)}</h2><p>${esc(d.assessment)}</p>`;
  h += `<h2>${esc(tm.cards)}</h2><p class="muted">${esc(d.cards_note)}</p><div class="tbl-wrap"><table>` +
    d.cards.map(c => `<tr data-card="${esc(c.id)}"><td class="icon">${svg(C.card_icon[c.id])}</td><td><span class="muted">${esc(c.id)}</span><br><b>${esc(c.label)}</b><br>${esc(c.text)}</td><td class="muted">${esc(c.teacher_note)}</td></tr>`).join('') + '</table></div>';
  return h;
}
/* ---------- M01 kart oyunu ---------- */
function binsFor(mid){ return ageOf(mid)==='07_09' ? t().game.bins07 : t().game.bins10; }
function pageGame(route){
  const mid = route[1];
  if (!/^(07_09|10_12)-M01$/.test(mid)) return `<a href="#/catalog">${esc(t().mod.back)}</a>`;
  if (game.mid !== mid) { game.mid = mid; game.placed = {}; game.tries = {}; game.selected = null; game.feedback = null; }
  const d = L().demo_modules[mid], bins = binsFor(mid), keys = Object.keys(bins);
  const cards = d.cards, placedN = Object.keys(game.placed).length;
  const cardBtn = c => `<button type="button" class="gcard ${game.placed[c.id]?'done-ok':''}" draggable="${game.placed[c.id]?'false':'true'}" data-card="${esc(c.id)}" aria-pressed="${game.selected===c.id}" ${game.placed[c.id]?'aria-disabled="true"':''}>${svg(C.card_icon[c.id])}<span><span class="lbl">${esc(c.label)}</span>${esc(c.text)}</span></button>`;
  let h = `<a href="#/module/${mid}">← ${esc(mid)} · ${esc(d.title)}</a>
  <h1>${iko('thermometer','iko-sm','İKO')}${esc(t().game.title)} · ${esc(d.title)}</h1>
  <div class="filters"><span class="muted">${esc(t().game.choose)}</span>${['07_09','10_12'].map(b=>`<a href="#/game/${b}-M01" ${b===ageOf(mid)?'aria-current="true"':''}>${esc(L().age_groups[b].label)}</a>`).join('')}</div>
  <p>${esc(fmt(t().game.how,{keys: keys.map((_,i)=>i+1).join('–')}))}</p><p class="muted">${esc(t().game.demo)} ${esc(L().ui.messages.score_note)}</p>
  <div class="game"><div><h2>${esc(t().game.deck)}</h2><div class="deck" id="deck">${cards.filter(c=>!game.placed[c.id]).map(cardBtn).join('')}</div></div>
  <div class="bins">${keys.map((k,i)=>`<div class="bin" data-bin="${k}"><button type="button" class="bin-btn" data-bin="${k}"><kbd>${i+1}</kbd>${esc(bins[k])}</button>${cards.filter(c=>game.placed[c.id]===k).map(cardBtn).join('')}</div>`).join('')}</div>
  <p class="progress" id="progress">${esc(fmt(t().game.placed,{a:placedN,n:cards.length}))}</p><div id="fb" aria-live="polite">${feedbackHtml()}</div>`;
  if (placedN === cards.length) h += `<div class="info">${esc(t().game.done)}</div>`;
  h += `<button class="btn sec" data-reset="1">${esc(t().game.reset)}</button></div>` + mediaAlt(t().media.audio, t().media.audioM01) + mediaAlt(t().media.graph, t().media.graphTxt);
  return h;
}
function feedbackHtml(){
  const f = game.feedback; if (!f) return '';
  const c = L().demo_modules[game.mid].cards.find(x=>x.id===f.id);
  if (f.ok) return `<div class="feedback ok"><div class="head">✓ ${esc(t().game.ok)}</div><p><b>${esc(t().game.reason)}:</b> ${esc(c.teacher_note)}</p>${f.id.endsWith('C04')?`<p class="muted">${esc(t().media.graph)}.</p>`:''}</div>`;
  return `<div class="feedback bad"><div class="head">✗ ${esc(t().game.bad)}</div>` + (f.reveal ? `<p><b>${esc(t().game.reason)}:</b> ${esc(c.teacher_note)}</p>` : `<p>${esc(t().game.hint)}</p>`) + `<p class="muted">${esc(t().game.again)} →</p></div>`;
}
function place(cardId, bin){
  if (!cardId || game.placed[cardId]) return;
  const ok = ANSWER[cardId] === bin;
  game.tries[cardId] = (game.tries[cardId]||0) + 1;
  if (ok) { game.placed[cardId] = bin; }
  game.feedback = { id: cardId, ok, reveal: !ok && game.tries[cardId] >= 2 };
  if (!ok && game.tries[cardId] >= 2) { game.placed[cardId] = ANSWER[cardId]; } // ikinci yanlışta doğru yere taşınır ve gerekçe gösterilir
  game.selected = null;
  render();
  const c = L().demo_modules[game.mid].cards.find(x=>x.id===cardId);
  say((ok?t().game.ok:t().game.bad)+' '+(ok||game.feedback.reveal ? c.teacher_note : t().game.hint));
  const next = $('.deck .gcard'); if (next) next.focus(); else { const fb=$('#fb'); if (fb) fb.focus?.(); }
}
/* ---------- Kaynaklar ---------- */
function pageSources(){
  const ts = t().src;
  return `<h1>${esc(ts.title)}</h1><div class="card"><p><b>${esc(ts.ver)}:</b> ${esc(C.version)} · <b>${esc(ts.built)}:</b> ${esc(C.built)}</p>
   <p><b>${esc(ts.trans)}:</b> ${esc(ts.transTxt)}</p><p class="muted">${esc(L().meta.status_note)}</p></div>
   <h2>${esc(ts.files)}</h2><div class="card">${fileLink('consistency',t().teacher.cons)}${fileLink('changelog',t().teacher.chg)}${fileLink('catalog:'+lang,t().teacher.catalog)}</div>
   <h2>K01–K${String(C.sources.length).padStart(2,'0')}</h2><div class="tbl-wrap"><table>${C.sources.map(s=>`<tr data-src="${esc(s.id)}"><td><b>${esc(s.id)}</b></td><td><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a><br><span class="muted">${esc(ts.check[s.check])}</span></td><td class="muted" lang="tr">${ts.noteLang?esc(ts.noteLang)+' ':''}${esc(s.note_tr)}</td></tr>`).join('')}</table></div>`;
}
/* ---------- Yönlendirme ve olaylar ---------- */
function route(){ const r = (location.hash.replace(/^#\/?/,'') || 'home').split('/'); return r; }
function render(){
  const r = route(); shell(r);
  const pages = {games:()=>window.IKO_GAMES.pageList(), play:r=>window.IKO_GAMES.pagePlay(r), home:pageHome, about:pageAbout, child:pageChild, teacher:pageTeacher, adult:pageAdult, visitor:pageVisitor, ages:pageAges, catalog:pageCatalog, module:pageModule, game:pageGame, sources:pageSources};
  if (r[0] === 'game') { location.replace('#/play/time_detective/' + (String(r[1]||'').startsWith('10_12') ? '10_12' : '07_09')); return; }
  $('#main').innerHTML = (pages[r[0]] || pageHome)(r);
  if (window.IKO_GAMES) window.IKO_GAMES.after();
}
document.addEventListener('click', e => {
  const lb = e.target.closest('[data-lang]');
  if (lb) { lang = lb.dataset.lang; store.set('iko-lang', lang); render(); say(C.locales[lang].ui.languages[lang]); return; }   // dil değişir, sayfa (hash) aynı kalır
  if (e.target.closest('#a11y-toggle')) { const p=$('#a11y-panel'); p.hidden=!p.hidden; $('#a11y-toggle').setAttribute('aria-expanded', String(!p.hidden)); return; }
  const tb = e.target.closest('[data-tour]'); if (tb && tb.getAttribute('aria-disabled')!=='true') { tourStep += +tb.dataset.tour; render(); return; }
  if (e.target.closest('[data-reset]')) { game.mid = null; render(); return; }
  const card = route()[0]==='game' && e.target.closest('.gcard'); if (card && !game.placed[card.dataset.card]) { game.selected = game.selected===card.dataset.card ? null : card.dataset.card; render(); const el=$(`.gcard[data-card="${game.selected||card.dataset.card}"]`); el&&el.focus(); return; }
  const bin = route()[0]==='game' && e.target.closest('.bin-btn'); if (bin && game.selected) { place(game.selected, bin.dataset.bin); return; }
});
document.addEventListener('change', e => { const c = e.target.closest('[data-a11y]'); if (c) document.body.classList.toggle(c.dataset.a11y, c.checked); });
document.addEventListener('keydown', e => {
  if (route()[0] !== 'game' || !game.selected) return;
  const keys = Object.keys(binsFor(game.mid)), n = parseInt(e.key, 10);
  if (n >= 1 && n <= keys.length) { e.preventDefault(); place(game.selected, keys[n-1]); }
  if (e.key === 'Escape') { game.selected = null; render(); }
});
window.addEventListener('hashchange', () => { render(); $('#main').focus({preventScroll:true}); window.scrollTo(0,0); });

/* ---------- PDF indirme (yayınlanan sayfada indirme yeteneğiyle; yerelde normal bağlantı) ---------- */
let dlNs;
function getDL(){
  if (dlNs !== undefined) return Promise.resolve(dlNs);
  if (!(window.claude && typeof window.claude.use === 'function')) return Promise.resolve(dlNs = null);
  return window.claude.use('downloads').then(x => (dlNs = x || null)).catch(() => (dlNs = null));
}
function toast(msg, kind){
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.setAttribute('role','status'); document.body.appendChild(el); }
  el.className = 'show ' + (kind||''); el.textContent = msg; clearTimeout(el._t);
  el._t = setTimeout(() => { el.className = ''; }, kind === 'wait' ? 15000 : 4500);
}
const isLocal = /^(file:|http:\/\/(localhost|127\.0\.0\.1))/.test(location.href);
if (!isLocal) getDL();
/* PDF görüntüleyici: belge sayfanın içinde açılır (giriş gerektirmez); indirme izni varsa "İndir" düğmesi de görünür */
const PV = {tr:{close:'Kapat',dl:'İndir',load:'Belge açılıyor…',page:'sayfa',fail:'Belge görüntülenemedi. Lütfen tekrar deneyin.'},en:{close:'Close',dl:'Download',load:'Opening the document…',page:'pages',fail:'The document could not be displayed. Please try again.'},fr:{close:'Fermer',dl:'Télécharger',load:'Ouverture du document…',page:'pages',fail:'Le document n’a pas pu être affiché. Veuillez réessayer.'}};
let pdfjsP = null, viewerToken = 0;
function loadPdfjs(){
  if (!pdfjsP) pdfjsP = import(new URL('pdf.min.mjs', location.href).href).then(m => { m.GlobalWorkerOptions.workerSrc = new URL('pdf.worker.min.mjs', location.href).href; return m; });
  return pdfjsP;
}
function closeViewer(){ viewerToken++; const v = document.getElementById('pdfv'); if (v) v.remove(); document.body.classList.remove('pv-open'); if (closeViewer.back) { closeViewer.back.focus(); closeViewer.back = null; } }
async function openViewer(key, opener){
  const f = C.files[key]; if (!f) return;
  const pv = PV[lang], tok = ++viewerToken; closeViewer.back = opener; viewerToken = tok;
  const old = document.getElementById('pdfv'); if (old) old.remove();
  const v = document.createElement('div'); v.id = 'pdfv'; v.setAttribute('role','dialog'); v.setAttribute('aria-modal','true'); v.setAttribute('aria-label', f.name);
  v.innerHTML = `<div class="pv-bar"><span class="pv-ic">${PDF_IC}</span><b class="pv-t">${esc(opener && opener.dataset.label || f.name)}</b><span class="pv-n muted"></span><button type="button" class="btn sec pv-dl" hidden>${DL_IC}<span>${esc(pv.dl)}</span></button><button type="button" class="btn pv-x">${esc(pv.close)} ✕</button></div><div class="pv-body" tabindex="0"><p class="pv-msg">${esc(pv.load)}</p></div>`;
  document.body.appendChild(v); document.body.classList.add('pv-open');
  v.querySelector('.pv-x').addEventListener('click', closeViewer); v.querySelector('.pv-x').focus();
  const inClaude = !!(window.claude && typeof window.claude.use === 'function');
  if (!inClaude) { const b = v.querySelector('.pv-dl'); b.hidden = false; b.addEventListener('click', () => { const l = document.createElement('a'); l.href = f.href; l.download = f.name; document.body.appendChild(l); l.click(); l.remove(); }); }
  else getDL().then(ns => { if (ns && viewerToken === tok) { const b = v.querySelector('.pv-dl'); b.hidden = false; b.addEventListener('click', () => saveFile(f, b)); } });
  try {
    const pdfjs = await loadPdfjs();
    const doc = await pdfjs.getDocument({ url: f.href, isEvalSupported: false }).promise;
    if (viewerToken !== tok) return;
    const body = v.querySelector('.pv-body'); body.innerHTML = '';
    v.querySelector('.pv-n').textContent = `${f.name} · ${doc.numPages} ${pv.page}`;
    const W0 = Math.min(body.clientWidth - 24, 980), dpr = Math.min(window.devicePixelRatio || 1, 2);
    for (let n = 1; n <= doc.numPages; n++) {
      if (viewerToken !== tok) return;
      const page = await doc.getPage(n), vp0 = page.getViewport({ scale: 1 }), sc = W0 / vp0.width, vp = page.getViewport({ scale: sc * dpr });
      const c = document.createElement('canvas'); c.width = Math.floor(vp.width); c.height = Math.floor(vp.height); c.style.width = Math.floor(vp0.width * sc) + 'px'; c.setAttribute('aria-label', `${n} / ${doc.numPages}`);
      body.appendChild(c);
      await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
    }
  } catch (err) {
    if (viewerToken === tok) v.querySelector('.pv-body').innerHTML = `<p class="pv-msg">${esc(pv.fail)}</p>`;
  }
}
async function saveFile(f, a){
  const d = D(); if (a.dataset.busy) return; a.dataset.busy = '1'; a.classList.add('busy');
  try {
    const ns = await getDL(); if (!ns) { toast(d.na, 'err'); return; }
    toast(d.prep, 'wait');
    const r = await fetch(f.href); if (!r.ok) throw new Error('http ' + r.status);
    const blob = await r.blob(); toast(d.ask, 'wait');
    await ns.save({ filename: f.name, data: blob }); toast(d.ok, 'ok');
  } catch (err) {
    const c = err && err.code;
    toast(c === 'declined' ? d.no : c === 'rate_limited' ? d.busy : (c === 'unavailable' || c === 'not_granted' || c === 'capability_disabled' || c === 'capability_removed') ? d.na : d.err, c === 'declined' ? '' : 'err');
  } finally { delete a.dataset.busy; a.classList.remove('busy'); }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.getElementById('pdfv')) closeViewer(); });
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-file]');
  if (!a || isLocal) return;
  e.preventDefault();
  if (!a.dataset.label) { const t = a.querySelector('b, span:not(.pdf-ic):not(.doc-ic)'); a.dataset.label = (a.closest('.dl') ? a.closest('.dl').querySelector('.dl-l').textContent : (t ? t.firstChild.textContent : '')).trim(); }
  openViewer(a.dataset.file, a);
}, true);
render();
window.IKO_APP = { setLang(l){ lang=l; store.set('iko-lang', l); render(); }, state: game };
window.IKO_APP_RENDER = render;   // test kancası
})();
