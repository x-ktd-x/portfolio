# 編集中
---
- 駆け出しエンジニアのポートフォリオサイトです。
<br>

## 開発動機
---
- 就活のためのポートフォリオを作りたかったので、まずは単純にページを表示するだけの簡単なアプリケーションを作成しました。
- webアプリケーション開発の工程をできる限り一通り自分で経験してみたかったのも動機の一つです。
  - デザイン、フロントエンド、バックエンド、インフラ
<br>

## 構成図
---
![Portfolio構成図面](https://user-images.githubusercontent.com/53157210/222747028-c057c125-eeab-47a1-82aa-ca9681e99a47.png)
<br>
<br>

## 開発環境
---
- PC：macOS Monterey
- エディタ：Visual Studio Code
<br>

## 開発の手順
---
1. まずは「web制作ってそもそもどんな工程を踏むのだろう？」という疑問があったので調べました。
   - 特に参考にさせて頂いたページ⇨(https://nana-tsu.jp/pre/805/)
2. デザイン
   - ロゴ等のデザインはAdobe Illustrator、全体のデザインはAdobe XDを通じて行いました。
   - 初めにロゴを作り、ロゴの雰囲気に合わせた細い直線と矩形で構成されたデザインにしました。
   - 背景は直線が映える三色のグラデーションで構成しています。
   - 基本的に8の倍数pxでデザインしました。
   - レスポンシブ対応で、ブレイクポイントは888pxです。設定理由としてはタブレットをスマホ表示にして8の倍数かつ覚えやすいゾロ目にするためです。
   - ピクセルパーフェクトは想定していません。
   - 初期デザイン案([portfolio.pdf](https://github.com/x-ktd-x/portfolio/files/10883265/portfolio.pdf))からフロントエンドのコーディング作業中に変更を重ねています。
3. フロントエンド
   - HTML,CSS,JavaScriptで構成しています。
   - VSCodeのLiveServerとChromeの開発ツールを使用しながら開発しました。
   - CSSのプロパティはVSCodeの拡張機能CSSCombを使用して揃えています。
   - JSのシャッフルテキストのライブラリはこちらを使用させていただきました⇨(https://ics.media/entry/15498/)
4. バックエンド
   - Django + Gunicorn + Nginxのよくある構成です。
   - Python3.8、Django4.1、Gunicorn20.1、Nginx1.18を使用しています。
   - サーバーはコスパを考えてAmazon Lightsailを使用しています。OSはUbuntu20.04です。
   - テストサーバーは使わなくなった自宅PCにUbuntu20.04を入れてサーバー化したものを使用しています。
   - ドメインはAmazon Route53で取得したものを使用しています。
   - SSL証明書発行はCertbotを通じてLet's Encryptから、自動更新はcronを通じて行っています。
<br>

## 反省点
---
- ページ数が少なかったため作業の手間を考えてDjangoのテンプレート継承機能を使用していませんでしたが、後々のことを考えると使った方がよかったなと反省しています。
- そんなに複雑なデザインではなかったので「⌘ + F」でワード検索しながらいけるやろ…と思っていましたが普通に管理し辛かったのでCSSにベタ書きではなくSassを使うべきだったと反省しています。
<br>

## 今後の展望
---
- OpenAIのAPIを使って何か面白いDjangoアプリケーションができないかなと思いながら色々いじってみています。
- 
