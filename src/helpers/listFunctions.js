import axios from 'axios';

import { generateExcelFile } from './generateExcelFile';
import { formatDate } from './formatDate';

const serverUrl = 'https://clickup-api-backend.onrender.com';

export async function searchAndSave(listName) {
  try {
    const tasks = await axios.get(`${serverUrl}/${listName}`);

    const data = tasks.data.map((task) => ({
      Nome: task.name,
      Objeto: '',
      Diretoria: '',
      Responsavel: task.assignees.map((assignee) => assignee.username || assignee.email).join(', '),
      DataInicio: task.start_date ? formatDate(new Date(parseInt(task.start_date))) : '',
      DataFim: task.due_date ? formatDate(new Date(parseInt(task.due_date))) : '',
      Status: task.status.status,
      // Mapeie mais campos conforme necessário
    }));

    generateExcelFile(data, listName);
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
  }
}
