const shareBtns = document.querySelectorAll('.share-btn')
const sharePanel = document.querySelector('.share__panel')
shareBtns.forEach((shareBtn)=>{
    shareBtn.addEventListener('click', ()=>{
        sharePanel.classList.toggle('open')
    })
})