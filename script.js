const parralax1 = document.querySelectorAll(".shapes .element");
const parralaxArr1= Array.from(parralax1)
let s = 50;
let ss=1000

parralaxArr1.map((item)=>{

  document.body.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
  
    item.style.transform = `
      translate(
        ${x / s}%,
        ${y / s}%
      )`;
  });
})
const parralax2 = document.querySelector("#banner .planet");

  document.body.addEventListener("mousemove", function (e) {
    
    let x = e.clientX;
    let y = e.clientY;
  
    parralax2.style.transform = `
      translate(
        -${x / ss}%,
        -${0}%
      )`;
  });