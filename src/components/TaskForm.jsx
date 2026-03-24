import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !deadline) return alert("Vui lòng nhập đầy đủ!");
    onAdd(title, deadline);
    setTitle(''); setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-200 flex flex-col md:flex-row gap-3">
      <input 
        type="text" placeholder="Tên công việc..." value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl bg-zinc-100 border-none focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input 
        type="datetime-local" value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="px-4 py-2 rounded-xl bg-zinc-100 border-none"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all cursor-pointer">
        Thêm mới
      </button>
    </form>
  );
}