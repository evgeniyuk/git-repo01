 const ITEM = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8'] //склад
 const PRICE = [10, 100, 1000, 10000, 20, 300, 4000, 50000]
 const ID = [1, 2, 3, 4, 5, 6, 7, 8]
 const PICT = [1, 2, 3, 4, 5, 6, 7, 8]
 let qincart = [0, 0, 0, 0, 0, 0, 0, 0]; //свойство кол-во корзине

 let incart = []
 let a = 0
 let sumcart = 0

 let productsDTO =
     createDTO()

 function createDTO() {
     let arr = []

     for (let i = 0; i < ITEM.length; i++) {

         arr.push(createProduct(ITEM[i], PRICE[i], ID[i], PICT[i], qincart[i])) // Заполнили  массив объектами
     }
     return arr
 }

 function createProduct(name, price, id1, pict, qincart) { //собрали объект 
     return {
         name: name,
         id: id1,
         price: price,
         pict: pict,
         qincart: qincart
     }
 }




 function list() { // выводим список товаров
     let nodeStr = ''
     i = 0
     productsDTO.forEach(el => {
         console.log('имя', el.name, 'цена', el.price, 'номер', el.id)
     })

     productsDTO.forEach(el => {
         i++
         nodeStr += `
         <div>
            <img src="img/${el.pict}.jpg"  width="150" alt="unit_photo"> 
            <span>${el.name}&nbsp</span><br>
            <span>цена:${el.price}&nbspрублей</span>
            
                <button onclick=addcart(${i})>купить</button>
            
         </div>
        `


     })
     // console.log(nodeStr)
     catalog.innerHTML = nodeStr
 }

 list();


 function addcart(a) { //  Выбираем товары, считаем сумму
     let z = incart.indexOf(a)
     if (z == -1) { //если нет в корзине
         incart.push(a)
     } //в массив корзины 

     productsDTO.forEach(el => { //перебор элементов массива productsDTO, функция 
         if (el.id == a) {
             sumcart += el.price // сумма cart
             el.qincart++ //свойство кол-во в корзине
         }
     })
     console.log('cart', incart)
     console.log('price', sumcart)
     list_cart();

 }

 function delcart(b) {


     // delete incart[b];
     let z = incart.indexOf(b)
     if (z !== -1) { //если элемент  есть в массиве корзины
         
     
     productsDTO.forEach(el => { //перебор элементов массива productsDTO, функция 
         if (el.id == b) {
             sumcart -= el.price; // сумма cart
             el.qincart--

             if (el.qincart<0) {incart.splice(b)} // если кол-во в корзине меньше 0, удаляем el из  массива корзины
             console.log('qincart', el.qincart)
         }
     })
    
    
     
    
    }
     //let  z = indexOf(b)
     //удаляем элемент 

     //  incart.splice(incart.indexOf(b), 1) // находим и удаляем из корзины по id 
     // incart.splice(b)
     console.log('cart', incart)
     console.log('sumcart', sumcart)
     console.log('z', z)
     list_cart();

 }




 function list_cart() { //отображаем  корзину

     let i1 = 0
     if (sumcart < 0) {
         sumcart = 0
     }

//<section id="cart"> 
//        <span>корзина</span> 
//    </section>



     let nodeStr1 = `
     <nav><span>корзина</span>
                    <p>сумма: ${sumcart}</p><br></nav>`
     cart.innerHTML = nodeStr1
     for (i1 = 0; i1 <= incart.length; i1++) {
         productsDTO.forEach(el => { //перебор элементов массива

             if ((el.id == incart[i1]) && ( el.qincart > 0)) {


                 nodeStr1 += `
        <div>
           
            <span>цена:${el.price}&nbspрублей&nbsp;<br>кол-во:${el.qincart}</span>
           <img src="img/${el.pict}.jpg"  width="40" alt="unit_photo"> 
           <span>${el.name}&nbsp</span><br>
           <button onclick=delcart(${el.id})>удалить</button>
                         
        </div>
        
        
        `
                 console.log(incart[i1])
                 console.log(el.id)
                 //console.log(i1)
                 console.log(el.qincart)
                 //  console.log(nodeStr1)
             }
         })
     }
     //  nodeStr1 += `<p>сумма: ${sumcart}</p>`
     cart.innerHTML = nodeStr1
 };