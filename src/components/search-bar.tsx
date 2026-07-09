"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/lib/icons";

export function SearchBar({ initial = "", autoFocus = false }: { initial?: string; autoFocus?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState(initial);

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const v = q.trim();
        if (v) router.push(`/search?q=${encodeURIComponent(v)}`);
      }}
    >
      <label htmlFor="site-search" className="block text-[15px] font-semibold text-ink">
        What do you need?
      </label>
      <div className="mt-1.5 flex items-stretch gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-line-strong bg-paper-raised px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-accent/40">
          <Icon name="search" size={20} className="shrink-0 text-ink-faint" />
          <input
            id="site-search"
            name="q"
            type="search"
            enterKeyHint="search"
            autoComplete="off"
            autoFocus={autoFocus}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="a bed tonight, food, an ID…"
            className="w-full bg-transparent py-3 text-[17px] text-ink outline-none placeholder:text-ink-faint"
          />
        </div>
        <button
          type="submit"
          className="inline-flex min-h-[48px] items-center gap-2 rounded-md bg-primary px-4 font-semibold text-primary-fg hover:bg-primary-hover"
        >
          <Icon name="search" size={18} className="sm:hidden" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  );
}
