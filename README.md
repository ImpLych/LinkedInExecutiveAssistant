# LinkedIn Executive Assistant 👔

**Created by @BuminCode**

Bu proje, LinkedIn profillerindeki önemli verileri (İsim, Unvan, Şirket, E-posta) otomatik olarak "kazıyan" (scraping) ve bunları yapılandırılmış bir şekilde Google Sheets (E-Tablolar) veritabanına kaydeden bir Chrome Tarayıcı Eklentisidir.

İşe alım süreçleri, satış potansiyeli oluşturma (lead generation) ve network takibi için manuel veri girişini ortadan kaldırmak amacıyla geliştirilmiştir.

![Project Icon](icon.png)

## 🛠 Kullanılan Teknolojiler

Bu proje geliştirilirken aşağıdaki teknolojiler kullanılmıştır:

- **Frontend:** HTML5, CSS3 (Modern Animasyonlar & Glassmorphism)
- **Logic:** JavaScript (ES6+), Chrome Extension Manifest V3 API
- **Backend:** Google Apps Script (Serverless Function)
- **Database:** Google Sheets (Bulut Veritabanı)
- **İletişim:** Fetch API (POST İstekleri)

---

## ⚖️ Yasal Uyarı (Disclaimer)

Bu proje tamamen **eğitim ve kişisel gelişim amaçlı** (Chrome Eklentisi mimarisi ve API entegrasyonlarını öğrenmek için) geliştirilmiştir.

- Bu yazılım resmi bir LinkedIn ürünü değildir ve LinkedIn ile herhangi bir bağlantısı yoktur.
- **Kullanıcı Sorumluluğu:** Bu aracı kullanarak yapılan veri toplama işlemlerinden, LinkedIn Kullanım Koşulları'na (Terms of Service) aykırı kullanımlardan veya oluşabilecek hesap kısıtlamalarından tamamen **kullanıcı sorumludur.**
- **Gizlilik:** Bu eklenti hiçbir kişisel veriyi geliştiriciye (Bumin Code) göndermez. Tüm veriler kullanıcının kendi tanımladığı Google E-Tablosunda saklanır.
- Yazılım "olduğu gibi" (as-is) sunulmuştur ve herhangi bir garanti içermez.

---

## 🚀 Kurulum Rehberi

Bu projeyi kendi bilgisayarınızda çalıştırmak için hem bir veritabanı (Google Sheets) oluşturmalı hem de eklentiyi tarayıcınıza yüklemelisiniz. Aşağıdaki adımları sırasıyla uygulayınız.

### 1. Adım: Google Sheets (Veritabanı) Kurulumu

Eklentinin verileri kaydedeceği yeri ayarlamamız gerekiyor.

1.  Yeni bir [Google E-Tablosu (Sheets)](https://sheets.google.com) oluşturun.
2.  Alt kısımdaki sayfa isminin **`Sayfa1`** olduğundan emin olun (Script bu isme göre çalışır).
3.  Üst menüden **Uzantılar (Extensions) > Apps Script** seçeneğine tıklayın.
4.  Açılan kod editöründeki her şeyi silin ve proje dosyaları içindeki `SheetAppScript.txt` dosyasında bulunan kodu kopyalayıp buraya yapıştırın.
5.  Sol üstteki **Kaydet (💾)** butonuna basın.
6.  Sağ üstteki **Dağıt (Deploy) > Yeni Dağıtım (New Deployment)** butonuna tıklayın.
7.  Sol taraftaki çark simgesinden **Web Uygulaması (Web App)** seçeneğini seçin.
8.  **Şu ayarları aynen yapın (Çok Önemli):**
    - **Açıklama:** LinkedIn Bot
    - **Çalıştırma Farklı (Execute as):** _Kendim (Me)_
    - **Erişimi olanlar (Who has access):** **_Herkes (Anyone)_** -> _(Bunu seçmezseniz eklenti çalışmaz)_
9.  **Dağıt** butonuna basın ve Google erişim izinlerini onaylayın.
10. İşlem sonunda size verilen **Web App URL**'ini kopyalayın.

### 2. Adım: Projeyi Yapılandırma

Kendi veritabanı linkinizi eklentiye tanıtmanız gerekiyor.

1.  Bu repoyu bilgisayarınıza indirin (Code > Download ZIP).
2.  Klasördeki `popup.js` dosyasını bir kod editörü (VS Code, Notepad++ vb.) ile açın.
3.  En üstteki satırı bulun: `const WEB_APP_URL = "..."`
4.  Tırnak işaretlerinin içine 1. Adımda kopyaladığınız linki yapıştırın.
    - _Örnek:_ `const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx.../exec";`
5.  Dosyayı kaydedin.

### 3. Adım: Chrome'a Yükleme

1.  Google Chrome'da adres çubuğuna `chrome://extensions/` yazın.
2.  Sağ üst köşedeki **Geliştirici Modu (Developer Mode)** anahtarını açın.
3.  Sol üstteki **Paketlenmemiş öğe yükle (Load Unpacked)** butonuna tıklayın.
4.  İndirdiğiniz proje klasörünü seçin.

Tebrikler! 🎉 Eklenti tarayıcınıza yüklendi.

---

## 📖 Nasıl Kullanılır?

1.  Herhangi bir **LinkedIn kullanıcı profiline** gidin ve iletişim bilgileri kısmına tıklayın.
2.  Tarayıcınızın sağ üstündeki yapboz parçasına tıklayıp **LinkedIn Executive Assistant** ikonuna basın.
3.  Açılan pencerede **"Save Profile"** butonuna tıklayın.
4.  Buton yeşil renge dönüp "Saved Successfully" dediğinde, veriler Google Tablonuza eklenmiş olacaktır.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.
