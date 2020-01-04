const cart = [];





Vue.component('search', {
  props: {
    searchLine: {
      type: String,
      required: false,
      default: '',
    }
  },
  template: `
      <form class="search-form" @submit.prevent>
        <input type="text" placeholder='поиск товаров' class="search-input" :value="searchLine"
          @input="updateSearchLine"/>
      </form>
  `,
  methods: {
    updateSearchLine(val) {
      const value = val.target.value;
      this.$emit('update:searchLine', value);
    }
  }
});

Vue.component('cart', {
  data: () => ({
    cart,
    isVisibleCart: false,
  }),

  methods: {
    delFromCart(index) {
      //console.log(this.good);
      this.cart.splice(index, 1);
      // this.cart = [...this.cart];
      this.$emit('delete', index);
    },

    toggleVisibility() {
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
  template: `
    <div class="cart-container" v-if="isVisibleCart">
  
    <ul>
        <li v-for="(good, index) in cart">
           {{good.product_name}}
           {{good.price}}
           <button @click="delFromCart(index)">Удалить</button>
           
        </li>
      </ul>
     

    </div>
  `
});

Vue.component('goods-item', {
  props: ['good'],
  methods: {
    buy() {

      cart.push(this.good);
      console.log(this.good);

      this.$emit('buy', this.good);

    }
  },
  template: `
    <div class="goods-item">
    <div>    
        <h3>{{ good.product_name }}</h3>
        <p>Цена&nbsp;{{ good.price }}</p>
       </div>
        <div> <img class="goods-item-pict" src="img/placeholder_200x200.png" alt="logo"></div>
        <button class="goods-item-button" @click="buy">Купить</button></div>
    </div>
  `,
});

Vue.component('goods-list', {
  props: ['goods'],

  methods: {
    buy(good) {
      // cart.push(this.good);
      this.$emit('buy', good);
    }
  },

  computed: {
    isGoodsEmpty() {
      return this.goods.length === 0;
    }
  },
  template: `
    <div class="goods-list" v-if="!isGoodsEmpty">
      <goods-item v-for="good in goods" :good="good" @buy="buy" :key="good.id_product"></goods-item>
    </div>
    <div class="not-found-items" v-else>
      <h2>Нет данных</h2>
    </div>
  `,
});

const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    searchLine: '',
    error: '',
  },
  methods: {
    setError(e) {
      this.error = e.message || e;
      setTimeout(() => {
        this.error = '';
      }, 3500);
    },
    makeGETRequest(url) {
      return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
          xhr = new window.XMLHttpRequest();
        } else {
          xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              let body = JSON.parse(xhr.responseText);
              // let body = (xhr.responseText);
              resolve(body)
            } else {
              reject(xhr.responseText);
            }
          }
        };
        xhr.onerror = function (err) {
          reject(err);
        };

        xhr.open('GET', url);
        xhr.send();
      });
    },

    async buy(good) {

      this.makePOSTRequest('/cart', good) //s
      //cart.push(good);
      this.makeGETRequest('/cart', good)
    },
    delFromCart(index) {
      this.makeDELRequest(`/cart/${index}`)


    },



    makeDELRequest(url) {
      return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
          xhr = new window.XMLHttpRequest();
        } else {
          xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              //  const body = JSON.parse(xhr.responseText);
              let body = (xhr.responseText);
              resolve(body)
            } else {
              reject(xhr.responseText);
            }
          }
        };
        xhr.onerror = function (err) {
          reject(err);
        };

        xhr.open('DELETE', url);
        xhr.send();
      });
    },


    makePOSTRequest(url, data) {
      return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
          xhr = new window.XMLHttpRequest();
        } else {
          xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              //const body = JSON.parse(xhr.responseText);
              let body = (xhr.responseText);
              resolve(body)
            } else {
              reject(xhr.responseText);
            }
          }
        };
        xhr.onerror = function (err) {
          reject(err);
        };

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(data));
      });
    },
    toggleCartVisibility() {
      this.$refs.cart.toggleVisibility();
    },
  },
  computed: {
    isSearchActive() {
      return this.searchLine.length > 0;
    },
    filteredGoods() {
      const searchValue = this.searchLine.replace(/[\*]/gi, '');
      const regexp = new RegExp(searchValue, 'i');
     // return this.goods.filter((good) => regexp.test(good.product_name));
     const  resultfilter= this.goods.filter((good) => regexp.test(good.product_name));
     return resultfilter;
    },
  },
  mounted() {
    Promise.all([
      this.makeGETRequest(`/cart`),
      this.makeGETRequest(`/catalog`)


    ]).then(([cartdata, catalogdata]) => {

      this.goods = catalogdata;
      cart.push(...cartdata);

      console.log(cartdata);
      console.log(catalogdata);

    }).catch(() => {
      this.setError('Товары не найдены');
    })


    /*    let cartdata  = this.makeGETRequest('/cart');
    //    let catalogdata = this.makeGETRequest('/catalog');
    console.log(cartdata);
    console.log(catalogdata);    

        try {
          this.goods = await this.makeGETRequest(`/catalog`);
        } catch (e) {
          this.setError('Товары не найдены');
        }
      */
  }
});