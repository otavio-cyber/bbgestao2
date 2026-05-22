# BB Gestão Empresarial — Next.js

Site refatorado para Next.js 14 (App Router) com TypeScript e Tailwind CSS.

## Estrutura

```
bbgestao/
├── app/
│   ├── layout.tsx       # Root layout (fonts, metadata)
│   ├── page.tsx         # Página principal (monta todos os componentes)
│   └── globals.css      # Estilos globais + Tailwind
├── components/
│   ├── Header.tsx       # Navbar fixa, responsiva, sticky scroll
│   ├── Hero.tsx         # Hero com slider de frases rotativas
│   ├── CTABanner.tsx    # Banner azul de call-to-action
│   ├── Sobre.tsx        # Quem Somos, Missão/Visão/Propósito, BPO
│   ├── Areas.tsx        # 6 áreas de atuação em grid
│   ├── Clientes.tsx     # Grid de logos de clientes
│   ├── Contato.tsx      # Footer com endereços e contatos
│   └── WhatsAppFloat.tsx # Botão flutuante WhatsApp
└── public/
    └── favicon.png
```

## Instalação

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Notas

- Fonte: **Barlow Condensed** (títulos/display) + **Inter** (corpo)
- Cores: azul marinho `#1a3a6b`, azul `#2563eb`, dourado `#c9a84c`
- Imagem na seção "Quem Somos" vem do Unsplash (gratuita)
- Logos dos clientes: exibidos como texto estilizado (placeholders)
  → substituir por `<Image>` com os arquivos reais quando disponíveis
- Google Analytics: adicionar o script no `layout.tsx` quando pronto
- Formulário de contato aponta para o Google Forms original do cliente
