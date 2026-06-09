---
name: Neo Brutalism - 高平个人品牌
description: 从个人网站提取的 Neo Brutalism 设计令牌，用于视频创作
---

## 色彩

| 令牌 | 色值 | 用途 |
|------|------|------|
| bg | `#FFFDF5` | 页面背景（暖白） |
| surface | `#FFFFFF` | 卡片/表面 |
| fg | `#111111` | 主文字/边框 |
| muted | `#5C5C5C` | 次要文字 |
| accent-yellow | `#FFD600` | 主强调色（高亮、CTA 背景） |
| accent-blue | `#2F5EEB` | 蓝色强调（链接、次要高亮） |
| accent-coral | `#FF5E3A` | 珊瑚色强调 |
| accent-green | `#00C853` | 绿色强调 |
| accent-purple | `#7C3AED` | 紫色强调 |
| accent-pink | `#FF2D78` | 粉色强调 |
| white | `#FFFFFF` | 纯白 |

## 排版

| 用途 | 字体 | 字重 | 特征 |
|------|------|------|------|
| 标题/展示 | Impact, Arial Black, sans-serif | 900 | 全大写、负字间距、极粗 |
| 正文 | system-ui, PingFang SC, Microsoft YaHei | 400-700 | 中文优化 |
| 等宽/数据 | JetBrains Mono, Fira Code | 400-700 | 表格数字 |

## 边框与圆角

- 边框: 2px solid #111111（所有元素统一）
- 圆角: 2px-4px（极小，接近直角）

## 阴影

- 硬阴影 (hard-sm): `3px 3px 0 #111111`（卡片默认）
- 硬阴影 (hard): `4px 4px 0 #111111`
- 悬停阴影 (hover): `6px 6px 0 #111111`
- 无模糊、纯色、右下偏移

## 间距密度

- xs: 8px / sm: 12px / md: 20px / lg: 32px / xl: 56px / 2xl: 96px

## 视频适配规则

- 背景色用于大面积区域，不用于小元素
- 黄色 `#FFD600` 是品牌识别色，在视频中保持突出
- 黑色 `#111111` 作为边框色和前景色，保持高对比度
- 阴影效果在视频中用 CSS box-shadow 或模拟图层偏移实现
- 字体回退：视频渲染环境可能没有 Impact，回退到 Arial Black 或系统粗体
- 中文字体回退到系统默认黑体

## 禁止事项

- 不要使用模糊阴影或柔和阴影
- 不要使用圆角 > 4px
- 不要使用渐变背景（用纯色或径向光晕代替）
- 不要使用半透明叠加（用实色边框或纯色块）
- 不要使用细字体（保持 700+ 字重）
- 不要引入网站调色板之外的颜色