let btn = document.querySelector('button');
btn.addEventListener("click",function (){
    let gencolor= color();
    let h1  = document.querySelector('h1');
    h1.innerText = gencolor;
    let div = document.querySelector('div') ;
    div.style.background = gencolor ;
    console.log("random color generated")
})
function color() {
    let red = Math.floor(Math.random() *256);
    let green = Math.floor(Math.random()*256 );
    let blue = Math.floor(Math.random() * 256);
    let clr = `rgb(${red},${green},${blue})`;
    return clr ;
}