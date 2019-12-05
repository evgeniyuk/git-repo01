const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 150 },
    { title: 'Jacket', price: 150 },
    { title: 'Shoes', price: 150 },
    { title: 'Shirt', price: 200 },
    { title: 'Socks', price: 200 },
    { title: 'Jacket', price: 200 },
    { title: 'Shoes', price: 200 }
];

const renderGoodsItem = (title, price) => {
    return  `<div class="goods-item"><h3>${title}</h3><img src="img/placeholder.png" alt="goods-photo" width="120" height="100"><p>${price}</p></div>`
};

const renderGoodsList = (list) => {
    //list.join("");
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join(' ');
    //goodsList=goodsList.replace("div>,","div>");
    
    
    document.querySelector('.goods-list').innerHTML = goodsList//.replace("div>,","div>");
    //list.join(' ');
    //alert (goods);
    //alert (list);
    //alert (goodsList);
    //alert(renderGoodsList);
};

renderGoodsList(goods);
