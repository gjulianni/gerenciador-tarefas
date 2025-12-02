import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');
  const { addCategory } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(inputValue);
    setInputValue('');
  };

  return (
    <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
      <h3>Adicionar Nova Categoria</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Nome da categoria..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Adicionar</button>
      </form>
    </div>
  );
};

export default AddCategory;