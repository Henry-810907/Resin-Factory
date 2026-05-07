# Resin Factory — 树脂公仔定制工厂网站

基于 **Next.js 14 (App Router) + TypeScript + Tailwind CSS** 搭建的 B 端定制树脂公仔（Resin Figurines / Designer Toys / Statues）工厂网站。

域名：**resin-factory.com**

所有图片与 Logo 均使用占位框，框内中文标注了所需图片的推荐尺寸，方便后续替换为真实素材。

## 目录结构

```
resin-factory.com/
├── app/
│   ├── globals.css       # Tailwind 全局样式
│   ├── layout.tsx        # 根布局（含 SEO metadata）
│   ├── page.tsx          # 首页（组装所有区块）
│   ├── about/page.tsx    # 关于我们
│   ├── blog/page.tsx     # 博客
│   ├── contact/page.tsx  # 询盘表单 + 谷歌地图
│   ├── portfolio/page.tsx# 案例
│   ├── products/page.tsx # 产品类目
│   └── values/page.tsx   # 我们的承诺
├── components/
│   ├── Placeholder.tsx       # 通用占位框（中文尺寸标注）
│   ├── Header.tsx            # 顶部导航
│   ├── Hero.tsx              # 主视觉
│   ├── HeroCarousel.tsx      # 首页轮播
│   ├── FeaturedOn.tsx        # 媒体报道
│   ├── FactoryIntro.tsx      # 工厂车间介绍
│   ├── MagicalMemories.tsx   # 设计 → 公仔 故事
│   ├── BestSellers.tsx       # 客户作品标题区
│   ├── CustomersCarousel.tsx # 客户作品轮播
│   ├── MagicalCreations.tsx  # 用户作品墙
│   ├── WhyChooseUs.tsx       # 选择我们的 6 大理由
│   ├── OtherProducts.tsx     # 其他产品 + 其他品牌
│   ├── PageHero.tsx          # 子页面通用 banner
│   ├── CustomSelect.tsx      # 表单自定义下拉
│   └── Footer.tsx            # 页脚
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## macOS 终端运行指令

```bash
# 1. 进入项目目录
cd "/Users/jesse/Downloads/客户网站/resin-factory.com"

# 2. 安装依赖（首次运行需要）
npm install

# 3. 启动开发服务器
npm run dev

# 4. 浏览器访问
open http://localhost:3000
```

> 如果未安装 Node.js，请先执行：`brew install node`（需要 Node 18.17+）

## 生产构建

```bash
cd "/Users/jesse/Downloads/客户网站/resin-factory.com"
npm run build
npm run start
```

## 后续替换图片

把 `<Placeholder ... />` 替换为 `next/image` 即可，例如：

```tsx
import Image from "next/image";

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1300}
  height={800}
  className="w-full rounded-lg"
/>
```
