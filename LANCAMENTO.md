# Lançamento — Ágape da Jornada OSM

Site: `https://viaveritasvita.github.io/osmjornada26/` · 21 de novembro de 2026

| Página | Endereço |
|---|---|
| Ágape (entrada) | `/osmjornada26/` |
| Programação | `/osmjornada26/programacao.html` |
| Painel (com senha) | `/osmjornada26/painel.html` |

Site neutro: sem local, endereço ou cidade em nenhuma página.
Mesmo motor da Jornada AMD (`amdjornada26`), com a arte do Grande Conclave.

## O que se edita
- `refeicoes-config.js`: opções e valores, chave Pix, nome do titular, WhatsApp de quem recebe os comprovantes, prazo (`encerraEm`).
- `data.js`: horários e graus da programação (só a OSM; a RCC não aparece).
- Depois de mudar código (`refeicoes.js`, `.css`, `.html`), suba o `CACHE` em `sw.js`.

## Planilha
Planilha própria do Ágape OSM (separada da AMD), com Apps Script publicado como aplicativo web.
A senha do painel é própria da OSM (diferente da AMD) e fica só no Apps Script, nunca no GitHub.

## Conferência
Cada pedido tem um código `OS…` e centavos únicos no valor (ex.: R$ 120,37).
No extrato, o valor já identifica o pedido. A aba **Resumo** da planilha traz os totais.
O Status vira **Confirmado** pelo menu da planilha (ou pela ação `confirmar`, com a senha do painel).
