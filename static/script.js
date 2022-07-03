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
    document.getElementById("newdelhi_HHmm").value = newdlhiDateTime.toFormat('HH:mm');

    // Set London Date Time
    let londonDateTime = luxon.DateTime.local().setZone('utc').plus({ hours: 1 })
    document.getElementById("london_YYYYMMDD").value = londonDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("london_day").value = londonDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("london_HHmm").value = londonDateTime.toFormat('HH:mm');

    // Set Texas Date Time
    let texasDateTime = luxon.DateTime.local().setZone('utc').minus({ hours: 5 })
    document.getElementById("texas_YYYYMMDD").value = texasDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("texas_day").value = texasDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("texas_HHmm").value = texasDateTime.toFormat('HH:mm');

    // Set Houston Date Time
    let houstonDateTime = luxon.DateTime.local().setZone('utc').minus({ hours: 6 })
    document.getElementById("houston_YYYYMMDD").value = houstonDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("houston_day").value = houstonDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("houstonHHmm").value = houstonDateTime.toFormat('HH:mm');

    // Set Seattle Date Time
    let seattleDateTime = luxon.DateTime.local().setZone('utc').minus({ hours: 7 })
    document.getElementById("seattle_YYYYMMDD").value = seattleDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("seattle_day").value = seattleDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("seattle_HHmm").value = seattleDateTime.toFormat('HH:mm');

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
    document.getElementById("newdelhi_HHmm").value = changedNewdlhiDateTime.toFormat('HH:mm');

    // London(+1h)
    let changedLondonDateTime = changedJapanDateTime.minus({hours: 8})
    document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

    // Texas(-5h)
    let changedTexasDateTime = changedJapanDateTime.minus({hours: 14})
    document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

    // // Houston(-6h)
    let changedHoustonDateTime = changedJapanDateTime.minus({hours: 15})
    document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

    // // Seattle(-7h)
    let changedSeattleDateTime = changedJapanDateTime.minus({hours: 16})
    document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');

}


