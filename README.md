# Custom Plush — 毛绒玩具定制网站

基于 **Next.js 14 (App Router) + TypeScript + Tailwind CSS** 搭建的 B 端定制毛绒玩具网站。

所有图片与 Logo 均使用占位框,框内中文标注了所需图片的推荐尺寸,方便后续替换为真实素材。

## 目录结构

```
custom-plush/
├── app/
│   ├── globals.css      # Tailwind 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页(组装所有区块)
├── components/
│   ├── Placeholder.tsx     # 通用占位框(中文尺寸标注)
│   ├── Header.tsx          # 顶部导航
│   ├── Hero.tsx            # 主视觉
│   ├── FeaturedOn.tsx      # 媒体报道
│   ├── MagicalMemories.tsx # Magical Memories
│   ├── BestSellers.tsx     # 最佳销售
│   ├── MagicalCreations.tsx# 用户作品墙
│   ├── PalsProgram.tsx     # 公益项目
│   ├── OtherProducts.tsx   # 其他产品 + 其他品牌
│   └── Footer.tsx          # 页脚
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## macOS 终端运行指令

```bash
# 1. 进入项目目录
cd "/Users/jesse/Documents/client-sites/自己的网站/custom-plush"

# 2. 安装依赖(首次运行需要)
npm install

# 3. 启动开发服务器
npm run dev

# 4. 浏览器访问
open http://localhost:3000
```

> 如果未安装 Node.js,请先执行:`brew install node`(需要 Node 18.17+)

## 后续替换图片

把 `<Placeholder ... />` 替换为 `next/image` 即可,例如:

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
