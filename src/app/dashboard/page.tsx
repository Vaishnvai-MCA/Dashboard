'use client';
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardTable from "@/components/DashboardTable";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full bg-gray-50 p-6 min-h-screen">
        <DashboardHeader />
        <DashboardTable />
      </main>
    </div>
  );
}
