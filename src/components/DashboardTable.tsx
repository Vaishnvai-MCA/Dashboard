"use client";

import { articles } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardTable() {
  return (
    <div className="overflow-x-auto rounded border shadow-sm bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 border-b">
          <tr>
            <th className="p-3"><input type="checkbox" /></th>
            <th className="p-3">Article Title</th>
            <th className="p-3">Keyword [Traffic]</th>
            <th className="p-3">Words</th>
            <th className="p-3">Created On</th>
            <th className="p-3">Action</th>
            <th className="p-3">Publish</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, idx) => (
            <tr
              key={article.id}
              className={cn(idx % 2 === 0 ? "bg-white" : "bg-gray-50")}
            >
              <td className="p-3"><input type="checkbox" /></td>
              <td className="p-3 font-medium text-gray-900">{article.title}</td>
              <td className="p-3">{article.keyword}</td>
              <td className="p-3">{article.words}</td>
              <td className="p-3">{article.createdAt}</td>
              <td className="p-3">
                <Button size="sm" variant="outline">View</Button>
              </td>
              <td className="p-3">
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-1 rounded hover:bg-gray-200">
                    <MoreVertical size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Publish to WordPress</DropdownMenuItem>
                    <DropdownMenuItem>Schedule</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-4 text-sm flex flex-wrap justify-between items-center border-t">
        <p>Total {articles.length} Article Titles</p>
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border rounded p-1 text-sm">
            <option>10</option>
            <option>25</option>
          </select>
          <span>entries per page</span>
        </div>
      </div>
    </div>
  );
}
