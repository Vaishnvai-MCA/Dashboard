"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function DashboardHeader() {
  return (
    <div className="sticky top-0 bg-gray-50 z-10 pb-4 mb-6 border-b">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl font-bold text-primary">Articles</h1>

        <div className="w-full max-w-2xl flex flex-col gap-2">
          <Tabs defaultValue="generated">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="generated">Generated</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </Tabs>
          <Input
            placeholder="Search Title or Keyword..."
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
