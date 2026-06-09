import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import DashboardTabs from "@/components/lab/DashboardTabs";

export const metadata: Metadata = {
  title: "糯雅芳粥 · 多平台外卖竞争分析",
  description: "即时零售平台如何重构单店商业结构 — 美团 / 淘宝闪购 / 京东外卖三平台对比分析",
};

/* ── 竞品数据 ── */
const competitors = [
  { name: "糯雅芳粥", type: "self", x: 50, y: 50, score: 4.7, price: "¥18-28" },
  { name: "粥员外", type: "porridge", x: 28, y: 35, score: 4.5, price: "¥15-25" },
  { name: "苏粥坊", type: "porridge", x: 68, y: 42, score: 4.3, price: "¥12-22" },
  { name: "老盛兴面馆", type: "noodle", x: 40, y: 72, score: 4.6, price: "¥16-30" },
  { name: "裕兴记", type: "noodle", x: 75, y: 68, score: 4.4, price: "¥20-35" },
  { name: "老乡鸡", type: "chain", x: 55, y: 20, score: 4.8, price: "¥15-28" },
  { name: "永和大王", type: "chain", x: 22, y: 65, score: 4.5, price: "¥12-25" },
  { name: "沙县小吃", type: "fast", x: 80, y: 25, score: 3.9, price: "¥8-15" },
];

const typeColors: Record<string, string> = {
  self: "#FFB800",
  porridge: "#FF6B3D",
  noodle: "#3B82F6",
  chain: "#22C55E",
  fast: "#A855F7",
};

const typeLabels: Record<string, string> = {
  self: "本店",
  porridge: "粥类",
  noodle: "面馆",
  chain: "连锁",
  fast: "快餐",
};

/* ── 价格带数据 ── */
const priceBands = [
  { range: "0-10元", count: 12, peau: 0 },
  { range: "10-20元", count: 28, peau: 1 },
  { range: "20-30元", count: 18, peau: 0 },
  { range: "30-40元", count: 8, peau: 0 },
  { range: "40元+", count: 4, peau: 0 },
];

const maxCount = Math.max(...priceBands.map((b) => b.count));

/* ── 评论关键词 ── */
const keywords = [
  { word: "便宜", count: 89, sentiment: "positive" },
  { word: "快", count: 72, sentiment: "positive" },
  { word: "量大", count: 65, sentiment: "positive" },
  { word: "味道好", count: 58, sentiment: "positive" },
  { word: "一般", count: 34, sentiment: "neutral" },
  { word: "配送慢", count: 21, sentiment: "negative" },
  { word: "凉了", count: 15, sentiment: "negative" },
  { word: "偏咸", count: 12, sentiment: "negative" },
];

const maxKeyword = Math.max(...keywords.map((k) => k.count));

/* ── 结论卡片 ── */
const conclusions = [
  {
    title: "平台分层结构",
    body: "美团稳基盘、淘宝拉新客、京东布未来——三平台形成清晰的分层运营格局。",
    color: "#FFB800",
  },
  {
    title: "单店多模型运营",
    body: "同一门店在三个平台上实质是三种不同的商业模型：稳定现金流、增量获客、品牌占位。",
    color: "#FF6B3D",
  },
  {
    title: "商圈价格竞争本质",
    body: "外卖竞争的核心已从'店铺竞争'转向'价格带竞争'，低价层由补贴驱动，稳定层由品质驱动。",
    color: "#3B82F6",
  },
];

export default function NuyaPorridgePage() {
  return (
    <main className="page-enter" style={{ background: "#0A0A0B", color: "#E5E5E5" }}>
      {/* ═══════ Hero Dashboard ═══════ */}
      <section className="py-[clamp(60px,8vw,100px)] border-b border-white/10">
        <Container>
          {/* 返回 */}
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-white/30 hover:text-white/70 transition-colors mb-8"
          >
            <span>←</span> 返回实验作品
          </Link>

          <p className="font-mono text-[12px] font-bold text-[#FFB800] tracking-[0.12em] mb-2">
            INSIGHT LAB · CASE STUDY
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,60px)] leading-[1.08] tracking-[-0.02em] font-black mb-3 text-white">
            糯雅芳粥
          </h1>
          <p className="text-[18px] font-semibold text-white/50 mb-2">
            多平台外卖竞争分析系统
          </p>
          <p className="text-[15px] text-white/30 font-medium">
            无锡上马墩店 · 美团 / 淘宝闪购 / 京东外卖
          </p>

          {/* 核心指标概览 */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "覆盖平台", value: "3", sub: "美团 / 淘宝 / 京东", color: "#FFB800" },
              { label: "商圈竞品", value: "45+", sub: "上马墩 2km 范围", color: "#FF6B3D" },
              { label: "分析维度", value: "6", sub: "多维度交叉分析", color: "#3B82F6" },
              { label: "数据来源", value: "3", sub: "平台公开数据采集", color: "#22C55E" },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-white/[0.03] border border-white/[0.08] p-6 transition-all duration-200 hover:bg-white/[0.06]"
              >
                <div className="text-[clamp(32px,4vw,48px)] font-black leading-none mb-1" style={{ color: m.color }}>
                  {m.value}
                </div>
                <p className="text-[13px] font-bold text-white/60 m-0">{m.label}</p>
                <p className="text-[11px] text-white/30 m-0 mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ 平台切换视图 ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/10">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/30 tracking-[0.1em] mb-2">
            PLATFORM VIEW
          </p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-0">
            平台视角
          </h2>
          <p className="text-[15px] text-white/40 mt-2 mb-0">
            选择一个平台，查看糯雅芳粥在该平台上的完整数据画像
          </p>

          <div className="mt-10">
            <DashboardTabs />
          </div>
        </Container>
      </section>

      {/* ═══════ 竞品地图 ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/10">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/30 tracking-[0.1em] mb-2">
            COMPETITOR MAP
          </p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-0">
            上马墩商圈竞争结构
          </h2>
          <p className="text-[15px] text-white/40 mt-2">
            中心节点为糯雅芳粥，周围分布粥类、面馆、快餐及连锁品牌
          </p>

          {/* 竞品可视化地图 */}
          <div className="mt-10 bg-white/[0.02] border border-white/[0.08] p-8 overflow-hidden">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 */ }}
            >
              {/* SVG 连线 + 节点 */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* 连线 */}
                {competitors
                  .filter((c) => c.type !== "self")
                  .map((c) => (
                    <line
                      key={`line-${c.name}`}
                      x1={50}
                      y1={50}
                      x2={c.x}
                      y2={c.y}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  ))}

                {/* 商圈范围圈 */}
                <circle cx={50} cy={50} r={35} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
                <circle cx={50} cy={50} r={20} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />

                {/* 竞品节点 */}
                {competitors.map((c) => {
                  const isSelf = c.type === "self";
                  const size = isSelf ? 4.5 : 3;
                  return (
                    <g key={c.name}>
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r={size}
                        fill={isSelf ? "#FFB800" : "rgba(255,255,255,0.15)"}
                        stroke={isSelf ? "#FFB800" : "rgba(255,255,255,0.3)"}
                        strokeWidth={isSelf ? "1.5" : "0.8"}
                      />
                      <text
                        x={c.x}
                        y={c.y + (isSelf ? 8 : 6)}
                        textAnchor="middle"
                        fill={isSelf ? "#FFB800" : "rgba(255,255,255,0.5)"}
                        fontSize={isSelf ? "4" : "3"}
                        fontWeight={isSelf ? "bold" : "normal"}
                        fontFamily="system-ui"
                      >
                        {c.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* 图例 */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              {Object.entries(typeLabels).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: typeColors[key] }}
                  />
                  <span className="text-[12px] text-white/50">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════ 价格层分析 ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/10">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/30 tracking-[0.1em] mb-2">
            PRICE LAYER
          </p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-0">
            价格结构分析
          </h2>
          <p className="text-[15px] text-white/40 mt-2">
            上马墩商圈粥类 / 简餐价格带分布，黄色标记为糯雅芳粥位置
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 价格带分布图 */}
            <div>
              <div className="space-y-3">
                {priceBands.map((band) => (
                  <div key={band.range}>
                    <div className="flex justify-between text-[13px] mb-1">
                      <span className="text-white/50">{band.range}</span>
                      <span className="text-white/30">{band.count} 家</span>
                    </div>
                    <div className="relative h-8 bg-white/[0.04] border border-white/[0.06]">
                      <div
                        className="h-full bg-white/[0.08] transition-all duration-700"
                        style={{ width: `${(band.count / maxCount) * 100}%` }}
                      />
                      {/* PEAU 位置标记 */}
                      {band.peau === 1 && (
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 border-2 rotate-45"
                          style={{
                            left: "55%",
                            backgroundColor: "#FFB800",
                            borderColor: "#FFB800",
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-white/30 mt-4">
                ◆ 黄色菱形 = 糯雅芳粥价格位置（¥18-28）
              </p>
            </div>

            {/* 平台影响叠加层 */}
            <div>
              <p className="text-[12px] font-mono text-white/30 mb-4 tracking-[0.08em]">PLATFORM PRICE IMPACT</p>
              <div className="space-y-4">
                {[
                  { platform: "美团", pct: 65, desc: "稳定价格带，用户对价格敏感度较低", color: "#FFB800" },
                  { platform: "淘宝闪购", pct: 40, desc: "补贴后价格下探至 ¥12-18 区间", color: "#FF6B3D" },
                  { platform: "京东外卖", pct: 20, desc: "价格覆盖有限，以品质履约为主", color: "#3B82F6" },
                ].map((item) => (
                  <div key={item.platform} className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.06]">
                    <div className="w-2 h-2 rounded-full mt-[6px] shrink-0" style={{ backgroundColor: item.color }} />
                    <div>
                      <p className="text-[15px] font-bold text-white m-0">{item.platform}</p>
                      <p className="text-[13px] text-white/50 m-0 mt-1">{item.desc}</p>
                      <div className="mt-2 h-1.5 bg-white/[0.06] overflow-hidden w-full max-w-[200px]">
                        <div
                          className="h-full transition-all duration-700"
                          style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════ 评论洞察 ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/10">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/30 tracking-[0.1em] mb-2">
            REVIEW INTELLIGENCE
          </p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-0">
            评论洞察
          </h2>
          <p className="text-[15px] text-white/40 mt-2">
            基于三平台用户评论的语义分析
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 情绪分布 */}
            <div>
              <p className="text-[12px] font-mono text-white/30 mb-4 tracking-[0.08em]">SENTIMENT</p>
              <div className="flex items-end gap-4 h-40">
                {[
                  { label: "正向", pct: 62, color: "#22C55E" },
                  { label: "中性", pct: 25, color: "#FFB800" },
                  { label: "负向", pct: 13, color: "#EF4444" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center flex-1">
                    <span className="text-[24px] font-black" style={{ color: s.color }}>
                      {s.pct}%
                    </span>
                    <div
                      className="w-full mt-2 transition-all duration-700"
                      style={{
                        height: `${s.pct * 2.2}px`,
                        backgroundColor: s.color,
                        opacity: 0.7,
                      }}
                    />
                    <span className="text-[12px] text-white/40 mt-2">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 关键词云 */}
            <div>
              <p className="text-[12px] font-mono text-white/30 mb-4 tracking-[0.08em]">KEYWORDS</p>
              <div className="flex flex-wrap gap-2">
                {keywords.map((k) => {
                  const size = 12 + (k.count / maxKeyword) * 14;
                  const opacity = 0.4 + (k.count / maxKeyword) * 0.6;
                  const color =
                    k.sentiment === "positive"
                      ? "#22C55E"
                      : k.sentiment === "negative"
                        ? "#EF4444"
                        : "#FFB800";
                  return (
                    <span
                      key={k.word}
                      className="inline-block font-bold transition-all duration-200 hover:scale-110 cursor-default"
                      style={{
                        fontSize: `${size}px`,
                        color,
                        opacity,
                      }}
                      title={`${k.word}: ${k.count} 条`}
                    >
                      {k.word}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* 语义聚类 */}
            <div>
              <p className="text-[12px] font-mono text-white/30 mb-4 tracking-[0.08em]">CLUSTERS</p>
              <div className="space-y-3">
                {[
                  { label: "口味", pct: 42, color: "#22C55E" },
                  { label: "服务", pct: 28, color: "#3B82F6" },
                  { label: "价格", pct: 18, color: "#FFB800" },
                  { label: "配送", pct: 12, color: "#FF6B3D" },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="flex justify-between text-[13px] mb-1">
                      <span className="text-white/60">{c.label}</span>
                      <span className="text-white/30">{c.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${c.pct}%`, backgroundColor: c.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════ Insight Conclusion ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/10">
        <Container>
          <p className="font-mono text-[11px] font-bold text-[#FFB800] tracking-[0.1em] mb-2">
            INSIGHT CONCLUSION
          </p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-0">
            核心结论
          </h2>
          <p className="text-[15px] text-white/40 mt-2">
            即时零售平台如何重构单店商业结构
          </p>

          {/* 结论卡片 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {conclusions.map((c) => (
              <div
                key={c.title}
                className="bg-white/[0.03] border border-white/[0.08] p-8 transition-all duration-200 hover:bg-white/[0.06]"
              >
                <div className="w-8 h-1 mb-5" style={{ backgroundColor: c.color }} />
                <h3 className="text-[20px] font-black text-white mb-3">{c.title}</h3>
                <p className="text-[15px] text-white/50 leading-[1.7] m-0">{c.body}</p>
              </div>
            ))}
          </div>

          {/* 一店三命 */}
          <div className="mt-12 bg-white/[0.02] border border-white/10 p-10 text-center">
            <p className="text-[13px] font-mono text-white/30 tracking-[0.12em] mb-4">CORE MODEL</p>
            <p className="font-display text-[clamp(36px,5vw,64px)] font-black text-white leading-[1.1] mb-3">
              「一店三命」
            </p>
            <p className="text-[18px] text-white/40 font-semibold">
              同一个商家，在不同平台上，实质是三种不同的商业模型
            </p>
          </div>

          {/* 扩展洞察 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "外卖平台并非同质化流量市场，而是分层竞争结构",
              "单店经营已被拆解为多平台分布式经营单元",
              "不同平台塑造不同用户心智与价格认知",
              "区域竞争核心已从店铺竞争转向平台规则竞争",
            ].map((insight, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/[0.06]"
              >
                <span className="text-[13px] font-mono font-bold text-white/20 shrink-0 mt-[1px]">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-[15px] text-white/60 leading-[1.6]">{insight}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ 总结收束 ═══════ */}
      <section className="py-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[56ch]">
            <p className="font-display text-[clamp(24px,3vw,36px)] font-black text-white leading-[1.2] mb-6">
              在即时零售体系中，一个餐饮门店不再是独立经营实体，
              而是被嵌入在多个平台规则下的「多形态商业节点」。
            </p>
            <p className="text-[15px] text-white/30 leading-[1.7] mb-10">
              本项目通过对糯雅芳粥（无锡上马墩店）在美团、淘宝闪购、京东外卖
              三平台的数据对比分析，揭示了即时零售平台对社区餐饮竞争逻辑的重构机制。
            </p>

            <Button href="/lab" variant="outline" size="large">
              ← 返回实验作品
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
