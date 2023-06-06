const ctn=document.querySelector('.cbtn');
ctn.addEventListener('click',function(e){
    const container = document.querySelector('.container');
    container.innerHTML='';
    const size=parseInt(prompt("Enter Squares per side!"));
    const np=(480/size);
    for (let i = 0; i < size*size; i++) {
        const box = document.createElement('div');
        box.setAttribute('style', `width:${np}px; height:${np}px`); 
        box.classList.add('mbox');
        container.appendChild(box);
    }
});