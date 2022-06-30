# 構想

* ver 1.0
  * 日本とヒューストンの現在時刻がわかるアプリを作る
  * 日本
  * ヒューストン
  * シアトル
  * テキサス
  * ロンドン

## 名づけとか

* タイトル  ：Time Standard is Japan and Others
* 環境      ：Google App Engine
* 言語      ：Python

## 作業ログ

* [X] gcloud SDK　インストール
  * [手順（公式LINK）](https://cloud.google.com/sdk/docs/install?hl=ja)
  * インストール確認
  * [X] インストール後の初期化
    * gcloud init ?
      * 認証設定    -> 完了
      * app engine, 選択肢1を選んだら、 「No Setting default zone/region ... 」でエラー。

* [X] App Engine の有効化
  * リージョン … asia-northeast1
  * サービスアカウント … 特に設定は無かった。

* [X] デプロイ用のプログラムを作成
  * 4ファイル分作成

* [X] デプロイ -> 途中終了
  * "project"ディレクトリに移動
  * gcloud app deploy
    * ここでエラー発生
      * INVALID_ARGUMENT: The first service (module) you upload to a new application must be the 'default' service (module)
      * 一旦サンプルプロジェクトから始める

* [X] サンプルプロジェクトを起動
  * sampleフォルダを作成
  * [クイックスタート](https://cloud.google.com/appengine/docs/standard/python3/create-app?hl=ja)を参照
    * [X] プロジェクトを作成  -> sample
    * [X] 対象プロジェクトの課金有効化確認
    * [X] Google Cloud CLI　をインストール & 初期化
    * projectid = eco-analog-350314
    * 実行
      * gcloud app create --project=eco-analog-350314
      * region
        *  [3] asia-northeast1 (supports standard and flexible and search_api)
    * Hello Worldアプリをインストール
      * git clone ...
    * サンプルコードが含まれている
    * venv環境作成
    * activate venv
    * ローカル実行確認
    * App Engineにデプロイ
      * ここでエラー
        * ERROR: (gcloud.app.deploy) Error Response: [13] An internal error occurred while creating a Google Cloud Storage bucket.
        * コンポーネントをインストールしてみる
          * エラーは変わらず


## 現状エラー　▶ 6/4 解決
```
D:\m_my_project\01_TimeStandardJapan\python-docs-samples\appengine\standard_python3\hello_world>gcloud app deploy
Initializing App Engine resources...failed.
ERROR: (gcloud.app.deploy) Error Response: [13] An internal error occurred while creating a Google Cloud Storage bucket.
```
* ▶ 解決。memo_GCP_AppEngine_Guide.md , 1~3 を参照
  * Google Build API を有効化していなかったのが問題かね。


## Development

### Deploy Command
``` cmd
gcloud app deploy --project=eco-analog-350314
```

### Work Log
* Jinja2（フレームワーク）を試用

* [X] Add NowTime at Japan
  * [X] 複数の文字列を渡す
  * [X] ローカル起動でチェック、F5クリックで更新されるか？
  * [X] check after deploy,
    * 日本は9時間前が表示された。
    * [X] 9時間を足して再度表示
