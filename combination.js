let btn=document.querySelector("button");

// for div first
btn.addEventListener("click",function() {
    let h5=document.getElementById("col_1");
    let randomcoolur=colorgen_1();
     h5.innerText=randomcoolur
     let div1=document.getElementById("one");
     div1.style.backgroundColor=randomcoolur;

     console.log("first div change");
 });
  
 // for second div
 
btn.addEventListener("click",function() {
    let h5=document.getElementById("col_2");
    let randomcoolur=colorgen_2();
     h5.innerText=randomcoolur
     let div1=document.getElementById("two");
     div1.style.backgroundColor=randomcoolur;

     console.log("second  div change");
 });

function colorgen_1(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);
   
    let color_1=`rgb(${red},${green},${blue})`;
    return color_1;
}
function colorgen_2(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);
   
    let color_2=`rgb(${red},${green},${blue})`;
    return color_2;
}

