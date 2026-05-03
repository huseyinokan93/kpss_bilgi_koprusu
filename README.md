# KPSS Bilgi Köprüsü - Vercel Dağıtım Rehberi

Bu proje, KPSS hazırlık sürecinde öğrencilere yardımcı olmak için tasarlanmış, Next.js 15 ve Google Genkit tabanlı yapay zeka destekli bir eğitim portalıdır.

## Vercel ile Yayına Alma (Deploy)

Uygulamanın yapay zeka özelliklerinin (Server Actions) çalışması için statik export yerine **dinamik dağıtım** yapılması gerekmektedir. Vercel, Next.js projeleri için bu süreci otomatik yönetir.

### Adımlar:

1.  **Kodunuzu Hazırlayın:** `next.config.ts` dosyasında `output: 'export'` ayarının **olmadığından** emin olun (mevcut kodda kaldırılmıştır).
2.  **GitHub'a Yükleyin:** Projenizi bir GitHub deposuna (repository) gönderin.
3.  **Vercel'e Giriş Yapın:** [vercel.com](https://vercel.com/) adresine gidin.
4.  **Yeni Proje Ekleyin:** "Add New" > "Project" butonuna tıklayarak GitHub deponuzu seçin.
5.  **Framework Preset:** Vercel otomatik olarak **Next.js**'i tanıyacaktır. Değiştirmeyin.
6.  **Ortam Değişkenlerini (Environment Variables) Tanımlayın:** 
    *   Bu adım kritik! Vercel panelindeki "Environment Variables" bölümüne şu anahtarı ekleyin:
    *   `GEMINI_API_KEY`: Google AI Studio'dan aldığınız API anahtarınız.
7.  **Deploy:** "Deploy" butonuna basın. Vercel yaklaşık 1-2 dakika içinde uygulamanızı yayına alacaktır.

## Önemli Notlar

*   **Build Command:** Vercel varsayılan olarak `npm run build` komutunu kullanır.
*   **Output Directory:** Vercel otomatik olarak `.next` klasörünü kullanacaktır. Özel bir ayar yapmanıza gerek yoktur.
*   **Hataları Yoksayma:** Geliştirme sürecinde build sırasında çıkabilecek ufak TypeScript veya ESLint hataları dağıtımı engellememesi için `next.config.ts` içinde ignore edilmiştir.

## Yerel Kurulum
1. `npm install`
2. `.env` dosyasına `GEMINI_API_KEY` ekleyin.
3. `npm run dev` ile 9002 portunda çalıştırın.
