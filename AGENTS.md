# 影片製作指引（給 Codex / AI 協作者）

這是 Remotion 影片專案。製作任何影片前，請先閱讀本檔案並遵守以下規則。

## 素材位置

所有靜態素材放在 `public/`，程式中一律用 `staticFile()` 讀取，例如 `staticFile("logos/logo.svg")`。

| 資料夾 | 用途 | 建議格式 |
| --- | --- | --- |
| `public/fonts/` | 品牌字體 | `.woff2`（優先）、`.ttf`、`.otf` |
| `public/logos/` | Logo（彩色、反白、單色等版本） | `.svg`（優先）、透明背景 `.png` |
| `public/images/` | 照片、插圖、背景圖 | `.png`、`.jpg`、`.webp` |
| `public/icons/` | 圖示 | `.svg` |
| `public/videos/` | 影片片段、B-roll | `.mp4`（H.264）、`.webm` |
| `public/audio/music/` | 背景音樂 | `.mp3`、`.wav` |
| `public/audio/sfx/` | 音效 | `.mp3`、`.wav` |

檔名規則：英文小寫、用 `-` 連接、不用空白或中文，例如 `logo-white.svg`、`intro-music.mp3`。

## 品牌設定

統一從 `src/brand` 引入，不要在元件中寫死數值：

```ts
import { colors, fonts, fontSizes, spacing, motion, formats, seconds } from "./brand";
```

- `src/brand/theme.ts`：顏色、字體、字級、間距、動態風格、整體調性
- `src/brand/fonts.ts`：載入 `public/fonts/` 的字體，在 `Root.tsx` 呼叫 `loadBrandFonts()`
- `src/brand/output.ts`：解析度、FPS、渲染參數

## 風格規則

- 文字與 Logo 必須在 `spacing.safeMargin` 安全邊距內
- `fontFamily` 寫成 `` `${fonts.heading}, ${fonts.fallback}` ``，確保中文正常顯示
- 動畫用 `spring({ config: motion.spring })` 或 `interpolate`，時長參考 `motion` 的影格數
- 一個畫面只呈現一個重點，保持大量留白
- 影片片尾預設顯示 Logo（`public/logos/` 中的主要 Logo）

## 輸出格式

| 名稱 | 解析度 | 用途 |
| --- | --- | --- |
| `formats.landscape`（預設） | 1920×1080 | YouTube、簡報 |
| `formats.vertical` | 1080×1920 | Reels、Shorts、TikTok |
| `formats.square` | 1080×1080 | 社群貼文 |

全部 30 fps、MP4（H.264）、CRF 18，輸出到 `out/`：

```bash
npx remotion render <CompositionId> out/<name>.mp4 --codec=h264 --crf=18
```
