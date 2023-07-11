import { useState } from 'react';

// import { lista } from '../../helpers/list-configs';
import { searchAndSave } from '../../helpers/listFunctions';

function GetDataComponent() {
  const [listName, setListName] = useState('');

  const handleClickButton = () => {
    searchAndSave(listName);
  };

  return (
    <div className="getDataComponentWrapper">
      <div className="input-area">
        <label htmlFor="esteira">Selecione uma das opções</label>
        <select name="esteira" id="esteira" onChange={(e) => setListName(e.target.value)} defaultValue="selecionar">
          <option value="selecionar" disabled>
            -
          </option>
          <option value="janaina">Janaína</option>
          <option value="sandra">Sandra</option>
          <option value="todos">Todos</option>
        </select>
      </div>

      {listName !== '' && (
        <>
          <p>
            Esteira selecionada: <span>{listName}</span>. Clique em &quot;Baixar relatório&quot;.
          </p>
          <button onClick={handleClickButton}>Baixar relatório</button>
        </>
      )}
    </div>
  );
}

export default GetDataComponent;
