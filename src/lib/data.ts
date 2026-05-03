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
          summary: "İslamiyet öncesi Türk tarihi, Orta Asya'da kurulan ilk Türk toplulukları ve devletlerini kapsar. Türklerin ana yurdu Orta Asya'dır. Konar-göçer yaşam tarzı, askeri yapılarını ve toplumsal düzenlerini şekillendirmiştir. Kurultay (Toy) adı verilen meclislerde devlet işleri görüşülür, 'Kut' inancıyla hükümdarın yönetme yetkisini Tanrı'dan aldığına inanılırdı.",
          keyPoints: [
            "Bilinen ilk Türk topluluğu İskitler (Sakalardır).",
            "Asya Hun Devleti, bilinen ilk teşkilatlı Türk devletidir (Mete Han).",
            "Kavimler Göçü ile Roma İmparatorluğu ikiye ayrılmıştır.",
            "Göktürkler, Türk adını resmi devlet ismi olarak kullanan ilk devlettir.",
            "Uygurlar, Maniheizm'i benimseyerek yerleşik hayata geçen ilk Türk devletidir."
          ],
          mnemonics: [
            "METE: Ordu'da Onlu Sistem (Onlu Sistem'i kuran Mete Han'dır).",
            "UYGURLAR: Uygar (Yerleşik hayat, matbaa, kütüphane)."
          ]
        },
        pastQuestions: [
          {
            question: 'Orta Asya\'da kurulan ilk Türk devleti aşağıdakilerden hangisidir?',
            answer: 'Asya Hun Devleti'
          },
          {
            question: 'Türk adının geçtiği ilk Türkçe metinler hangileridir?',
            answer: 'Orhun Yazıtları (Göktürk Kitabeleri)'
          }
        ]
      },
      { 
        name: 'Osmanlı Devleti Kuruluş Dönemi', 
        imageId: 'tarih-osmanli-kurulus',
        content: {
          summary: "1299 yılında Söğüt ve Domaniç civarında Osman Bey tarafından kurulan beylik, kısa sürede Bizans ve diğer beyliklerle girdiği mücadeleler sonucu büyümüştür. Coğrafi konum, uç beyliği olma ve 'İstimalet' (hoşgörü) politikası bu büyümede kritik rol oynamıştır.",
          keyPoints: [
            "Koyunhisar Savaşı: Bizans ile yapılan ilk savaş.",
            "İskan Politikası: Rumeli'de kalıcılığı sağlamak için uygulanan yerleştirme sistemi.",
            "Edirne-Segedin Antlaşması: Haçlılarla yapılan ilk barış antlaşması.",
            "Varna ve II. Kosova Savaşları: Türklerin Balkanlar'daki hakimiyetini kesinleştirmiştir."
          ],
          mnemonics: [
            "PADİŞAHLAR (Kronolojik): O-O-M-B-M (Osman, Orhan, Murat, Bayezid, Murat)."
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
          summary: "Türkiye 36-42 derece kuzey paralelleri ile 26-45 derece doğu meridyenleri arasında yer alan bir orta kuşak ülkesidir. Bu konum, Türkiye'ye dört mevsimin belirgin yaşanması ve ılıman iklim koşulları gibi avantajlar sağlar.",
          keyPoints: [
            "En kuzeyi Sinop (İnceburun), en güneyi Hatay (Beysun Köyü).",
            "En doğusu Iğdır (Dilucu), en batısı Gökçeada (Avlaka Burnu).",
            "Aynı anda farklı mevsim özelliklerinin yaşanması Özel Konum sonucudur.",
            "Dört mevsimin belirgin yaşanması Matematiksel Konum sonucudur."
          ],
          mnemonics: [
            "SINIRLAR: S-H-I-G (Sinop, Hatay, Iğdır, Gökçeada - Kuzey, Güney, Doğu, Batı)."
          ]
        },
        pastQuestions: [
          {
            question: 'Türkiye\'nin en doğusu ile en batısı arasında kaç dakikalık yerel saat farkı vardır?',
            answer: '76 dakika (19 meridyen x 4 dakika)'
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
          summary: "Hukuk, bireylerin birbirleriyle ve devletle olan ilişkilerini düzenleyen, yaptırımı devlet gücüne dayanan kurallar bütünüdür. Sosyal hayatı düzenleyen diğer kurallar arasında din, ahlak ve görgü kuralları bulunur ancak hukukun yaptırımı maddidir.",
          keyPoints: [
            "Yaptırım (Müeyyide): Hukuk kuralına aykırı davranıldığında karşılaşılan tepkidir (Ceza, Cebri İcra, İptal).",
            "Hak ehliyeti: Sağ ve tam doğmak şartıyla anne karnında başlar.",
            "Fiil ehliyeti: Ayırt etme gücü, Erginlik, Kısıtlı olmamak.",
            "Özel Haklar: Alacak, Mülkiyet, Velayet gibi kişilere tanınan yetkilerdir."
          ],
          mnemonics: [
            "YAPTIRIMLAR: C-C-İ-T (Ceza, Cebri İcra, İptal, Tazminat)."
          ]
        },
        pastQuestions: [
          {
            question: 'Bir kimsenin, hukuk düzeninin sınırları içinde, dilediği gibi hareket etme serbestisine ne ad verilir?',
            answer: 'Hak'
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
            solution: '1. a·b tek ise a ve b tektir.\n2. b+c çift ise c tektir.\n3. Hepsi tektir.',
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
