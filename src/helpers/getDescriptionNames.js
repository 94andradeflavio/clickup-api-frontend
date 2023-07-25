export function getTwoFirstDescriptionNames(text) {
  // Dividir o texto em nomes usando a vírgula como separador
  const names = text.trim().split(',');

  // Remover espaços extras no início e fim dos nomes
  const twoFirstNames = names.slice(0, 2).map((name) => name.trim());

  return twoFirstNames;
}

export function getDescriptionNameByPosition(text, position) {
  // Dividir o texto em nomes usando a vírgula como separador
  console.log(text);
  const names = text.split(',');

  // Remover espaços extras no início e fim dos nomes
  const formatedName = names[position - 1];

  return formatedName;
}
