let btn=document.querySelector("button");


btn.addEventListener("click",function() {
   let h3=document.querySelector("h3");
   let randomcoolur=randomcolor();
    h3.innerText=randomcoolur
       btn.style.backgroundColor=randomcoolur;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcoolur;

    console.log("color updated");
});

function randomcolor(){
    let red=Math.floor(Math.random() *255);
    let green=Math.floor(Math.random() *255);
    let blue =Math.floor(Math.random() *255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}
