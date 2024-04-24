var app = new Vue({
    el: "#all-peppers",
    data:{
        products:[
            {id:1,title:"Jalapeno",short_text:"Medium-sized Red Blunt Pepper",image:'../images/Jalapeno.jpg',
            desc:{
                plant:{p1:"Strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Nice shiny attractive deep green color.",
                       f3:"Average fruit size: 5-9 cm long."},
                cycle:{c1:"Spring",c2:"Winter"},
                color:"Red"
            }},
            {id:2,title:"Serrano",short_text:"Small-sized Red Cylindrical Pepper",image:'../images/Serrano.jpg',
            desc:{
                plant:{p1:"Strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Nice shiny attractive deep green color.",
                       f3:"Average fruit size: 5-9 cm long."},
                cycle:{c1:"Spring",c2:"Summer"},
                color:"Red"
            }},
            {id:3,title:"Cayenne",short_text:"Cayenne Long Red Slim Pepper",image:'../images/Cayenne Pepper.png',
            desc:{
                plant:{p1:"Strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Nice shiny attractive deep red color.",
                       f3:"Average fruit size: 12-15 cm long."},
                cycle:{c1:"Spring",c2:"Summer"},
                color:"Red"
            }},
            {id:4,title:"Habanero",short_text:"Habanero Small-sized Orange Lantern Pepper",image:'../images/Habanero.png',
            desc:{
                plant:{p1:"Strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Bright, shiny, attractive deep orange color.",
                       f3:"Average fruit size: 2.5-6 cm long."},
                cycle:{c1:"Spring",c2:"Summer"},
                color:"Orange"
            }},
            {id:5,title:"Tabasco",short_text:"Tabasco Small-sized Red Round Pepper",image:'../images/Tabasco.png',
            desc:{
                plant:{p1:"Cabbage_5 is strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Bright, shiny, attractive deep red color.",
                       f3:"Average fruit size: 3-4 cm long."},
                cycle:{c1:"Spring",c2:"Summer"},
                color:"Red"
            }}
        ],
        product:[],
        cart:[],
        contactFields:[{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        }],
        btnVisible: 0,
        cartVisible:0,
        formSubmitted: false,
        formVisible: 1
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
            }

            if(this.cart.indexOf(String(id))==-1){
                this.cart.push(id);
                window.localStorage.setItem('cart',this.cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
            if (window.localStorage.getItem('cart') !== null) this.cartVisible = 1;
        },
        getCart:function(){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
                for(var value of this.cart){
                    for(var index in this.products){
                        if(value == this.products[index].id ){
                            this.product.push(this.products[index])
                        }
                    }
                }
            }
        },
        removeFromCart:function(id){
            for(var index in this.product){
                if(id ==  this.product[index].id){
                    this.product.splice(index,1);
                    this.cart.splice(index,1)
                }
            }
            window.localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
            location.reload();
        },
        makeOrder:function(){
            
            this.formVisible=0;
            this.cartVisible=0;
            
            this.cart = [];
            window.localStorage.removeItem('cart');
            alert("Ваш запит надіслано. Натисніть OK, щоб оновити сторінку.");
        }
    },
});