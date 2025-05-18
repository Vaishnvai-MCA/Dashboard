"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [showArticles, setShowArticles] = useState(true);

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-30 w-64 h-screen p-4 flex flex-col",
      "bg-white border-r"
    )}>
      <h1 className={cn("text-2xl font-bold mb-4 text-primary")}>abun</h1>

      <select className={cn("mb-6 border rounded p-2 text-sm")}>
        <option>amazon.com</option>
      </select>

      <nav className={cn("flex flex-col gap-6 text-sm text-muted-foreground")}>
        <div>
          <button
            onClick={() => setShowArticles(!showArticles)}
            className={cn(
              "flex items-center justify-between w-full font-medium text-black"
            )}
          >
            Articles <ChevronDown size={16} />
          </button>
          {showArticles && (
            <ul className={cn("mt-2 pl-3 space-y-1")}>
              <li>
                <Link href="#" className={cn("hover:text-primary")}>
                  Create Article
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className={cn("hover:text-primary")}>
                  Generated Articles
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-primary")}>
                  Keyword Projects
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className={cn("space-y-1")}>
          <Link href="#" className={cn("hover:text-primary")}>Auto Blog</Link>
          <Link href="#" className={cn("hover:text-primary")}>Free Backlinks</Link>
          <Link href="#" className={cn("hover:text-primary")}>Integrations</Link>
        </div>
      </nav>
    </aside>
  );
}
