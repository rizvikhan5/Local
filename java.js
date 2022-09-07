

const inputFildComon = id =>{
    const inputFild = document.getElementById(id)
    const inputFildString = inputFild.value 

    inputFild.value = ''
    return inputFildString
}

const submition = () =>{
    const nameFild = inputFildComon('name-input')
    const ageFild = inputFildComon('age-input')
    console.log(nameFild,ageFild)
    disPlayUl(nameFild,ageFild)

    // localStorage.setItem(nameFild,ageFild)
    saveingDataToLocalStorage(nameFild,ageFild)
}

const shopingCard = ()=>{
    let saveCart = localStorage.getItem('cart')
    let cart = {}
    if(saveCart){
        cart = JSON.parse(saveCart)
    }
    return cart 
}

const saveingDataToLocalStorage = (nameFild,ageFild) =>{
    const cart = shopingCard()

    cart[nameFild] = ageFild
    const makeStringify = JSON.stringify(cart)

    localStorage.setItem('cart',makeStringify)
}



const disPlayUl = (nameFild,ageFild) =>{
    const ulFild = document.getElementById('ul-Fild')
    const liAdd = document.createElement('li')
    liAdd.innerText = `${nameFild} - ${ageFild}`

    ulFild.appendChild(liAdd)
}