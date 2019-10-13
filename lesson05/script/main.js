let mainImg = document.querySelector('#main')
let roulette = document.querySelector('#roulette')
let wrapper = document.querySelector('#wrapper')

function gallery() {
    let number = 8
    let nodeStr = ''

    for (let i = 1; i <= number; i++) {
        nodeStr += `<img onclick="somefunc(${i})" src="img/${i}.jpg">`
        console.log(i)
    }
    roulette.innerHTML = nodeStr


}

function somefunc(a) {
    //mainImg.remove ()
    let nodeString = ''
    nodeString = `<img  src="img/${a}.jpg" alt="" id="main">`
    wrapper.innerHTML = nodeString
    console.log(a)
    console.log(nodeString)



    //let img = document.createElement('img');
    //img.className = "mainImg"
    //img.innerHTML = nodeString


    // mainImg.innerText = nodeString
    //mainImg.replaceWith(img)

    /*
    document.getElementById('main').innerHTML = `<img  src="img/${a}.jpg" alt="" id="main"></img>`
     document.body.append(mainImg)
    console.log(a)
    console.log(document.getElementById('main')) */
}

gallery()