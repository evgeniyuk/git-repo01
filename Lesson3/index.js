//  Переделайте makeGETRequest() так, чтобы она использовала промисы.

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


function makeGETRequest(url) {


    return new Promise((resolve, reject) => {

        let xhr;
        if (XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () { // 0-4

            // if (xhr.readyState === 4 && xhr.status === 200) {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {


                    const body = JSON.parse(xhr.responseText);

                    console.log(xhr.readyState);
                    console.log(body);
                    resolve(body);

                } else {

                    const body = 'Error';
                    console.log(xhr.readyState, '-else');
                    console.log(xhr.status, '-else');
                    //  reject(new Error("провал")) //?
                    reject(xhr.responseText);
                }
            }
        }
        xhr.onerror = function (err) {
            reject(err);
        };

        xhr.open('GET', url);
        xhr.send();
    });
}

//console.log(makeGETRequest(API_URL));

class GoodsItem {
    constructor(title = 'Без имени', price = '', id = 0) {
        this.title = title;
        this.price = price;
        this.id = id;
    }
    render() {
        return `<div class="goods-item">
                    <h3 class="title goods-title">${this.title}</h3>
                    <p>${this.price} ₽</p>
                    <p>${this.id} ID</p>
                    <button id=(${this.id}) class="itembutton">Купить</button>
                    
                </div>`;
    }
} //  не понял как получить id элемента при клике по нему 

class GoodsList {
    constructor() {
        this.goods = [];

    }

    fetchGoods() {

        return new Promise((resolve, reject) => {
            makeGETRequest(`${API_URL}/catalogData.json`).then((goods) => {
                this.goods = goods;
                resolve();
            }).catch((err) => {
                console.error(err);
                reject();
            });
        });
    }

    totalPrice() {
        let accum = 0;
        this.goods.forEach((good) => {
            accum += good.price;
            console.log(accum);

            document.querySelector('.totalsum').innerHTML = `total in stock ${accum}`;
        })
    };

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;

    }
}

class Cart extends GoodsList {
    constructor(props) {
        super(props);

        this.carts = [];
        // попытка повесить листнер на button
        this.goods.forEach(good => {
           

            document.getElementById(good.id_product).addEventListener('click', () => {
                console.log(good.id_product)
            });
        })

    }


    // 

    listcart() {

        document.querySelector('.cart-button').addEventListener('click', () => {
            console.log('cart');
            
            if (document.querySelector('.cart').style.display != "block") {
                document.querySelector('.cart').style.display = "block"; //
            } else {
                document.querySelector('.cart').style.display = "none"; 
            }

        });

        

    }

    clean() {}


    incGood() {}


    decGood() {}
}

class CartItem extends GoodsItem {
    constructor(props) {
        super(props);
    }


    delete() {}
}

const list = new GoodsList();
list.fetchGoods().then(() => {
    list.render();
    list.totalPrice();
    // list.initEvents();
});

const cart1 = new Cart();
cart1.listcart();