// 品牌視覺設定：所有影片的顏色、字體、間距與動態風格都從這裡讀取。
// 請把下面的預設值改成你的品牌值，元件中不要寫死顏色或字體。

export const colors = {
  primary: "#2563EB", // 主色：標題強調、按鈕、重點
  secondary: "#F59E0B", // 輔助色：副標、點綴
  accent: "#10B981", // 強調色：數據、成功提示
  background: "#0F172A", // 預設背景
  surface: "#1E293B", // 卡片 / 區塊背景
  text: "#F8FAFC", // 主要文字
  textMuted: "#94A3B8", // 次要文字
  white: "#FFFFFF",
  black: "#000000",
} as const;

// 字體名稱需與 src/brand/fonts.ts 中 loadFont 的 family 一致
export const fonts = {
  heading: "BrandHeading", // 標題字體
  body: "BrandBody", // 內文字體
  // 尚未放入字體檔時的備援字體（中文優先）
  fallback: '"Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif',
} as const;

// 以 1080p 為基準的字級（px）
export const fontSizes = {
  hero: 120,
  title: 80,
  subtitle: 48,
  body: 36,
  caption: 28,
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const spacing = {
  safeMargin: 96, // 畫面安全邊距，文字與 Logo 不超出此範圍
  gap: 32,
  radius: 24,
} as const;

// 動態風格：統一轉場節奏與彈性
export const motion = {
  // spring() 的 config，damping 越高越穩、越不彈
  spring: { damping: 200, stiffness: 100, mass: 1 },
  enterFrames: 20, // 元素進場時長（影格）
  exitFrames: 15, // 元素退場時長（影格）
  sceneTransitionFrames: 15, // 場景轉場時長（影格）
} as const;

// 風格描述：給 AI / 協作者參考的文字指引
export const style = {
  tone: "簡潔、現代、專業", // 整體調性
  layout: "大量留白、置中或左對齊、一次只呈現一個重點",
  animation: "平順淡入與位移，避免過度彈跳與旋轉",
} as const;

export const theme = { colors, fonts, fontSizes, fontWeights, spacing, motion, style };
export default theme;
