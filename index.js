let RnIat = [
  0, 26, 98, 90, 26, 42, 74, 80, 68, 22, 48, 34, 45, 24, 34, 63, 38, 80, 42, 56,
  89, 18, 51, 71, 16, 92,
];

let Iat = [
  0, 2, 4, 4, 2, 2, 3, 3, 3, 1, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 4, 1, 2, 3, 1, 4,
];

let RnSt = [
  95, 21, 51, 92, 89, 38, 13, 61, 50, 49, 39, 53, 88, 01, 81, 53, 81, 64, 01,
  67, 01, 47, 75, 57, 87, 47,
];

let St = [
  5, 3, 3, 5, 6, 3, 2, 4, 4, 3, 3, 4, 5, 3, 4, 4, 4, 5, 2, 4, 3, 3, 5, 3, 6, 3,
];

let clock = 0,
  StBegin = 0,
  idleTime = 0,
  TimeSpent = 0;
document.getElementById("RnSt").innerHTML = RnSt[0];
document.getElementById("st").innerHTML = St[0];
document.getElementById("StEndAble 0").innerHTML = St[0];
document.getElementById("TimeSpent").innerHTML = St[0];

for (let i = 1; clock < 59; i++) {
  let ValueOfIat = Iat[i];
  let ValueOfSt = St[i];
  clock = ValueOfIat + clock;

  let StEndAble = document.getElementsByClassName("true");
  let ValueOfStEndAble = Number(StEndAble[StEndAble.length - 1].innerHTML);
  let ValueOfStEndAbleBefore = Number(
    StEndAble[StEndAble.length - 1].innerHTML
  );

  let StEndBaker = document.getElementsByClassName("false");
  let ValueOfStEndBaker = Number(StEndBaker[StEndBaker.length - 1].innerHTML);

  //Baker win
  if (clock < ValueOfStEndAble && ValueOfStEndBaker <= clock) {
    let Qtime = clock - clock;
    let r = document.createElement("TR");
    r.innerHTML = `<tr>
              <td>${i + 1}</td>
              <td>${RnIat[i]}</td>
              <td>${Iat[i]}</td>
              <td>${clock}</td>
              <td>${RnSt[i]}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${clock}</td>
              <td>${ValueOfSt}</td>
              <td class="false">${clock + ValueOfSt}</td>
              <td>${clock - ValueOfStEndBaker}</td>
              <td>${Qtime}</td>
              <td>${Qtime + ValueOfSt}</td>
            </tr>`;
    document.getElementById("table").tBodies[0].appendChild(r);
  } else if (clock >= ValueOfStEndAble) {
    let Qtime = clock - clock;

    let r = document.createElement("TR");
    r.innerHTML = `<tr>
              <td>${i + 1}</td>
              <td>${RnIat[i]}</td>
              <td>${Iat[i]}</td>
              <td>${clock}</td>
              <td>${RnSt[i]}</td>
              <td>${clock}</td>
              <td>${ValueOfSt}</td>
              <td  class="true" >${clock + ValueOfSt}</td>
              <td>${clock - ValueOfStEndAbleBefore}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${Qtime}</td>
              <td>${Qtime + ValueOfSt}</td>
            </tr>`;
    document.getElementById("table").tBodies[0].appendChild(r);
  } else if (
    clock >= ValueOfStEndAble &&
    ValueOfStEndAble === ValueOfStEndBaker
  ) {
    let Qtime = ValueOfStEndAble + 1 - clock;

    let r = document.createElement("TR");
    r.innerHTML = `<tr>
              <td>${i + 1}</td>
              <td>${RnIat[i]}</td>
              <td>${Iat[i]}</td>
              <td>${clock}</td>
              <td>${RnSt[i]}</td>
              <td>${ValueOfStEndAble + 1}</td>
              <td>${ValueOfSt}</td>
              <td  class="true" >${clock + ValueOfSt}</td>
              <td>${clock - ValueOfStEndAbleBefore}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${Qtime}</td>
              <td>${Qtime + ValueOfSt}</td>
            </tr>`;
    document.getElementById("table").tBodies[0].appendChild(r);
  } else if (clock < ValueOfStEndAble && ValueOfStEndAble < ValueOfStEndBaker) {
    let Qtime = ValueOfStEndAble - clock;

    let r = document.createElement("TR");
    r.innerHTML = `<tr>
              <td>${i + 1}</td>
              <td>${RnIat[i]}</td>
              <td>${Iat[i]}</td>
              <td>${clock}</td>
              <td>${RnSt[i]}</td>
              <td>${ValueOfStEndAble}</td>
              <td>${ValueOfSt}</td>
              <td  class="true" >${ValueOfStEndAble + ValueOfSt}</td>
              <td>${ValueOfStEndAble - ValueOfStEndAbleBefore}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${Qtime}</td>
              <td>${Qtime + ValueOfSt}</td>
            </tr>`;
    document.getElementById("table").tBodies[0].appendChild(r);
  } else if (
    clock < ValueOfStEndAble &&
    clock < ValueOfStEndBaker &&
    ValueOfStEndAble > ValueOfStEndBaker
  ) {
    let Qtime = ValueOfStEndBaker - clock;
    let r = document.createElement("TR");
    r.innerHTML = `<tr>
              <td>${i + 1}</td>
              <td>${RnIat[i]}</td>
              <td>${Iat[i]}</td>
              <td>${clock}</td>
              <td>${RnSt[i]}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${ValueOfStEndBaker}</td>
              <td>${ValueOfSt}</td>
              <td class="false">${ValueOfStEndBaker + ValueOfSt}</td>
              <td>${ValueOfStEndBaker - ValueOfStEndBaker}</td>
              <td>${Qtime}</td>
              <td>${Qtime + ValueOfSt}</td>
            </tr>`;
    document.getElementById("table").tBodies[0].appendChild(r);
  } else {
    let Qtime = ValueOfStEndAble - clock;

    let r = document.createElement("TR");
    r.innerHTML = `<tr>
              <td>${i + 1}</td>
              <td>${RnIat[i]}</td>
              <td>${Iat[i]}</td>
              <td>${clock}</td>
              <td>${RnSt[i]}</td>
              <td>${ValueOfStEndAble}</td>
              <td>${ValueOfSt}</td>
              <td  class="true" >${ValueOfStEndAble + ValueOfSt}</td>
              <td>${ValueOfStEndAble - ValueOfStEndAbleBefore}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${Qtime}</td>
              <td>${Qtime + ValueOfSt}</td>
            </tr>`;
    document.getElementById("table").tBodies[0].appendChild(r);
  }
}
