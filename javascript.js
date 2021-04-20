const arrow=document.querySelectorAll('.accordion');

arrow.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        console.log("click!");
        item.nextElementSibling.classList.toggle('text-no-hiden');
        item.childNodes[2].classList.toggle('round-down')
        
    })
})

