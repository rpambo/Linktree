# 🔗 Rafael Pambo - LinkTree

Uma página de link centralizado moderna e responsiva, construída com **Angular 20** e **TypeScript**. Perfeita para portfólio, serviços e compartilhamento de redes sociais.

![Angular](https://img.shields.io/badge/Angular-20.0-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)

---

## 🎯 Sobre o Projeto

**LinkTree** é uma página agregadora de links que permite:

- ✅ Compartilhar todos os seus links importantes em um único lugar
- ✅ Design moderno com animações parallax
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Otimizado para SEO com meta tags dinâmicas
- ✅ Configuração centralizada de URLs
- ✅ Página 404 customizada
- ✅ Pronto para produção

---

## 📋 Tecnologias

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| Angular | 20.0.1 | Framework principal |
| TypeScript | 5.8.2 | Linguagem tipada |
| UIKit | 3.25.15 | Framework CSS |
| RxJS | 7.8.0 | Programação reativa |
| Karma | 6.4.0 | Test runner |

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ (preferencialmente Node 20 LTS)
- npm 9+ ou yarn/pnpm
- Angular CLI 20+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/rafaelpambo/LinkTree.git
cd LinkTree

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Acesse `http://localhost:4200/` no seu navegador.

---

## 📁 Estrutura do Projeto

```
LinkTree/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   ├── environment.service.ts      # URLs centralizadas
│   │   │   ├── links.service.ts            # Gerenciador de links
│   │   │   └── seo.service.ts              # Otimização SEO
│   │   ├── paginas/
│   │   │   ├── home/                       # Página principal
│   │   │   │   ├── home.ts
│   │   │   │   ├── home.html
│   │   │   │   └── home.css
│   │   │   └── not-found/                  # Página 404
│   │   │       └── not-found.ts
│   │   ├── app.ts                          # Root component
│   │   ├── app.routes.ts                   # Rotas
│   │   └── app.config.ts                   # Configuração
│   ├── index.html                          # HTML raiz
│   ├── main.ts                             # Entry point
│   └── styles.css                          # Estilos globais
├── public/
│   ├── robots.txt                          # SEO - Instruções para bots
│   ├── sitemap.xml                         # SEO - Mapa do site
│   └── logo.png                            # Logo e assets
├── angular.json                            # Configuração Angular
├── tsconfig.json                           # Configuração TypeScript
├── package.json                            # Dependências
└── README.md                               # Este arquivo
```

---

## 📝 Configuração

### 1. Atualizar URLs Sociais

Edite `src/app/services/environment.service.ts`:

```typescript
export const SITE_CONFIG: SiteConfig = {
  baseUrl: 'https://rafaelpambo.dev',
  socialLinks: {
    whatsapp: 'https://wa.me/244900000000',
    github: 'https://github.com/rafaelpambo',
    linkedin: 'https://www.linkedin.com/in/rafael-pambo/',
    instagram: 'https://www.instagram.com/rafaelpambo',
    facebook: 'https://www.facebook.com/rafaelpambo',
    newsletter: 'https://seu-newsletter.com'
  }
};
```

### 2. Customizar Conteúdo

Edite `src/app/paginas/home/home.html` com suas informações pessoais.

### 3. Adicionar Imagens

Coloque suas imagens em `public/`:
- `rafael-pambo.webp` - Sua foto de perfil
- `logo.png` - Logo do seu site
- `favicon.ico` - Ícone do browser

---

## 🛠️ Comandos Disponíveis

```bash
# Desenvolvimento
npm start                 # Inicia servidor de desenvolvimento
npm run watch            # Watch mode para desenvolvimento

# Build
npm run build            # Build de produção otimizado
npm run build:dev        # Build de desenvolvimento

# Testes
npm test                 # Executa testes unitários
npm run test:coverage    # Testes com cobertura

# Análise de código
npm run lint             # Lint dos arquivos TypeScript
npm run analyze          # Análise de bundle size
```

---

## 📊 Funcionalidades Principais

### ✨ Animações e Interatividade
- Parallax scrolling na imagem de perfil
- Animações suaves de opacity
- Botões interativos com hover effects
- Menu dropdown para compartilhamento

### 🔗 Compartilhamento Social
- WhatsApp, Facebook, LinkedIn
- Instagram, GitHub links
- Web Share API nativa
- Customização de mensagens

### 🔍 SEO Otimizado
- Meta tags dinâmicas
- Open Graph para redes sociais
- Twitter Cards
- Structured Data (JSON-LD)
- Sitemap.xml
- Robots.txt configurado

### 📱 Responsividade
- Mobile-first design
- Breakpoints otimizados
- Touch-friendly buttons
- UIKit framework integrado

### 🛡️ Segurança
- Tipos TypeScript completos
- Environment variables
- Error handling
- CSRF protection ready

---

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O arquivo `vercel.json` já está configurado!

### GitHub Pages

```bash
npm run build
# Upload /dist para gh-pages branch
```

### Apache/Nginx

O arquivo `.htaccess` contém configurações para Apache.
Para Nginx, use configuração similar.

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` (não será commitado):

```env
# .env (LOCAL ONLY - não commitear)
SITE_BASE_URL=https://rafaelpambo.dev
ANALYTICS_ID=UA-XXXXXXX-X
API_KEY=sua_chave_secreta
```

Use em seu código:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## 📚 Documentação Adicional

Este projeto inclui documentação completa:

| Arquivo | Descrição |
|---------|-----------|
| [PRODUCAO_CHECKLIST.md](PRODUCAO_CHECKLIST.md) | Checklist completo de produção |
| [URLS_CENTRALIZADAS.md](URLS_CENTRALIZADAS.md) | Referência de URLs |
| [GITIGNORE_GUIDE.md](GITIGNORE_GUIDE.md) | Guia do .gitignore |
| [SEO_GUIDE_PT.md](SEO_GUIDE_PT.md) | Guia completo de SEO |

---

## 🧪 Testes

```bash
# Executar testes unitários
npm test

# Com coverage
npm run test:coverage

# Watch mode
npm test -- --watch
```

Exemplos de testes estão em `src/app/services/seo.service.spec.ts`.

---

## 🎨 Customização

### Cores e Estilos
Edite `src/app/paginas/home/home.css` para customizar cores e layouts.

### Fontes
Fontes estão importadas no `src/index.html` via Google Fonts.

### Icons
SVG icons estão inline nos templates - sinta-se livre para customizar!

---

## 📈 Performance

Optimizações incluídas:
- ✅ Lazy loading de componentes
- ✅ Tree-shaking de módulos não usados
- ✅ Minificação de assets
- ✅ Gzip compression ready
- ✅ Cache control configurado
- ✅ Image optimization (WebP format)

**Lighthouse Score**: ✨ 95+ (quando deployado)

---

## 🐛 Troubleshooting

### Porta 4200 já em uso
```bash
ng serve --port 4201
```

### Erros de compilação TypeScript
```bash
npm run build -- --configuration development
```

### Limpar cache do Angular
```bash
rm -rf .angular/cache node_modules
npm install
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para modificações maiores:

1. Faça um fork do repositório
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Rafael Pambo**
- 🌐 Website: https://rafaelpambo.dev
- 💼 LinkedIn: https://www.linkedin.com/in/rafael-pambo/
- 🐙 GitHub: https://github.com/rafaelpambo
- 📧 Email: contato@rafaelpambo.dev

---

## 📞 Suporte

Para dúvidas, issues ou sugestões:

- 📝 [Abrir uma Issue](https://github.com/rafaelpambo/LinkTree/issues)
- 💬 [Discussões](https://github.com/rafaelpambo/LinkTree/discussions)
- 📧 [Enviar email](mailto:contato@rafaelpambo.dev)

---

## 🙏 Agradecimentos

- Angular Team pela excelente framework
- UIKit pela base CSS
- Comunidade open-source

---

## 📊 Status do Projeto

| Aspecto | Status |
|--------|--------|
| Desenvolvimento | ✅ Completo |
| SEO | ✅ Otimizado |
| Performance | ✅ Otimizado |
| Mobile | ✅ Responsivo |
| Produção | ✅ Pronto |
| Documentação | ✅ Completa |

---

## 🚀 Roadmap Futuro

- [ ] Dark mode toggle
- [ ] Múltiplos idiomas (i18n)
- [ ] Analytics dashboard
- [ ] PWA (Progressive Web App)
- [ ] QR Code generator
- [ ] Link click analytics
- [ ] Admin panel

---

**Última atualização**: 22 de Abril de 2026

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
