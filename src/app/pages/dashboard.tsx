import Sidebar from "@/components/Sidebar";
import DashboardTable from "@/components/DashboardTable";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <DashboardTable />
      </main>
    </div>
  );
}
