import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const CategoryItem = ({ category }) => {
  const [taskInput, setTaskInput] = useState('');
  const { addTask, toggleTask } = useTasks();

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(category.id, taskInput);
    setTaskInput('');
  };

  return (
    <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
      <h2>{category.name}</h2>

      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="Adicionar Tarefa" 
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit">Adicionar</button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {category.tasks.map(task => (
          <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTask(category.id, task.id)}
              style={{ width: '18px', height: '18px' }}
            />
            <span style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#888' : '#000'
            }}>
              {task.text}
            </span>
          </div>
        ))}
        {category.tasks.length === 0 && <p style={{ color: '#888', fontStyle: 'italic' }}>Nenhuma tarefa ainda.</p>}
      </div>
    </div>
  );
};

export default CategoryItem;