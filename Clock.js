const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
/*id로 css 요소 선택*/

setInterval (()=> {
    let day = new Date();
    /*현재 시각에 특정한 수를 곱함 -> 시침/분침/초침의 각도 표현*/
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    /* 시침/분침/초침 위치 변경
       ${} 사이에 변수나 연산 등 삽입 */
})
