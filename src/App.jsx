import { TaskProvider, useTasks } from './context/TaskContext';
import AddCategory from './components/AddCategory';
import CategoryItem from './components/CategoryItem';

const Dashboard = () => {
  const { categories } = useTasks();

  return (
    <div style={{  padding: '20px', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <h1>Gerenciador de Tarefas por Categoria</h1>

      <AddCategory />

      <div>
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (

    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
}

export default App;