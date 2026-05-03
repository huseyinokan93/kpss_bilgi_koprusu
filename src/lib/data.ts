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
          summary: "İslamiyet öncesi Türk tarihi, Orta Asya'nın sert bozkır ikliminde şekillenen, dinamik ve askeri temelli bir yapıya sahiptir. Türklerin ana yurdu Orta Asya olup; doğuda Khingan Dağları, batıda Hazar Denizi, kuzeyde Sibirya ve güneyde Hindukuş-Himalaya Dağları ile çevrilidir. Konar-göçer yaşam tarzı (bozkır kültürü), Türklerin dayanıklı, savaşçı ve teşkilatçı bir yapı kazanmasını sağlamıştır. Devlet yönetiminde 'Kut' inancı (hükümdarlığın Tanrı tarafından verildiğine inanılması) hakimdir. Kut kan yoluyla babadan oğula geçtiği için 'ülke hanedanın ortak malıdır' anlayışı benimsenmiş, bu da sık sık taht kavgalarına ve devletlerin kısa sürede bölünmesine yol açmıştır. Kurultay (Toy), devlet işlerinin görüşüldüğü meclistir ve son söz hükümdara (Kağan/Han) aittir, bu yönüyle danışma meclisi niteliğindedir. Sosyal yapı Oguş (aile), Urug (sülale), Boy (ok), Budun (millet) ve İl (devlet) hiyerarşisine dayanır.",
          keyPoints: [
            "İskitler (Sakalar): Bilinen ilk Türk topluluğudur. En önemli hükümdarı Alp Er Tunga, kadın hükümdarı Tomris Hatun'dur. 'Bozkırın Kuyumcuları' olarak anılırlar.",
            "Asya Hun Devleti: İlk teşkilatlı Türk devletidir. Merkezi Ötüken'dir (Toprak Ana). Mete Han dönemi en parlak zamandır; ilk kez Onlu Sistem kurulmuş ve Türk boyları tek bayrak altında toplanmıştır.",
            "Kavimler Göçü (375): Balamir önderliğinde Avrupa'ya göç edilmiş, Roma İmparatorluğu ikiye ayrılmış ve Avrupa'da feodalite (derebeylik) ortaya çıkmıştır.",
            "I. Göktürk Devleti: Türk adını siyasi bir isim olarak kullanan ilk devlettir. Bumin Kağan kurucusudur. İpek Yolu hakimiyeti için Sasanilerle iş birliği yaparak Akhunları yıkmışlardır.",
            "II. Göktürk (Kutluk) Devleti: Kürşat Ayaklanması sonrası bağımsızlık kazanılmıştır. Türk tarihinin ilk yazılı belgeleri olan Orhun Yazıtları bu dönemde dikilmiştir.",
            "Uygurlar: Bögü Kağan döneminde Maniheizm'i benimseyerek yerleşik hayata geçen ilk devlettir. Tarım, matbaa, kütüphane ve kalıcı mimari eserler bu dönemde başlamıştır."
          ],
          mnemonics: [
            "SOSYAL YAPI SIRALAMASI: O-U-B-B-İ (Oguş, Urug, Boy, Budun, İl).",
            "METE HAN: 'On' numara sistem kurdu (Onlu Sistem).",
            "UYGURLAR: 'Uygar' Türkler (Yerleşik hayat, matbaa, sanat).",
            "KURULTAY ÜYELERİ: 'TAY' (Tarkan, Aygucı, Yabgu - Danışma ekibi gibi düşünün)."
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
          summary: "1299-1453 yıllarını kapsayan bu dönemde Osmanlılar, bir uç beyliğinden imparatorluk yolunda devleşen bir güce dönüşmüştür. Başarısının sırrı; Bizans sınırında (uç beyliği) olması, balkanlardaki siyasi boşluk, Ahilerin desteği, İskan (yerleştirme) ve İstimalet (hoşgörü) politikalarıdır. Osman Bey döneminde ilk bakır para basılmış ve Bizans'a karşı ilk zafer (Koyunhisar) kazanılmıştır. Orhan Bey döneminde devlet teşkilatlanmış; ilk düzenli ordu (Yaya ve Müsellem), ilk medrese (İznik) ve Divan teşkilatı kurulmuştur. I. Murad dönemi ise imparatorluk temellerinin atıldığı; 'ülke padişah ve oğullarının malıdır' veraset değişikliğinin yapıldığı ve Yeniçeri Ocağı'nın kurulduğu dönemdir. Yıldırım Bayezid döneminde Anadolu Türk siyasi birliği büyük oranda sağlanmış ancak 1402 Ankara Savaşı ile devlet 'Fetret Devri'ne girerek dağılma tehlikesi atlatmıştır.",
          keyPoints: [
            "Koyunhisar Savaşı (1302): Bizans Tekfurlarıyla yapılan ilk savaş ve ilk galibiyettir.",
            "İskan Politikası: Fethedilen Rumeli topraklarına Anadolu'daki göçebe Türkmenlerin yerleştirilmesidir. Amaç bölgeyi Türkleştirmek ve kalıcı olmaktır.",
            "İstimalet Politikası: Gayrimüslim halka gösterilen dinsel ve kültürel hoşgörüdür. Fetihlerin kalıcı olmasını sağlamıştır.",
            "Sırpsındığı Savaşı: Haçlılarla yapılan ilk büyük savaştır (I. Murad dönemi).",
            "I. Kosova Savaşı: İlk kez top kullanılmıştır (I. Murad).",
            "Niğbolu Savaşı: Yıldırım Bayezid'e halife tarafından 'Sultan-ı İklim-i Rum' unvanı verilmiştir.",
            "Çelebi Mehmed: Fetret Devri'ne son verdiği için devletin ikinci kurucusu kabul edilir."
          ],
          mnemonics: [
            "KURULUŞ PADİŞAHLARI: O-O-M-B-M-M (Osman, Orhan, Murad, Bayezid, Mehmed, Murad).",
            "ANAYOL (Haçlı Savaşları): S-I-N-A-V (Sırpsındığı, I. Kosova, Niğbolu, Varna, II. Kosova).",
            "ORHAN BEY: 'O'rganizasyon Beyi (Teşkilatlanma dönemi)."
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
      { name: 'Atatürk İlke ve İnkılapları', imageId: 'tarih-ataturk' },
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
          summary: "Türkiye, 36°-42° Kuzey paralelleri ile 26°-45° Doğu meridyenleri arasında yer alan, hem Asya hem de Avrupa kıtasında toprakları bulunan stratejik bir ülkedir. Coğrafi konum 'Matematik (Mutlak) Konum' ve 'Özel (Göreceli) Konum' olarak ikiye ayrılır. Matematik Konum; Türkiye'nin Kuzey Yarım Küre'de, Orta Kuşak'ta ve Yengeç Dönencesi'nin kuzeyinde olmasının getirdiği sonuçlardır. Örneğin; dört mevsimin belirgin yaşanması, cephe yağışlarının görülmesi ve Akdeniz iklim kuşağında olması matematik konumun sonucudur. Özel Konum ise; Türkiye'nin üç tarafının denizlerle çevrili olması, yüksekliğinin batıdan doğuya artması, yer altı kaynakları zenginliği ve transit ticaret yolları (boğazlar) üzerinde olması gibi kendine has özellikleridir.",
          keyPoints: [
            "Kuzey-Güney Kuşuçumu Mesafe: 42-36 = 6 paralel x 111 km = 666 km'dir.",
            "Doğu-Batı Zaman Farkı: 45-26 = 19 meridyen x 4 dk = 76 dakikadır.",
            "Orta Kuşak Kanıtları: A-B-C-D (Akdeniz İklimi, Batı Rüzgarları, Cephe Yağışları, Dört Mevsim).",
            "Güneyden Kuzeye Gidildikçe: Çizgisel hız azalır, yerçekimi artır, gölge boyu uzar, grup ve tan süresi uzar.",
            "Aynı Anda Farklı Mevsim: Türkiye'nin yer şekilleri çeşitliliği ve kısa mesafede yükselti farkı (Özel Konum).",
            "Baki Etkisi: Türkiye'de dağların güney yamaçları daha fazla ısınır (Yengeç Dönencesi kuzeyi olduğu için)."
          ],
          mnemonics: [
            "ORTA KUŞAK: A-B-C-D (Akdeniz iklimi, Batı rüzgarları, Cephe yağışları, Dört mevsim).",
            "SINIRLARIMIZ: S-H-I-G (Sinop-İnceburun, Hatay-Beysun, Iğdır-Dilucu, Gökçeada-Avlaka).",
            "DENİZ SINIRLARI: En uzun kıyı Ege (girinti-çıkıntıdan dolayı), en uzun kıyı şeridi Karadeniz (düz hat olarak)."
          ]
        },
        pastQuestions: [
          {
            question: 'Türkiye\'de aynı anda farklı mevsim özelliklerinin yaşanmasının temel sebebi nedir?',
            answer: 'Yer şekillerinin çeşitliliği ve yükselti farkları (Özel Konum)'
          }
        ]
      },
      { name: 'Türkiye\'nin İklimi ve Bitki Örtüsü', imageId: 'cografya-iklim' },
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
          summary: "Hukuk; sosyal hayatı düzenleyen, maddi yaptırımlı (devlet gücüyle desteklenen) kurallar bütünüdür. Din, ahlak ve görgü kurallarından en büyük farkı devlet eliyle zorla uygulanabilir olmasıdır. Hukukun dalları Kamu Hukuku, Özel Hukuk ve Karma Hukuk olarak üçe ayrılır. Kamu hukuku devlet ile birey arasındaki asimetrik (devlet üstünlüğü) ilişkiyi düzenler (Örn: Ceza, Anayasa, Vergi). Özel hukuk ise eşit taraflar arasındaki ilişkileri düzenler (Örn: Medeni, Borçlar, Ticaret). Hukuk kurallarının hiyerarşisi 'Normlar Hiyerarşisi' olarak adlandırılır ve en üstte Anayasa bulunur. Alt basamaktaki bir kural üst basamaktaki kurala aykırı olamaz.",
          keyPoints: [
            "Normlar Hiyerarşisi: 1. Anayasa, 2. Kanun-Milletlerarası Antlaşma-OHAL CBK, 3. Cumhurbaşkanlığı Kararnamesi, 4. Yönetmelik.",
            "Yaptırım Türleri: Ceza, Cebri İcra, Tazminat, Hükümsüzlük (Yokluk, Butlan, Tek Taraflı Bağlamazlık), İptal.",
            "Hak Ehliyeti: Sağ ve tam doğmak şartıyla ana rahmine düştüğü anda başlar (Pasif ehliyet).",
            "Fiil Ehliyeti: 1. Ergin olmak (18 yaş), 2. Ayırt etme gücüne sahip olmak, 3. Kısıtlı olmamak (Aktif ehliyet).",
            "Kişilik: Tam ve sağ doğumla başlar, ölüm veya gaiplikle biter.",
            "Yokluk: Hukuki işlemin kurucu unsurlarından birinin eksik olmasıdır (Örn: Resmi evlendirme memuru olmadan yapılan evlilik)."
          ],
          mnemonics: [
            "KAMU HUKUKU: V-İ-C-A-D-A-N (Vergi, İdare, Ceza, Anayasa, Devletler Genel, Arsa(İcra-İflas), Noterlik).",
            "ÖZEL HUKUK: M-B-T-D (Medeni, Borçlar, Ticaret, Devletler Özel).",
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
      { name: 'Anayasa Hukukuna Giriş', imageId: 'gk-anayasa' },
      { name: 'Yasama', imageId: 'gk-yasama' },
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
