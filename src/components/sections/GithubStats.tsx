"use client";

import CountUp from "@/components/ui/CountUp";
import Card from "@/components/ui/Card";

type Stat = { label: string; value: number };

export default function GithubStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-3 gap-[var(--gap-sm)] mb-[var(--gap-md)]">
      {stats.map((stat) => (
        <Card key={stat.label} className="!p-4 text-center">
          <div className="num text-[var(--accent)] text-2xl font-black">
            <CountUp end={stat.value} duration={1000} />
          </div>
          <p className="text-xs text-[var(--muted)] m-0 mt-1">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
}