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
    description: 'İnsanlığın ve medeniyetlerin geçmişini inceleyen bilim dalı. KPSS Tarih konularını burada bulabilirsiniz.',
    topics: [
      { 
        name: 'İslamiyet Öncesi Türk Tarihi', 
        imageId: 'tarih-islamiyet-oncesi',
        content: {
          summary: "İslamiyet öncesi Türk tarihi, Orta Asya'nın sert bozkır ikliminde şekillenen, dinamik ve askeri temelli bir yapıya sahiptir. Türklerin ana yurdu Orta Asya olup; doğuda Khingan Dağları, batıda Hazar Denizi, kuzeyde Sibirya ve güneyde Hindukuş-Himalaya Dağları ile çevrilidir. Konar-göçer yaşam tarzı (bozkır kültürü), Türklerin dayanıklı, savaşçı ve teşkilatçı bir yapı kazanmasını sağlamıştır. Devlet yönetiminde 'Kut' inancı (hükümdarlığın Tanrı tarafından verildiğine inanılması) hakimdir. Kut kan yoluyla babadan oğula geçtiği için 'ülke hanedanın ortak malıdır' anlayışı benimsenmiş, bu da sık sık taht kavgalarına ve devletlerin kısa sürede bölünmesine yol açmıştır. Kurultay (Toy), devlet işlerinin görüşüldüğü meclistir ve son söz hükümdara (Kağan/Han) aittir, bu yönüyle danışma meclisi niteliğindedir. Sosyal yapı Oguş (aile), Urug (sülale), Boy (ok), Budun (millet) ve İl (devlet) hiyerarşisine dayanır. Türkler bu dönemde Gök Tanrı inancını benimsemiş, ahiret inancının bir göstergesi olarak ölülerini 'Kurgan' adı verilen mezarlara değerli eşyalarıyla gömmüşlerdir.",
          keyPoints: [
            "İskitler (Sakalar): Bilinen ilk Türk topluluğudur. En önemli hükümdarı Alp Er Tunga, kadın hükümdarı Tomris Hatun'dur. 'Bozkırın Kuyumcuları' olarak anılırlar.",
            "Asya Hun Devleti: İlk teşkilatlı Türk devletidir. Merkezi Ötüken'dir. Mete Han dönemi en parlak zamandır; ilk kez Onlu Sistem kurulmuş ve Türk boyları tek bayrak altında toplanmıştır.",
            "Kavimler Göçü (375): Balamir önderliğinde Avrupa'ya göç edilmiş, Roma İmparatorluğu ikiye ayrılmış ve Avrupa'da feodalite (derebeylik) ortaya çıkmıştır.",
            "I. Göktürk Devleti: Türk adını siyasi bir isim olarak kullanan ilk devlettir. Bumin Kağan kurucusudur.",
            "II. Göktürk (Kutluk) Devleti: Orhun Yazıtları (Türk tarihinin ilk yazılı belgeleri) bu dönemde Bilge Kağan, Kültigin ve Tonyukuk adına dikilmiştir.",
            "Uygurlar: Yerleşik hayata geçen ilk Türk devletidir. Maniheizm etkisiyle savaşçılık özelliklerini kaybetmiş ancak tarım, sanat ve matbaa konusunda ilerlemişlerdir.",
            "İnanışlar: Yuş (cennet), Tamu (cehennem), Kurgan (mezar), Balbal (mezar taşı)."
          ],
          mnemonics: [
            "SOSYAL YAPI: O-U-B-B-İ (Oguş -> Urug -> Boy -> Budun -> İl)",
            "METE HAN: 'On'lu sistemin mucidi.",
            "UYGURLAR: 'Uygar' Türkler (Matbaa, kütüphane, yerleşik hayat).",
            "HAZARLAR: Museviliği benimseyen tek Türk topluluğu (H-M)."
          ]
        },
        pastQuestions: [
          {
            question: 'Türk adının geçtiği ilk Türkçe metinler hangileridir?',
            answer: 'Orhun Yazıtları (Göktürk Kitabeleri)'
          },
          {
            question: 'Maniheizm dinini kabul ederek yerleşik hayata geçen ilk Türk devleti hangisidir?',
            answer: 'Uygur Devleti'
          }
        ]
      },
      { 
        name: 'Osmanlı Devleti Kuruluş Dönemi', 
        imageId: 'tarih-osmanli-kurulus',
        content: {
          summary: "1299-1453 yıllarını kapsayan bu dönemde Osmanlılar, bir uç beyliğinden imparatorluk yolunda devleşen bir güce dönüşmüştür. Başarısının sırrı; Bizans sınırında (uç beyliği) olması, balkanlardaki siyasi boşluk, Ahilerin desteği, İskan (yerleştirme) ve İstimalet (hoşgörü) politikalarıdır. Osman Bey döneminde ilk bakır para basılmış ve Bizans'a karşı ilk zafer (Koyunhisar) kazanılmıştır. Orhan Bey döneminde devlet teşkilatlanmış; ilk düzenli ordu (Yaya ve Müsellem), ilk medrese (İznik) ve Divan teşkilatı kurulmuştur. I. Murad döneminde 'Sultan' unvanı ilk kez kullanılmış, Yeniçeri Ocağı kurulmuş ve ülke 'Padişah ve oğullarının malıdır' anlayışı getirilerek merkezi otorite güçlendirilmiştir. Yıldırım Bayezid döneminde Anadolu Türk siyasi birliği büyük oranda sağlanmış ancak 1402 Ankara Savaşı ile devlet 'Fetret Devri'ne girerek dağılma tehlikesi atlatmıştır.",
          keyPoints: [
            "İskan Politikası: Fethedilen Rumeli topraklarına Anadolu'daki göçebe Türkmenlerin yerleştirilmesidir.",
            "İstimalet Politikası: Gayrimüslim halka gösterilen dinsel ve kültürel hoşgörüdür.",
            "Sırpsındığı Savaşı: Haçlılarla yapılan ilk büyük savaştır.",
            "I. Kosova Savaşı: İlk kez top kullanılmıştır ve I. Murad savaş meydanında şehit edilmiştir.",
            "Niğbolu Savaşı: Yıldırım Bayezid'e 'Sultan-ı İklim-i Rum' unvanı verilmiştir.",
            "Çelebi Mehmed: Devletin ikinci kurucusu kabul edilir (Fetret Devri'ni bitirdiği için).",
            "II. Kosova Savaşı: Balkanların kesin olarak Türk yurdu olduğunu kanıtlamıştır."
          ],
          mnemonics: [
            "HAÇLI SAVAŞLARI: S-I-N-A-V (Sırpsındığı, I. Kosova, Niğbolu, Varna, II. Kosova)",
            "ORHAN BEY: 'O'rganizasyon dönemi (İlk ordu, ilk medrese).",
            "KURULUŞ PADİŞAHLARI: O-O-M-B-M-M (Osman, Orhan, Murad, Bayezid, Mehmed, Murad)"
          ]
        }
      },
      { 
        name: 'Atatürk İlke ve İnkılapları', 
        imageId: 'tarih-ataturk',
        content: {
          summary: "Atatürk ilkeleri; Türk İnkılabı'nın temelini oluşturan, birbirini tamamlayan ve çağdaşlaşmayı hedefleyen fikirlerdir. Temel ilkeler 6 tanedir: Cumhuriyetçilik (Milli Egemenlik), Milliyetçilik (Milli Birlik), Halkçılık (Eşitlik), Devletçilik (Ekonomi), Laiklik (Din ve Devlet Ayrımı) ve İnkılapçılık (Sürekli Yenilik). Cumhuriyetçilik ilkesi doğrudan halkın yönetime katılmasıyla ilgilidir (TBMM'nin açılması, Saltanatın kaldırılması). Milliyetçilik, Türk milletinin çıkarlarını her şeyin üstünde tutar ve ırkçı değildir (Türk Dil Kurumu, Kabotaj Kanunu). Halkçılık, toplumda hiçbir zümreye ayrıcalık tanınmamasıdır (Aşar vergisinin kaldırılması, Soyadı kanunu). Laiklik ise akıl ve bilimin rehber alınmasıdır (Halifeliğin kaldırılması, Tevhid-i Tedrisat).",
          keyPoints: [
            "Cumhuriyetçilik: Siyasi haklar, Seçim, Meclis, Egemenlik.",
            "Milliyetçilik: 'Türk' kelimesi geçen kurumlar, Kabotaj Kanunu, Milli ekonomi.",
            "Halkçılık: Eşitlik, Sosyal devlet, Kadınlara seçme seçilme hakkı.",
            "Laiklik: Akıl, Bilim, Din ve vicdan hürriyeti, Tekke ve zaviyelerin kapatılması.",
            "Devletçilik: Yatırım, Fabrika, Karma ekonomi, Bankalar (Sümerbank, Etibank).",
            "İnkılapçılık: Batılılaşma, Modernleşme, Takvim-Saat-Ölçü değişiklikleri."
          ],
          mnemonics: [
            "CUMHURİYETÇİLİK: Halkın 'O'yu (Siyasi katılım).",
            "HALKÇILIK: 'Eşit' halk (Sınıfsız toplum).",
            "MİLLİYETÇİLİK: 'Bizim' olan (Milli değerler).",
            "LAİKLİK: 'Din' ve 'Akıl' (İnanç özgürlüğü)."
          ]
        }
      },
      { name: 'İlk Müslüman Türk Devletleri', imageId: 'tarih-ilk-musluman' },
      { name: 'Osmanlı Devleti Yükselme Dönemi', imageId: 'tarih-osmanli-yukselme' },
      { name: 'Osmanlı Devleti Duraklama Dönemi', imageId: 'tarih-osmanli-duraklama' },
      { name: 'Osmanlı Devleti Gerileme Dönemi', imageId: 'tarih-osmanli-gerileme' },
      { name: 'Osmanlı Devleti Dağılma Dönemi', imageId: 'tarih-osmanli-dagilma' },
      { name: 'XX. Yüzyılda Osmanlı Devleti', imageId: 'tarih-osmanli-20yy' },
      { name: 'Kurtuluş Savaşı Hazirlik Dönemi', imageId: 'tarih-kurtulus-hazirlik' },
      { name: 'Kurtuluş Savaşı Muharebeler Dönemi', imageId: 'tarih-kurtulus-muharebe' },
      { name: 'Çağdaş Türk ve Dünya Tarihi', imageId: 'tarih-cagdas' },
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
            "MATEMATİK KONUM: 'M'esafe ve 'M'eridyen.",
            "ÖZEL KONUM: 'Ö'zgün ve 'Ö'nemli yerler (Boğazlar gibi)."
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
