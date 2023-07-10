import './App.css';
import GetDataComponent from './components/GetDataComponent';

function App() {
  return (
    <>
      <h1>Relatório ClickUp v1.0</h1>
      <p>Este relatório puxa algumas informações do ClickUp automaticamente e retorna um arquivo Excel para consultas.</p>
      <GetDataComponent />
    </>
  );
}

export default App;
