import { createContext, useState, useContext } from 'react';


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [categories, setCategories] = useState([]);

  const addCategory = (categoryName) => {
    if (!categoryName) return;
    const newCategory = {
      id: Date.now(),
      name: categoryName,
      tasks: [],
    };
    setCategories([...categories, newCategory]);
  };

  const addTask = (categoryId, taskText) => {
    if (!taskText) return;
    
    setCategories(categories.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          tasks: [...cat.tasks, { id: Date.now(), text: taskText, completed: false }]
        };
      }
      return cat;
    }));
  };

  const toggleTask = (categoryId, taskId) => {
    setCategories(categories.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          tasks: cat.tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        };
      }
      return cat;
    }));
  };

  return (
    <TaskContext.Provider value={{ categories, addCategory, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => useContext(TaskContext);