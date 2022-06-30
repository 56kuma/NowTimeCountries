'use strict';

// window.addEventListener('load', function () {
//   console.log("Hello World!");
// });

// 初期値設定
window.onload = function () {
    // Set Japan Date Time 
    let nowJapanDateTime = moment().add(9, 'hours')
    document.getElementById("inputDateJapan").value = nowJapanDateTime.format("YYYY-MM-DD");
    document.getElementById("inputTimeJapan").value = nowJapanDateTime.format("HH:mm")

    // Set New delhi Date Time
    let newdlhiDateTime = nowJapanDateTime.subtract(3.5, 'hours')
    document.getElementById("newdelhi_YYYYMMDD").value = newdlhiDateTime.format("YYYY-MM-DD");
    document.getElementById("newdelh_HHmm").value = newdlhiDateTime.format("HH:mm");
  }

// Japan Date の変更を検知
function inputChange(){

    // Get Datetime at Japan
    let changedJapanDate = document.getElementById("inputDateJapan").value;
    let changedJapanTime = document.getElementById("inputTimeJapan").value;

    // New delhi 
    let changedNewdlhiDateTime = moment(changedJapanDate + ' ' + changedJapanTime ).subtract(3.5,'hour')
    document.getElementById("newdelhi_YYYYMMDD").value = changedNewdlhiDateTime.format("YYYY-MM-DD");
    document.getElementById("newdelh_HHmm").value = changedNewdlhiDateTime.format("HH:mm");

}


