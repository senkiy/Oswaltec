# 🏗️ Oswaltec - Website Corporativo

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4.1-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-3.4.11-06B6D4?logo=tailwindcss" alt="Tailwind" />
</div>

## 📋 Sobre o Projeto

Website institucional da **Oswaltec**, empresa especializada em serviços industriais com foco em:
- 🛡️ **Segurança**
- 🎯 **Qualidade** 
- ⚡ **Produção**
- 🔧 **Manutenção e Serviços**

### 🌟 Principais Características

- **Design Responsivo**: Interface otimizada para desktop, tablet e mobile
- **Performance Otimizada**: Construído com Vite para carregamento rápido
- **Componentes Reutilizáveis**: Arquitetura baseada em componentes com shadcn/ui
- **Experiência do Usuário**: Animações suaves e navegação intuitiva
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca para construção da interface
- **TypeScript 5.5.3** - Tipagem estática para JavaScript
- **Vite 5.4.1** - Build tool e servidor de desenvolvimento
- **React Router DOM 6.26.2** - Roteamento do lado do cliente

### UI & Estilização
- **Tailwind CSS 3.4.11** - Framework CSS utility-first
- **shadcn/ui** - Biblioteca de componentes acessíveis
- **Radix UI** - Componentes primitivos headless
- **Lucide React** - Biblioteca de ícones
- **next-themes** - Gerenciamento de temas

### Funcionalidades
- **React Hook Form** - Gerenciamento de formulários
- **TanStack Query** - Gerenciamento de estado do servidor
- **Zod** - Validação de esquemas
- **date-fns** - Manipulação de datas
- **Recharts** - Gráficos e visualizações

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd oswaltec_web
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador e vá para `http://localhost:5173`

## 📜 Scripts Disponíveis

```json
{
  "dev": "vite",                    // Servidor de desenvolvimento
  "build": "vite build",            // Build para produção
  "build:dev": "vite build --mode development", // Build para desenvolvimento
  "lint": "eslint .",               // Verificação de código
  "preview": "vite preview"          // Preview do build
}
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── About.tsx       # Seção sobre a empresa
│   ├── Contact.tsx     # Seção de contato
│   ├── Footer.tsx      # Rodapé
│   ├── Hero.tsx        # Seção hero/banner principal
│   ├── Portfolio.tsx   # Portfólio de projetos
│   └── Services.tsx    # Seção de serviços
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página principal
│   └── NotFound.tsx    # Página 404
├── lib/                # Utilitários e configurações
├── hooks/              # Hooks customizados
└── App.tsx            # Componente raiz
```

## 🎨 Seções do Website

### 🏠 Hero Section
- Banner principal com call-to-action
- Navegação suave para seção de contato
- Design impactante com overlay sobre imagem

### ℹ️ Sobre a Empresa
- História e valores da Oswaltec
- Estatísticas de projetos e experiência
- Missão e compromissos

### 🛠️ Serviços
1. **Infraestrutura e Edificações**
   - Construção Civil
   - Pintura Predial

2. **Construção, Manutenção e Montagem**
   - Soldagem e Caldeiraria
   - Funilaria Industrial
   - Montagem de Andaimes

3. **Suporte**
   - Isolamento Térmico
   - Limpeza Técnica e Industrial

4. **Tratamento e Revestimento**
   - Jateamento Abrasivo
   - Pintura Industrial

### 📞 Contato
- Informações de contato completas
- Integração com WhatsApp
- Call-to-action para orçamento gratuito

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 📱 Contato da Empresa

- **Telefone/WhatsApp**: (71) 99108-6042
- **E-mail**: oswaltecservicos@gmail.com
- **Localização**: Dias D'Ávila - BA
- **Horário**: Segunda a Sexta, 8h às 18h | Emergências 24h

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

© 2024 Oswaltec. Todos os direitos reservados.

---

<div align="center">
  <p>Desenvolvido com ❤️ para a <strong>Oswaltec</strong></p>
</div>
