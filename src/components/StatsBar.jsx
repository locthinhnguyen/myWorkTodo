export default function StatsBar({ tasks }) {
  const stats = {
    total: tasks.length,
    done: tasks.filter(t => t.status === 'DONE').length,
    overdue: tasks.filter(t => t.status !== 'DONE' && new Date(t.deadline) < new Date()).length
  };

  const Card = ({ label, value, color }) => (
    <div className={`p-4 rounded-2xl bg-white border border-zinc-200 border-l-4 ${color} flex-1 shadow-sm`}>
      <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">{label}</p>
      <p className="text-2xl font-black text-zinc-800">{value}</p>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-4">
      <Card label="Tổng Task" value={stats.total} color="border-red-400" />
      <Card label="Hoàn thành" value={stats.done} color="border-green-500" />
      <Card label="Quá hạn" value={stats.overdue} color="border-red-500 text-red-600" />
    </div>
  );
}