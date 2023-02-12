// Buttons
const ishkerak = document.querySelector('#ishkerak')
const hodimkerak = document.querySelector('#hodimkerak')
const ustozkerak = document.querySelector('#ustozkerak')
const shogirdkerak = document.querySelector('#shogirdkerak')
const sherikkerak = document.querySelector('#sherikkerak')

// forms
const kirish = document.querySelector('#kirish')
const ishtop = document.querySelector('#ishtop')
const hodimtop = document.querySelector('#hodimtop')
const ustoztop = document.querySelector('#ustoztop')
const shogirdtop = document.querySelector('#shogirdtop')
const sheriktop = document.querySelector('#sheriktop')

// function
ishkerak.onclick = () => {
    ishtop.style.display = "block"
    kirish.style.display = "none"
    hodimtop.style.display = "none"
    ustoztop.style.display = "none"
    shogirdtop.style.display = "none"
    sheriktop.style.display = "none"
}

hodimkerak.onclick = () => {
    hodimtop.style.display = "block"
    kirish.style.display = "none"
    ustoztop.style.display = "none"
    shogirdtop.style.display = "none"
    sheriktop.style.display = "none"
    ishtop.style.display = "none"

}
ustozkerak.onclick = () => {
    ustoztop.style.display = "block"
    kirish.style.display = "none"
    shogirdtop.style.display = "none"
    sheriktop.style.display = "none"
    ishtop.style.display = "none"
    hodimtop.style.display = "none"
}

shogirdkerak.onclick = () => {
    shogirdtop.style.display = "block"
    kirish.style.display = "none"
    ishtop.style.display = "none"
    hodimtop.style.display = "none"
    ustoztop.style.display = "none"
    sheriktop.style.display = "none"
}
sherikkerak.onclick = () => {
    sheriktop.style.display = "block"
    kirish.style.display = "none"
    ustoztop.style.display = "none"
    shogirdtop.style.display = "none"
    ishtop.style.display = "none"
    hodimtop.style.display = "none"
}