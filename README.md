# Picos do Saber

Reforço escolar em Picos-PI — site comercial, operação e método pedagógico.

## Estrutura

```
├── index.html              — Site público (captação e pré-matrícula)
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
│       ├── site-config.js  — WhatsApp e config pública (editar antes de divulgar)
│       └── main.js
├── pages/                  — Páginas públicas e documentação interna
├── operacional/            — CRM template, turmas, rotina comercial
└── pedagogico/             — Método v1.0 (congelado para Fase 4)
```

## Antes de divulgar

1. Edite `assets/js/site-config.js` com o WhatsApp real (DDI + DDD + número).
2. Copie `operacional/CRM-Template.xlsx` para planilha privada (Google Sheets).
3. Páginas em `pages/plano-diretor.html`, `financeiro.html`, etc. são documentação interna — não linkadas no footer público.

## Status

**Site v0.6** — Hero, captação, CRM operacional e método pedagógico v1.0 documentados.

**Fase atual:** teste de usabilidade do método (campo) + fechamento do funil comercial.
