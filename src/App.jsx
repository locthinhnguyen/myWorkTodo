import './App.css'
import { useState, useEffect, useMemo } from 'react'
import StatsBar from './components/StatsBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

function App() {
const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('myTasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesFilter = filter === 'ALL' || task.status === filter;
      const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [tasks, filter, search]);

  const addTask = (title, deadline) => {
    const newTask = { id: crypto.randomUUID(), title, deadline, status: 'TODO', createdAt: new Date() };
    setTasks([newTask, ...tasks]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-black text-text2">Xin chào Thinh đã đến MyWork Todo</h1>
          <p className="text-text1 text-sm">Quản lý công việc cá nhân hiệu quả</p>
        </header>
        <StatsBar tasks={tasks} />
        <TaskForm onAdd={addTask} />
        <FilterBar setFilter={setFilter} setSearch={setSearch} currentFilter={filter} />
        <TaskList tasks={filteredTasks} onUpdate={updateTaskStatus} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App
