import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import DashboardTabs from "@/components/lab/DashboardTabs";

export const metadata: Metadata = {
  title: "糯雅芳粥 · 多平台外卖竞争分析",
  description: "即时零售平台如何重构单店商业结构 — 美团 / 淘宝闪购 / 京东外卖三平台对比分析",
};

/* ── 1. 店铺基础画像 ── */
const storeInfo = [
  { label: "店名", value: "糯雅芳粥（上马墩路店）" },
  { label: "地址", value: "无锡市梁溪区上马墩路10-15号/10-16号" },
  { label: "营业时间", value: "24小时营业" },
  { label: "人均消费", value: "¥17-23（堂食）/ ¥22-28（外卖△）" },
  { label: "评分", value: "大众点评 3.7分", highlight: true },
  { label: "上线平台", value: "美团外卖 / 淘宝闪购 / 京东外卖" },
  { label: "主营品类", value: "砂锅粥 · 手工点心 · 锅贴 · 小菜" },
  { label: "全国门店", value: "700-900家（2024年估）" },
  { label: "行业排名", value: "中国粥铺连锁第3名 · 艾媒金榜79.95分" },
];

/* ── 2. 三平台汇总数据 ── */
const summaryMetrics = [
  { label: "日均总单量", value: "90-110", sub: "单/天", source: "△", color: "#FFB800" },
  { label: "月交易额(GTV)", value: "¥6.5-8.5万", sub: "/月", source: "△", color: "#FF6B3D" },
  { label: "月实收(扣佣金后)", value: "¥5.3-7.0万", sub: "/月", source: "△", color: "#3B82F6" },
  { label: "月佣金成本", value: "¥9,200-13,100", sub: "/月", source: "△", color: "#EF4444" },
];

/* ── 3. 竞品数据（真实） ── */
const competitors = [
  { name: "糯雅芳粥", type: "self", score: 3.7, reviews: "—", price: "¥17-23", note: "本店 · 24h · 粥品", x: 50, y: 52 },
  { name: "义兴斋点心店", type: "direct", score: 4.3, reviews: "1,311", price: "¥15-20", note: "包子/点心 · 无粥 · ⭐商圈最高流量", x: 22, y: 20 },
  { name: "明将锅贴", type: "direct", score: 4.1, reviews: "790", price: "¥18-25", note: "锅贴/小吃 · 无粥", x: 78, y: 25 },
  { name: "尚品馒头", type: "indirect", score: 0, reviews: "—", price: "¥5-8", note: "馒头/包子 · 粥¥4（低价威胁）", x: 15, y: 65 },
  { name: "蒋阿姨鸡蛋饼", type: "indirect", score: 0, reviews: "—", price: "¥8-12", note: "早餐饼 · 南瓜粥¥4（低价威胁）", x: 85, y: 70 },
  { name: "苏北包子", type: "indirect", score: 4.1, reviews: "62", price: "¥10-15", note: "包子 · 可能有粥", x: 35, y: 78 },
  { name: "麦道面馆", type: "indirect", score: 4.0, reviews: "424", price: "¥18-25", note: "面馆 · 同价格带", x: 65, y: 80 },
  { name: "老北京香河肉饼", type: "indirect", score: 0, reviews: "—", price: "¥20-25", note: "肉饼 · 粥¥6", x: 48, y: 15 },
  { name: "柳石居螺蛳粉", type: "peripheral", score: 4.3, reviews: "6,402", price: "¥18-25", note: "快餐 · 商圈评价数之王", x: 90, y: 50 },
  { name: "国峰猪排", type: "peripheral", score: 4.6, reviews: "440", price: "¥15-25", note: "炸物 · 商圈评分之王", x: 10, y: 40 },
];

const typeConfig: Record<string, { label: string; color: string; size: number }> = {
  self: { label: "本店", color: "#FFB800", size: 5.5 },
  direct: { label: "直接竞品", color: "#EF4444", size: 3.5 },
  indirect: { label: "间接竞品", color: "#3B82F6", size: 3 },
  peripheral: { label: "泛竞品", color: "#A855F7", size: 2.5 },
};

/* ── 4. SWOT ── */
const swotData = {
  strengths: [
    "粥品类全国第3品牌势能（艾媒金榜79.95分）",
    "商圈同品类0竞品，占据事实垄断地位",
    "24小时营业，时段覆盖无敌（夜宵场景独占）",
    "8分钟快速出餐，外卖适配性极高",
    "无锡本土品牌，江浙沪区域认知度强",
  ],
  weaknesses: [
    "评分仅3.7，低于商圈均值4.1——评分洼地",
    "美团依赖度过高（55%单量），议价能力弱",
    "客单价偏低（¥23-26），利润空间被佣金压缩",
    "京东/淘宝闪购运营投入不足，未充分利用红利",
    "上马墩周边2-3km有同品牌门店，存在内部分流",
  ],
  opportunities: [
    "京东0佣金窗口期——单均利润比美团高约¥6",
    "淘宝闪购流量红利+88VIP会员生态渗透",
    "夜宵场景（21:00-02:00）几乎无竞品",
    "\"粥+万物\"品类融合趋势（粥+火锅/烧烤）",
    "下沉市场粥品消费增速高于一线城市",
  ],
  threats: [
    "三米粥铺/曼玲粥店等全国性品牌可能进驻商圈",
    "美团佣金持续走高，进一步侵蚀利润",
    "平台补贴退坡后的流量断崖风险",
    "速食粥/杯装粥替代威胁（线上增速46.3%）",
    "消费者对平台忠诚度 > 对店铺忠诚度",
  ],
};

/* ── 5. 平台效率对比 ── */
const efficiencyData = [
  { metric: "单均佣金成本", meituan: "¥3.8-4.6", taobao: "¥2.9-3.9", jd: "¥0-0.8", winner: "jd" },
  { metric: "流量获取成本", meituan: "高（竞价成熟）", taobao: "中（淘宝红利）", jd: "低（补贴期）", winner: "jd" },
  { metric: "用户复购率", meituan: "中-高", taobao: "中", jd: "低-中", winner: "meituan" },
  { metric: "客单价天花板", meituan: "较高", taobao: "中等", jd: "中等", winner: "meituan" },
  { metric: "配送体验", meituan: "成熟稳定", taobao: "成熟稳定", jd: "20分钟超时免单", winner: "jd" },
  { metric: "自主营销空间", meituan: "受限", taobao: "中等", jd: "较大（扶持期）", winner: "jd" },
];

/* ── 6. 优化策略 ── */
const strategies = [
  {
    platform: "美团外卖",
    color: "#FFB800",
    role: "流量基本盘",
    actions: [
      "差评24h回复+补偿，随餐附好评引导卡",
      "满25减5 + 满40减8双档满减，高于商圈均值",
      "21:00-06:00\"深夜暖心粥\"专属折扣",
      "聚焦1-2款爆品冲品类排名（干贝虾仁粥）",
    ],
    target: "评分3.7→4.2，流量+15-20%",
  },
  {
    platform: "淘宝闪购",
    color: "#FF6B3D",
    role: "增量渠道",
    actions: [
      "设置88VIP满减叠加券，切入阿里会员生态",
      "砂锅粥制作过程短视频，利用淘宝内容流量",
      "与周边非竞品商家（水果店/便利店）联合满减",
      "标注\"极速达\"\"保温包装\"差异化标签",
    ],
    target: "客单价+8-12%，新客获取量+25%",
  },
  {
    platform: "京东外卖",
    color: "#3B82F6",
    role: "利润引擎",
    actions: [
      "将单量占比从15%提升至25%，最大化0佣金红利",
      "品质化包装升级+附赠小菜（京东用户品质敏感）",
      "主动标注\"京东20分钟达\"，强化配送优势",
      "设置京东独占高客单价套餐（双人砂锅粥¥39.9）",
    ],
    target: "月利润+¥1,500-3,000，客单价+20%",
  },
];

/* ── 7. 核心结论 ── */
const conclusions = [
  {
    title: "平台分层结构",
    body: "美团稳基盘（55%单量）、淘宝拉新客（30%单量）、京东布未来（15%单量）——三平台形成清晰的分层运营格局。单店月交易额估算¥6.5-8.5万，处于粥品类连锁中等偏上水平。",
    color: "#FFB800",
  },
  {
    title: "京东是当前最大战术机会",
    body: "0佣金窗口期意味着京东每单利润比美团高约¥6。若将京东单量占比从15%提升至25%，月度可增加利润¥1,500-3,000。这是短期最直接、最低风险的利润增长点。",
    color: "#3B82F6",
  },
  {
    title: "评分洼地是核心战略问题",
    body: "糯雅芳粥3.7分 vs 商圈均值4.1分——这个0.4分的差距直接影响美团搜索排名和用户点击转化率，估算损失15-20%潜在流量。品牌势能 > 产品势能，运营是瓶颈。",
    color: "#EF4444",
  },
];

export default function NuyaPorridgePage() {
  return (
    <main className="page-enter" style={{ background: "#08080A", color: "#E5E5E5" }}>
      {/* ═══════ Section 1: Hero Dashboard ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/[0.08]">
        <Container>
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-white/30 hover:text-white/70 transition-colors mb-8"
          >
            <span>←</span> 返回实验作品
          </Link>

          <p className="font-mono text-[11px] font-bold tracking-[0.14em] mb-2" style={{ color: "#FFB800" }}>
            INSIGHT LAB · CASE STUDY
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.06] tracking-[-0.02em] font-black mb-2 text-white">
            糯雅芳粥
          </h1>
          <p className="text-[17px] font-semibold text-white/40 mb-1">
            多平台外卖竞争分析系统
          </p>
          <p className="text-[14px] text-white/25 font-medium">
            无锡上马墩店 · 美团 / 淘宝闪购 / 京东外卖
          </p>

          {/* 声明 */}
          <div className="mt-6 flex items-start gap-2 bg-yellow-500/[0.06] border border-yellow-500/20 p-4 max-w-[64ch]">
            <span className="text-[14px] shrink-0 mt-[1px]">⚠️</span>
            <p className="text-[12px] text-white/35 leading-[1.6] m-0">
              标注「△」的数据为基于行业基准与公开信息反推的估算值，非平台后台真实数据。
              标注「✓」的数据来自公开可查来源。本报告仅展示分析方法论，不构成商业决策建议。
            </p>
          </div>

          {/* 汇总指标 */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {summaryMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-white/[0.03] border border-white/[0.06] p-5 transition-all duration-200 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[11px] font-mono text-white/35 tracking-[0.05em]">{m.label}</p>
                  <span className="text-[10px] font-mono text-white/20">{m.source}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-black leading-none" style={{ color: m.color }}>
                    {m.value}
                  </span>
                  <span className="text-[12px] text-white/35">{m.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ Section 2: 店铺基础画像 ═══════ */}
      <section className="py-[clamp(48px,6vw,80px)] border-b border-white/[0.08]">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/25 tracking-[0.12em] mb-2">STORE PROFILE</p>
          <h2 className="text-[clamp(24px,3vw,36px)] font-black text-white mb-3">店铺基础画像</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {storeInfo.map((item) => (
              <div
                key={item.label}
                className={`flex gap-3 p-4 border ${
                  item.highlight
                    ? "border-red-500/30 bg-red-500/[0.04]"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <span className="text-[12px] font-mono text-white/35 shrink-0 mt-[2px]">{item.label}</span>
                <span className={`text-[14px] font-bold leading-[1.4] ${item.highlight ? "text-red-400" : "text-white/70"}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ Section 3: 平台切换视图 ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/[0.08]">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/25 tracking-[0.12em] mb-2">PLATFORM VIEW</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-2">平台数据对比</h2>
          <p className="text-[14px] text-white/35">
            选择一个平台查看糯雅芳粥在该平台上的完整数据画像
            <span className="text-white/15 ml-2">| 数据来源: △估算 ✓公开</span>
          </p>

          <div className="mt-10">
            <DashboardTabs />
          </div>

          {/* 平台效率对比表 */}
          <div className="mt-12">
            <p className="text-[11px] font-mono text-white/25 mb-4 tracking-[0.1em]">PLATFORM EFFICIENCY COMPARISON</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left p-3 text-white/30 font-mono text-[11px] tracking-[0.06em]">效率指标</th>
                    <th className="p-3 text-[#FFB800] font-bold">美团</th>
                    <th className="p-3 text-[#FF6B3D] font-bold">淘宝闪购</th>
                    <th className="p-3 text-[#3B82F6] font-bold">京东外卖</th>
                    <th className="p-3 text-white/20 font-mono text-[11px]">胜出</th>
                  </tr>
                </thead>
                <tbody>
                  {efficiencyData.map((row) => (
                    <tr key={row.metric} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="p-3 text-white/60">{row.metric}</td>
                      <td className="p-3 text-white/50">{row.meituan}</td>
                      <td className="p-3 text-white/50">{row.taobao}</td>
                      <td className="p-3 text-white/50">{row.jd}</td>
                      <td className="p-3">
                        <span
                          className="text-[11px] font-bold px-2 py-[2px]"
                          style={{
                            color:
                              row.winner === "jd" ? "#3B82F6" : row.winner === "meituan" ? "#FFB800" : "#FF6B3D",
                          }}
                        >
                          ★{row.winner === "jd" ? "京东" : row.winner === "meituan" ? "美团" : "淘宝"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-white/20 mt-3">
              △ 核心发现：京东外卖当前是「利润效率之王」——单均佣金成本仅为美团的1/6-1/5
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════ Section 4: 竞品地图 ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/[0.08]">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/25 tracking-[0.12em] mb-2">COMPETITOR MAP</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-2">
            上马墩商圈竞争结构
          </h2>
          <p className="text-[14px] text-white/35">
            中心为糯雅芳粥（⭐3.7），周围分布同品类、间接及泛竞品
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* SVG 地图 */}
            <div className="lg:col-span-2 bg-white/[0.02] border border-white/[0.06] p-6">
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* 商圈范围圈 */}
                  <circle cx={50} cy={52} r={38} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" />
                  <circle cx={50} cy={52} r={22} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />

                  {/* 道路线 */}
                  <line x1={0} y1={35} x2={100} y2={35} stroke="rgba(255,255,255,0.04)" strokeWidth="0.4" strokeDasharray="4 2" />
                  <line x1={0} y1={85} x2={100} y2={85} stroke="rgba(255,255,255,0.04)" strokeWidth="0.4" strokeDasharray="4 2" />

                  {/* 连线 */}
                  {competitors.filter(c => c.type !== "self").map((c) => (
                    <line
                      key={`line-${c.name}`}
                      x1={50} y1={52} x2={c.x} y2={c.y}
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="0.4"
                      strokeDasharray="1.5 1.5"
                    />
                  ))}

                  {/* 节点 */}
                  {competitors.map((c) => {
                    const cfg = typeConfig[c.type];
                    return (
                      <g key={c.name}>
                        <circle
                          cx={c.x} cy={c.y} r={cfg.size}
                          fill={c.type === "self" ? cfg.color : "rgba(20,20,25,1)"}
                          stroke={cfg.color}
                          strokeWidth={c.type === "self" ? "1.5" : c.type === "direct" ? "1" : "0.6"}
                        />
                        <text
                          x={c.x} y={c.y + (cfg.size + 5)}
                          textAnchor="middle"
                          fill={c.type === "self" ? "#FFB800" : "rgba(255,255,255,0.5)"}
                          fontSize="3.2"
                          fontWeight={c.type === "self" ? "bold" : "normal"}
                          fontFamily="system-ui, sans-serif"
                        >
                          {c.name}
                        </text>
                        {c.score > 0 && (
                          <text
                            x={c.x} y={c.y + (cfg.size + 8.5)}
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.25)"
                            fontSize="2.5"
                            fontFamily="system-ui, sans-serif"
                          >
                            ⭐{c.score}
                          </text>
                        )}
                      </g>
                    );
                  })}

                  {/* 道路标注 */}
                  <text x={50} y={32} textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="2.5" fontFamily="system-ui">上马墩路</text>
                  <text x={50} y={88} textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="2.5" fontFamily="system-ui">人民东路</text>
                </svg>
              </div>
              {/* 图例 */}
              <div className="flex flex-wrap gap-5 mt-4 justify-center">
                {Object.entries(typeConfig).map(([key, cfg]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cfg.color }} />
                    <span className="text-[11px] text-white/35">{cfg.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 竞品列表 */}
            <div className="space-y-2 overflow-auto max-h-[500px]">
              <p className="text-[11px] font-mono text-white/25 mb-3 tracking-[0.08em]">COMPETITOR DETAILS</p>
              {competitors.filter(c => c.type !== "self").map((c) => (
                <div key={c.name} className="bg-white/[0.02] border border-white/[0.05] p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[13px] font-bold text-white/70">{c.name}</span>
                    {c.score > 0 && (
                      <span className="text-[13px] font-bold" style={{ color: c.score >= 4.3 ? "#22C55E" : c.score >= 4.0 ? "#FFB800" : "#EF4444" }}>
                        ⭐{c.score}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-white/35 leading-[1.5] m-0">{c.note}</p>
                  <div className="flex gap-3 mt-1">
                    <span className="text-[11px] text-white/30">人均 {c.price}</span>
                    {c.reviews !== "—" && <span className="text-[11px] text-white/30">{c.reviews} 评</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 核心发现 */}
          <div className="mt-8 bg-white/[0.02] border border-white/[0.08] p-6 max-w-[56ch]">
            <p className="text-[11px] font-mono text-[#FFB800] tracking-[0.1em] mb-2">KEY FINDING</p>
            <p className="text-[15px] text-white/60 leading-[1.7] m-0">
              上马墩1.5km范围内<strong className="text-white">无其他主营粥品连锁品牌</strong>，糯雅芳粥占据<span className="text-[#FFB800] font-bold">事实垄断地位</span>。
              但糯雅芳粥（⭐3.7）在商圈内处于<strong className="text-red-400">评分洼地</strong>——周边竞品普遍4.0+，
              评分劣势直接影响平台搜索排名和用户点击转化率，估算<span className="text-red-400">损失15-20%潜在流量</span>。
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════ Section 5: SWOT ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/[0.08]">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/25 tracking-[0.12em] mb-2">STRATEGIC ANALYSIS</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-2">SWOT 战略定位</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="border border-green-500/20 bg-green-500/[0.03] p-6">
              <p className="text-[13px] font-black text-green-400 tracking-[0.06em] mb-4">S · STRENGTHS 优势</p>
              <ul className="space-y-2 m-0 p-0 list-none">
                {swotData.strengths.map((s, i) => (
                  <li key={i} className="text-[13px] text-white/55 leading-[1.6] flex items-start gap-2">
                    <span className="text-green-500/60 text-[10px] mt-[3px] shrink-0">◆</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="border border-red-500/20 bg-red-500/[0.03] p-6">
              <p className="text-[13px] font-black text-red-400 tracking-[0.06em] mb-4">W · WEAKNESSES 劣势</p>
              <ul className="space-y-2 m-0 p-0 list-none">
                {swotData.weaknesses.map((s, i) => (
                  <li key={i} className="text-[13px] text-white/55 leading-[1.6] flex items-start gap-2">
                    <span className="text-red-500/60 text-[10px] mt-[3px] shrink-0">◆</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="border border-blue-500/20 bg-blue-500/[0.03] p-6">
              <p className="text-[13px] font-black text-blue-400 tracking-[0.06em] mb-4">O · OPPORTUNITIES 机会</p>
              <ul className="space-y-2 m-0 p-0 list-none">
                {swotData.opportunities.map((s, i) => (
                  <li key={i} className="text-[13px] text-white/55 leading-[1.6] flex items-start gap-2">
                    <span className="text-blue-500/60 text-[10px] mt-[3px] shrink-0">◆</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="border border-yellow-500/20 bg-yellow-500/[0.03] p-6">
              <p className="text-[13px] font-black text-yellow-400 tracking-[0.06em] mb-4">T · THREATS 威胁</p>
              <ul className="space-y-2 m-0 p-0 list-none">
                {swotData.threats.map((s, i) => (
                  <li key={i} className="text-[13px] text-white/55 leading-[1.6] flex items-start gap-2">
                    <span className="text-yellow-500/60 text-[10px] mt-[3px] shrink-0">◆</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 战略定位 */}
          <div className="mt-8 bg-white/[0.03] border border-white/[0.1] p-8 text-center">
            <p className="text-[11px] font-mono text-white/25 tracking-[0.12em] mb-3">STRATEGIC POSITIONING</p>
            <p className="text-[15px] text-white/40 font-semibold leading-[1.6]">
              美团 · 流量基本盘 + 品牌曝光 → 淘宝 · 增量渠道 + 会员渗透 → 京东 · 利润引擎 + 差异化服务
            </p>
            <p className="text-[13px] text-white/20 mt-2">
              防御壁垒：24h营业 × 0竞品窗口 ｜ 增长引擎：夜宵场景 × 京东0佣金
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════ Section 6: 分平台优化策略 ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/[0.08]">
        <Container>
          <p className="font-mono text-[11px] font-bold text-white/25 tracking-[0.12em] mb-2">OPERATIONAL DIAGNOSIS</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-2">分平台优化策略</h2>
          <p className="text-[14px] text-white/35 mb-0">三平台差异化运营，非简单复制策略</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategies.map((s) => (
              <div
                key={s.platform}
                className="bg-white/[0.02] border border-white/[0.06] p-6 transition-all duration-200 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                  <span className="text-[16px] font-black text-white">{s.platform}</span>
                </div>
                <span
                  className="inline-block text-[11px] font-bold px-2 py-[2px] mb-4"
                  style={{ backgroundColor: s.color, color: "#000" }}
                >
                  {s.role}
                </span>
                <ul className="space-y-2.5 m-0 p-0 list-none">
                  {s.actions.map((a, i) => (
                    <li key={i} className="text-[13px] text-white/55 leading-[1.6] flex items-start gap-2">
                      <span className="text-white/20 text-[10px] mt-[4px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <p className="text-[11px] font-mono text-white/25 tracking-[0.04em] mb-1">TARGET</p>
                  <p className="text-[13px] font-bold m-0" style={{ color: s.color }}>{s.target}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ Section 7: Insight Conclusion ═══════ */}
      <section className="py-[clamp(56px,8vw,90px)] border-b border-white/[0.08]">
        <Container>
          <p className="font-mono text-[11px] font-bold tracking-[0.14em] mb-2" style={{ color: "#FFB800" }}>
            INSIGHT CONCLUSION
          </p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-black text-white mb-2">核心结论</h2>
          <p className="text-[14px] text-white/35">
            即时零售平台如何重构单店商业结构
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {conclusions.map((c) => (
              <div
                key={c.title}
                className="bg-white/[0.03] border border-white/[0.08] p-8 transition-all duration-200 hover:bg-white/[0.06]"
              >
                <div className="w-8 h-[3px] mb-5" style={{ backgroundColor: c.color }} />
                <h3 className="text-[20px] font-black text-white mb-3">{c.title}</h3>
                <p className="text-[14px] text-white/45 leading-[1.7] m-0">{c.body}</p>
              </div>
            ))}
          </div>

          {/* 核心模型 */}
          <div className="mt-10 bg-white/[0.02] border border-white/10 p-10 text-center">
            <p className="text-[11px] font-mono text-white/20 tracking-[0.14em] mb-4">CORE MODEL</p>
            <p className="font-display text-[clamp(36px,5vw,64px)] font-black text-white leading-[1.1] mb-3">
              「一店三命」
            </p>
            <p className="text-[18px] text-white/35 font-semibold">
              同一个商家，在不同平台上，实质是三种不同的商业模型
            </p>
          </div>

          {/* 四层洞察 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { n: "01", text: "外卖平台并非同质化流量市场，而是分层竞争结构——低价层由补贴驱动（淘宝），稳定层由品质驱动（美团），增量层由履约驱动（京东）。" },
              { n: "02", text: "单店经营已被拆解为\"多平台分布式经营单元\"——同一门店需要在三个平台上同时维护不同的商业模型和用户关系。" },
              { n: "03", text: "不同平台塑造不同用户心智与价格认知——美团用户看评分，淘宝用户看补贴，京东用户看品质。同一碗粥在不同平台上有不同的\"价值定义\"。" },
              { n: "04", text: "区域竞争核心已从\"店铺竞争\"转向\"平台规则竞争\"——谁能更好地利用各平台的差异化机制，谁就能在商圈中建立结构性优势。" },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-3 p-5 bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[13px] font-mono font-bold text-white/15 shrink-0 mt-[1px]">{item.n}</span>
                <span className="text-[14px] text-white/50 leading-[1.7]">{item.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ Section 8: 收束 ═══════ */}
      <section className="py-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="max-w-[56ch]">
            <p className="font-display text-[clamp(22px,3vw,32px)] font-black text-white leading-[1.25] mb-6">
              在即时零售体系中，一个餐饮门店不再是独立经营实体，
              而是被嵌入在多个平台规则下的「多形态商业节点」。
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["多平台数据对比", "竞品矩阵分析", "行业基准反推", "SWOT战略定位", "运营诊断SOP", "平台三维分析"].map((t) => (
                <span key={t} className="text-[11px] font-bold tracking-[0.04em] px-[10px] py-[4px] border border-white/15 text-white/30">
                  {t}
                </span>
              ))}
            </div>

            <Button href="/lab" variant="outline" size="large">
              ← 返回实验作品
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
