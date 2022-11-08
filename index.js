const gallery       = document.querySelector(".galeria");
const slider        = document.querySelector(".normal-flow");
const divPic1       = document.getElementsByClassName("pies-1")[0];
const divPic2       = document.getElementsByClassName("pies-2")[0];
const pic1          = divPic1.getElementsByClassName("pies-1-img")[0];
const pic2          = divPic2.getElementsByClassName("pies-2-img")[0];
const back          = document.getElementsByClassName("galeria-back")[0];
const forward       = document.getElementsByClassName("galeria-forward")[0];
const btnPic1       = back.getElementsByClassName("btn-galeria-back")[0];
const btnPic2       = forward.getElementsByClassName("btn-galeria-forward")[0];
const backImg       = back.getElementsByClassName("back-img")[0];
const forwardImg    = forward.getElementsByClassName("forward-img")[0];

function changeBackPic() {   // function turning back
    
  function picNumCalc(num) { // inner function to calc picture number
      num -= 2;
      if (num == 0)
        num = 20;
      if (num == -1)
        num = 19;
      return num;
  }

    let oldUrl1 = pic1.src.split("pies")[1];
    let oldUrl2 = pic2.src.split("pies")[1];

    let number = picNumCalc(parseInt(oldUrl1, 10));
    let newUrl = "zdjecia_zwierzat/pies" + (number) + ".jpg"
    
    let number2 = picNumCalc(parseInt(oldUrl2, 10));
    let newUrl2 = "zdjecia_zwierzat/pies" + (number2) + ".jpg"

    pic1.src = newUrl;
    pic2.src = newUrl2;
}

function changeForwardPic() {   // function turning forward
    
  function picNumCalc(num) {    // inner function to calc picture number
      num += 2;
      if (num == 21)
        num = 1;
      if (num == 22)
        num = 2;
      return num;
  }
    
    let oldUrl1 = pic1.src.split("pies")[1];
    let oldUrl2 = pic2.src.split("pies")[1];

    let number = picNumCalc(parseInt(oldUrl1, 10));
    let newUrl = "zdjecia_zwierzat/pies" + (number) + ".jpg"
    
    let number2 = picNumCalc(parseInt(oldUrl2, 10));
    let newUrl2 = "zdjecia_zwierzat/pies" + (number2) + ".jpg"

    pic1.src = newUrl;
    pic2.src = newUrl2;
}



btnPic1.addEventListener("click",changeBackPic);
btnPic2.addEventListener("click",changeForwardPic);


