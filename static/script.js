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
    document.getElementById("houston_HHmm").value = houstonDateTime.toFormat('HH:mm');

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

    // Japan(+9h)
    let changedJapanDateTime = luxon.DateTime.fromISO(changedJapanDate + 'T' + changedJapanTime )
    document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE')

    // New delhi(+5.5h) 
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


// New Delhi の変更を検知
function inputChangeNewDelhi(){

  // Get Datetime at New Delhi
  let changedNewDelhiDate = document.getElementById("newdelhi_YYYYMMDD").value;
  let changedNewDelhiTime = document.getElementById("newdelhi_HHmm").value;

  let changedNewDelhiDateTime = luxon.DateTime.fromISO(changedNewDelhiDate + 'T' + changedNewDelhiTime)

  // Japan(+9h)
  let changedJapanDateTime = changedNewDelhiDateTime.plus({hours:3.5});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');

  // London(+1h)
  let changedLondonDateTime = changedNewDelhiDateTime.minus({hours:4.5})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Texas(-5h)
  let changedTexasDateTime = changedNewDelhiDateTime.minus({hours:10.5})
  document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

  // // // Houston(-6h)
  let changedHoustonDateTime = changedNewDelhiDateTime.minus({hours:11.5})
  document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

  // Seattle(-7h)
  let changedSeattleDateTime = changedNewDelhiDateTime.minus({hours:12.5})
  document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');
}

// London
function inputChangeLondon(){
  // Get Datetime at London
  let changedLondonDate = document.getElementById("london_YYYYMMDD").value;
  let changedLondonTime = document.getElementById("london_HHmm").value;

  let changedLondonDateTime = luxon.DateTime.fromISO(changedLondonDate + 'T' + changedLondonTime)

  // Japan(+9h)
  let changedJapanDateTime = changedLondonDateTime.plus({hours:8});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  let changedNewDelhiDateTime = changedLondonDateTime.plus({hours:4.5});
  document.getElementById("newdelhi_YYYYMMDD").value = changedNewDelhiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("newdelhi_HHmm").value = changedNewDelhiDateTime.toFormat('HH:mm');

  // London(+1h)
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');

  // Texas(-5h)
  let changedTexasDateTime = changedLondonDateTime.minus({hours:6})
  document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

  // Houston(-6h)
  let changedHoustonDateTime = changedLondonDateTime.minus({hours:7})
  document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

  // Seattle(-7h)
  let changedSeattleDateTime = changedLondonDateTime.minus({hours:8})
  document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');

}

// Texas
function inputChangeTexas(){
  // Get Datetime at Texas
  let changedTexasDate = document.getElementById("texas_YYYYMMDD").value;
  let changedTexasTime = document.getElementById("texas_HHmm").value;

  let changedTexasDateTime = luxon.DateTime.fromISO(changedTexasDate + 'T' + changedTexasTime)

  // Japan(+9h)
  let changedJapanDateTime = changedTexasDateTime.plus({hours:14});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  let changedNewDelhiDateTime = changedTexasDateTime.plus({hours:10.5});
  document.getElementById("newdelhi_YYYYMMDD").value = changedNewDelhiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("newdelhi_HHmm").value = changedNewDelhiDateTime.toFormat('HH:mm');

  // London(+1h)
  let changedLondonDateTime = changedTexasDateTime.plus({hours:6})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Texas(-5h)
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');

  // Houston(-6h)
  let changedHoustonDateTime = changedTexasDateTime.minus({hours:1})
  document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

  // Seattle(-7h)
  let changedSeattleDateTime = changedTexasDateTime.minus({hours:2})
  document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');

}

// Houston
function inputChangeHouston(){

  // Get Datetime at Houston
  let changedHoustonDate = document.getElementById("houston_YYYYMMDD").value;
  let changedHoustonTime = document.getElementById("houston_HHmm").value;

  let changedHoustonDateTime = luxon.DateTime.fromISO(changedHoustonDate + 'T' + changedHoustonTime)

  // Japan(+9h)
  let changedJapanDateTime = changedHoustonDateTime.plus({hours:15});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  let changedNewDelhiDateTime = changedHoustonDateTime.plus({hours:11.5});
  document.getElementById("newdelhi_YYYYMMDD").value = changedNewDelhiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("newdelhi_HHmm").value = changedNewDelhiDateTime.toFormat('HH:mm');

  // London(+1h)
  let changedLondonDateTime = changedHoustonDateTime.plus({hours:7})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Texas(-5h)
  let changedTexasDateTime = changedHoustonDateTime.plus({hours:1})
  document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

  // Houston(-6h)
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');

  // Seattle(-7h)
  let changedSeattleDateTime = changedHoustonDateTime.minus({hours:1})
  document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');

}

// Seattle
function inputChangeSeattle(){

  // Get Datetime at Houston
  let changedSeattleDate = document.getElementById("seattle_YYYYMMDD").value;
  let changedSeattleTime = document.getElementById("seattle_HHmm").value;

  let changedSeattleDateTime = luxon.DateTime.fromISO(changedSeattleDate + 'T' + changedSeattleTime)

  // Japan(+9h)
  let changedJapanDateTime = changedSeattleDateTime.plus({hours:16});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  let changedNewDelhiDateTime = changedSeattleDateTime.plus({hours:12.5});
  document.getElementById("newdelhi_YYYYMMDD").value = changedNewDelhiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("newdelhi_HHmm").value = changedNewDelhiDateTime.toFormat('HH:mm');

  // London(+1h)
  let changedLondonDateTime = changedSeattleDateTime.plus({hours:8})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Texas(-5h)
  let changedTexasDateTime = changedSeattleDateTime.plus({hours:2})
  document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

  // Houston(-6h)
  let changedHoustonDateTime = changedSeattleDateTime.plus({hours:1})
  document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

  // Seattle(-7h)
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');

}

