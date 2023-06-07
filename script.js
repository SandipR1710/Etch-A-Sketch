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
const clbtn=document.querySelector('.lbtn');
clbtn.addEventListener('click',function(){
    const bxs=document.querySelectorAll('.mbox');
    bxs.forEach((bx)=>{
        bx.addEventListener('mouseover',function(e){
            e.target.classList.add('clb');
        })
    });
});
const erase=document.querySelector('.ebtn');
erase.addEventListener('click',function(){
    const bxs=document.querySelectorAll('.mbox');
    bxs.forEach((bx)=>{
        bx.addEventListener('mouseover',function(e){
            e.target.classList.remove('clb');
        })
    });
});
const clear=document.querySelector('.clbtn');
clear.addEventListener('click',function(){
    const bxs=document.querySelectorAll('.mbox');
    bxs.forEach((bx)=>{
        bx.classList.remove('clb');
    });
});
// console.log(tsize);
