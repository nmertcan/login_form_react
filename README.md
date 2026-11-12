# React Login Form | Form ve Yönlendirme Arayüzü

[English](#english) · [Canlı demo](https://login-form-react-indol.vercel.app/)

## Türkçe

**React Login Form**, giriş formu ve başarı ekranı içeren bir frontend arayüz projesidir. **React bileşenleri, form etkileşimleri ve istemci tarafı yönlendirme** çalışmalarını sergiler.

### Proje yapısı
- `src/App.jsx`: React Router ile `/` ve `/success` rotaları
- `src/components/Login`: Giriş formu
- `src/components/Success`: Başarı ekranı

**Teknolojiler:** React 19 · JavaScript · React Router · Axios · Bootstrap · Reactstrap · Vite · ESLint

### Kurulum ve kontrol
```bash
npm install
npm run dev
npm run lint
npm run build
```

**Canlı demo:** https://login-form-react-indol.vercel.app/

> Bu proje bir **frontend arayüz örneğidir**; gerçek sunucu tarafı kimlik doğrulaması veya production seviyesinde oturum güvenliği sunduğu iddia edilmez. Cypress bağımlılığı mevcuttur ancak otomatik testlerin çalıştığı doğrulanmış değildir.

## English

A React login-form interface with a success screen, showcasing **component composition, form interactions, and client-side navigation**.

**Routes:** `/` and `/success`. **Stack:** React 19, JavaScript, React Router, Axios, Bootstrap, Reactstrap, Vite, ESLint.

**Run:** `npm install && npm run dev` · **Checks:** `npm run lint && npm run build`

**Live demo:** https://login-form-react-indol.vercel.app/

> This is a frontend UI demonstration, not a verified production authentication system.
