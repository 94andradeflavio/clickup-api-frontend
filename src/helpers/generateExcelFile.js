import * as XLSX from 'xlsx';
import { formatDateAndHour } from './formatDate';

export function generateExcelFile(data, name) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  const date = new Date();

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Lista');

  // Cria um buffer a partir do workbook
  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

  // Cria um Blob a partir do buffer
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  // Cria uma URL para o Blob
  const url = URL.createObjectURL(blob);

  // Cria um link de download e simula o clique para iniciar o download
  const link = document.createElement('a');
  link.href = url;
  link.download = `lista-${name}-${formatDateAndHour(date)}.xlsx`;
  link.click();

  console.log('Arquivo Excel salvo com sucesso!');
}
