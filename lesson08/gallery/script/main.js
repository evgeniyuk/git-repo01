let mainImg = document.querySelector('#main')
let roulette = document.querySelector('#roulette')
let wrapper = document.querySelector('#wrapper')
let i1 = 4

function gallery() {
    let number = 9
    let nodeStr = ''

    for (let i = 0; i <= number; i++) {
        nodeStr += `<img onclick="somefunc(${i})" src="img/${i}.jpg">`
       // nodeStr += `<img (${i})" src="img/${i}.jpg">`
        // console.log(i)
    }
    roulette.innerHTML = nodeStr


}

function somefunc(a) {
    if (a == 0) {
        --i1;
    }
    if (a == 9) {
        ++i1;

    }
    if (i1 > 8) {
        i1 = 1
    }
    if (i1 < 1) {
        i1 = 8
    }
    if (a !== 0 && a !== 9) {i1=a }
        //mainImg.remove ()
        let nodeString = ''
    nodeString = `<img  src="img/${i1}.jpg" alt="" id="main">`
    wrapper.innerHTML = nodeString
    console.log(a)
    console.log(nodeString)

}

/*
// условие  не выполняется ни с какими кавычками, if (e.target == `<img src="img/0.jpg">`)
function clicker(e) {
    /*if (e == 0) {
        --i
    }
    if (e == 9) {
        ++i
    }
    if (i > 8) {
        i = 1
    }
    if (i < 1) {
        i = 8
    }

    if (a !== 0 && a !== 9) {i=a } 

   if (e.target == `<img src="img/0.jpg">`) { //почему боль? (e.target = `<img src="img/0.jpg">`)
        mainImg.src = `img/${--i}.jpg`
    }
    if (e.target = `<img src="img/9.jpg">`) {
            mainImg.src = `img/${++i}.jpg`
    }
            if (e.target.parentElement.id === 'roulette') {
                mainImg.src = e.target.src
            }

        }



    



    console.log(urlstr)
    //console.log(mainImg.src)
    console.log(e.target)
    console.log(i)
}
wrapper.addEventListener('click', clicker) */
//event.target – это исходный элемент, на котором произошло событие, в процессе всплытия он неизменен.
//parentElement это родительский элемент текущего узла

gallery()