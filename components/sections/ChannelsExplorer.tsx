"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { channelCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const filters = ["All", "Sports", "Movies", "Series", "News", "Kids", "International", "Entertainment"];

export function ChannelsExplorer() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return channelCategories.filter((category) => {
      const matchesFilter = active === "All" || category.type === active;
      const matchesQuery = category.title.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [active, query]);

  return (
    <div>
      <div className="glass rounded-[1.5rem] p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative flex-1">
            <span className="sr-only">Search channel categories</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-platinum/42" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sports, movies, series, news..."
              className="h-12 w-full rounded-full border border-white/10 bg-ink/70 pl-12 pr-4 text-sm text-white placeholder:text-platinum/35 focus:border-champagne focus:outline-none"
            />
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={cn(
                  "h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition",
                  active === filter
                    ? "border-champagne bg-champagne text-ink"
                    : "border-white/10 bg-white/[0.04] text-platinum/66 hover:border-white/25 hover:text-white"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((category) => (
          <Card key={category.title} className="overflow-hidden p-0">
            <ImageWithFallback
              src={category.image}
              alt={`${category.title} IPTV category visual`}
              className="h-40"
              fallbackClassName={`bg-gradient-to-br ${category.gradient}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            >
              <div className="flex h-full items-end p-4">
                <span className="rounded-full bg-ink/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  HD / FHD / 4K
                </span>
              </div>
            </ImageWithFallback>
            <div className="p-5">
              <category.icon className="h-6 w-6 text-champagne" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold text-white">{category.title}</h2>
              <p className="mt-2 text-sm text-platinum/60">{category.type}</p>
              <p className="mt-3 text-sm leading-6 text-platinum/58">{category.description}</p>
              <p className="mt-4 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-platinum/72">
                {category.count} channels / titles
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
