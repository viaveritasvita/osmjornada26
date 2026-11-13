/* ============================================================
   data.js — IDENTIDADE E CONTEÚDO DO EVENTO
   Jornada da Ordem do Monitor Secreto (OSM) · 21 de novembro de 2026

   Este site é NEUTRO: não mostra local nem endereço. Não acrescente
   LOCATIONS nem "loc" nas sessões.

   ATENÇÃO: repositório público — nunca coloque aqui link de convite
   de WhatsApp, telefone pessoal ou senha.
   ============================================================ */

const SITE_CONFIG = {
  siteUrl: 'https://viaveritasvita.github.io/osmjornada26/',
  shortUrl: 'https://viaveritasvita.github.io/osmjornada26/',
  sheetProgramacaoCsvUrl: 'COLE_AQUI_A_URL_CSV_DA_ABA_PROGRAMACAO',
  sheetAvisosCsvUrl: 'COLE_AQUI_A_URL_CSV_DA_ABA_AVISOS',
  icsFeedUrl: '',
  oneSignalAppId: '',
};

const EVENT_INFO = {
  bodies: 'Jornada da Ordem do Monitor Secreto',
  city: '',
  tz: 'America/Sao_Paulo',
  utcOffset: '-03:00',
  officialStart: '2026-11-21',
  openingISO: '2026-11-21T07:05:00-03:00',
  secretariatEmail: '',
  emergencyTel: '',
  emergencyDisplay: '',
};

/* Sem locais neste evento (site neutro). */
const LOCATIONS = {};

/* ---------- CORPOS / GRAUS ----------
   "geral" (sem selo) e "log" (logística) são reservados pelo motor. */
const BODIES = {
  osm:   { label: 'Ordem do Monitor Secreto', color: '#7a1422' },
  geral: { label: '', color: '#6e5a5d' },
  log:   { label: '', color: '#7d6f71' },
};

const SCHEDULE = [
  {
    date: '2026-11-21',
    weekday: 'sat',
    official: true,
    sessions: [
      { id: 's21-0', start: '05:50', end: '06:30', body: 'log',
        t: { pt: 'Chegada da equipe ritualística' },
        note: { pt: 'Preparação do templo e organização dos materiais' } },
      { id: 's21-1', start: '06:30', end: '07:05', body: 'geral',
        t: { pt: 'Café da manhã e credenciamento' } },
      { id: 's21-2', start: '07:05', end: '07:20', body: 'osm',
        t: { pt: 'Abertura do Conclave' } },
      { id: 's21-3', start: '07:20', end: '08:30', body: 'osm',
        t: { pt: '1º grau · Indução ao Monitor Secreto' } },
      { id: 's21-4', start: '08:30', end: '08:45', body: 'log',
        t: { pt: 'Reconfiguração do templo' } },
      { id: 's21-5', start: '08:45', end: '10:05', body: 'osm',
        t: { pt: '2º grau · Admissão como Príncipe da Ordem' } },
      { id: 's21-6', start: '10:05', end: '10:20', body: 'log',
        t: { pt: 'Reconfiguração do templo' } },
      { id: 's21-7', start: '10:20', end: '12:20', body: 'osm',
        t: { pt: '3º grau · Instalação do Supremo Governante' } },
      { id: 's21-8', start: '12:20', end: '12:30', body: 'osm',
        t: { pt: 'Encerramento dos trabalhos' } },
      { id: 's21-9', start: '12:30', body: 'geral',
        t: { pt: 'Almoço fraternal' } },
    ],
  },
];
