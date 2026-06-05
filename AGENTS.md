# AGENTS.md — 高平个人网站

## 项目介绍

高平（Jason Gao）个人网站。采用 **Neo Brutalism（新粗野主义）** 设计风格——粗黑边框、硬偏移阴影、高对比度色彩、大胆排版。技术栈：Next.js 16 + React 19 + TypeScript + Tailwind CSS 4。

**线上环境：** 待部署
**本地开发：** `npm run dev` → http://localhost:3000

---

## 目录结构

```
src/
├── app/
│   ├── globals.css              # CSS 变量 + Tailwind + 全局样式
│   ├── layout.tsx               # 根布局（Header + Footer）
│   ├── page.tsx                 # 首页（组装所有区块）
│   └── design-system/
│       └── page.tsx             # 设计系统预览页（仅开发环境，纯前端渲染）
├── components/
│   ├── ui/                      # 基础 UI 组件
│   │   ├── Button.tsx           # 按钮（primary | outline | dark）+ arrow + size
│   │   ├── Card.tsx             # 卡片（accent 色块 | flat 无样式）
│   │   ├── Eyebrow.tsx          # 段落小标签（accent | yellow | coral | green）
│   │   ├── Tag.tsx              # 标签（hero | service | tool 三种形态）
│   │   └── SectionHeader.tsx    # 区块标题（eyebrow + h2 + star + lead）
│   ├── layout/                  # 布局组件
│   │   ├── Container.tsx        # 居内容器（max-width + padding）
│   │   ├── Section.tsx          # 区块容器（padding + 粗黑分割线）
│   │   ├── Header.tsx           # 顶部导航（sticky + 汉堡菜单）
│   │   └── Footer.tsx           # 页脚
│   └── sections/                # 页面区块（每个区块对应页面上一个 section）
│       ├── HeroSection.tsx      # Hero 头部
│       ├── AboutSection.tsx     # 关于我
│       ├── WorkSection.tsx      # 工作焦点（4 列卡片）
│       ├── ProblemsSection.tsx  # 问题解决（Q&A 行）
│       ├── ServicesSection.tsx  # 服务范围（2 列服务卡片）
│       ├── ThoughtsSection.tsx  # 深度思考（引用卡片）
│       ├── ToolsSection.tsx     # 工具箱（自适应网格标签）
│       ├── CooperateSection.tsx # 合作模式（5 列模式卡片）
│       ├── WhyMeSection.tsx     # 差异点
│       └── CTASection.tsx       # 行动号召
└── lib/
    └── tokens.ts                # 设计令牌定义（TypeScript 类型 + 常量）
```

---

## 设计系统

### 风格定位

**Neo Brutalism** — 粗野主义设计语言：
- 2px 粗黑边框（`var(--border)` = `#111111`）
- 硬偏移阴影（无模糊）：默认 `3px 3px 0`，Hover `6px 6px 0`
- Hover 时卡片/按钮向上左上偏移 2px，阴影扩大
- Active 时阴影归零，向下右下偏移 2px
- 近乎直角的圆角（2-4px）
- 高对比度配色，大字号排版

### 颜色

| Token | 值 | 用途 |
|---|---|---|
| `--bg` | `#FFFDF5` | 页面背景 |
| `--surface` | `#FFFFFF` | 卡片/组件表面 |
| `--fg` | `#111111` | 前景/文字 |
| `--muted` | `#5C5C5C` | 次要文字 |
| `--border` | `#111111` | 边框 |
| `--accent` | `#2F5EEB` | 主口音（蓝） |
| `--accent-yellow` | `#FFD600` | 黄色口音 |
| `--accent-coral` | `#FF5E3A` | 珊瑚口音 |
| `--accent-green` | `#00C853` | 绿色口音 |
| `--accent-purple` | `#7C3AED` | 紫色口音 |
| `--accent-pink` | `#FF2D78` | 粉色口音 |

### 字体

| Token | 用途 | 回退栈 |
|---|---|---|
| `--font-display` | 标题 / Hero | Impact → Arial Black → system-ui |
| `--font-body` | 正文 | system-ui → PingFang SC → Microsoft YaHei |
| `--font-mono` | 代码 / 数字 | JetBrains Mono → Fira Code → ui-monospace |

### 间距

`xs: 8px | sm: 12px | md: 20px | lg: 32px | xl: 56px | 2xl: 96px`

容器最大宽度：`1120px`，左右内边距：`28px`

### 阴影

| Token | 值 | 用途 |
|---|---|---|
| `--shadow-hard-sm` | `3px 3px 0 #111` | 默认态 |
| `--shadow-hover` | `6px 6px 0 #111` | 悬停态 |

### 响应式断点

- `1024px`：Hero 分栏间距缩小；网格从 4 列缩为 2 列
- `768px`：Hero 单栏；网格进一步简化
- `640px`：导航切换为汉堡菜单；单栏布局
- `480px`：容器内边距缩小；卡片内边距调整

---

## 组件复用规范

### 核心原则

1. **开发新页面时，必须优先复用已有组件。**
2. **如果已有组件可以通过 props、variant、className 等方式扩展，应优先扩展，而不是重新创建相似组件。**
3. **只有在现有组件确实无法满足需求时，才新增组件。**

### 组件扩展指南

**Button (`src/components/ui/Button.tsx`)**
- 变体通过 `variant` prop 切换：`primary | outline | dark`
- 箭头通过 `arrow` prop 控制
- 尺寸通过 `size` prop：`default | large`
- 需要链接时传 `href` 即渲染为 `<Link>`
- 额外样式通过 `className` 叠加

**Card (`src/components/ui/Card.tsx`)**
- 口音色块通过 `accent` prop：`blue | yellow | coral | green | purple | pink`
- 无样式卡片传 `flat` prop
- 特殊背景色通过 `style` prop 覆盖（如 About 区的黄色卡片）
- 内边距覆写通过 `className="!p-8"`

**Tag (`src/components/ui/Tag.tsx`)**
- 三种形态通过 `type` 切换：`hero | service | tool`
- Hero Tag 的颜色通过 `color` prop：`coral | blue`（默认黄色）
- Service Tag 的变体通过 `color="blue"` 实现 alt 效果
- Tool Tag 的 accent 效果通过 `accent` boolean 控制

**Eyebrow (`src/components/ui/Eyebrow.tsx`)**
- 变体通过 `variant`：`accent | yellow | coral | green`

**SectionHeader (`src/components/ui/SectionHeader.tsx`)**
- 组合了 Eyebrow + h2 + 可选 star/lead
- 居中通过 `center` prop
- Star 通过 `star` boolean 控制

### 样式覆盖规范

- 组件默认使用设计系统的 CSS 变量（如 `var(--gap-md)`）
- 局部覆盖使用 Tailwind 的 `!` 前缀（如 `!p-8`）或 `style` prop
- 不要直接在页面中写大段内联样式或新增 CSS 类
- 颜色变量优先使用 CSS 变量而非硬编码

---

## 开发规范

### 样式

1. 全局设计令牌在 `src/app/globals.css` 的 `:root` 中定义
2. TypeScript 端的设计令牌在 `src/lib/tokens.ts` 中维护
3. 组件内样式优先使用 Tailwind 类名 + CSS 变量（如 `bg-[var(--surface)]`）
4. 交互状态（hover/active/focus）在组件中定义，保持一致性
5. 响应式规则尽量复用全局断点逻辑

### 组件

1. 基础 UI 组件放在 `src/components/ui/`
2. 布局组件放在 `src/components/layout/`
3. 页面区块放在 `src/components/sections/`
4. 每个组件一个文件，使用 `export default`
5. Props 类型在本文件内用 `type` 定义，复杂类型从 `@/lib/tokens` 导入

### 非功能需求

1. 可访问性：所有交互元素需支持 `focus-visible` 焦点环
2. SEO：页面 metadata 在对应的 `page.tsx` 或 `layout.tsx` 中设置
3. 性能：SVG 内联使用，不使用外部图片资源
4. 移动端：汉堡菜单在 `640px` 以下启用

---

## 设计系统预览

访问 `/design-system` 查看所有组件的实时渲染。该页面：
- 仅在开发环境使用，不参与生产构建
- 纯前端渲染，无数据依赖
- 展示了所有颜色、字体、组件变体和布局系统

---

## 后续添加内容的步骤

1. **新增区块：** 在 `src/components/sections/` 新建组件 → 在 `src/app/page.tsx` 引入
2. **新增全局样式：** 在 `src/app/globals.css` 中追加，遵守现有令牌命名
3. **新增 UI 组件：** 在 `src/components/ui/` 新建 → 保持与现有组件的 API 风格一致 → 更新设计系统预览页
4. **新增页面路由：** 在 `src/app/` 下创建目录 + `page.tsx`
5. **修改设计令牌：** 先在 `globals.css` 的 `:root` 中修改 CSS 变量，再同步更新 `src/lib/tokens.ts`
