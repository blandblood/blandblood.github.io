const botaoInvencivel = document.querySelector('.outros')

botaoInvencivel.addEventListener('mouseover', ()=>{
    setTimeout(()=>{
            botaoInvencivel.innerHTML = '<img src="images/invincibleColor.png">'
    }, 30)
})

botaoInvencivel.addEventListener('mouseout', ()=>{
    setTimeout(()=>{
            botaoInvencivel.innerHTML = '<img src="images/invincible.png">'
    }, 30)
})