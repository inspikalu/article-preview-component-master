const share_btn = document.querySelector('.share-btn')
const share_panel = document.querySelector('.share-panel')



if (window.innerWidth < 800){
    share_btn.addEventListener('click',(e)=>{
        share_panel.classList.toggle('active')
        share_btn.style.zIndex='20';
    })
}else {
    share_btn.addEventListener('click',(e)=>{
        share_panel.classList.toggle('active')
    })
}
console.log(window.innerWidth)