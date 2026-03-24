export default function FilterBar({ setFilter, setSearch, currentFilter }) {
  const filterOptions = [
    { key: 'ALL', label: 'Tất cả' },
    { key: 'TODO', label: 'Cần làm' },
    { key: 'IN_PROGRESS', label: 'Đang làm' },
    { key: 'DONE', label: 'Hoàn thành' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
      <div className="relative w-full md:w-64">
        <input
          type="text"
          placeholder="Tìm tên công việc..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-4 pr-4 py-2 bg-zinc-100 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm"
        />
      </div>
      <div className="flex bg-zinc-100 p-1 rounded-xl w-full md:w-auto">
        {filterOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setFilter(opt.key)}
            className={`flex-1 md:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentFilter === opt.key
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-zinc-500 hover:text-zinc-700'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}