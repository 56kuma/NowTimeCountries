# Now Time Countries

世界各国の現在時刻を表示し、タイムゾーン変換ができるWebアプリケーションです。

## 機能

### Now Time タブ
- 6カ国の現在時刻をリアルタイムで表示
  - 日本 (UTC+9)
  - ニューデリー (UTC+5.5)
  - ロンドン (UTC+1)
  - テキサス (UTC-5)
  - ヒューストン (UTC-6)
  - シアトル (UTC-7)
- Reloadボタンで時刻を更新

### Specified Time タブ
- 日本時間を入力すると、他の国の対応する日時・曜日を自動計算
- 海外との会議調整などに便利

## 技術スタック

- **バックエンド**: Flask 2.1.0 (Python 3.9)
- **フロントエンド**: HTML5, JavaScript, Luxon.js 2.4.0
- **CSSフレームワーク**: Bootstrap 5.0.2
- **デプロイ**: Google App Engine

## プロジェクト構成

```
NowTimeCountries/
├── main.py              # Flaskアプリケーション
├── requirements.txt     # Python依存関係
├── app.yaml            # Google App Engine設定
├── templates/
│   └── index.html      # メインテンプレート
└── static/
    ├── script.js       # フロントエンドロジック
    └── style.css       # スタイル
```

## ローカル環境での実行

```bash
# 依存関係のインストール
pip install -r requirements.txt

# 開発サーバーの起動
python main.py
```

http://127.0.0.1:8000 でアプリケーションにアクセスできます。

## デプロイ

Google App Engineへのデプロイ:

```bash
gcloud app deploy
```

## ライセンス

MIT
