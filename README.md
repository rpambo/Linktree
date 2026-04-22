# 🔗 Rafael Pambo - LinkTree

A modern and responsive centralized link page, built with **Angular 20** and **TypeScript**. Perfect for portfolio, services, and social media sharing.

![Angular](https://img.shields.io/badge/Angular-20.0-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)

---

## 🎯 About the Project

**LinkTree** is a link aggregator page that allows you to:

- ✅ Share all your important links in one place
- ✅ Modern design with parallax animations
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with dynamic meta tags
- ✅ Centralized URL configuration
- ✅ Custom 404 page
- ✅ Production ready

---

## 📋 Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| Angular | 20.0.1 | Main framework |
| TypeScript | 5.8.2 | Typed language |
| UIKit | 3.25.15 | CSS framework |
| RxJS | 7.8.0 | Reactive programming |
| Karma | 6.4.0 | Test runner |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (preferably Node 20 LTS)
- npm 9+ or yarn/pnpm
- Angular CLI 20+

### Installation

```bash
# Clone the repository
git clone https://github.com/rafaelpambo/LinkTree.git
cd LinkTree

# Install dependencies
npm install

# Start the development server
npm start
```

Access `http://localhost:4200/` in your browser.

---

## 📁 Project Structure

```
LinkTree/
├── src/
│   ├── app/            
│   │   ├── paginas/
│   │   │   ├── home/                       # Main page
│   │   │   │   ├── home.ts
│   │   │   │   ├── home.html
│   │   │   │   └── home.css
│   │   │   └── not-found/                  # 404 page
│   │   │       └── not-found.ts
│   │   ├── app.ts                          # Root component
│   │   ├── app.routes.ts                   # Routes
│   │   └── app.config.ts                   # Configuration
│   ├── index.html                          # Root HTML
│   ├── main.ts                             # Entry point
│   └── styles.css                          # Global styles
├── public/
│   ├── robots.txt                          # SEO - Bot instructions
│   ├── sitemap.xml                         # SEO - Site map
│   └── logo.png                            # Logo and assets
├── angular.json                            # Angular configuration
├── tsconfig.json                           # TypeScript configuration
├── package.json                            # Dependencies
└── README.md                               # This file
```

---

## 📝 Configuration

### 2. Customize Content

Edit `src/app/paginas/home/home.html` with your personal information.

### 3. Add Images

Place your images in `public/`:
- `rafael-pambo.webp` - Your profile photo
- `logo.png` - Your site logo
- `favicon.ico` - Browser icon

---

## 🛠️ Available Commands

```bash
# Development
npm start                 # Start development server
npm run watch            # Watch mode for development

# Build
npm run build            # Production-optimized build
npm run build:dev        # Development build

# Testing
npm test                 # Run unit tests
npm run test:coverage    # Tests with coverage

# Code analysis
npm run lint             # Lint TypeScript files
npm run analyze          # Bundle size analysis
```

---

## 🎨 Main Features

### ✨ Animations and Interactivity
- Parallax scrolling on profile image
- Smooth opacity animations
- Interactive buttons with hover effects
- Dropdown menu for sharing

### 🔗 Social Sharing
- WhatsApp, Facebook, LinkedIn
- Instagram, GitHub links
- Native Web Share API
- Message customization

### 🔍 SEO Optimized
- Dynamic meta tags
- Open Graph for social media
- Twitter Cards
- Structured Data (JSON-LD)
- Sitemap.xml
- Robots.txt configured

### 📱 Responsiveness
- Mobile-first design
- Optimized breakpoints
- Touch-friendly buttons
- UIKit framework integrated

---

## 🌐 Deploy

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The `vercel.json` file is already configured!

### GitHub Pages

```bash
npm run build
# Upload /dist to gh-pages branch
```

### Apache/Nginx

The `.htaccess` file contains Apache configurations.
For Nginx, use similar configuration.

---

## 🔐 Environment Variables

Create a `.env` file (won't be committed):

```env
# .env (LOCAL ONLY - don't commit)
SITE_BASE_URL=https://rafaelpambo.dev
ANALYTICS_ID=UA-XXXXXXX-X
API_KEY=your_secret_key
```

Use in your code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## 📚 Additional Documentation

This project includes complete documentation:

| File | Description |
|------|-------------|
| [PRODUCAO_CHECKLIST.md](PRODUCAO_CHECKLIST.md) | Complete production checklist |
| [URLS_CENTRALIZADAS.md](URLS_CENTRALIZADAS.md) | URL reference |
| [GITIGNORE_GUIDE.md](GITIGNORE_GUIDE.md) | .gitignore guide |

---

## 🧪 Testing

```bash
# Run unit tests
npm test

# With coverage
npm run test:coverage

# Watch mode
npm test -- --watch
```

Test examples are in `src/app/services/seo.service.spec.ts`.

---

## 🤝 Contributing

Contributions are welcome! For major changes:

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Rafael Pambo**
- 🌐 Website: https://rafaelpambo.dev
- 💼 LinkedIn: https://www.linkedin.com/in/rafael-pambo/
- 🐙 GitHub: https://github.com/rafaelpambo

---

## 🙏 Acknowledgments

- Angular Team for the excellent framework
- UIKit for the CSS foundation
- Open-source community

---

## 📊 Project Status

| Aspect | Status |
|--------|--------|
| Development | ✅ Complete |
| SEO | ✅ Optimized |
| Performance | ✅ Optimized |
| Mobile | ✅ Responsive |
| Production | ✅ Ready |
| Documentation | ✅ Complete |

---

## 🚀 Future Roadmap

- [ ] Multiple languages (i18n)
- [ ] Analytics dashboard
- [ ] PWA (Progressive Web App)
- [ ] QR Code generator
- [ ] Link click analytics
- [ ] Admin panel

---

**Last updated**: April 22, 2026

⭐ If this project was useful, consider giving it a star on GitHub!


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.