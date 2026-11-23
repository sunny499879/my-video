// 輸出格式設定：在 Root.tsx 的 <Composition> 中使用，例如
// <Composition id="Main" component={Main} {...formats.landscape} durationInFrames={30 * 10} />

export const FPS = 30;

export const formats = {
  landscape: { width: 1920, height: 1080, fps: FPS }, // 16:9 YouTube / 簡報
  vertical: { width: 1080, height: 1920, fps: FPS }, // 9:16 Reels / Shorts / TikTok
  square: { width: 1080, height: 1080, fps: FPS }, // 1:1 貼文
} as const;

export const DEFAULT_FORMAT = formats.landscape;

// 秒數轉影格
export const seconds = (s: number) => Math.round(s * FPS);

// 渲染設定（對應 npx remotion render 參數）
export const render = {
  codec: "h264", // MP4 (H.264)
  crf: 18, // 畫質：數字越小越好、檔案越大
  pixelFormat: "yuv420p", // 相容性最佳
  audioCodec: "aac",
  outputDir: "out", // 輸出到 out/
} as const;
