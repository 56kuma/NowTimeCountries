# moment.js -> Luxon.js

## [X] 動的に曜日を取得

* [X] 列を作成（day）
* [X] コンソール画面に曜日を表示
  * script.js
  * dynamic display.
  * 曜日取得用のCDNを追加
  * 以下コマンドで取得できた
    * moment().format("dddd");
* [X] Japan default に曜日表示
* [X] 曜日は英語で表示
* [X] 曜日の表示列はNG

## ★, moment.js は使わないほうが良い

* https://momentjs.com/docs/#/-project-status/

### 置き換え moment.js -> Luxon

#### [X] CDNを適用、console.log()で現在時刻を表示
  * CDN用のLINKは公式Documentにあり

#### [X] 日本時間初期表示を置き換え
* 取得値の確認

``` Javascript
// 現在日時
luxon.DateTime.local().toFormat('yyyy/MM/dd')
> '2022/07/03'

// 曜日
luxon.DateTime.local().setLocale('ja').toFormat('EEEE')
> '日曜日'
luxon.DateTime.local().setLocale('en').toFormat('EEEE')
> 'Sunday'
luxon.DateTime.local().setLocale('en').toFormat('EEE')
> 'Sun'

// 時分
luxon.DateTime.local().toFormat('HH:mm')
> 'HH:mm'
```

#### [X] ニューデリ時間、初期表示を置き換え
* New delhi は日本時間 -3.5
* UTC Time に +5.5

```Javascript
// Get Utc Time
luxon.DateTime.local().setZone('utc')

// これはOK
luxon.DateTime.local().setZone('utc+5')

// これはNG
luxon.DateTime.local().setZone('utc+5.5')

// + hour
luxon.DateTime.local().setZone('utc').plus({ hours: 5.5 })

// - hour
luxon.DateTime.local().setZone('utc').minus({ hours: 5.5 })

```

## [X] 動的表示を変更 to Luxon.js

* 取得コマンド
  * ISOってなんだ？
    * ISO8601 -> 書式
    * yyyy-MM-ddTHH:mm:ss
      * T記号で挟む必要あり。

```Javascript
// 年月日
luxon.DateTime.fromISO('2022-07-06')
// 年月日時分
luxon.DateTime.fromISO('2022-07-06T17:32')
```








