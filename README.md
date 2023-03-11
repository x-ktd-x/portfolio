## 概要
---
- ポートフォリオサイト（https://x-ktd-x.com/）のソースコードです。
<br>

## 開発動機
---
- **就活のため**、手始めにページを表示するだけの簡単なアプリケーションを作成しました。
- **webアプリケーション開発の工程をできる限り一通り自分で経験してみたかった**のも動機の一つです。
<br>

## 構成図
---
![Portfolio構成図面](https://user-images.githubusercontent.com/53157210/222891021-e7e2ff38-a385-4dd4-9969-4ef5af740f55.png)
<br>
<br>

## 開発環境
---
- PC：macOS Monterey
- エディタ：Visual Studio Code
<br>

## 開発の手順
---
1. **準備**
   - まずは「**web制作ってそもそもどんな工程を踏むのだろう？**」という疑問があったので調べました。
   - 参考にさせて頂いたページ⇨(https://nana-tsu.jp/pre/805/)
2. **デザイン**
   - ロゴ等のデザインは**Adobe Illustrator**、全体のデザインは**Adobe XD**を使用して行いました。
   - 初めにロゴを作り、ロゴの雰囲気に合わせた細い直線と矩形で構成されたデザインにしました。
   - 背景は直線が映える三色のグラデーションで構成しています。
   - 基本的に**8の倍数px**でデザインしました。
   - **レスポンシブ対応**で、ブレイクポイントは**888px**です。設定理由としては**タブレットをスマホ表示**にして**8の倍数かつ覚えやすいゾロ目**にするためです。
   - ピクセルパーフェクトは想定していません。
   - **初期デザイン案**([portfolio.pdf](https://github.com/x-ktd-x/portfolio/files/10883265/portfolio.pdf))からフロントエンドのコーディング作業中に変更を重ねています。
3. **フロントエンド**
   - **HTML,CSS,JavaScript**で構成しています。
   - VSCodeの**LiveServer**と**Chromeの開発ツール**を使用しながら開発しました。
   - CSSのプロパティはVSCodeの拡張機能**CSSComb**を使用して揃えています。
   - JSのシャッフルテキストのライブラリはこちらを使用させていただきました⇨(https://ics.media/entry/15498/)
4. **バックエンド、インフラ**
   - **Django + Gunicorn + Nginx**のよくある構成です。
   - **Python3.8、Django4.1、Gunicorn20.1、Nginx1.18**を使用しています。
   - サーバーはコスパを考えて**Amazon Lightsail**を使用しています。OSは**Ubuntu20.04**です。
   - テストサーバーは使わなくなった自宅PCにUbuntu20.04を入れてサーバー化したものを使用しました。
   - ドメインは**Amazon Route53**で取得したものを使用しています。
   - SSL証明書発行は**Certbot**を通じて**Let's Encrypt**から、自動更新は**cron**を通じて行っています。
<br>

## 反省点
---
- ページ数が少なかったため作業の手間を考えてDjangoの**テンプレート継承機能**を使用していませんでしたが、後々のことを考えると使った方がよかったかもしれない…と反省しています。
- そんなに複雑なデザインではなかったので「⌘ + F」でワード検索しながら…と思っていましたが管理し辛かったので、CSSにベタ書きではなく**Sassを使うべきだった**と反省しています。
<br>

## 今後の展望
---
- **OpenAIのAPI**を活用して何か面白いアプリが作れないかなと思いながら色々いじっているので何かしら実装したいです。
- **Next.js + microCMS + Vercel**で**ブログ**を作成しようかなと考えています。
  - その際は積極的な開発が終了したXDの代わりに**Figma**を使ってデザインしようと考えています。
