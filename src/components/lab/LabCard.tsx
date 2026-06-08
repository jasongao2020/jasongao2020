"use client";

import type { LabProject, LabStatus } from "@/data/lab-projects";

const statusConfig: Record<LabStatus, { label: string; className: string }> = {
  Completed: { label: "Completed", className: "bg-[var(--accent-yellow)] text-[var(--fg)]" },
  Building: { label: "Building", className: "bg-[var(--accent-blue)] text-[var(--white)]" },
  Researching: { label: "Researching", className: "bg-[var(--accent-green)] text-[var(--white)]" },
};

type LabCardProps = {
  project: LabProject;
  accentColor: string;
};

export default function LabCard({ project, accentColor }: LabCardProps) {
  return (
    <article
      className="lab-card group relative w-full max-w-[420px] rounded-[24px] border-[4px] border-[var(--fg)] bg-[var(--surface)] p-6 flex flex-col justify-between cursor-pointer select-none"
      style={{
        transition: "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        boxShadow: "4px 4px 0 var(--fg)",
      }}
    >
      {/* Lab 编号 */}
      <span className="font-mono text-[13px] font-bold text-[var(--muted)] tracking-[0.06em]">
        Lab #{project.id}
      </span>

      {/* 项目名称 */}
      <h3 className="mt-3 mb-0 text-[20px] leading-[1.25] font-black tracking-[-0.01em]">
        {project.title}
      </h3>

      {/* 简介 */}
      <p className="mt-2 mb-0 text-[15px] text-[var(--muted)] leading-[1.5]">
        {project.description}
      </p>

      {/* 底部 */}
      <div className="mt-auto pt-4 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold tracking-[0.03em] px-[8px] py-[2px] border border-[var(--border)] rounded-[2px] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={`text-[11px] font-bold tracking-[0.04em] px-[10px] py-[3px] border border-[var(--fg)] ${statusConfig[project.status].className}`}
        >
          {statusConfig[project.status].label}
        </span>
      </div>

      {/* 查看详情 → */}
      <span
        className="inline-flex items-center gap-1 mt-3 text-[13px] font-bold opacity-0 translate-x-[-6px] transition-all duration-[0.2s] ease group-hover:opacity-100 group-hover:translate-x-0"
        style={{ color: accentColor }}
      >
        查看详情 →
      </span>

      {/* Hover 样式 */}
      <style jsx>{`
        .lab-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 8px 8px 0 var(--fg);
        }
      `}</style>
    </article>
  );
}
