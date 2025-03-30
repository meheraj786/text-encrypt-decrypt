
  const encryptBtn = document.querySelector(".main-left .en-result");
  const encryptInput = document.querySelector(".main-left textarea");
  const encryptOutput = document.querySelector(".main-left .output textarea");
  const keyCheckbox = document.querySelector(".main-left .checkbox .key");
  const encryptKeyInput = document.querySelector(".main-left .key input");
  const decrypCheckbox = document.querySelector(".main-right .checkbox input");

  // Decryption Elements
  const decryptBtn = document.querySelector(".main-right .en-result");
  const decryptInput = document.querySelector(".main-right textarea");
  const decryptOutput = document.querySelector(".main-right .output textarea");
  const decryptKeyInput = document.querySelector(".main-right .key input");

  // Function to Encrypt Text
  keyCheckbox.addEventListener("change", () => {
    if (keyCheckbox.checked) {
        encryptKeyInput.disabled = false;
        encryptKeyInput.style.borderColor= "var(--aqua)"
    } else {
        encryptKeyInput.disabled = true;
        encryptKeyInput.style.borderColor= "grey"
    }
});
decrypCheckbox.addEventListener("change", () => {
    if (decrypCheckbox.checked) {
      decryptKeyInput.disabled = false;
      decryptKeyInput.style.borderColor= "var(--aqua)"
    }else {
      decryptKeyInput.disabled = true; 
      decryptKeyInput.style.borderColor= "grey"
  }
});
  function encryptText() {
      let text = encryptInput.value.trim();
      let key = parseInt(encryptKeyInput.value.trim()) || 3;

      if (!text) {
          alert("Please enter text to encrypt!");
      }
    

      let encrypted = "";
      for (let i = 0; i < text.length; i++) {
          let charCode = text.charCodeAt(i);
          encrypted += String.fromCharCode(charCode + key);
      }

      encryptOutput.value = encrypted;
  }

  function decryptText() {
      let encryptedText = decryptInput.value.trim();
      let key = parseInt(decryptKeyInput.value.trim()) || 3; 
      if (!encryptedText) {
          alert("Please enter encrypted text!");
      }

      let decrypted = "";
      for (let i = 0; i < encryptedText.length; i++) {
          let charCode = encryptedText.charCodeAt(i);
          decrypted += String.fromCharCode(charCode - key);
      }

      decryptOutput.value = decrypted;
  }

  encryptBtn.addEventListener("click", encryptText);
  decryptBtn.addEventListener("click", decryptText);




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