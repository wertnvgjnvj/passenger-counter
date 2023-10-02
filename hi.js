let el =document.getElementById("k");
let sl=document.getElementById("save-el");
let count =0;
function increment(){
    count=count+1;
    el.innerText=count;
}

function save(){
    let sa=count + "- " ;
    sl.textContent+=sa;
    console.log(count);
    el.innerText=0;
    count=0;

}