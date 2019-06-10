document.addEventListener('DOMContentLoaded',()=>{

   const toggler = document.querySelector('#icon-toggler');
    
   toggler.addEventListener('click',()=>{
       document.querySelector('#sidebar-left').classList.toggle('hide')
   })
  
})