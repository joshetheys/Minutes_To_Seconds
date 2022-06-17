let minutes = document.getElementById("minutes");
let result = document.getElementById("seconds");
let toSeconds = document.getElementById("toSeconds");
let toMinutes = document.getElementById("toMinutes");

toSeconds.addEventListener('click',()=> {
    result.value =Math.round((minutes.value*60)*100)/100;
    minutes.value = null;
    answer.value = result.value;
})
toMinutes.addEventListener('click',()=> {
    minutes.value = Math.round((result.value/60)*100)/100;
    result.value = null;
    answer.value = minutes.value;
})