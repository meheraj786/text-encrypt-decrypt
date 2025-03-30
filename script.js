const parralax1 = document.querySelectorAll("#icons .img1");
const parralaxArr1= Array.from(parralax1)
let s = 250;

parralaxArr1.map((item)=>{

  document.body.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(x);
  
    item.style.transform = `
      translate(
        ${x / s}%,
        ${y / s}%
      )`;
  });
})
const parralax2 = document.querySelectorAll("#icons .img2");

  document.body.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
  
    item.style.transform = `
      translate(
        -${x / ss}%,
        -${y / ss}%
      )`;
  });