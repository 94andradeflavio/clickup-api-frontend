export function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Adicionar zero à esquerda se o dia ou mês tiver apenas um dígito
  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');

  return `${formattedDay}/${formattedMonth}/${year}`;
}

export function formatDateAndHour(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = MonthName(date.getMonth());
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  return `${day}_${month}_${year}-${hour}_${minute}_${second}`;
}

function MonthName(numero) {
  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return meses[numero];
}
