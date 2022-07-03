import datetime

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def root():
    dt_now = datetime.datetime.now()

    year = dt_now.strftime('%Y')

    # 日本（+9h）
    japan_time = (dt_now + datetime.timedelta(hours=9)).strftime('%m/%d %H:%M') 

    # ニューデリー（+5.5h）
    new_delhi_time = (dt_now + datetime.timedelta(hours=5.5)).strftime('%m/%d %H:%M') 

    # ロンドン（+1h）
    london_time = (dt_now + datetime.timedelta(hours=1)).strftime('%m/%d %H:%M')

    # テキサス（-5h）
    texas_time = (dt_now + datetime.timedelta(hours=-5)).strftime('%m/%d %H:%M')

    # ヒューストン（-6h）
    houston_time = (dt_now + datetime.timedelta(hours=-6)).strftime('%m/%d %H:%M')

    # シアトル（-7h）
    seattle_time = (dt_now + datetime.timedelta(hours=-7)).strftime('%m/%d %H:%M')

    return render_template('index.html',
                            yearNow=year,
                            japanTime=japan_time,
                            newdelhiTime=new_delhi_time,
                            londonTime=london_time,
                            texasTime=texas_time,
                            houstonTime=houston_time,
                            seattleTime=seattle_time)

if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='127.0.0.1', port=8000, debug=True)