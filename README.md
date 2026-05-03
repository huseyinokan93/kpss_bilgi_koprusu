
# KPSS Bilgi Köprüsü - Kurulum ve Vercel Dağıtım Rehberi

Bu proje, KPSS hazırlık sürecinde öğrencilere yardımcı olmak için tasarlanmış yapay zeka destekli bir eğitim portalıdır.

## Dağıtım (Deployment) - Vercel ile Yayına Alma

Uygulamanın yapay zeka özelliklerinin (Server Actions) çalışması için statik export yerine **dinamik dağıtım** yapılması gerekmektedir. Vercel bu süreci otomatik olarak yönetir.

### Adımlar:
1.  **Kodunuzu GitHub'a Yükleyin:** Projenizi bir GitHub deposuna gönderin.
2.  **Vercel'e Giriş Yapın:** [vercel.com](https://vercel.com/) adresine gidin ve GitHub hesabınızla giriş yapın.
3.  **Yeni Proje Ekleyin:** "Add New" > "Project" butonuna tıklayarak GitHub deponuzu seçin.
4.  **Ortam Değişkenlerini Tanımlayın:** Dağıtım ekranındaki "Environment Variables" bölümüne şu değişkeni ekleyin:
    -   `GEMINI_API_KEY`: Google AI Studio'dan aldığınız API anahtarınız.
5.  **Deploy:** "Deploy" butonuna basın. Vercel uygulamanızı otomatik olarak build edecek ve bir kaç dakika içinde yayına alacaktır.

## Yerel Kurulum ve Çalıştırma
1. **Node.js** v20+ kurulu olduğundan emin olun.
2. `npm install` ile paketleri yükleyin.
3. `.env` dosyasına `GEMINI_API_KEY` anahtarınızı ekleyin.
4. `npm run dev` ile çalıştırın.
