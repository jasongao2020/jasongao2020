# 高平个人品牌宣传片 — 创作简报

## 风格引用

来源: `design.md` (Neo Brutalism 个人网站提取)

| 令牌 | 值 |
|------|-----|
| 背景色 | `#FFFDF5` (暖白) |
| 前景色 | `#111111` (黑) |
| 主强调色 | `#FFD600` (黄) |
| 辅强调色 | `#2F5EEB` (蓝) |
| 边框 | 2px solid `#111111` |
| 阴影 | 硬偏移、零模糊、纯黑 |
| 字体 | 标题: Impact / Arial Black 900; 正文: system-ui 中文字体; 等宽: JetBrains Mono |
| 圆角 | 2-4px 最大 |
| 禁止 | 模糊阴影、大圆角、渐变背景、细字体、调色板外颜色 |

## 视频目标

- **受众**: 潜在合作方、创业者、对 AI 生产力感兴趣的人群
- **平台**: 网站首页背景 / 社交媒体分享
- **时长**: 约 28 秒
- **画布**: 1920×1080 (横屏)
- **优先级**: 品牌一致性 > 动效质量 > 信息密度

## 节奏声明

```
hook — PUNCH — build — PEAK — resolve — CTA
```

## 全局规则

- **背景层**: 每场景 2-5 个装饰元素（径向光晕、超大淡色文字、细线分隔、网格图案）
- **微动效**: 每个装饰元素有环境动画（breath 呼吸、drift 漂移、pulse 脉冲）
- **转场主风格**: 中等能量 — push slide + blur crossfade (CSS)，`power2.inOut`，0.3-0.5s
- **转场强调**: Hero reveal 用 zoom through；CTA 用 blur crossfade
- **入场方向**: 每场景至少 3 种不同缓动 + 方向
- **速度变化**: 最快 0.15s → 最慢 0.8s，约 5× 差异
- **浅色画布规则**: 用 2px+ 实色边框、全饱和度强调色、纹理（细线、网格）避免"空白幻灯片"感
- **中文优先**: 所有标题和正文使用中文

## 场景分镜（6 场景，~28s）

---

### 场景 1: 品牌开场 (0s — 3.5s)

**Concept**: 黑色粗体 "GAO PING" 从画布下方 SLAM 进入，伴随黄色强调色块展开。这不是一个标题——这是一个声明。暖白背景由细网格线激活，超大淡色 "GP" 字母在背景缓慢漂移。

**Mood direction**: 杂志封面标题序列。Bauhaus 几何感。自信、不道歉。

**Depth layers**:
- BG: 暖白 `#FFFDF5` + 超大 "GP" 淡色文字 (12% opacity `#111111`) 右上角溢出画布 + 细网格线矩阵 8% opacity + 右上角径向黄色光晕 `#FFD600` 15% opacity
- MG: 黑色粗体 "GAO PING" 标题 (140px) + 黄色高亮条横跨底部
- FG: 顶部细线分隔 + 左下角 mono 标签 "EST. 2025" + 右下角黄色方块装饰

**Animation choreography**:
- 黄色径向光晕: PULSE 缓慢呼吸 (scale 1→1.03, 2s cycle)
- "GP" 淡色文字: DRIFT 缓慢右上漂移 (x: -20, y: -15, 6s)
- 网格线: FADE IN (opacity 0→8%, 1s)
- "GAO PING": SLAMS in from bottom (y: 120→0, 0.5s, expo.out, t=0.2)
- 黄色高亮条: EXPANDS horizontally (scaleX: 0→1, 0.4s, power3.out, t=0.4)
- 顶部细线: DRAWS across (scaleX: 0→1, 0.6s, power2.inOut, t=0.3)
- "EST. 2025": FADES in (opacity 0→1, 0.3s, t=0.8)
- 右下角方块: POPS in (scale: 0→1, 0.25s, back.out, t=0.7)

**Transition out**: Zoom through → 场景 2。加速放大 + 模糊 (scale 1→1.15, blur 0→20px, 0.25s, power3.in)

---

### 场景 2: 身份定位 (3.5s — 8s)

**Concept**: 镜头穿过黑色边框面板进入。"AI 时代的一人公司实践者" 一字一字打字机式出现。右侧大号黄色数字 "01" 标记章节。

**Mood direction**: 编辑设计排版。干净、结构化、信息驱动。像翻阅一本设计精良的杂志。

**Depth layers**:
- BG: 暖白 `#FFFDF5` + 左侧细竖线 + 超大淡色 "01" + 细微纸张纹理网格
- MG: 左侧大号黑色面板 (50% 宽度) 内含主标题 + 副标题；右侧黄色块 + 黑色粗体 "01"
- FG: 顶部章节标签 "ABOUT" mono 字体 + 底部状态栏带年份

**Animation choreography**:
- 超大 "01" BG: DRIFT 缓慢下移 (y: -10→10, 5s)
- 左侧黑色面板: SLIDES in from left (x: -80→0, 0.5s, expo.out, t=0.2)
- "AI 时代的一人公司实践者": TYPES on (字符逐个出现模拟，clip-path 动画, 0.8s, t=0.6)
- 副标题 "让 AI 成为普通人的超级生产力": FADES up (y: 20→0, opacity 0→1, 0.45s, power2.out, t=1.2)
- "01" 数字: SCALES up (scale: 0.6→1, 0.4s, back.out, t=0.8)
- 黄色块背景: EXPANDS from center (scaleX: 0→1, 0.35s, power3.out, t=0.7)
- "ABOUT" 标签: FADES in from top (y: -10→0, opacity 0→1, 0.3s, t=0.3)
- 底部状态栏: SLIDES up from bottom (y: 30→0, 0.4s, t=1.5)

**Transition out**: Push slide 向右 → 场景 3。当前场景推向右 (x: 0→-200, blur: 0→12px, 0.35s, power2.in)

---

### 场景 3: AI 工作流 — 管道概览 (8s — 14s)

**Concept**: 五个 Neo Brutalism 风格卡片从左到右排列，用 "→" 箭头连接。这是 "我的 AI 工作流" 的视觉化——一个 AI 驱动的五步方法论。每张卡片黄色高亮其工具名。

**Mood direction**: 流程图美学。瑞士设计 + Bauhaus 色彩研究。精确、几何、自信。

**Depth layers**:
- BG: 暖白 `#FFFDF5` + 水平细线贯穿 + 上下超大淡色文字 "WORKFLOW" 溢出画布
- MG: 5 张卡片水平排列，带 2px 黑边 + 硬阴影 `3px 3px 0 #111111`；卡片间 "→" 箭头
- FG: 顶部章节号 "03 · 实验室" + 底部字幕 "信息获取 → 知识整理 → 深度分析 → 方案输出 → 最终交付"

**Animation choreography**:
- "WORKFLOW" BG 文字: DRIFT 缓慢水平移动 (x: -30→30, 8s)
- 卡片 1 "信息获取": SLIDES in from left (x: -60→0, opacity 0→1, 0.4s, expo.out, t=0.2)
- 卡片 2 "知识整理": SLIDES in from left (x: -60→0, opacity 0→1, 0.4s, expo.out, t=0.35)
- 卡片 3 "深度分析": SLIDES in from bottom (y: 50→0, opacity 0→1, 0.4s, power3.out, t=0.5) — 中间卡片不同方向强调
- 卡片 4 "方案输出": SLIDES in from right (x: 40→0, opacity 0→1, 0.4s, expo.out, t=0.35)
- 卡片 5 "最终交付": SLIDES in from right (x: 40→0, opacity 0→1, 0.4s, expo.out, t=0.2)
- 箭头: SCALE in (scaleX: 0→1, 0.3s, t=0.8, staggered)
- 工具名高亮 (Perplexity/NotebookLM/Claude/PPT/YOU): YELLOW HIGHLIGHT sweep (background-size: 0%→100%, 0.5s steps, staggered t=1.0+)
- 底部字幕: FADES in (opacity 0→1, 0.4s, t=1.2)

**Transition out**: Blur crossfade → 场景 4。模糊 + 淡出 (blur: 0→15px, opacity: 1→0, 0.4s, power2.inOut)

---

### 场景 4: 技术能力展示 (14s — 20s)

**Concept**: 分屏布局。左侧大号代码块 (JetBrains Mono) 展示技术栈，右侧三张统计卡片 (CountUp 数字滚动)。展示 "技术能力" —— Next.js / React / TypeScript / AI 工具链。

**Mood direction**: 技术蓝 + 黄色点缀。开发者工具的精确感。终端美学但用 Neo Brutalism 硬边处理。

**Depth layers**:
- BG: 暖白 `#FFFDF5` + 左侧淡色代码片段超大溢出 + 细网格
- MG 左: 黑色代码块面板，mono 字体列出技术栈 (Next.js / React / TypeScript / Tailwind / GSAP)
- MG 右: 3 张竖排统计卡片，带 CountUp 数字
- FG: 顶部标签 "TECH STACK" + 底部蓝色强调条

**Animation choreography**:
- 淡色代码片段 BG: DRIFT 缓慢左移 (x: -15→0, 7s)
- 代码块面板: SLIDES in from left (x: -80→0, 0.5s, expo.out, t=0.2)
- 代码行 1 "Next.js": TYPES on (逐字, 0.3s, t=0.5)
- 代码行 2 "React 19": TYPES on (逐字, 0.3s, t=0.7)
- 代码行 3 "TypeScript 6": TYPES on (逐字, 0.3s, t=0.9)
- 代码行 4 "Tailwind CSS 4": TYPES on (逐字, 0.3s, t=1.1)
- 代码行 5 "GSAP 3": TYPES on (逐字, 0.3s, t=1.3)
- 统计卡片 1 "15+": SLIDES in from right + CountUp (x: 40→0, opacity 0→1, 0.4s, t=0.5)
- 统计卡片 2 "50K+": SLIDES in from right + CountUp (x: 40→0, opacity 0→1, 0.4s, t=0.8)
- 统计卡片 3 "100%": SLIDES in from right + CountUp (x: 40→0, opacity 0→1, 0.4s, t=1.1)
- 蓝色强调条: EXPANDS (scaleX: 0→1, 0.5s, power3.out, t=1.6)

**Transition out**: Whip pan 向左 → 场景 5。快速甩出 (x: 0→-300, blur: 0→20px, 0.28s, power3.in)

---

### 场景 5: 价值主张 (20s — 24.5s)

**Concept**: 回到品牌核心。大号黑色粗体 "让 AI 成为" + 黄色高亮 "普通人的超级生产力" 占满画面。这是整个视频的情感高潮——最简洁、最有力量的画面。

**Mood direction**: 海报式宣言。最少的元素，最大的冲击力。像一个广告牌一样大胆。

**Depth layers**:
- BG: 暖白 `#FFFDF5` + 中心放射状黄色光晕 20% + 边框结构（2px 黑色内边框距边缘 60px）
- MG: 主标题两行 + 黄色高亮词
- FG: 底部 GAO PING 签名 logo + 年份

**Animation choreography**:
- 黄色放射光晕: PULSE (scale 1→1.05, 3s cycle)
- 内边框: DRAWS (四条边按顺序绘制, 每条 0.15s, staggered, t=0.1)
- "让 AI 成为": SLAMS in from top (y: -60→0, opacity 0→1, 0.5s, expo.out, t=0.5)
- "超级生产力": SLAMS in from bottom (y: 60→0, opacity 0→1, 0.5s, expo.out, t=0.7)
- "普通人的" 黄色高亮: SWEEPS (background-size sweep + scale 0.95→1, 0.6s, t=0.9)
- Logo 签名: FADES in (opacity 0→1, 0.4s, t=1.5)

**Transition out**: Color dip to black → 场景 6。画面整体渐变为黑 (0.5s, sine.inOut)

---

### 场景 6: CTA — 最终画面 (24.5s — 28s)

**Concept**: 黑底 + 微信二维码 + "扫码与我交流"。最终行动号召，干净利落。所有动效收束为静帧。

**Mood direction**: 名片式结尾。简洁、专业、可操作。

**Depth layers**:
- BG: 纯黑 `#111111` + 微弱黄色光晕在二维码后方
- MG: 二维码图片 (白色边框) + "扫码与我交流" 文字
- FG: "GAO PING" 标题 + 网址 gaoping.site

**Animation choreography**:
- 黄色光晕: FADES in (opacity 0→15%, 0.5s, t=0.2)
- "GAO PING": FADES in from top (y: -20→0, opacity 0→1, 0.4s, expo.out, t=0.3)
- 二维码: SCALES in (scale: 0.85→1, opacity 0→1, 0.5s, back.out, t=0.5)
- "扫码与我交流": FADES in (opacity 0→1, 0.3s, t=0.9)
- "gaoping.site": FADES in (opacity 0→1, 0.3s, t=1.1)
- 最终画面静置 0.8s 后 → 所有元素 fade out to black (0.5s, t=3.3)

---

## 贯穿母题

1. **黄色高亮 `#FFD600`** — 每个场景至少出现一次，作为品牌识别锚点
2. **2px 黑边** — 所有卡片、面板、结构元素
3. **硬阴影 `3px 3px 0 #111111`** — 卡片和重要面板
4. **超大淡色背景文字** — 每场景一个，作为 BG 装饰
5. **Mono 标签** — 章节号、年份、技术标签统一用 JetBrains Mono

## 负面提示

- 禁止模糊阴影、柔和阴影
- 禁止渐变背景（用径向光晕代替）
- 禁止圆角 > 4px
- 禁止细字体 (font-weight < 600)
- 禁止调色板外颜色
- 禁止空场景（每场景至少 8 个视觉元素）
- 禁止 Jump cut（每场景之间有转场）
- 禁止 exit animation（除最后场景外）
- 禁止使用 `<br>` 做文字换行
- 禁止 `Math.random()` 或时间依赖逻辑
