function cardPopup(card) {
    const btn = card.querySelector('.moreBtn');

    btn.addEventListener('click', function () {
        const popup = document.createElement('div');
        popup.style.cssText = `
        border-radius: 20px;
        overflow:hidden;
        width: 50%;
        height: 600px;
        margin: 0 auto;
        background-color: #ccc;
        position:absolute;
        top: 50px;
        right: 50%;
        transform: translate(50%, 0)
        `
        popup.classList.add('popup')
        popup.innerHTML = card.innerHTML;
        const overlay = document.createElement('div');
        overlay.style.cssText = `
        background-color: black;
        opacity: 0.5;
        width:100%;
        height:100vh;
        position:absolute;
        top:0;
        right: 0;
        `
        document.body.append(overlay)
        const hideBtn = document.createElement('a')
        hideBtn.textContent = 'Скрыть'
        hideBtn.classList.add('hideBtn')
        hideBtn.addEventListener('click', function deletePopup() {
            hideBtn.removeEventListener('click', deletePopup)
            popup.remove()
            overlay.remove()
        })
        popup.append(hideBtn)
        popup.querySelector('.hidden').classList.toggle('hidden')
        popup.querySelector('.moreBtn').classList.toggle('hidden')
        document.body.append(popup)
    })
}

cardPopup(document.querySelector('.card'))