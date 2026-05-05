import React from "react";

type PlaceholderProps = {
  /** 推荐图片宽度(像素) */
  width?: number;
  /** 推荐图片高度(像素) */
  height?: number;
  /** 用途说明,例如 "Logo"、"Hero 主图" */
  label?: string;
  /** 自定义样式类(可控制圆角、外层尺寸等) */
  className?: string;
  /** 是否圆形 */
  circle?: boolean;
  /** 背景色级别 */
  tone?: "light" | "dark";
};

/**
 * 占位框组件:在图片就绪前显示一个带尺寸标注的虚线方框。
 * 框内文字使用中文,提示设计师/前端所需图片的推荐尺寸。
 */
export default function Placeholder({
  width,
  height,
  label,
  className = "",
  circle = false,
  tone = "light",
}: PlaceholderProps) {
  const sizeText =
    width && height ? `推荐尺寸:${width}×${height}px` : "推荐尺寸:待定";

  const bg = tone === "dark" ? "bg-slate-200" : "bg-slate-100";
  const border = "border-2 border-dashed border-slate-400";
  const radius = circle ? "rounded-full" : "rounded-lg";

  return (
    <div
      className={`${bg} ${border} ${radius} flex items-center justify-center text-center px-3 py-2 text-slate-500 ${className}`}
      role="img"
      aria-label={label ? `${label} 占位` : "图片占位"}
    >
      <div className="leading-tight">
        {label && (
          <div className="font-semibold text-slate-600 text-sm md:text-base">
            {label}
          </div>
        )}
        <div className="text-[11px] md:text-xs mt-1">{sizeText}</div>
      </div>
    </div>
  );
}
