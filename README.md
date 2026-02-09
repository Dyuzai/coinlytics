# 🪙 Coinlytics - Crypto Analytics Dashboard

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

**Coinlytics** é um dashboard de análise de criptomoedas de alto desempenho, projetado para oferecer uma experiência visual premium e dados em tempo real. O projeto demonstra o uso de arquiteturas modernas de frontend e backend, focando em escalabilidade, performance e experiência do usuário (UX).

---

## 🚀 Funcionalidades Principais

- **Visualização de Mercado Real-time**: Acompanhamento dos principais ativos via integração com API da CoinGecko.
- **Gráficos Interativos**: Visualização de tendências e preços (Sparklines) dos últimos 7 dias utilizando a biblioteca Recharts.
- **Dashboard de Visão Geral**: Cards dinâmicos com métricas de Market Cap Global, Volume em 24h e Dominância de Bitcoin.
- **Busca e Filtragem**: Filtro instantâneo de ativos por nome ou símbolo.
- **UI/UX Premium**: Design moderno com Dark Mode nativo, Glassmorphism, animações suaves e total responsividade.

---

## 🛠️ Stack Tecnológica

### Frontend (`/front`)
- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router & Turbopack)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS (Abordagem Utility-First para performance)
- **Componentes**: Radix UI & Shadcn/UI (Design System)
- **Gráficos**: Recharts
- **Ícones**: Lucide React
- **Arquitetura**: Feature-Based Architecture (Separação clara de responsabilidades por domínios de negócio)

### Backend (`/back`)
- **Framework**: [NestJS](https://nestjs.com/) (Arquitetura modular e robusta)
- **ORM**: Prisma IO
- **Banco de Dados**: PostgreSQL
- **Documentação**: Swagger UI (OpenAPI)
- **Linguagem**: TypeScript

---

## 🏗️ Arquitetura e Boas Práticas

Este projeto foi construído seguindo rigorosos padrões de desenvolvimento para demonstrar maturidade técnica:

- **Clean Code & SOLID**: Princípios aplicados na organização dos componentes e hooks.
- **Hooks Customizados**: Abstração de lógica de dados no frontend para componentes mais limpos.
- **Responsividade Mobile-First**: Interface adaptada perfeitamente para dispositivos móveis e desktop.
- **Diretivas do Next.js**: Uso correto de `Client Components` vs `Server Components` para otimização de SEO e performance.
- **Polling e Atualização Automática**: Sistema de atualização de dados em intervalos para manter o dashboard relevante.

---

## 🔧 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v18+)
- PostgreSQL rodando

### Passo a Passo

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/Dyuzai/coinlytics.git
   cd coinlytics
   ```

2. **Configurar o Backend**
   ```bash
   cd back
   npm install
   # Configure seu .env com a DATABASE_URL
   npx prisma generate
   npm run start:dev
   ```

3. **Configurar o Frontend**
   ```bash
   cd ../front
   npm install
   npm run dev
   ```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

### Contato
Desenvolvido por **[Seu Nome/GitHub]** - Sinta-se à vontade para entrar em contato para feedbacks ou oportunidades!
