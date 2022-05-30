const date = new Date();

const NOW = {
  YEAR: date.getFullYear(),
  MONTH: String(date.getMonth() + 1).padStart(2, '0'),
};

const CARD_COMPANY = [
  { name: '하리 카드', color: '#FF6E6E' },
  { name: '우연 카드', color: '#FF6E95' },
  { name: '소피아 카드', color: '#FBCD58' },
  { name: '샐리 카드', color: '#73BC6D' },
  { name: '호프 카드', color: '#D4FFEE' },
  { name: '티거 카드', color: '#A1E1FF' },
  { name: '도리 카드', color: '#547CE4' },
  { name: '태태 카드', color: '#DDBFFF' },
  { name: '위니 카드', color: '#FFBFF5' },
  { name: '무비 카드', color: '#000000' },
];

export { NOW, CARD_COMPANY };
