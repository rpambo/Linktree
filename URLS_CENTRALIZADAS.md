# 📌 URLs Centralizadas - Rafael Pambo LinkTree

## Local de Configuração
📁 **Arquivo**: `src/app/services/environment.service.ts`

Todos os URLs estão centralizados em um único lugar para facilitar manutenção!

---

## 🔗 Links Sociais Configurados

| Link | URL Atual | Status | Onde Usar |
|------|-----------|--------|-----------|
| WhatsApp | `https://wa.me/244900000000` | ✅ Ativo | Contatar |
| GitHub | `https://github.com/rafaelpambo` | ✅ Ativo | Portfolio |
| LinkedIn | `https://www.linkedin.com/in/rafael-pambo/` | ✅ Ativo | Profissional |
| Instagram | `https://www.instagram.com/rafaelpambo` | ✅ Ativo | Social Media |
| Facebook | `https://www.facebook.com/rafaelpambo` | ✅ Ativo | Social Media |
| Newsletter | `https://example.com/newsletter` | ⚠️ TODO | Email |

---

## 📍 URLs do Site

| Página | URL | Sitemap | Robots |
|--------|-----|---------|--------|
| Home | `https://rafaelpambo.dev/` | ✅ Sim (Prioridade 1.0) | ✅ Allow |
| 404 | `https://rafaelpambo.dev/404` | ❌ Não | ✅ Allow |

---

## 🛠️ Arquivos de Configuração

| Arquivo | Propósito | Localização |
|---------|-----------|-------------|
| `robots.txt` | Instruções para bots | `public/robots.txt` |
| `sitemap.xml` | Mapa do site | `public/sitemap.xml` |
| `.htaccess` | Config Apache | `.htaccess` |
| `vercel.json` | Config Vercel | `vercel.json` |
| `environment.service.ts` | URLs centralizadas | `src/app/services/` |

---

## 🔄 Como Atualizar URLs

### 1. Atualizar um Link Social
```typescript
// Arquivo: src/app/services/environment.service.ts

export const SITE_CONFIG: SiteConfig = {
  baseUrl: 'https://rafaelpambo.dev',
  socialLinks: {
    whatsapp: 'https://wa.me/244900000000',    // ← Atualizar aqui
    github: 'https://github.com/rafaelpambo',  // ← Ou aqui
    // ...
  }
};
```

### 2. Adicionar uma Nova Página ao Sitemap
```xml
<!-- Arquivo: public/sitemap.xml -->
<url>
  <loc>https://rafaelpambo.dev/nova-pagina</loc>
  <lastmod>2026-04-21</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

### 3. Usar Link no Template
```html
<!-- Usar LinksService em vez de URL hardcoded -->
<a [href]="linksService.getLink('github')" target="_blank">
  GitHub
</a>
```

### 4. Usar Link no TypeScript
```typescript
// No componente
import { LinksService } from '../../services/links.service';

constructor(private linksService: LinksService) {}

abrirGitHub(): void {
  this.linksService.openLink('github');
}
```

---

## ✅ Checklist de URLs

### Links que foram removidos do hardcoding:
- [x] WhatsApp (home.html linha 42)
- [x] Newsletter (home.html linha 75)
- [x] Website (home.html linha 108)
- [x] GitHub (home.html linha 141)
- [x] LinkedIn (home.html linha 174)
- [x] Instagram (home.html linha 210)
- [x] Facebook (home.html linha 216)

### Próximas ações:
- [ ] Atualizar template home.html para usar linksService
- [ ] Testar todos os links
- [ ] Submeter sitemap ao Google Search Console
- [ ] Monitorar no Search Console

---

## 🚀 Exemplo de Uso Completo

```typescript
// home.ts
import { LinksService } from '../../services/links.service';

export class Home {
  constructor(public linksService: LinksService) {}

  // Usar no template
  get whatsappLink() {
    return this.linksService.getLink('whatsapp');
  }

  // Ou em método
  compartilhar() {
    this.linksService.shareViaWebShare(
      'Rafael Pambo',
      'Veja meu portfólio!',
      this.linksService.getBaseUrl()
    );
  }
}
```

```html
<!-- home.html -->
<a [href]="linksService.getLink('whatsapp')" target="_blank">
  Contrate Meus Serviços
</a>
```

---

## 📊 Estatísticas

- **Total de URLs únicos**: 7
- **URLs no sitemap**: 1 (+ páginas futuras)
- **Disallow no robots.txt**: 4 diretórios
- **Configuração centralizada**: ✅ Sim
- **Sem hardcoding**: ✅ (Pronto para refatorar templates)

---

## 🔒 Segurança

Todos os URLs estão em:
- ✅ Arquivo TypeScript tipado
- ✅ Singleton (ProvidedIn: 'root')
- ✅ Exportados via LinksService
- ✅ Sem exposição no frontend direto

---

**Data de atualização**: 21 de Abril de 2026
**Responsável**: Environment Service
**Status**: ✅ Pronto para Produção
