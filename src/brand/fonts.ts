// 載入 public/fonts/ 中的字體檔。
// 需要套件：npx remotion add @remotion/fonts
// 把字體檔放進 public/fonts/ 後，修改下面的檔名即可。

import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";
import { fonts } from "./theme";

const fontFiles = [
  { family: fonts.heading, file: "fonts/Heading-Bold.woff2", weight: "700" },
  { family: fonts.body, file: "fonts/Body-Regular.woff2", weight: "400" },
  { family: fonts.body, file: "fonts/Body-Medium.woff2", weight: "500" },
];

// 在 Root.tsx 最上方呼叫一次：loadBrandFonts();
export const loadBrandFonts = () =>
  Promise.all(
    fontFiles.map(({ family, file, weight }) =>
      loadFont({ family, url: staticFile(file), weight }).catch((err) => {
        console.warn(`字體載入失敗：${file}，將使用備援字體`, err);
      }),
    ),
  );
