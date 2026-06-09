"use client";

import { useState } from "react";

type Platform = "meituan" | "taobao" | "jd";

const platformData = {
  meituan: {
    name: "美团外卖",
    subtitle: "成熟流量分发系统 · 稳定现金流",
    role: "核心收入引擎",
    color: "#FFB800",
    bgClass: "bg-[#FFB800]",
    textClass: "text-[#FFB800]",
    borderClass: "border-[#FFB800]",
    metrics: [
      { label: "日均估算单量", value: "50-60", sub: "单/天", source: "△" },
      { label: "单量占比", value: "55%", sub: "三平台最高", source: "△" },
      { label: "估算客单价", value: "¥24-27", sub: "/单", source: "△" },
      { label: "佣金率", value: "15-22%", sub: "行业最高", source: "✓" },
      { label: "月交易额(GTV)", value: "¥3.6-4.9万", sub: "/月", source: "△" },
      { label: "月佣金成本", value: "¥6,500-8,800", sub: "/月", source: "△" },
    ],
    traffic: [
      { source: "搜索流量", pct: 45 },
      { source: "附近推荐", pct: 30 },
      { source: "活动页", pct: 15 },
      { source: "其他", pct: 10 },
    ],
    insight:
      "美团是糯雅芳粥的核心收入引擎，贡献约55%的外卖订单。搜索+附近推荐占75%流量，说明用户决策路径短、转化率高。但佣金成本占交易额约18%，是利润侵蚀主因。",
    weakness: "佣金成本最高，月均¥6,500-8,800；商家自主营销空间受限",
  },
  taobao: {
    name: "淘宝闪购",
    subtitle: "补贴驱动增长引擎 · 拉新工具",
    role: "增量订单补充通道",
    color: "#FF6B3D",
    bgClass: "bg-[#FF6B3D]",
    textClass: "text-[#FF6B3D]",
    borderClass: "border-[#FF6B3D]",
    metrics: [
      { label: "日均估算单量", value: "27-33", sub: "单/天", source: "△" },
      { label: "单量占比", value: "30%", sub: "增量补充", source: "△" },
      { label: "估算客单价", value: "¥22-26", sub: "/单", source: "△" },
      { label: "佣金率", value: "12-18%", sub: "低于美团", source: "✓" },
      { label: "月交易额(GTV)", value: "¥1.8-2.6万", sub: "/月", source: "△" },
      { label: "月佣金成本", value: "¥2,700-3,900", sub: "/月", source: "△" },
    ],
    traffic: [
      { source: "活动入口", pct: 55 },
      { source: "搜索", pct: 20 },
      { source: "推荐", pct: 15 },
      { source: "其他", pct: 10 },
    ],
    insight:
      "淘宝闪购是增量渠道，55%流量来自活动入口，说明订单高度依赖平台补贴周期。背靠阿里88VIP生态，用户价格敏感度高但会员消费力强。新客获取能力强于美团，但复购稳定性不足。",
    weakness: "订单波动大（补贴依赖型）；用户价格敏感度高，复购稳定性不足",
  },
  jd: {
    name: "京东外卖",
    subtitle: "履约与品质实验场 · 长期变量",
    role: "利润效率之王",
    color: "#3B82F6",
    bgClass: "bg-[#3B82F6]",
    textClass: "text-[#3B82F6]",
    borderClass: "border-[#3B82F6]",
    metrics: [
      { label: "日均估算单量", value: "13-17", sub: "单/天", source: "△" },
      { label: "单量占比", value: "15%", sub: "潜力空间大", source: "△" },
      { label: "估算客单价", value: "¥23-25", sub: "/单", source: "△" },
      { label: "佣金率", value: "0-5%", sub: "行业最低", source: "✓" },
      { label: "月交易额(GTV)", value: "¥0.9-1.3万", sub: "/月", source: "△" },
      { label: "月佣金成本", value: "¥0-390", sub: "近乎零成本", source: "△" },
    ],
    traffic: [
      { source: "搜索", pct: 40 },
      { source: "首页推荐", pct: 25 },
      { source: "品类浏览", pct: 20 },
      { source: "其他", pct: 15 },
    ],
    insight:
      "京东外卖当前是「利润效率之王」——单均佣金成本仅为美团的1/6-1/5，每单比美团多赚约¥6。20分钟超时免单+五险一金骑手形成品质壁垒。建议将单量占比从15%提升至25%，充分利用0佣金窗口期。",
    weakness: "流量密度仍低，用户外卖习惯培养中；覆盖区域有限",
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
                ${isActive ? `${plat.bgClass} text-black font-black border-0` : "bg-transparent text-white/50 border-white/20 hover:border-white/40"}
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
        <div className="flex items-baseline gap-3 mt-2">
          <h2 className="text-[clamp(32px,4vw,48px)] font-black mb-0" style={{ color: p.color }}>
            {p.name}
          </h2>
          <span className="text-[14px] font-bold text-white/30">{p.role}</span>
        </div>
      </div>

      {/* 核心指标卡片 — 3×2 网格 */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {p.metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white/[0.04] border border-white/[0.08] p-5 transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.15]"
          >
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[12px] font-mono text-white/40 tracking-[0.05em] uppercase">
                {m.label}
              </p>
              <span className="text-[10px] font-mono text-white/20">{m.source}</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-[32px] font-black leading-none" style={{ color: p.color }}>
                {m.value}
              </span>
              <span className="text-[13px] text-white/40">{m.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 流量结构 + 洞察 + 短板 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 流量结构 */}
        <div className="bg-white/[0.02] border border-white/[0.06] p-6">
          <p className="text-[11px] font-mono text-white/30 mb-4 tracking-[0.1em]">TRAFFIC STRUCTURE</p>
          <div className="space-y-3">
            {p.traffic.map((t) => (
              <div key={t.source}>
                <div className="flex justify-between text-[13px] mb-1">
                  <span className="text-white/60">{t.source}</span>
                  <span className="font-bold" style={{ color: p.color }}>{t.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full transition-all duration-700 ease-out"
                    style={{ width: `${t.pct}%`, backgroundColor: p.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 平台洞察 */}
        <div className="bg-white/[0.02] border border-white/[0.06] p-6">
          <p className="text-[11px] font-mono text-white/30 mb-3 tracking-[0.1em]">PLATFORM INSIGHT</p>
          <p className="text-[14px] text-white/60 leading-[1.7] m-0">{p.insight}</p>
        </div>

        {/* 短板 */}
        <div className="border border-red-500/20 bg-red-500/[0.03] p-6">
          <p className="text-[11px] font-mono text-red-400/60 mb-3 tracking-[0.1em]">BOTTLENECK</p>
          <p className="text-[14px] text-white/50 leading-[1.7] m-0">{p.weakness}</p>
        </div>
      </div>
    </div>
  );
}
