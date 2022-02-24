// let btn = document.querySelector('')
//
// console.log(btn)

let btn = document.getElementsByClassName("click")[0]

console.log(btn)

const firstInput = document.querySelector('first-input')
const secondInput = document.querySelector("sedcon-input")
const result = document.querySelector("output")wwwwwwwwwwwwwwwwww

btn.addEventListener('click', () => {
    btn.classList.add("bg-danger")
    console.log(typeof firstInput.value)
    result.velue = + firstInput.value+ +secondInput.velue
})

let boxes = document.querySelectorAll('.box')
console.log(boxes)
// forEach()
boxes.forEach(box => {
    return box.addEventListener("click", () => {
        box.classList.add("bg-dark")
    })
})

///////////////////////////////////////