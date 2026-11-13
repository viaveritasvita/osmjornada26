/* ============================================================
   refeicoes-config.js — TUDO O QUE SE EDITA NA PÁGINA DO ÁGAPE
   Jornada da Ordem do Monitor Secreto (OSM) · 21/11/2026

   Site NEUTRO: não ponha aqui local, endereço nem cidade.
   ATENÇÃO: repositório público. Use só chave Pix ALEATÓRIA.
   ============================================================ */

const REFEICOES_CONFIG = {
  /* URL /exec do Apps Script da planilha do Ágape OSM.
     Enquanto começar com COLE_, o site gera o Pix mas não grava pedidos. */
  apiUrl: 'https://script.google.com/macros/s/AKfycbwTqZxyTIx1HU79d4u3vsjYVrOm6OlmtVFTlXjk8WXuDP77JASA8ABAkhsgP94AmKIL/exec',

  /* Recebedor do Pix.
     nome: até 25 letras, sem acento, como está no banco.
     cidade: só vai dentro do código Pix (não aparece na página). */
  pix: {
    chave: 'f5f765c7-b4d4-45db-893b-1e6382298539', // chave aleatória
    nome: 'LUCIANO DE OLIVEIRA NUNES',
    cidade: 'RIO DE JANEIRO',
    banco: 'Nubank',
    titular: 'Ir. Luciano de Oliveira Nunes',
  },

  /* WhatsApp de quem recebe os comprovantes (55 + DDD + número, só dígitos).
     Vazio = os botões de WhatsApp somem. */
  tesoureiro: {
    nome: 'Ir. Luciano',
    whatsapp: '556599819296',
  },

  /* Opções de alimentação (uma por pedido). */
  opcoes: [
    { id: 'osm', nome: 'Jornada OSM', detalhe: 'Café da manhã e almoço · 21 de novembro de 2026', valor: 120 },
    { id: 'osmrcc', nome: 'Dois eventos: OSM + RCC', detalhe: '21/11 e 12/12/2026', valor: 240 },
  ],

  /* Cardápio (só exibição). Vazio = o bloco "Ver o cardápio" some. */
  cardapio: [],
  cardapioNota: '',

  /* Depois disso a página mostra "pedidos encerrados". */
  encerraEm: '2026-11-20T23:59:00-03:00',
};
