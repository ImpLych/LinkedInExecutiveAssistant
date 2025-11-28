# LinkedIn Executive Assistant (Chrome Extension)

**Created by Bumin Code**

Bu proje, LinkedIn profillerindeki verileri (İsim, Unvan, Şirket, E-posta) tek bir tıklamayla toplayıp, otomatik olarak sizin belirlediğiniz bir Google E-Tablosuna (Google Sheets) kaydeden bir Chrome tarayıcı eklentisidir.

![Project Icon](icon.png)

## 🌟 Özellikler

- **Tek Tıkla Veri Çekme:** LinkedIn profil sayfasındayken butona basıldığında verileri okur.
- **Google Sheets Entegrasyonu:** Veriler anlık olarak bulut tablonuza eklenir.
- **Modern UI:** CSS animasyonları ve Glassmorphism tasarımı.
- **Toplanan Veriler:**
  - İsim Soyisim
  - Unvan (Title)
  - Şirket Adı
  - E-posta (Eğer profilde herkese açıksa)
  - Profil Linki (URL)
  - İşlem Tarihi

## 🛠 Kurulum ve Yapılandırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için **Backend (Google Sheets)** ve **Frontend (Chrome Extension)** olmak üzere iki aşamalı kurulum yapmanız gerekir.

### Adım 1: Google Sheets (Backend) Kurulumu

Verilerin kaydedileceği veritabanını oluşturmak için:

1.  Yeni bir [Google E-Tablosu (Sheets)](https://sheets.google.com) oluşturun.
2.  Sayfanın altındaki sekme adının `Sayfa1` olduğundan emin olun.
3.  Üst menüden **Uzantılar (Extensions) > Apps Script** seçeneğine tıklayın.
4.  Açılan kod editöründeki her şeyi silin ve aşağıdaki kodu yapıştırın:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sayfa1");

    // Veri kaydı yapılıyor...
    sheet.appendRow([
      data.name, // A Sütunu: İsim
      data.title, // B Sütunu: Unvan
      data.linkedinUrl, // C Sütunu: Profil Linki
      new Date(), // D Sütunu: Tarih
      data.email, // E Sütunu: E-posta
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```
