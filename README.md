# DAVOS - Consultoria em Gestão e Tecnologia

Site institucional da DAVOS construído com React + Vite, TailwindCSS e Framer Motion.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy na Vercel

### Opção 1: Via CLI da Vercel

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer deploy
vercel
```

### Opção 2: Via Dashboard da Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta
3. Clique em "Add New Project"
4. Importe o repositório do GitHub/GitLab/Bitbucket
5. Configure as seguintes opções:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Clique em "Deploy"

### Opção 3: Deploy Automático via Git

1. Faça push do código para um repositório Git (GitHub, GitLab ou Bitbucket)
2. Conecte o repositório à Vercel
3. Cada push para a branch principal fará deploy automático

## 📁 Estrutura do Projeto

```
davos-site/
├── src/
│   ├── components/     # Componentes React
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Entry point
├── public/            # Arquivos estáticos
├── dist/              # Build de produção
├── vercel.json        # Configuração da Vercel
└── package.json       # Dependências
```

## ✅ Checklist para Deploy

- [x] Dependências instaladas (`npm install`)
- [x] Build funcionando (`npm run build`)
- [x] Arquivo `vercel.json` configurado
- [x] `.gitignore` configurado
- [ ] Código commitado no Git
- [ ] Repositório conectado à Vercel

## 🔧 Configuração da Vercel

O arquivo `vercel.json` já está configurado com:
- Build command otimizado
- Output directory correto
- Rewrites para SPA (Single Page Application)
- Framework detection (Vite)

## 📝 Notas

- O site usa React Router para navegação (se aplicável)
- Todas as rotas são redirecionadas para `index.html` (SPA)
- Build otimizado com code splitting e tree shaking
- Suporte a ESLint para qualidade de código

## 🆘 Suporte

Para problemas com deploy, verifique:
1. Logs de build na Vercel
2. Versões do Node.js (recomendado: 18.x ou superior)
3. Variáveis de ambiente (se necessário)

---

Desenvolvido com ❤️ pela equipe DAVOS
