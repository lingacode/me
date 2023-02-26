let output = document.querySelector('h1');
btnShow.addEventListener('click', () => {
    let today = new Date();
    
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    let current_date = `${month}/${date}/${year}`;
    // output.innerText = current_date;
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let current_time = `${hours}:${minutes}:${seconds}`;
    output.innerText = current_time;
});
function addZero(num){
    return num < 10 ? `0${num}`:num;
}
// calculater
let string = "";
let buttons =document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'c'){
            string=" ";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string= string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
// end calculater