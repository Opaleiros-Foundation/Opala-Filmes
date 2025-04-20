# 🎬 Opala Filmes

![](public/opala-filmes.png)


Uma plataforma web onde opaleiros podem votar e compartilhar opiniões sobre filmes. Desenvolvida com Next.js, Firebase e TailwindCSS.

## 🚀 Características

- 📋 Lista de filmes para assistir
- ⭐ Sistema de votação (1-5 estrelas)
- 🎲 Sorteio aleatório de filmes
- ✅ Marcação de filmes assistidos
- 📱 Design responsivo
- 🌙 Tema claro/escuro

## 🛠️ Tecnologias

- [Next.js 15.2](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Firebase](https://firebase.google.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/opala-filmes.git

# Entre no diretório
cd opala-filmes

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### 🔧 Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Adicione as credenciais no arquivo `.env.local`:

```env
FIREBASE_API_KEY=sua_api_key
FIREBASE_AUTH_DOMAIN=seu_auth_domain
FIREBASE_PROJECT_ID=seu_project_id
FIREBASE_STORAGE_BUCKET=seu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
FIREBASE_APP_ID=seu_app_id
```

## 🚀 Uso

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
/app
  /[movie]         # Rota dinâmica para detalhes do filme
  /components      # Componentes reutilizáveis
  /firebase        # Configuração do Firebase
  page.js          # Página principal
  layout.js        # Layout base
/public            # Arquivos estáticos
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Convenções de Código

- Componentes em PascalCase
- Funções em camelCase
- Arquivos de componentes: `.jsx`
- Arquivos de utilidades: `.js`
- Testes: `.test.js`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📊 Status do Projeto

![GitHub stars](https://img.shields.io/github/stars/seu-usuario/opala-filmes?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/opala-filmes?style=social)
![GitHub issues](https://img.shields.io/github/issues/seu-usuario/opala-filmes)
![GitHub pull requests](https://img.shields.io/github/issues-pr/seu-usuario/opala-filmes)
