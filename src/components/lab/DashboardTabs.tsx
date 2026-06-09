"use client";

import { useState } from "react";

type Platform = "meituan" | "taobao" | "jd";

const platformData = {
  meituan: {
    name: "美团",
    subtitle: "稳定流量引擎",
    color: "#FFB800",
    bgClass: "bg-[#FFB800]",
    textClass: "text-[#FFB800]",
    borderClass: "border-[#FFB800]",
    metrics: [
      { label: "预估月销量", value: "2,400+", sub: "单" },
      { label: "评分", value: "4.7", sub: "/ 5.0" },
      { label: "商圈排名", value: "#3", sub: "粥类" },
      { label: "复购率", value: "38%", sub: "高于均值" },
    ],
    traffic: [
      { source: "搜索", pct: 45 },
      { source: "附近推荐", pct: 30 },
      { source: "活动页", pct: 15 },
      { source: "其他", pct: 10 },
    ],
    insight:
      "美团是糯雅芳粥的核心收入引擎，贡献约 65% 的外卖订单。搜索流量占比最高，说明用户在主动寻找粥类产品时优先选择该店。",
  },
  taobao: {
    name: "淘宝闪购",
    subtitle: "补贴驱动流量",
    color: "#FF6B3D",
    bgClass: "bg-[#FF6B3D]",
    textClass: "text-[#FF6B3D]",
    borderClass: "border-[#FF6B3D]",
    metrics: [
      { label: "补贴强度", value: "¥6.8", sub: "平均每单" },
      { label: "订单波动", value: "±35%", sub: "周环比" },
      { label: "新客占比", value: "52%", sub: "高于美团" },
      { label: "转化率", value: "8.2%", sub: "补贴期" },
    ],
    traffic: [
      { source: "活动入口", pct: 55 },
      { source: "搜索", pct: 20 },
      { source: "推荐", pct: 15 },
      { source: "其他", pct: 10 },
    ],
    insight:
      "淘宝闪购是增量渠道，但订单高度依赖补贴周期。新客比例过半说明平台拉新能力强，但用户价格敏感度高，复购稳定性不足。",
  },
  jd: {
    name: "京东外卖",
    subtitle: "履约与品质实验场",
    color: "#3B82F6",
    bgClass: "bg-[#3B82F6]",
    textClass: "text-[#3B82F6]",
    borderClass: "border-[#3B82F6]",
    metrics: [
      { label: "区域覆盖", value: "63%", sub: "上马墩" },
      { label: "曝光频次", value: "低", sub: "阶段" },
      { label: "入驻状态", value: "已入驻", sub: "基础版" },
      { label: "增长潜力", value: "★★★★", sub: "高" },
    ],
    traffic: [
      { source: "搜索", pct: 40 },
      { source: "首页推荐", pct: 25 },
      { source: "品类浏览", pct: 20 },
      { source: "其他", pct: 15 },
    ],
    insight:
      "京东外卖仍处于早期扩张阶段，流量密度较低但履约体验好。对商家来说是战略占位——未来增量变量市场。",
  },
};

export default function DashboardTabs() {
  const [active, setActive] = useState<Platform>("meituan");

  const p = platformData[active];

  return (
    <div>
      {/* 平台切换按钮 */}
      <div className="flex gap-3 mb-10">
        {(Object.keys(platformData) as Platform[]).map((key) => {
          const plat = platformData[key];
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-3 text-[15px] font-bold border-2 transition-all duration-200 cursor-pointer
                ${isActive ? `${plat.bgClass} text-white border-[var(--fg)]` : "bg-transparent text-white/50 border-white/20 hover:border-white/40"}
              `}
            >
              {plat.name}
            </button>
          );
        })}
      </div>

      {/* 平台 Header */}
      <div className="mb-8">
        <span className="inline-block w-3 h-3 rounded-full mr-3" style={{ backgroundColor: p.color }} />
        <span className="text-[13px] font-mono font-bold text-white/50 tracking-[0.1em] uppercase">
          {p.subtitle}
        </span>
        <h2 className="text-[clamp(32px,4vw,48px)] font-black mt-2 mb-0" style={{ color: p.color }}>
          {p.name}
        </h2>
      </div>

      {/* 核心指标卡片 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {p.metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white/5 border border-white/10 p-5 transition-all duration-200 hover:bg-white/10 hover:border-white/20"
          >
            <p className="text-[12px] font-mono text-white/40 mb-1 tracking-[0.05em] uppercase">
              {m.label}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-[36px] font-black leading-none" style={{ color: p.color }}>
                {m.value}
              </span>
              <span className="text-[13px] text-white/40">{m.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 流量结构 + 洞察 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 流量结构 */}
        <div>
          <p className="text-[12px] font-mono text-white/30 mb-4 tracking-[0.08em]">TRAFFIC STRUCTURE</p>
          <div className="space-y-3">
            {p.traffic.map((t) => (
              <div key={t.source}>
                <div className="flex justify-between text-[14px] mb-1">
                  <span className="text-white/70">{t.source}</span>
                  <span className="font-bold" style={{ color: p.color }}>{t.pct}%</span>
                </div>
                <div className="h-2 bg-white/10 overflow-hidden">
                  <div
                    className="h-full transition-all duration-700 ease-out"
                    style={{
                      width: `${t.pct}%`,
                      backgroundColor: p.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 平台洞察 */}
        <div className="border border-white/10 bg-white/5 p-6">
          <p className="text-[12px] font-mono text-white/30 mb-3 tracking-[0.08em]">PLATFORM INSIGHT</p>
          <p className="text-[15px] text-white/70 leading-[1.7] m-0">{p.insight}</p>
        </div>
      </div>
    </div>
  );
}
