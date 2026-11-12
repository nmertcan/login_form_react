# React Login Form

React ve Vite ile geliştirilmiş, giriş formu ve başarı sayfası içeren bir arayüz projesi.

## Proje yapısı

- `src/App.jsx`: React Router ile `/` ve `/success` rotalarını tanımlar
- `src/components/Login`: Giriş ekranı
- `src/components/Success`: Başarı ekranı

## Teknolojiler

React, JavaScript, React Router, Axios, Bootstrap/Reactstrap ve Vite. Proje bağımlılıklarında Cypress test aracı da bulunur.

## Kurulum

```bash
npm install
npm run dev
```

## Kontroller

```bash
npm run lint
npm run build
```

## Notlar

Bu README, depoda doğrulanabilen proje yapısını tanımlar. Cypress bağımlılığının bulunması, testlerin başarıyla çalıştırıldığını tek başına göstermez. Gerçek bir sunucu tarafı kimlik doğrulaması veya üretim güvenliği iddiasında bulunulmamaktadır.

## Geliştirme fikirleri

Form doğrulama davranışlarını belgelemek, Cypress testlerini çalıştırılabilir bir komutla sunmak, ekran görüntüleri ve canlı demo bağlantısı eklemek.
