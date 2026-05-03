export type Topic = {
  name: string;
  description?: string;
  imageId?: string;
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
        pastQuestions: [
          {
            question: 'Orta Asya\'da kurulan ilk Türk devleti aşağıdakilerden hangisidir?',
            answer: 'Asya Hun Devleti'
          },
          {
            question: 'Türk adının geçtiği ilk Türkçe metinler hangileridir?',
            answer: 'Orhun Yazıtları (Göktürk Kitabeleri)'
          },
          {
            question: 'Uygurların yerleşik hayata geçmesinin en önemli sonucu aşağıdakilerden hangisidir?',
            answer: 'Tarım, mimari ve sanat gibi alanlarda gelişmeler göstermeleridir.'
          }
        ]
      },
      { name: 'İlk Müslüman Türk Devletleri', imageId: 'tarih-ilk-musluman' },
      { name: 'Osmanlı Devleti Kuruluş Dönemi', imageId: 'tarih-osmanli-kurulus' },
      { name: 'Osmanlı Devleti Yükselme Dönemi', imageId: 'tarih-osmanli-yukselme' },
      { name: 'Osmanlı Devleti Duraklama Dönemi', imageId: 'tarih-osmanli-duraklama' },
      { name: 'Osmanlı Devleti Gerileme Dönemi', imageId: 'tarih-osmanli-gerileme' },
      { name: 'Osmanlı Devleti Dağılma Dönemi', imageId: 'tarih-osmanli-dagilma' },
      { name: 'XX. Yüzyılda Osmanlı Devleti', imageId: 'tarih-osmanli-20yy' },
      { name: 'Kurtuluş Savaşı Hazırlık Dönemi', imageId: 'tarih-kurtulus-hazirlik' },
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
        pastQuestions: [
          {
            question: 'Türkiye\'nin en doğusu ile en batısı arasında kaç dakikalık yerel saat farkı vardır?',
            answer: '76 dakika (19 meridyen x 4 dakika)'
          },
          {
            question: 'Aşağıdaki paralel dairelerinden hangisi Türkiye topraklarından geçmez?\nA) 36° Kuzey\nB) 39° Kuzey\nC) 42° Kuzey\nD) 43° Kuzey',
            answer: 'D) 43° Kuzey (Türkiye 36°-42° Kuzey paralelleri arasındadır.)'
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
        pastQuestions: [
          {
            question: 'Bir kimsenin, hukuk düzeninin sınırları içinde, dilediği gibi hareket etme serbestisine ne ad verilir?',
            answer: 'Hak'
          },
          {
            question: 'Devleti oluşturan unsurlar aşağıdakilerden hangisidir?',
            answer: 'Millet (Ulus), Ülke (Vatan), Egemenlik'
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
            problem: 'a, b ve c birer tam sayı olmak üzere, a·b çarpımı tek sayı, b+c toplamı çift sayıdır. Buna göre aşağıdakilerden hangisi daima doğrudur?\n A) a tek sayıdır.\n B) b çift sayıdır.\n C) c tek sayıdır.\n D) a+c toplamı çift sayıdır.\n E) a·c çarpımı tek sayıdır.',
            solution: '1. a·b tek ise, çarpımın tek olabilmesi için her iki çarpanın da tek olması gerekir. Dolayısıyla, hem a hem de b tek sayıdır.\n2. b+c çift ise ve b\'nin tek olduğunu biliyorsak, toplamın çift olabilmesi için c\'nin de tek olması gerekir (Tek + Tek = Çift).\n3. Sonuç olarak a, b ve c\'nin hepsi tek sayıdır.\n4. Şıkları incelediğimizde A, C, D ve E şıklarının bu analize göre doğru olduğunu görürüz. Genellikle bu tür sorularda tek bir kesin doğru cevap istenir, bu durum sorunun yapısında bir belirsizlik olduğunu düşündürebilir. Ancak yapılan analize göre a, b ve c\'nin tek olduğu kesindir.',
          },
          {
            title: 'Pozitif ve Negatif Sayılar',
            problem: 'x < 0 < y olduğuna göre, aşağıdakilerden hangisinin değeri daima negatiftir?\n A) x + y\n B) y - x\n C) x · y\n D) x²\n E) y / x',
            solution: 'Verilen bilgi: x negatif bir sayı, y ise pozitif bir sayıdır.\nŞıkları inceleyelim:\nA) x + y: Negatif ve pozitif bir sayının toplamı, sayıların mutlak değerlerine bağlı olarak pozitif, negatif veya sıfır olabilir. Kesin değildir.\nB) y - x: Pozitif bir sayıdan negatif bir sayıyı çıkarmak, pozitif bir sayıya pozitif bir sayı eklemekle aynıdır (y - (-|x|) = y + |x|). Sonuç daima pozitiftir.\nC) x · y: Negatif bir sayı ile pozitif bir sayının çarpımı daima negatiftir ((-) × (+) = (-)).\nD) x²: Negatif bir sayının karesi daima pozitiftir.\nE) y / x: Pozitif bir sayının negatif bir sayıya bölümü daima negatiftir ((+) ÷ (-) = (-)).\nBu durumda hem C hem de E şıkları daima negatiftir.',
          },
        ],
      },
      {
        name: 'Sayı Basamakları',
        description: 'Sayıların basamak değerleri, çözümleme ve basamak analizine dayalı problem çözme teknikleri.',
        examples: [
          {
            title: 'Basamak Çözümleme',
            problem: 'İki basamaklı AB sayısı, rakamları toplamının 5 katına eşittir. Bu koşulu sağlayan AB sayısı kaçtır?',
            solution: '1. AB sayısını çözümleyelim: 10A + B.\n2. Rakamları toplamı: A + B.\n3. Verilen denklemi yazalım: 10A + B = 5(A + B)\n4. Denklemi düzenleyelim: 10A + B = 5A + 5B\n5. 10A - 5A = 5B - B  => 5A = 4B\n6. Bu eşitliği sağlayan A ve B rakamları A=4 ve B=5\'tir. (A ve B, 0-9 arasında olmalı ve A sıfır olamaz).\n7. O halde AB sayısı 45\'tir.',
          },
           {
            title: 'Rakamları Farklı Sayı',
            problem: 'Rakamları birbirinden farklı üç basamaklı en büyük doğal sayı ile rakamları birbirinden farklı üç basamaklı en küçük doğal sayının farkı kaçtır?',
            solution: '1. Rakamları farklı üç basamaklı en büyük doğal sayı: 987\'dir.\n2. Rakamları farklı üç basamaklı en küçük doğal sayı: 102\'dir.\n3. Farkları: 987 - 102 = 885.',
          },
        ],
      },
      { 
        name: 'Bölme ve Bölünebilme',
        description: 'Bölme işlemi, kalan bulma ve sayilarin 2, 3, 4, 5, 8, 9, 10, 11 ile bölünebilme kuralları.',
        examples: [
          {
            title: 'Bölme İşlemi',
            problem: 'Bir bölme işleminde bölen 15, bölüm 8 ve kalan 7 ise bölünen sayı kaçtır?',
            solution: '1. Bölme işleminde Bölünen = (Bölen × Bölüm) + Kalan formülü kullanılır.\n2. Bölünen = (15 × 8) + 7\n3. Bölünen = 120 + 7\n4. Bölünen = 127.',
          },
          {
            title: '3 ile Bölünebilme',
            problem: 'Dört basamaklı 5A21 sayısının 3 ile tam bölünebilmesi için A yerine yazılabilecek rakamların toplamı kaçtır?',
            solution: '1. Bir sayının 3 ile tam bölünebilmesi için rakamları toplamının 3 veya 3\'ün katı olması gerekir.\n2. Sayının rakamlarını toplayalım: 5 + A + 2 + 1 = 8 + A\n3. Bu toplamın 3\'ün katı olması için A\'nın alabileceği değerleri bulalım:\nA=1 için 8+1=9 (3\'ün katı)\nA=4 için 8+4=12 (3\'ün katı)\nA=7 için 8+7=15 (3\'ün katı)\n4. A yerine yazılabilecek rakamlar 1, 4, ve 7\'dir.\n5. Toplamları: 1 + 4 + 7 = 12.',
          },
        ]
      },
      { 
        name: 'OBEB-OKEK',
        description: 'En Büyük Ortak Bölen (OBEB) ve En Küçük Ortak Kat (OKEK) bulma ve problem çözümleri.',
        examples: [
          {
            title: 'OBEB ve OKEK Bulma',
            problem: '24 ve 36 sayılarının OBEB ve OKEK\'ini bulunuz.',
            solution: '1. Sayıları asal çarpanlarına ayırırız:\n24 = 2³ × 3¹\n36 = 2² × 3²\n2. OBEB(24, 36): Ortak olan asal çarpanlardan üssü küçük olanlar alınır ve çarpılır. OBEB = 2² × 3¹ = 4 × 3 = 12.\n3. OKEK(24, 36): Ortak olan asal çarpanlardan üssü büyük olanlar ile ortak olmayanların tümü alınır ve çarpılır. OKEK = 2³ × 3² = 8 × 9 = 72.',
          },
        ]
      },
      { 
        name: 'Rasyonel Sayılar',
        description: 'Kesirler, ondalık sayılar, sıralama ve dört işlem.',
        examples: [
          {
            title: 'Rasyonel Sayılarda Toplama',
            problem: '(1/2) + (3/4) - (1/3) işleminin sonucu kaçtır?',
            solution: '1. Paydaları eşitlememiz gerekir. Paydalar (2, 4, 3) için ortak kat 12\'dir.\n2. (1/2)\'yi 6 ile, (3/4)\'ü 3 ile, (1/3)\'ü 4 ile genişletiriz:\n(6/12) + (9/12) - (4/12)\n3. Payları toplayıp çıkarırız: (6 + 9 - 4) / 12\n4. Sonuç: 11/12.',
          },
        ]
      },
      { 
        name: 'Basit Eşitsizlikler',
        description: 'Sayı doğrultusunda aralıklar, eşitsizliklerin özellikleri ve çözümleri.',
        examples: [
           {
            title: 'Temel Eşitsizlik Çözümü',
            problem: '2x - 3 < 7 eşitsizliğini sağlayan en büyük x tam sayısı kaçtır?',
            solution: '1. Eşitsizliğin her iki tarafına 3 ekleyelim: 2x - 3 + 3 < 7 + 3\n2. 2x < 10\n3. Her iki tarafı 2\'ye bölelim: x < 5\n4. x, 5\'ten küçük olmalıdır. Bu koşulu sağlayan en büyük tam sayı 4\'tür.',
          },
          {
            title: 'Negatif Katsayılı Eşitsizlik',
            problem: '-3x + 5 ≥ -4 eşitsizliğinin çözüm kümesini bulunuz.',
            solution: '1. Her iki taraftan 5 çıkaralım: -3x ≥ -4 - 5  => -3x ≥ -9\n2. Şimdi her iki tarafı -3\'e böleceğiz. Eşitsizliğin her iki tarafı negatif bir sayıya çarpılır veya bölünürse eşitsizlik yön değiştirir.\n3. x ≤ (-9) / (-3)\n4. x ≤ 3. Çözüm kümesi (-∞, 3] aralığıdır.',
          },
          {
            title: 'İkili (Bileşik) Eşitsizlik',
            problem: '-2 < x - 1 ≤ 5 eşitsizliğini sağlayan x tam sayılarının toplamı kaçtır?',
            solution: '1. Bu tür eşitsizliklerde hedef, ortada sadece x\'i bırakmaktır. Bunun için her üç tarafa da 1 ekleyelim.\n2. -2 + 1 < x - 1 + 1 ≤ 5 + 1\n3. -1 < x ≤ 6\n4. Bu aralıktaki x tam sayıları şunlardır: 0, 1, 2, 3, 4, 5, 6.\n5. Bu sayıların toplamı: 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21\'dir.',
          },
           {
            title: 'Rasyonel Eşitsizlik',
            problem: '(x + 1) / 2 > 3 eşitsizliğinin çözüm aralığı nedir?',
            solution: '1. Eşitsizliğin her iki tarafını 2 ile çarpalım. 2 pozitif bir sayı olduğu için eşitsizlik yön değiştirmez.\n2. x + 1 > 6\n3. Her iki taraftan 1 çıkaralım: x > 5\n4. Çözüm aralığı (5, ∞) olur.',
          }
        ]
      },
      { 
        name: 'Mutlak Değer',
        description: 'Bir sayının sıfıra olan uzaklığı, mutlak değerli denklemler ve eşitsizlikler.',
        examples: [
           {
            title: 'Mutlak Değerli Denklem',
            problem: '|x - 4| = 3 denkleminin çözüm kümesi nedir?',
            solution: 'Bir ifadenin mutlak değeri 3 ise, o ifade ya 3\'tür ya da -3\'tür.\n1. Durum: x - 4 = 3  => x = 7\n2. Durum: x - 4 = -3 => x = 1\nÇözüm kümesi {1, 7} dir.',
          },
        ]
      },
      { 
        name: 'Üslü Sayılar',
        description: 'Üs alma, üslü sayılarda dört işlem, denklemler ve sıralama.',
        examples: [
           {
            title: 'Üslü Sayılarda Çarpma',
            problem: '2³ · 2⁴ · 2⁻² işleminin sonucu kaçtır?',
            solution: '1. Tabanlar aynı olduğunda üsler toplanır.\n2. Üsler toplamı: 3 + 4 + (-2) = 5\n3. Sonuç: 2⁵ = 32.',
          },
        ]
      },
      { 
        name: 'Köklü Sayılar',
        description: 'Karekök, küpkök, köklü sayılarda işlemler ve kök dışına çıkarma.',
        examples: [
           {
            title: 'Köklü Sayılarda Toplama',
            problem: '√12 + √27 işleminin sonucu kaçtır?',
            solution: '1. Kök içlerini sadeleştirmeliyiz.\n√12 = √(4 × 3) = 2√3\n√27 = √(9 × 3) = 3√3\n2. Şimdi toplayabiliriz: 2√3 + 3√3 = (2+3)√3 = 5√3.',
          },
        ]
      },
      { name: 'Çarpanlara Ayırma' },
      { name: 'Oran-Orantı' },
      { name: 'Problemler' },
    ],
  },
];
