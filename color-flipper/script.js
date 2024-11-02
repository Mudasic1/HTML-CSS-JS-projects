let btn = document.getElementById('btn');



btn.addEventListener('click',(e)=>{
    e.preventDefault();
   let random = '#' + Math.floor(Math.random() * 167777 / 10).toString();

   document.body.style.backgroundColor = random;
})