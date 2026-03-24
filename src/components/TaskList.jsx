export default function TaskList({ tasks, onUpdate, onDelete }) {
  const statuses = [
    { key: 'TODO', label: 'Cần làm', color: 'bg-primary' },
    { key: 'IN_PROGRESS', label: 'Đang làm', color: 'bg-secondary' },
    { key: 'DONE', label: 'Hoàn thành', color: 'bg-complete' }
  ];

  const checkOverdue = (date) => new Date(date) < new Date();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statuses.map(s => (
        <div key={s.key} className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <span className={`w-3 h-3 rounded-full ${s.color}`}></span>
            <h3 className="font-bold text-zinc-700 uppercase text-sm">{s.label}</h3>
          </div>
          
          <div className="space-y-3">
            {tasks.filter(t => t.status === s.key).map(task => (
              <div key={task.id} className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
                <h4 className={`font-semibold ${task.status === 'DONE' ? 'text-complete' : 'text-text1'}`}>
                  {task.title}
                </h4>
                <div className="mt-2 text-xs flex justify-between items-center">
                  <span className={checkOverdue(task.deadline) && task.status !== 'DONE' ? "text-danger font-bold" : "text-text1"}>
                    Thời gian: {new Date(task.deadline).toLocaleString('vi-VN')}
                  </span>
                  <button onClick={() => onDelete(task.id)} className="text-zinc-400 hover:text-danger opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    Xóa
                  </button>
                </div>
                
                <div className="mt-4 flex gap-1">
                  {statuses.map(st => st.key !== task.status && (
                    <button 
                      key={st.key} 
                      onClick={() => onUpdate(task.id, st.key)}
                      className="text-[10px] px-2 py-1 bg-zinc-100 hover:bg-zinc-200 rounded text-zinc-600 cursor-pointer"
                    >
                      Thinh {st.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}