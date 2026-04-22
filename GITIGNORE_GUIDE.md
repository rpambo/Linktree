# 📋 .gitignore - Guia Completo

## O que foi atualizado?

O arquivo `.gitignore` agora é **completo e otimizado para produção**. Ele garante que:

- ✅ Arquivos sensíveis **não são commitados**
- ✅ Dependências grandes **não ocupam o repositório**
- ✅ Arquivos temporários **são ignorados automaticamente**
- ✅ Secrets e variables de ambiente **não são expostos**

---

## 📚 Categorias de Arquivos Ignorados

### 🔨 Compiled Output / Build Artifacts
```
/dist/              → Saída da compilação Angular
/tmp/               → Arquivos temporários
/out-tsc/           → Saída do TypeScript
*.js                → Arquivos JavaScript compilados
*.js.map            → Source maps
```

### 📦 Node / Package Managers
```
/node_modules/      → Dependências npm (1000+ MB)
npm-debug.log       → Logs do npm
yarn-error.log      → Logs do yarn
package-lock.json   → Lock files
yarn.lock           → Lock files Yarn
pnpm-lock.yaml      → Lock files pnpm
```

### 🛠️ IDEs and Editors
```
.idea/              → IntelliJ IDEA
.vscode/            → VS Code (exceto config compartilhado)
*.sublime-*         → Sublime Text
.netbeans/          → NetBeans
```

### 🅰️ Angular Específico
```
/.angular/cache     → Cache do Angular
.ng-*               → Arquivos internos Angular
*.ngfactory.ts      → Factory files compilados
*.ngsummary.json    → Summary files
```

### 🧪 Testing
```
/coverage/          → Relatórios de cobertura
testem.log          → Logs de testes
.nyc_output/        → Outputs de cobertura
```

### 🔐 Environment & Secrets
```
.env                → Variáveis de ambiente
.env.local          → Variáveis locais
.env.*.local        → Variáveis por ambiente
environment.prod.ts → Configuração de produção
```

### 🖥️ Operating System
```
.DS_Store           → macOS
Thumbs.db           → Windows
.AppleDouble        → macOS
desktop.ini         → Windows
```

### ⚠️ Temporary Files
```
*.tmp               → Arquivos temporários
*.bak               → Backups
*~                  → Backups Vi/Vim
.#*                 → Locks de editor
```

---

## 🚨 Arquivos IMPORTANTES que NÃO são ignorados

Estes arquivos **SÃO commitados** e aparecem no repositório:

### ✅ Arquivos de Configuração
```
angular.json        → Configuração Angular
tsconfig.json       → Configuração TypeScript
package.json        → Dependências do projeto
.gitignore          → Este arquivo
```

### ✅ Código Fonte
```
src/                → Todo o código TypeScript
public/             → Assets públicos
README.md           → Documentação
```

### ✅ Configuração VS Code (Selecionada)
```
.vscode/settings.json      → Recomendações compartilhadas
.vscode/tasks.json         → Tasks do projeto
.vscode/launch.json        → Configs de debug
.vscode/extensions.json    → Extensões recomendadas
```

---

## 📌 Boas Práticas

### 1. **NÃO commitear secrets**
```bash
❌ ERRADO:
API_KEY=sk_live_xxxxx

✅ CORRETO:
# Criar .env.example
API_KEY=sk_test_placeholder

# Usar no código:
import.meta.env.VITE_API_KEY
```

### 2. **NÃO commitear node_modules**
```bash
# O node_modules é RECRIADO com:
npm install

# Tamanho típico:
# node_modules/ → 500MB-2GB
# .gitignore economiza espaço!
```

### 3. **NÃO commitear build artifacts**
```bash
# Recriado com:
npm run build

# Tamanho típico:
# dist/ → 50MB-200MB
# .gitignore economiza espaço!
```

### 4. **Adicionar regras personalizadas se necessário**
```bash
# Se precisar ignorar outros arquivos:
echo "meu-arquivo-pessoal.txt" >> .gitignore
```

---

## 🔍 Verificar o que será commitado

### Antes de fazer commit:
```bash
# Ver o que será commitado
git status

# Ver arquivos ignorados
git status --ignored

# Ver o que será adicionado (dry run)
git add -n .

# Verificar se um arquivo será ignorado
git check-ignore -v seu-arquivo.txt
```

---

## 📊 Tamanho do Repositório Estimado

### ❌ SEM .gitignore otimizado:
```
node_modules/    → 1GB
dist/            → 200MB
.cache/          → 100MB
build/           → 50MB
─────────────────────────
TOTAL:          ~1.35GB ⚠️ MUITO GRANDE
```

### ✅ COM .gitignore otimizado:
```
src/             → 500KB
public/          → 100KB
config files     → 50KB
─────────────────────────
TOTAL:          ~650KB ✅ PERFEITO
```

**Economia: 99% menor! 🚀**

---

## 🎯 Checklist Antes de Deploy

- [ ] Verificou `git status`?
- [ ] Nenhum arquivo `.env` será commitado?
- [ ] Nenhum `node_modules` será commitado?
- [ ] Nenhum arquivo `dist/` será commitado?
- [ ] Rodar `git status --ignored` para verificar?

---

## 🔧 Customizar .gitignore

### Adicionar novo padrão:
```bash
# Abrir .gitignore e adicionar:
echo "meu-diretório/" >> .gitignore
echo "*.pessoal" >> .gitignore
```

### Remover do tracking (se foi commitado antes):
```bash
# Se um arquivo foi commitado e agora quer ignorar:
git rm --cached node_modules
git commit -m "Remove node_modules from tracking"
```

### Ignorar um arquivo específico:
```bash
# Local .gitignore (não será commitado):
echo "arquivo-local.txt" >> .git/info/exclude
```

---

## 📌 Referências

- [GitHub .gitignore Template](https://github.com/github/gitignore/blob/main/Angular.gitignore)
- [GitIgnore.io](https://www.toptal.com/developers/gitignore)
- [Git Documentation](https://git-scm.com/docs/gitignore)

---

## ✨ Resumo

Seu `.gitignore` agora é:
- ✅ Completo para Angular
- ✅ Otimizado para produção
- ✅ Protege secrets
- ✅ Reduz tamanho do repositório
- ✅ Segue boas práticas

**Próximo passo: fazer commit!** 🚀

```bash
git add .gitignore
git commit -m "Update: .gitignore otimizado para produção"
```
