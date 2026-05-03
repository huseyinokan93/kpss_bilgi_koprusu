export type TopicContentData = {
  summary: string;
  keyPoints: string[];
  mnemonics: string[];
};

export type Topic = {
  name: string;
  description?: string;
  imageId?: string;
  content?: TopicContentData;
  examples?: {
    title: string;
    problem: string;
    solution: string;
  }[];
  pastQuestions?: {
    question: string;
    answer: string;
  }[];
};

export type Subject = {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
};

export const subjects: Subject[] = [
  {
    id: 'tarih',
    name: 'Tarih',
    description: 'KPSS Tarih müfredatına tam uyumlu; Osmanlı Kültür ve Uygarlığı ile İnkılap Tarihi ağırlıklı çalışma seti.',
    topics: [
      { 
        name: 'İslamiyet Öncesi Türk Tarihi', 
        imageId: 'tarih-islamiyet-oncesi',
        content: {
          summary: "İslamiyet öncesi Türk tarihi, Orta Asya'da şekillenen bozkır kültürü ve teşkilatçı yapısıyla öne çıkar. Türklerin bilinen ilk boyu İskitler (Sakalar), ilk teşkilatlı devleti ise Asya Hun Devleti'dir. Mete Han döneminde 'Onlu Sistem' kurulmuş ve ilk kez tüm Türkler tek çatı altında toplanmıştır. Devlet yönetiminde hükümdarlığın ilahi kaynaklı olduğuna inanılan 'Kut' anlayışı hakimdir. Bu anlayış 'Ülke hanedanın ortak malıdır' kuralını getirmiş, bu da sık taht kavgalarına yol açmıştır. Kurultay (Toy) devlet işlerinin görüşüldüğü danışma meclisidir. Uygurlar ile yerleşik hayata geçilmiş; tarım, mimari ve matbaa kullanımı başlamıştır.",
          keyPoints: [
            "İskitler: Alp Er Tunga ve Tomris Hatun. Bozkırın kuyumcuları.",
            "Asya Hun: Mete Han (Onlu Sistem, Islıklı Ok). Başkent Ötüken.",
            "I. Göktürk: Türk adıyla kurulan ilk devlet. Bumin Kağan.",
            "II. Göktürk: Orhun Yazıtları (Bilge Kağan, Kültigin, Tonyukuk).",
            "Uygurlar: Yerleşik hayat, Maniheizm, kütüphane, matbaa.",
            "Kut İnancı: Egemenliğin tanrısal olması (Veraset sistemini etkiler).",
            "Kurultay: Kağan başkanlığındaki meclis (Hatun da katılır)."
          ],
          mnemonics: [
            "SOSYAL YAPI: O-U-B-B-İ (Oguş, Urug, Boy, Budun, İl).",
            "UYGURLAR: 'Uygar' Türkler (Yerleşik hayat).",
            "MECLİS: Kurultay = Karar ve Danışma."
          ]
        }
      },
      { 
        name: 'İlk Müslüman Türk Devletleri', 
        imageId: 'tarih-ilk-musluman',
        content: {
          summary: "Türklerin İslamiyet'i kabulü 751 Talas Savaşı ile hızlanmıştır. Orta Asya'da kurulan ilk Müslüman Türk devleti Karahanlılar'dır (Satuk Buğra Han dönemi). Karahanlılar, Türkçeyi resmi dil ilan ederek milli kimliklerini korumuşlardır. Gazneliler, Hindistan'a 17 sefer düzenleyen Sultan Mahmud ile tanınır (Sultan unvanını ilk o kullanmıştır). Büyük Selçuklu Devleti ise 1071 Malazgirt Savaşı ile Anadolu'nun kapılarını Türklere açmıştır. Bu dönemde Nizamiye Medreseleri kurulmuş, bilim ve kültürde büyük ilerlemeler kaydedilmiştir.",
          keyPoints: [
            "Karahanlılar: İlk Müslüman Türk devleti (Orta Asya). İlk medrese, ilk posta teşkilatı.",
            "Gazneliler: Sultan Mahmud (Sultan unvanı). Hindistan seferleri.",
            "Büyük Selçuklu: 1040 Dandanakan (Kuruluş), 1071 Malazgirt (Anadolu kapıları).",
            "Nizamiye Medreseleri: Vezir Nizamülmülk tarafından kurulan dünyanın ilk üniversitelerinden biri.",
            "İktâ Sistemi: Toprağa dayalı ordu ve yönetim sistemi (Osmanlı'daki Tımar'ın temeli).",
            "Kutatgu Bilig: Yusuf Has Hacip (Siyasetname türünde ilk eser)."
          ],
          mnemonics: [
            "MALAZGİRT (1071): Kapı açan savaş.",
            "MİRYOKEFALON (1176): Tapu alan (Anadolu'yu kesin Türk yurdu yapan) savaş.",
            "SULTAN MAHMUD: 'Gaz'ne'den Hindistan'a 'gaz'ladı (Sultan unvanı)."
          ]
        }
      },
      { 
        name: 'Osmanlı Devleti Kuruluş ve Yükselme', 
        imageId: 'tarih-osmanli-kurulus',
        content: {
          summary: "1299'da Söğüt'te kurulan Osmanlı, uç beyliği olmanın avantajını kullanarak Bizans aleyhine büyümüştür. Orhan Bey döneminde devletleşme (ilk ordu, ilk medrese) başlamıştır. Fatih'in İstanbul'u fethiyle imparatorluk sürecine girilmiş, II. Bayezid döneminde Cem Sultan olayı ile iç sorun dış soruna dönüşmüştür. Yavuz Sultan Selim ile halifelik Osmanlı'ya geçmiş ve hazine en parlak dönemini yaşamıştır. Kanuni dönemi ise Avrupa üstünlüğünün ve denizlerdeki gücün zirvesidir.",
          keyPoints: [
            "Osman Bey: İlk para (Bakır). Koyunhisar Savaşı (Bizans'la ilk).",
            "Orhan Bey: Sultan unvanını kullanan ilk hükümdar. İlk düzenli ordu.",
            "I. Murad: Yeniçeri Ocağı'nın kuruluşu. Veraset sisteminde ilk değişiklik.",
            "Fatih: İstanbul'un fethi, Topkapı Sarayı, Karadeniz'in Türk gölü olması.",
            "Yavuz: Ridaniye ve Mercidabık (Memlüklerin sonu, Halifelik).",
            "Kanuni: Preveze Deniz Zaferi (Denizlerde üstünlük)."
          ],
          mnemonics: [
            "HAÇLI SAVAŞLARI: S-I-N-A-V (Sırpsındığı, I. Kosova, Niğbolu, Varna, II. Kosova).",
            "ORHAN BEY: 'O'rganizasyon ve 'O'rdulaşma.",
            "YAVUZ: 'Y'önü doğuya (İslam dünyası liderliği)."
          ]
        }
      },
      { 
        name: 'Osmanlı Kültür ve Uygarlığı', 
        imageId: 'tarih-osmanli-kultur',
        content: {
          summary: "KPSS'de en çok sorunun (9-10 soru) geldiği bölümdür. Osmanlı yönetimi; Padişah, Saray (Enderun, Birun, Harem) ve Divan-ı Hümayun üzerine kuruludur. Devlet görevlileri Seyfiye (Askeri/İdari), İlmiye (Hukuk/Eğitim) ve Kalemiye (Bürokrasi) olarak üçe ayrılır. Toprak sistemi Miri (devletin) ve Mülk topraklar olarak ikiye ayrılır. Tımar sistemi hem askeri hem de tarımsal sürekliliği sağlar. Hukuk sistemi ise Şer-i ve Örfi hukuk olarak ikilidir.",
          keyPoints: [
            "Divan Üyeleri: Sadrazam, Defterdar (Maliye), Nişancı (Yazışma/Tapu), Kazasker (Hukuk/Eğitim).",
            "Seyfiye: Padişah, Vezirler, Yeniçeri Ağası, Kaptan-ı Derya.",
            "İlmiye: Şeyhülislam, Kadı, Müderris (Türk-Müslüman olma şartı vardır).",
            "Kalemiye: Nişancı, Reisülküttab, Defterdar.",
            "Tımar Sistemi: Devletin maaş yerine toprak geliri vermesi. Cebelü (atlı asker) yetiştirilir.",
            "Enderun: Saray okulu (Devlet adamı yetiştirir).",
            "Lonca Teşkilatı: Esnaf örgütlenmesi (Fiyat kontrolü: Narh kesmek)."
          ],
          mnemonics: [
            "İLMLİYE: 'K'adı, 'K'azasker (Hukuk ve Eğitim).",
            "KALEMİYE: 'K'alem tutanlar (Yazışma, Kayıt).",
            "SEYFİYE: 'S'eyf (Kılıç) tutanlar (Asker ve Yönetim)."
          ]
        }
      },
      { 
        name: 'Osmanlı Duraklama, Gerileme ve Dağılma', 
        imageId: 'tarih-osmanli-dagilma',
        content: {
          summary: "17. yüzyılda (Duraklama) merkezi otorite bozulmuş, toprak kayıpları başlamıştır. 18. yüzyılda (Gerileme) batının üstünlüğü kabul edilerek Lale Devri ile ilk ıslahatlar yapılmıştır. 19. yüzyıl (Dağılma) ise 'En Uzun Yüzyıl' olarak adlandırılır. Bu dönemde Tanzimat ve Islahat Fermanları ile hukuk üstünlüğü kabul edilmiş, I. ve II. Meşrutiyet ile halk ilk kez yönetime katılmıştır. Denge politikası ile devletin ömrü uzatılmaya çalışılmıştır.",
          keyPoints: [
            "Lale Devri (1718-1730): İlk geçici elçilikler, ilk matbaa (İbrahim Müteferrika).",
            "II. Mahmud: Yeniçeri Ocağı'nın kaldırılması (Vaka-i Hayriye), ilk nüfus sayımı.",
            "Tanzimat Fermanı (1839): Padişahın üzerinde hukuk gücünün kabulü.",
            "Islahat Fermanı (1856): Azınlıklara geniş haklar verilmesi.",
            "I. Meşrutiyet (1876): İlk anayasa (Kanun-i Esasi) ve halkın meclise girmesi.",
            "Denge Politikası: Avrupalı devletlerin çıkar çatışmalarından yararlanma."
          ],
          mnemonics: [
            "II. MAHMUD: 'M'odern mahmut (Her alanda yenilik).",
            "DURAKLAMA: 'D'uran devlet (Sorunların köküne inilememesi).",
            "LALE DEVRİ: 'L'üks ve 'L'okum (Savaşsız dönem, kültürel yenilik)."
          ]
        }
      },
      { 
        name: '20. Yüzyılda Osmanlı Devleti', 
        imageId: 'tarih-osmanli-20yy',
        content: {
          summary: "Osmanlı'nın son savaşları bu dönemdedir. Trablusgarp Savaşı ile Kuzey Afrika'daki son toprak parçası kaybedilmiştir. Balkan Savaşları büyük göçlere ve azınlık sorunlarına yol açmıştır. I. Dünya Savaşı'nda Osmanlı; Çanakkale'de büyük bir zafer kazansa da genel toplamda mağlup sayılmış ve Mondros Ateşkes Antlaşması ile fiilen sona ermiştir.",
          keyPoints: [
            "Trablusgarp (1911): Mustafa Kemal'in ilk savaşı (Derne-Tobruk). Uşi Antlaşması.",
            "Balkan Savaşları: Osmanlıcılık fikri iflas etti, Türkçülük güçlendi.",
            "I. Dünya Savaşı Cepheleri: Taarruz (Kafkas, Kanal), Savunma (Çanakkale, Hicaz-Yemen, Irak, Suriye-Filistin).",
            "Çanakkale: 19. Tümen komutanı M. Kemal'in parladığı cephe. Savaşın ömrünü uzattı.",
            "Mondros (30 Ekim 1918): 7. madde (İşgallerin önünü açan madde) ve 24. madde (Vilayat-ı Sitte).",
            "Gizli Antlaşmalar: Sykes-Picot, Mac-Mahon (Araplarla), Petrograd."
          ],
          mnemonics: [
            "TAARRUZ CEPHELERİ: 2K (Kafkas, Kanal).",
            "MONDROS 7. MADDE: '7' bitirdi devleti (Her yeri işgal edebilirler).",
            "BATI CEPHESİ: Kurtuluşun kalbi."
          ]
        }
      },
      { 
        name: 'Kurtuluş Savaşı Hazırlık Dönemi', 
        imageId: 'tarih-kurtulus-hazirlik',
        content: {
          summary: "Mustafa Kemal'in 19 Mayıs 1919'da Samsun'a çıkışıyla başlayan süreçtir. Amasya Genelgesi ile Kurtuluş Savaşı'nın 'Amaç, Gerekçe ve Yöntemi' belirlenmiştir. Erzurum Kongresi'nde ilk kez milli sınırlardan bahsedilmiş, Sivas Kongresi'nde ise tüm cemiyetler tek çatı altında birleştirilmiştir. Son Osmanlı Mebusan Meclisi'nde Misak-ı Milli kabul edilince İstanbul resmen işgal edilmiş ve 23 Nisan 1920'de Ankara'da TBMM açılmıştır.",
          keyPoints: [
            "Amasya Genelgesi: 'Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.'",
            "Erzurum Kongresi: Manda ve himaye ilk kez reddedildi. Bölgesel toplanıp ulusal karar aldı.",
            "Sivas Kongresi: Her yönüyle ulusal kongre. İrade-i Milliye gazetesi çıkarıldı.",
            "Amasya Görüşmeleri: Temsil Heyeti, İstanbul Hükümeti tarafından resmen tanındı.",
            "Misak-ı Milli: Milli yemin. Sınırlarımız belirlendi.",
            "TBMM'nin Açılışı: Kurucu meclis, savaşçı meclis, milli meclis özellikleri taşır."
          ],
          mnemonics: [
            "AMASYA: İhtilal beyannamesi.",
            "ERZURUM: 'E'lk milli sınırlar.",
            "SİVAS: 'S'on ve kesin birleşme."
          ]
        }
      },
      { 
        name: 'Kurtuluş Savaşı Cepheleri', 
        imageId: 'tarih-kurtulus-muharebe',
        content: {
          summary: "Doğu Cephesi'nde Kazım Karabekir Ermenilere karşı savaşmış (Gümrü Antlaşması), Güney Cephesi'nde halk (Kuva-yi Milliye) Fransızlara karşı direnmiştir. Asıl kader belirleyici olan Batı Cephesi'nde ise düzenli ordu; I. İnönü, II. İnönü, Sakarya ve Büyük Taarruz zaferlerini kazanmıştır. Sakarya Savaşı ile Türk ordusunun 1683'ten beri süren geri çekilişi durmuş, Büyük Taarruz ile Anadolu işgalden temizlenmiştir. Süreç Lozan Barış Antlaşması ile taçlanmıştır.",
          keyPoints: [
            "Gümrü Antlaşması: TBMM'nin ilk siyasi ve askeri başarısı.",
            "Güney Cephesi: Maraş, Antep, Urfa kahramanlıkları. Ankara Antlaşması (1921) ile kapandı.",
            "Sakarya Meydan Muharebesi: 'Hattı müdafaa yoktur, sathı müdafaa vardır.' M. Kemal'e Gazilik ve Mareşallik verildi.",
            "Büyük Taarruz: Ordular ilk hedefiniz Akdeniz'dir ileri! Başkomutanlık Meydan Muharebesi.",
            "Mudanya Ateşkes: İstanbul, Boğazlar ve Doğu Trakya savaşsız kurtarıldı.",
            "Lozan (24 Temmuz 1923): Türkiye'nin tapu senedi. Kapitülasyonlar kesin olarak kaldırıldı."
          ],
          mnemonics: [
            "BATI CEPHESİ SAVAŞLARI: M-İ-L-A-T (Moskova, İstiklal Marşı, Londra, Afgan Dostluk, Teşkilat-ı Esasiye - I. İnönü sonuçları).",
            "SAKARYA: Melhame-i Kübra (Büyük kanlı savaş).",
            "LOZAN: Taviz verilmeyen iki konu; Ermeni Yurdu ve Kapitülasyonlar."
          ]
        }
      },
      { 
        name: 'Atatürk İlke ve İnkılapları', 
        imageId: 'tarih-ataturk',
        content: {
          summary: "Atatürk ilkeleri; Türk İnkılabı'nın temelini oluşturan 6 temel ilkedir. Cumhuriyetçilik (Milli Egemenlik), Milliyetçilik (Milli Birlik), Halkçılık (Eşitlik/Sosyal Devlet), Devletçilik (Ekonomi), Laiklik (Akıl/Bilim) ve İnkılapçılık (Sürekli Yenilik). İnkılaplar ise siyasi (Saltanatın kaldırılması), toplumsal (Soyadı Kanunu), hukuksal (Medeni Kanun), eğitimsel (Tevhid-i Tedrisat) ve ekonomik alanlarda Türkiye'yi çağdaşlaştırmıştır.",
          keyPoints: [
            "Cumhuriyetçilik: TBMM, Seçim, Çok partili hayat, Kadınlara seçme-seçilme.",
            "Milliyetçilik: TDK, TTK, Kabotaj Kanunu, Milli ekonomi.",
            "Halkçılık: Aşar vergisinin kaldırılması, Soyadı kanunu, Eşitlik.",
            "Medeni Kanun (1926): Kadın-erkek sosyal ve ekonomik eşitliği (Siyasi hak yoktur!).",
            "Tevhid-i Tedrisat: Eğitimde birlik. Laik eğitimin temeli.",
            "Dış Politika: Musul Sorunu, Nüfus Mübadelesi, Montrö Boğazlar Sözleşmesi, Hatay'ın Anavatana katılması."
          ],
          mnemonics: [
            "HALKÇILIK: 'H'erkes eşit.",
            "LAİKLİK: 'L'aik eğitim, 'L'aik hukuk.",
            "DEVLETÇİLİK: 'D'övletin fabrikaları (Sümerbank, Etibank)."
          ]
        }
      },
      { 
        name: 'Çağdaş Türk ve Dünya Tarihi', 
        imageId: 'tarih-cagdas',
        content: {
          summary: "I. Dünya Savaşı sonrası kurulan yeni dünya düzeni, II. Dünya Savaşı ile yıkılmıştır. Türkiye, II. Dünya Savaşı'nda fiilen yer almasa da ekonomik ve sosyal olarak etkilenmiştir. Savaş sonrası Soğuk Savaş dönemi (NATO - Varşova Paktı), Yumuşama (Detant) dönemi ve SSCB'nin dağılmasıyla oluşan Yeni Dünya Düzeni incelenir. Türkiye'nin NATO'ya girişi, Kıbrıs Sorunu ve Avrupa Birliği süreci bu bölümün temel taşlarıdır.",
          keyPoints: [
            "Kara Perşembe (1929): Dünya Ekonomik Buhranı.",
            "II. Dünya Savaşı: Mihver (Almanya, İtalya, Japonya) ve Müttefik (İngiltere, ABD, SSCB) grupları.",
            "Soğuk Savaş: Truman Doktrini, Marshall Planı, NATO ve Varşova Paktı rekabeti.",
            "Yumuşama: SALT-I ve SALT-II antlaşmaları, Helsinki Nihai Senedi.",
            "Kıbrıs Sorunu: 1974 Kıbrıs Barış Harekatı, EOKA ve ENOSIS kavramları.",
            "SSCB'nin Dağılması: Glasnost ve Perestroyka (Gorbaçov). Türk Cumhuriyetlerinin bağımsızlığı."
          ],
          mnemonics: [
            "SOĞUK SAVAŞ: 'S'ilahsız ama 'S'ert rekabet.",
            "II. DÜNYA SAVAŞI: 'M'ihver vs 'M'üttefik.",
            "KIBRIS: Ayşe tatile çıksın (Parola)."
          ]
        }
      },
    ],
  },
  {
    id: 'cografya',
    name: 'Coğrafya',
    description: 'Yeryüzünü ve insan ile mekan arasındaki ilişkiyi inceleyen bilim dalı. KPSS Coğrafya konuları için doğru yerdesiniz.',
    topics: [
      { 
        name: 'Türkiye\'nin Coğrafi Konumu', 
        imageId: 'cografya-konum',
        content: {
          summary: "Türkiye, 36°-42° Kuzey paralelleri ile 26°-45° Doğu meridyenleri arasında yer alan, hem Asya hem de Avrupa kıtasında toprakları bulunan stratejik bir ülkedir. Coğrafi konum 'Matematik (Mutlak) Konum' ve 'Özel (Göreceli) Konum' olarak ikiye ayrılır. Matematik Konum; Türkiye'nin Kuzey Yarım Küre'de, Orta Kuşak'ta ve Yengeç Dönencesi'nin kuzeyinde olmasının getirdiği sonuçlardır. Örneğin; dört mevsimin belirgin yaşanması, cephe yağışlarının görülmesi ve Akdeniz iklim kuşağında olması matematik konumun sonucudur. Özel Konum ise; Türkiye'nin üç tarafının denizlerle çevrili olması, yükseltinin batıdan doğuya artması, transit ticaret yolları ve jeopolitik önemi ile ilgilidir.",
          keyPoints: [
            "Kuşuçumu Mesafe: Kuzey-Güney arası 666 km (6 paralel farkı x 111 km).",
            "Zaman Farkı: En doğu ve en batı arası 76 dakika (19 meridyen farkı x 4 dk).",
            "Orta Kuşak Kanıtları: Akdeniz iklimi, Batı rüzgarları, Cephe yağışları, Dört mevsim.",
            "Güneş Işınları: Türkiye'ye hiçbir zaman dik açıyla (90 derece) gelmez, çünkü dönenceler dışındadır.",
            "Baki Etkisi: Dağların güney yamaçları daha sıcaktır ve daha çok yerleşmeye elverişlidir.",
            "Özel Konum: Boğazlar, Maden çeşitliliği, Karasal iklim, Yükselti."
          ],
          mnemonics: [
            "ORTA KUŞAK: A-B-C-D (Akdeniz iklimi, Batı rüzgarları, Cephe yağışları, Dört mevsim).",
            "MATEMATİK KONUM: 'M'esafe and 'M'eridyen.",
            "ÖZEL KONUM: 'Ö'zgün and 'Ö'nemli yerler (Boğazlar gibi)."
          ]
        },
        pastQuestions: [
          {
            question: 'Türkiye\'de aynı anda farklı mevsim özelliklerinin yaşanmasının temel sebebi nedir?',
            answer: 'Yer şekillerinin çeşitliliği ve yükselti farkları (Özel Konum)'
          }
        ]
      },
      { 
        name: 'Türkiye\'nin İklimi ve Bitki Örtüsü', 
        imageId: 'cografya-iklim',
        content: {
          summary: "Türkiye'de iklim çeşitliliği fazladır; bunun temel sebepleri matematik konum (orta kuşak) ve özel konumdur (dağların uzanışı, yükselti, denizellik). Başlıca üç iklim tipi görülür: Akdeniz İklimi, Karadeniz İklimi ve Karasal İklim. Karadeniz iklimi her mevsim yağışlıdır ve bitki örtüsü ormandır. Akdeniz ikliminde yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır; bitki örtüsü makidir. Karasal iklim ise Türkiye'nin en geniş yayılış alanına sahip iklimidir; yazlar sıcak ve kurak, kışlar soğuk ve kar yağışlıdır; bitki örtüsü bozkırdır (step). Erzurum-Kars bölümünde ise Sert Karasal İklim görülür ve yaz yağışlarıyla yeşeren uzun boylu çayırlar (Alpin çayırlar) hakimdir.",
          keyPoints: [
            "Karadeniz İklimi: En çok yağışı Sonbaharda alır. Kimyasal çözünme fazladır.",
            "Akdeniz İklimi: En çok yağışı Kışın alır. Terrosa topraklar (kırmızı) görülür.",
            "İç Anadolu Karasal: En çok yağışı İlkbaharda alır (Kırkikindi yağışları).",
            "Sert Karasal: En çok yağışı Yazın alır. Çernezyom (Kara Toprak) burada görülür.",
            "Rüzgarlar: KayıpSakal (Kuzeyden Karayel-Yıldız-Poyraz, Güneyden Samyeli-Kıble-Lodos).",
            "Maki Türleri: Zeytin, Zakkum, Defne, Mersin, Keçiboynuzu."
          ],
          mnemonics: [
            "RÜZGARLAR: KA-YI-P SA-KAL (Karayel, Yıldız, Poyraz / Samyeli, Kıble, Lodos).",
            "İÇ ANADOLU YAĞIŞI: İlkbaharda 'Kırk' gün ikindi vakti yağar (Kırkikindi).",
            "YAĞIŞ REJİMİ 'e' HARFİ: Türkiye haritası üzerine küçük 'e' çizerseniz hangi mevsimde neresi yağış alır çıkar."
          ]
        }
      },
      { name: 'Türkiye\'nin Yer Şekilleri', imageId: 'cografya-yer-sekilleri' },
      { name: 'Türkiye\'de Nüfus ve Yerleşme', imageId: 'cografya-nufus' },
      { name: 'Türkiye\'de Tarım', imageId: 'cografya-tarim' },
      { name: 'Türkiye\'de Hayvancılık ve Ormancılık', imageId: 'cografya-hayvancilik' },
      { name: 'Türkiye\'de Madenler ve Enerji Kaynakları', imageId: 'cografya-madenler' },
      { name: 'Türkiye\'de Sanayi ve Ticaret', imageId: 'cografya-sanayi' },
      { name: 'Türkiye\'de Ulaşım ve Turizm', imageId: 'cografya-ulasim' },
      { name: 'Bölgeler Coğrafyası', imageId: 'cografya-bolgeler' },
    ],
  },
  {
    id: 'genel-kultur',
    name: 'Genel Kültür',
    description: 'Güncel olaylar, temel vatandaşlık bilgileri ve genel kültür konuları.',
    topics: [
      { 
        name: 'Temel Hukuk Kavramları', 
        imageId: 'gk-hukuk',
        content: {
          summary: "Hukuk; sosyal hayatı düzenleyen, maddi yaptırımlı kurallar bütünüdür. Hukuk kurallarının din, ahlak ve görgü kurallarından en büyük farkı devlet gücüyle desteklenmesidir. Hukuk dalları Kamu Hukuku, Özel Hukuk ve Karma Hukuk olarak üçe ayrılır. Kamu hukukunda devlet ile birey arasında alt-üst ilişkisi vardır. Özel hukukta taraflar eşittir. Normlar hiyerarşisinde en üstte Anayasa bulunur, onu Kanunlar ve Milletlerarası Antlaşmalar izler. Hak ehliyeti sağ ve tam doğmak şartıyla ana rahmine düşüldüğü anda başlar; fiil ehliyeti ise ergin olmak, ayırt etme gücüne sahip olmak ve kısıtlı olmamak şartlarına bağlıdır.",
          keyPoints: [
            "Normlar Hiyerarşisi: Anayasa > Kanun/OHAL CBK > CBK > Yönetmelik.",
            "Kamu Hukuku: Anayasa, İdare, Ceza, Vergi, Devletler Genel.",
            "Özel Hukuk: Medeni, Borçlar, Ticaret, Devletler Özel.",
            "Yaptırım Türleri: Ceza, Cebri İcra, Tazminat, Hükümsüzlük, İptal.",
            "Medeni Hukuk Alt Dalları: Kişiler, Aile, Miras, Eşya Hukuku.",
            "Hak Ehliyeti: Pasif ehliyettir, herkes sahiptir.",
            "Fiil Ehliyeti: Aktif ehliyettir, belirli şartlar gerektirir."
          ],
          mnemonics: [
            "ÖZEL HUKUK: M-B-T-D (Medeni, Borçlar, Ticaret, Devletler Özel).",
            "MEDENİ HUKUK: K-A-M-E (Kişiler, Aile, Miras, Eşya).",
            "YAPTIRIMLAR: C-C-İ-T (Ceza, Cebri İcra, İptal, Tazminat)."
          ]
        },
        pastQuestions: [
          {
            question: 'Hukuk kurallarına aykırı bir işlemin, bu aykırılık nedeniyle hukuk düzeni tarafından geçersiz sayılmasına ne ad verilir?',
            answer: 'Hükümsüzlük'
          }
        ]
      },
      { 
        name: 'Yasama', 
        imageId: 'gk-yasama',
        content: {
          summary: "Türkiye'de yasama yetkisi Türk Milleti adına Türkiye Büyük Millet Meclisi'ne (TBMM) aittir. TBMM 600 milletvekilinden oluşur ve seçimler 5 yılda bir yapılır (Cumhurbaşkanlığı seçimi ile aynı gün). Milletvekili seçilme yaşı 18'dir. TBMM'nin görevleri arasında kanun yapmak, değiştirmek ve kaldırmak, para basılmasına karar vermek, savaş ilanına karar vermek ve genel-özel af ilan etmek (3/5 çoğunluk ile) yer alır. Milletvekilleri yasama sorumsuzluğu (söyledikleri sözler için dokunulamazlık) ve yasama dokunulmazlığı (suç işlediği iddiasıyla tutuklanamama) haklarına sahiptir.",
          keyPoints: [
            "Üye Tam Sayısı: 600 Milletvekili.",
            "Seçim Dönemi: 5 Yıl.",
            "Milletvekili Şartları: 18 yaş, T.C. vatandaşı, En az ilkokul mezunu, Askerlikle ilişiği olmamak.",
            "Yasama Sorumsuzluğu: Mutlaktır, Meclis tarafından kaldırılamaz.",
            "Yasama Dokunulmazlığı: Nispidir, Meclis tarafından kaldırılabilir.",
            "Savaş İlanı: TBMM kararıyla olur.",
            "Kanun Teklifi: En az bir milletvekilinin imzasıyla verilir."
          ],
          mnemonics: [
            "MECLİS ÇOĞUNLUKLARI: Karar yeter sayısı üye tam sayısının 1/4'ünün 1 fazlasından az olamaz (151).",
            "AF YETKİSİ: 3/5 çoğunluk (360 milletvekili).",
            "ANAYASA DEĞİŞİKLİĞİ: 2/3 (400) doğrudan kabul, 3/5 (360) referandumlu kabul."
          ]
        }
      },
      { name: 'Anayasa Hukukuna Giriş', imageId: 'gk-anayasa' },
      { name: 'Yürütme', imageId: 'gk-yurutme' },
      { name: 'Yargı', imageId: 'gk-yargi' },
      { name: 'İdare Hukuku', imageId: 'gk-idare' },
      { name: 'Uluslararası Kuruluşlar', imageId: 'gk-uluslararasi' },
      { name: 'Güncel Olaylar', imageId: 'gk-guncel' },
    ],
  },
  {
    id: 'matematik',
    name: 'Matematik',
    description: 'Sayılar, formüller ve ilgili yapılarla ilgili konuları içeren temel matematik alanı.',
    topics: [
      {
        name: 'Temel Kavramlar',
        description: 'Sayı kümeleri, tek ve çift sayılar, pozitif ve negatif sayılar gibi matematiğin temelini oluşturan konular.',
        examples: [
          {
            title: 'Tek ve Çift Sayılar',
            problem: 'a, b ve c birer tam sayı olmak üzere, a·b çarpımı tek sayı, b+c toplamı çift sayıdır. Buna göre aşağıdakilerden hangisi daima doğrudur?',
            solution: '1. a·b tek ise a ve b her ikisi de tek olmalıdır (Tek x Tek = Tek).\n2. b+c toplamı çift ve b tek ise, c de tek olmalıdır (Tek + Tek = Çift).\nSonuç: a, b ve c\'nin üçü de tek sayıdır.',
          }
        ],
      },
      { name: 'Sayı Basamakları' },
      { name: 'Bölme ve Bölünebilme' },
      { name: 'OBEB-OKEK' },
      { name: 'Rasyonel Sayılar' },
      { name: 'Basit Eşitsizlikler' },
      { name: 'Mutlak Değer' },
      { name: 'Üslü Sayılar' },
      { name: 'Köklü Sayılar' },
      { name: 'Çarpanlara Ayırma' },
      { name: 'Oran-Orantı' },
      { name: 'Problemler' },
    ],
  },
];
