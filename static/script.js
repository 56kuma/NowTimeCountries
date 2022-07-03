'use strict';

// 初期値設定
window.onload = function () {
    // Set Japan Date Time 
    let nowJapanDateTime = luxon.DateTime.local().setZone('utc').plus({ hours: 9 })
    document.getElementById("inputDateJapan").value = nowJapanDateTime.toFormat('yyyy-MM-dd');
    document.getElementById("dayJapan").value = nowJapanDateTime.setLocale('en').toFormat('EEE')
    document.getElementById("inputTimeJapan").value = nowJapanDateTime.toFormat('HH:mm')

    // Set New delhi Date Time
    let newdlhiDateTime = luxon.DateTime.local().setZone('utc').plus({ hours: 5.5 })
    document.getElementById("newdelhi_YYYYMMDD").value = newdlhiDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("newdelhi_day").value = newdlhiDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("newdelh_HHmm").value = newdlhiDateTime.toFormat('HH:mm');
  }

// Japan Date の変更を検知
function inputChange(){

    // Get Datetime at Japan
    let changedJapanDate = document.getElementById("inputDateJapan").value;
    let changedJapanTime = document.getElementById("inputTimeJapan").value;

    // Japan
    let changedJapanDateTime = luxon.DateTime.fromISO(changedJapanDate + 'T' + changedJapanTime )
    document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE')

    // New delhi 
    let changedNewdlhiDateTime = changedJapanDateTime.minus({hours: 3.5})
    document.getElementById("newdelhi_YYYYMMDD").value = changedNewdlhiDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("newdelhi_day").value = changedNewdlhiDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("newdelh_HHmm").value = changedNewdlhiDateTime.toFormat('HH:mm');

}


