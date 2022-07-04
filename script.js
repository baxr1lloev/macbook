let a = document.querySelector('.to-choose')
let btn = a.querySelectorAll('button')

let item_price = document.querySelector('.price')


btn.forEach(btn => {
    btn.onclick = () => {
        btn.forEach(item => item.classList.remove('price_mc'))
        btn.classList.add('price_mc')




    }

})


let mac_color = document.querySelector('.mac_color')
let btns = mac_color.querySelectorAll('button')


btns.forEach(something => {
    something.onclick = () => {
        btns.forEach(itemm => itemm.classList.remove('new_color')

        )
        something.classList.add('new_color')


    }
})

let white_color = mac_color.querySelector('.White')
let grey_color = mac_color.querySelector('.Grey')
let color = document.querySelector('.color')
let macbook = document.querySelector('.macbook')



white_color.onclick = () => {
    grey_color.classList.remove('new_color')
    grey_color.classList.add('maccbok_color')


    color.innerText = 'White'
    white_color.classList.toggle('new_color')
    macbook.classList.remove('macbook_two')
    macbook.classList.add('macbook')

}
grey_color.onclick = () => {
    white_color.classList.remove('new_color')
    white_color.classList.add('maccbok_color')

    grey_color.classList.toggle('new_color')
    color.innerText = 'Space Gray'
    macbook.classList.remove('macbook')
    macbook.classList.add('macbook_two')

}




let one = a.querySelector('.one')
let two = a.querySelector('.two')
let three = a.querySelector('.three')
let four = a.querySelector('.four')


one.onclick = () => {
    item_price.innerText = '$1,199'
}
two.onclick = () => {
    item_price.innerText = '$2,199'
}
three.onclick = () => {
    item_price.innerText = '$2,599'
}
four.onclick = () => {
    item_price.innerText = '$3,199'
}