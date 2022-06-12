var letra;
var i;
var troca;
var msg;
function textoAlt() {
     letra.innerText = msg[i];
     if (i < msg.length) {
       i++
       if (i == msg.length) {
         i = 0;
       }
     }
   }
function inicia(){
  document.querySelectorAll('.item').forEach(item => {
   item.addEventListener('click', (e)=> { 
     e.target.scrollIntoView({ 
       inline: 'center' , 
       behavior: 'smooth', 
     }); 
   }); 
  });

  letra=document.getElementById('hab');
  troca = setInterval(textoAlt, 999);
  i= 0;
  msg = ['HTML', 'CSS3', 'JAVASCRIPT'];
}
window.addEventListener('load', inicia)
