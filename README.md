# Sweet Delight - Cafe Landing Page

## 概要

デイトラ Web制作コース 初級編で制作した、架空カフェ「Sweet Delight」のランディングページです。

Figmaで作られたデザインカンプをもとに、HTML / CSS を使用してコーディングを行いました。

PC・タブレット・スマートフォンに対応したレスポンシブデザインを実装し、視認性・余白設計・タイポグラフィを意識して制作しています。

シンプルにデイトラの課題を模写するのではなく、JavaScript（jQuery）を使ってスクロールイベントや要素をクリックしたときのインタラクションも実装しています。

JavaScriptの実装についてはデイトラの課題となっていましたが、独自に実装したコードを反映させています。（課題の趣旨にしたがって jQuery にて実装しています。）

---

## 動作確認

### GitHub Pages

https://corekaraweb.github.io/daytra_shokyuu01/

---

## スクリーンショット

### PC

![PC Screenshot](./screenshot_pc.png)

### Mobile

![Mobile Screenshot](./screenshot_sp.png)

---

## 実装した機能

- レスポンシブ対応
- ファーストビューのビジュアル設計
- フレックスボックス を用いたレイアウト構築
- hoverアニメーション
- セクション単位でのコンポーネント化を意識したHTML構造
- JavaScript（jQuery）を利用した動的な表現（ドロップダウンメニュー・ライトボックス・スクロールトップ）

---

## 技術スタック

| カテゴリー         | 技術                |
| ------------------ | ------------------- |
| マークアップ       | HTML5               |
| スタイリング       | CSS3                |
| フトントエンド     | JavaScript / jQuery |
| レイアウト         | Flexbox             |
| マルチデバイス対応 | Media Queries       |
| バージョン管理     | Git / GitHub        |
| デプロイ           | GitHub Pages        |

---

## レスポンシブ対応について

以下のブレークポイントを基準にレスポンシブ対応を行っています。

```css
@media screen and (max-width: 768px);
```

スマートフォン表示では、

- ナビゲーション配置
- 画像サイズ
- 余白
- フォントサイズ
- セクション間隔

を調整し、モバイル環境でも視認性が維持されるよう実装しています。

---

## ディレクトリ・ファイル構造

```bash
.
├── index.html
├── css
│   ├── style.css
│   ├── style-bk.css
│   ├── reset.css
│   └── reset-bk.css
├── js
│   └── script.js
├── images
├── LICENSE.txt
├── favicon.ico
├── screenshot_pc.png
├── screenshot_sp.png
└── README.md
```

---

## 重要視したポイント

### UI / UX

ファーストビューでは、商品のシズル感が伝わるビジュアルを全面に配置し、ブランドイメージを印象づける構成にしています。

また、余白・文字サイズ・視線誘導を意識し、シンプルながらも読みやすいレイアウトを目指しました。

### レスポンシブ対応について

スマートフォン表示では縦積みレイアウトへ変更し、画像とテキストのバランスが崩れないよう調整しています。

### Coding

HTMLのセマンティクスを意識し、

- header（ヘッダー）
- fv(ファーストビュー)
- section（コンテンツ）
- footer（フッター）

など適切なタグを使用しています。

CSSでは保守性を考慮し、セクションごとにスタイルを整理しています。

---

## 今後の改善点

- CSS設計（FLOCSS/BEM）の改善
- アクセシビリティ改善
- Lighthouse スコア改善

---

## この課題で学べたこと

本制作を通して、以下を学習しました。

- レスポンシブWebデザイン
- HTML/CSSによるLPコーディング
- デザインカンプの再現
- JavaScirpt（jQuery）によるイベントの実装
- Git/GitHubを用いたバージョン管理
- GitHub Pagesによるデプロイ

---

## 制作者

らぐち（村上英輝）

- GitHub: https://github.com/corekaraweb/
