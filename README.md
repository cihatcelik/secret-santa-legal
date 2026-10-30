# Secret Santa – yasal sayfalar (GitHub Pages)

| Dosya | Adres | Nerede kullanılır |
|---|---|---|
| `privacy.html` | `<site>/privacy.html` | Play Console & App Store Connect → Gizlilik politikası URL'si |
| `delete-account.html` | `<site>/delete-account.html` | Play Console → Veri güvenliği → Hesap silme URL'si |
| `index.html` | `<site>/` | Destek / pazarlama URL'si |

Sayfalar Türkçe + İngilizce. Dil `?lang=tr` / `?lang=en` ile seçilir, yoksa tarayıcı dili kullanılır.

## Yayınlama
1. GitHub'da **herkese açık** yeni bir depo oluştur, ör. `secret-santa-legal`
   (uygulama kodunu buraya koyma; ücretsiz planda Pages için depo herkese açık olmalı).
2. Bu klasörün **içindekileri** (`.nojekyll` dahil) deponun köküne yükle.
3. Settings → Pages → Source: *Deploy from a branch*, Branch: `main` / `(root)` → Save.
4. Birkaç dakika sonra site `https://<kullanıcıadı>.github.io/secret-santa-legal/` adresinde açılır.
5. Bu adresi `src/constants/legal.ts` içindeki `LEGAL_SITE_URL`'ye yaz (sonda `/` olmadan);
   uygulamanın Profil ekranında gizlilik politikası linki görünür hâle gelir.

Metinleri güncellediğinde `privacy.html` içindeki yürürlük tarihini de değiştir.
