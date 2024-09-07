const btnProducts = document.getElementById('li1')
const blockProducts = document.getElementById('block1')
const btnLogIn = document.getElementById('li2')
const blockLogIn = document.getElementById('block2')
const card = document.getElementById('card')
const btnCard = document.getElementById('buybtn1')

let prChcek = false

function btnProductsF(){
    if(prChcek === false){
    blockProducts.style.display = 'block'
    prChcek = true
    } else {
        blockProducts.style.display = 'none'
        prChcek = false
    }
}
function btnLogInF(){
    if(prChcek === false){
    blockLogIn.style.display = 'block'
    prChcek = true
    } else {
        blockLogIn.style.display = 'none'
        prChcek = false
    }
}



btnProducts.addEventListener('click', btnProductsF)
btnLogIn.addEventListener('click', btnLogInF)


let ImgCatOne = document.getElementById('ImgCat1')
let ImgCatTwo = document.getElementById('ImgCat2')

function ImgCatOneF () {
    ImgCatOne.style.transform = 'scale(1.06)'
}
function ImgCatOneFEnd () {
    ImgCatOne.style.transform = 'scale(1)'
}

function ImgCatTwoF () {
    ImgCatTwo.style.transform = 'scale(1.06)'
}
function ImgCatTwoFEnd () {
    ImgCatTwo.style.transform = 'scale(1)'
}

ImgCatOne.addEventListener('mouseover', ImgCatOneF)
ImgCatOne.addEventListener('mouseout', ImgCatOneFEnd)

ImgCatTwo.addEventListener('mouseover', ImgCatTwoF)
ImgCatTwo.addEventListener('mouseout', ImgCatTwoFEnd)

const BtnLogInCh = document.getElementById('emailBtn')



function FBtnLogInCh () {
    let emailFormCh = document.getElementById('emailFormCh').value
    if(emailFormCh.length < 10){
        alert('Введите адрес электронной почты')
    } else if (emailFormCh.length >= 10)  {
    window.location.href = 'pageReg.html';}
}





BtnLogInCh.addEventListener('click', FBtnLogInCh)
