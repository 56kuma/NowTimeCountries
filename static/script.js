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

    // Set Germany Date Time
    let germanyDateTime = luxon.DateTime.local().setZone('utc').plus({ hours: 2 })
    document.getElementById("germany_YYYYMMDD").value = germanyDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("germany_day").value = germanyDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("germany_HHmm").value = germanyDateTime.toFormat('HH:mm');

    // Set Germany Date Time
    let spainDateTime = luxon.DateTime.local().setZone('utc').plus({ hours: 2 })
    document.getElementById("spain_YYYYMMDD").value = spainDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("spain_day").value = spainDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("spain_HHmm").value = spainDateTime.toFormat('HH:mm');
    
    // Set London Date Time
    let londonDateTime = luxon.DateTime.local().setZone('utc').plus({ hours: 1 })
    document.getElementById("london_YYYYMMDD").value = londonDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("london_day").value = londonDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("london_HHmm").value = londonDateTime.toFormat('HH:mm');

    // Set Washington, D.C. Date Time
    let washingtonDateTime = luxon.DateTime.local().setZone('utc').minus({ hours: 4 })
    document.getElementById("washington_YYYYMMDD").value = washingtonDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("washington_day").value = washingtonDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("washington_HHmm").value = washingtonDateTime.toFormat('HH:mm');

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

    // Set Hawaii Date Time
    let hawaiiDateTime = luxon.DateTime.local().setZone('utc').minus({ hours: 10 })
    document.getElementById("hawaii_YYYYMMDD").value = hawaiiDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("hawaii_day").value = hawaiiDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("hawaii_HHmm").value = hawaiiDateTime.toFormat('HH:mm');

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

    // Germany(+2h)
    let changedGermanyDateTime = changedJapanDateTime.minus({hours: 7})
    document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');

    // Spain(+2h)
    let changedSpainDateTime = changedJapanDateTime.minus({hours: 7})
    document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');

    // London(+1h)
    let changedLondonDateTime = changedJapanDateTime.minus({hours: 8})
    document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

    // Washington, D.C.(-4h)
    let changedWashingtonDateTime = changedJapanDateTime.minus({hours: 13})
    document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');

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

    // Hawaii(-10h)
    let changedHawaiiDateTime = changedJapanDateTime.minus({hours:19})
    document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
    document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
    document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');

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

  // Germany(+2h)
  let changedGermanyDateTime = changedNewDelhiDateTime.minus({hours:3.5})
  document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');

  // Spain(+2h)
  let changedSpainDateTime = changedNewDelhiDateTime.minus({hours: 3.5})
  document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');

  // London(+1h)
  let changedLondonDateTime = changedNewDelhiDateTime.minus({hours:4.5})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Washington, D.C.(-4h)
  let changedWashingtonDateTime = changedNewDelhiDateTime.minus({hours: 9.5})
  document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');

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

  // Hawaii(-10h)
  let changedHawaiiDateTime = changedNewDelhiDateTime.minus({hours:15.5})
  document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');

}


// Germanyの変更を検知
function inputChangeGermany(){
  // Get Datetime at Germany
  let changedGermanyDate = document.getElementById("germany_YYYYMMDD").value;
  let changedGermanyTime = document.getElementById("germany_HHmm").value;

  let changedGermanyDateTime = luxon.DateTime.fromISO(changedGermanyDate + 'T' + changedGermanyTime)

  // Japan(+9h)
  let changedJapanDateTime = changedGermanyDateTime.plus({hours:7});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  let changedNewDelhiDateTime = changedGermanyDateTime.plus({hours:3.5});
  document.getElementById("newdelhi_YYYYMMDD").value = changedNewDelhiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("newdelhi_HHmm").value = changedNewDelhiDateTime.toFormat('HH:mm');

  // Germany(+2h)
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  
  // Spain(+2h)
  let changedSpainDateTime = changedGermanyDateTime
  // let changedSpainDateTime = changedGermanyDateTime.plus({hours:0});
  document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');
  
  // London(+1h)
  let changedLondonDateTime = changedGermanyDateTime.minus({hours:4.5})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Washington, D.C.(-4h)
  let changedWashingtonDateTime = changedGermanyDateTime.minus({hours: 5})
  document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');

  // Texas(-5h)
  let changedTexasDateTime = changedGermanyDateTime.minus({hours:6})
  document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

  // Houston(-6h)
  let changedHoustonDateTime = changedGermanyDateTime.minus({hours:7})
  document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

  // Seattle(-7h)
  let changedSeattleDateTime = changedGermanyDateTime.minus({hours:8})
  document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');

  // Hawaii(-10h)
  let changedHawaiiDateTime = changedGermanyDateTime.minus({hours:11})
  document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');

}

// Spainの変更を検知
function inputChangeSpain(){
  // Get Datetime at Spain
  let changedSpainDate = document.getElementById("spain_YYYYMMDD").value;
  let changedSpainTime = document.getElementById("spain_HHmm").value;

  let changedSpainDateTime = luxon.DateTime.fromISO(changedSpainDate + 'T' + changedSpainTime)

  // Japan(+9h)
  let changedJapanDateTime = changedSpainDateTime.plus({hours:7});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  let changedNewDelhiDateTime = changedSpainDateTime.plus({hours:3.5});
  document.getElementById("newdelhi_YYYYMMDD").value = changedNewDelhiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("newdelhi_HHmm").value = changedNewDelhiDateTime.toFormat('HH:mm');

  // Germany(+2h)
  let changedGermanyDateTime = changedSpainDateTime
  document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');
  
  // Spain(+2h)
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  
  // London(+1h)
  let changedLondonDateTime = changedSpainDateTime.minus({hours:1})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Washington, D.C.(-4h)
  let changedWashingtonDateTime = changedSpainDateTime.minus({hours: 5})
  document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');
  
  // Texas(-5h)
  let changedTexasDateTime = changedSpainDateTime.minus({hours:6})
  document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

  // Houston(-6h)
  let changedHoustonDateTime = changedSpainDateTime.minus({hours:7})
  document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

  // Seattle(-7h)
  let changedSeattleDateTime = changedSpainDateTime.minus({hours:8})
  document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');

  // Hawaii(-10h)
  let changedHawaiiDateTime = changedSpainDateTime.minus({hours:11})
  document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');
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

  // Germany(+2h)
  let changedGermanyDateTime = changedLondonDateTime.plus({hours:1})
  document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');

  // Spain(+2h)
  let changedSpainDateTime = changedLondonDateTime.plus({hours:1})
  document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');

  // London(+1h)
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');

  // Washington, D.C.(-4h)
  let changedWashingtonDateTime = changedLondonDateTime.minus({hours: 5})
  document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');
  
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

  // Hawaii(-10h)
  let changedHawaiiDateTime = changedLondonDateTime.minus({hours:11})
  document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');

}

// Washington, D.C.
function inputChangeWashington(){
  // Get Datetime at Washington, D.C.
  let changedWashingtonDate = document.getElementById("washington_YYYYMMDD").value;
  let changedWashingtonTime = document.getElementById("washington_HHmm").value;

  let changedWashingtonDateTime = luxon.DateTime.fromISO(changedWashingtonDate + 'T' + changedWashingtonTime)

  // Japan(+9h)
  let changedJapanDateTime = changedWashingtonDateTime.plus({hours:13});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  let changedNewDelhiDateTime = changedWashingtonDateTime.plus({hours:9.5});
  document.getElementById("newdelhi_YYYYMMDD").value = changedNewDelhiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("newdelhi_HHmm").value = changedNewDelhiDateTime.toFormat('HH:mm');

  // Germany(+2h)
  let changedGermanyDateTime = changedWashingtonDateTime.plus({hours:6})
  document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');
  
  // Spain(+2h)
  let changedSpainDateTime = changedWashingtonDateTime.plus({hours:6})
  document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');

  // London(+1h)
  let changedLondonDateTime = changedWashingtonDateTime.plus({hours:5})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Washington, D.C.(-4h)
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');

  // Texas(-5h)
  let changedTexasDateTime = changedWashingtonDateTime.minus({hours:1})
  document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

  // Houston(-6h)
  let changedHoustonDateTime = changedWashingtonDateTime.minus({hours:2})
  document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

  // Seattle(-7h)
  let changedSeattleDateTime = changedWashingtonDateTime.minus({hours:3})
  document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');

  // Hawaii(-10h)
  let changedHawaiiDateTime = changedWashingtonDateTime.minus({hours:6})
  document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');

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

  // Germany(+2h)
  let changedGermanyDateTime = changedTexasDateTime.plus({hours:7})
  document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');
  
  // Spain(+2h)
  let changedSpainDateTime = changedTexasDateTime.plus({hours:7})
  document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');

  // London(+1h)
  let changedLondonDateTime = changedTexasDateTime.plus({hours:6})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Washington, D.C.(-4h)
  let changedWashingtonDateTime = changedTexasDateTime.plus({hours:1})
  document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');

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

  // Hawaii(-10h)
  let changedHawaiiDateTime = changedTexasDateTime.minus({hours:5})
  document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');

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

  // Germany(+2h)
  let changedGermanyDateTime = changedHoustonDateTime.plus({hours:8})
  document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');

  // Spain(+2h)
  let changedSpainDateTime = changedHoustonDateTime.plus({hours:8})
  document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');

  // London(+1h)
  let changedLondonDateTime = changedHoustonDateTime.plus({hours:7})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Washington, D.C.(-4h)
  let changedWashingtonDateTime = changedHoustonDateTime.plus({hours: 2})
  document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');

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

  // Hawaii(-10h)
  let changedHawaiiDateTime = changedHoustonDateTime.minus({hours:4})
  document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');

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

  // Germany(+2h)
  let changedGermanyDateTime = changedSeattleDateTime.plus({hours:9})
  document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');

  // Spain(+2h)
  let changedSpainDateTime = changedSeattleDateTime.plus({hours:9})
  document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');

  // London(+1h)
  let changedLondonDateTime = changedSeattleDateTime.plus({hours:8})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Washington, D.C.(-4h)
  let changedWashingtonDateTime = changedSeattleDateTime.plus({hours: 3})
  document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');

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

  // Hawaii(-10h)
  let changedHawaiiDateTime = changedSeattleDateTime.minus({hours:3})
  document.getElementById("hawaii_YYYYMMDD").value = changedHawaiiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("hawaii_HHmm").value = changedHawaiiDateTime.toFormat('HH:mm');

}

// Hawaii
function inputChangeHawaii(){

  // Get Datetime at Houston
  let changedHawaiiDate = document.getElementById("hawaii_YYYYMMDD").value;
  let changedHawaiiTime = document.getElementById("hawaii_HHmm").value;
  let changedHawaiiDateTime = luxon.DateTime.fromISO(changedHawaiiDate + 'T' + changedHawaiiTime)

  // Japan(+9h)
  let changedJapanDateTime = changedHawaiiDateTime.plus({hours:19});
  document.getElementById("inputDateJapan").value = changedJapanDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("dayJapan").value = changedJapanDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("inputTimeJapan").value = changedJapanDateTime.toFormat('HH:mm');

  // New delhi(+5.5h) 
  let changedNewDelhiDateTime = changedHawaiiDateTime.plus({hours:15.5});
  document.getElementById("newdelhi_YYYYMMDD").value = changedNewDelhiDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("newdelhi_day").value = changedNewDelhiDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("newdelhi_HHmm").value = changedNewDelhiDateTime.toFormat('HH:mm');

  // Germany(+2h)
  let changedGermanyDateTime = changedHawaiiDateTime.plus({hours:12})
  document.getElementById("germany_YYYYMMDD").value = changedGermanyDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("germany_day").value = changedGermanyDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("germany_HHmm").value = changedGermanyDateTime.toFormat('HH:mm');

  // Spain(+2h)
  let changedSpainDateTime = changedHawaiiDateTime.plus({hours:12})
  document.getElementById("spain_YYYYMMDD").value = changedSpainDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("spain_day").value = changedSpainDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("spain_HHmm").value = changedSpainDateTime.toFormat('HH:mm');
  
  // London(+1h)
  let changedLondonDateTime = changedHawaiiDateTime.plus({hours:11})
  document.getElementById("london_YYYYMMDD").value = changedLondonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("london_day").value = changedLondonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("london_HHmm").value = changedLondonDateTime.toFormat('HH:mm');

  // Washington, D.C.(-4h)
  let changedWashingtonDateTime = changedHawaiiDateTime.plus({hours: 6})
  document.getElementById("washington_YYYYMMDD").value = changedWashingtonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("washington_day").value = changedWashingtonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("washington_HHmm").value = changedWashingtonDateTime.toFormat('HH:mm');

  // Texas(-5h)
  let changedTexasDateTime = changedHawaiiDateTime.plus({hours:5})
  document.getElementById("texas_YYYYMMDD").value = changedTexasDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("texas_day").value = changedTexasDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("texas_HHmm").value = changedTexasDateTime.toFormat('HH:mm');

  // Houston(-6h)
  let changedHoustonDateTime = changedHawaiiDateTime.plus({hours:4})
  document.getElementById("houston_YYYYMMDD").value = changedHoustonDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("houston_day").value = changedHoustonDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("houston_HHmm").value = changedHoustonDateTime.toFormat('HH:mm');

  // Seattle(-7h)
  let changedSeattleDateTime = changedHawaiiDateTime.plus({hours:3})
  document.getElementById("seattle_YYYYMMDD").value = changedSeattleDateTime.toFormat("yyyy-MM-dd");
  document.getElementById("seattle_day").value = changedSeattleDateTime.setLocale('en').toFormat('EEE');
  document.getElementById("seattle_HHmm").value = changedSeattleDateTime.toFormat('HH:mm');

  // Hawaii(-10h)
  document.getElementById("hawaii_day").value = changedHawaiiDateTime.setLocale('en').toFormat('EEE');
  
}
