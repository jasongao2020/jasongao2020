export type LabStatus = "Completed" | "Building" | "Researching";

export type LabCategoryKey = "explore" | "build" | "present" | "analyze";

export interface LabProject {
  id: string;
  title: string;
  tags: string[];
  status: LabStatus;
  description: string;
  /** 子页面路由，如 /lab/peach-brand */
  href?: string;
}

export interface LabCategory {
  key: LabCategoryKey;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  colorClass: string;
  description: string;
  showcases: string[];
  projects: LabProject[];
}

export const labCategories: LabCategory[] = [
  {
    key: "explore",
    icon: "🚀",
    title: "Explore",
    subtitle: "探索实验室",
    color: "#FFD600",
    colorClass: "lab-explore",
    description: "探索AI时代的新机会、新模式与新可能。",
    showcases: [
      "AI创业机会地图",
      "一人公司模型研究",
      "AI商业模式拆解",
      "未来趋势分析",
      "普通人AI转型路线图",
    ],
    projects: [],
  },
  {
    key: "build",
    icon: "🧩",
    title: "Build",
    subtitle: "构建实验室",
    color: "#2F5EEB",
    colorClass: "lab-build",
    description: "从0到1打造产品、品牌与商业表达。",
    showcases: [
      "独立站",
      "品牌设计",
      "产品包装",
      "商业方案",
      "品牌定位",
    ],
    projects: [
      {
        id: "004",
        title: "水蜜桃品牌独立站实验",
        tags: ["Brand", "Website", "AI Design"],
        status: "Building",
        description: "从农产品到品牌体验的数字化实践。",
        href: "/lab/peach-brand",
      },
    ],
  },
  {
    key: "present",
    icon: "🎬",
    title: "Present",
    subtitle: "传播实验室",
    color: "#FF5E3A",
    colorClass: "lab-present",
    description: "利用视觉与内容传播价值。",
    showcases: [
      "交互设计",
      "宣传片",
      "广告视频",
      "画册设计",
      "PPT",
      "品牌视觉",
      "海报设计",
    ],
    projects: [
      {
        id: "005",
        title: "GAMEFLOW · 游戏手柄交互",
        tags: ["Interaction", "Gaming", "Video"],
        status: "Completed",
        description: "沉浸式游戏控制体验 — 动态演示与交互设计。",
        href: "/lab/interaction",
      },
      {
        id: "006",
        title: "NEXUS PANEL · 智能控制台",
        tags: ["Interaction", "Hardware", "Video"],
        status: "Completed",
        description: "智能硬件交互界面 — 实体控制与数字融合。",
        href: "/lab/interaction",
      },
    ],
  },
  {
    key: "analyze",
    icon: "📊",
    title: "Analyze",
    subtitle: "洞察实验室",
    color: "#00C853",
    colorClass: "lab-analyze",
    description: "调研、分析与商业洞察。",
    showcases: [
      "行业分析",
      "竞品研究",
      "市场调研",
      "商业模式分析",
      "企业诊断",
    ],
    projects: [
      {
        id: "007",
        title: "糯雅芳粥 · 外卖平台竞争分析",
        tags: ["Data Analysis", "Competitive", "Insight"],
        status: "Completed",
        description: "即时零售平台如何重构单店商业结构 — 三平台对比分析。",
        href: "/lab/nuya-porridge",
      },
    ],
  },
];

export const labPageData = {
  title: "LAB",
  subtitleLines: ["从一个想法开始，", "到形成品牌、", "到完成传播、", "再到商业验证。"],
  tags: ["AI", "Business", "Brand", "Research"],
  slogan: "不是展示作品，而是记录实践",
  navLabel: "实验室",
  navHoverLabel: "进入实验室 →",
};
