const app = new Vue({
    el: '#root',
    data: {

        slides: [{
                images: "./img/01.jpg",
                title: "Svezia",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'"
            },
            {
                images: "./img/02.jpg",
                title: "Svizzera",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'"
            },

            {
                images: "./img/03.jpg",
                title: "Gran Bretagna",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'"
            },
            {
                images: "./img/04.jpg",
                title: "Germania",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'"
            },
            {
                images: "./img/05.jpg",
                title: "Paradise",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'"
            }
        ],


        counter: 0,
        timer: 0,

    },
    
    mounted: function () {
        this.play();
    },
    methods: {
        prev: function () {
            if (this.counter == 0) {
                this.counter = this.slides.length - 1;
                this.resetPlay();
            } else {
                this.counter--;
            }
        },

        next: function () {
            if (this.counter == this.slides.length - 1) {
                this.counter = 0;
                this.resetPlay();

            } else {
                this.counter++
            }
        },

        selectImg: function (index) {
            this.counter = index;
            this.resetPlay();
        },

        play: function () {
            let app = this;
            this.timer = setInterval(function () {
                app.next();
            }, 2000);
        },
        resetPlay: function () {
            clearInterval(this.timer);
            this.play();
        },

        stopSlider: function(){
            clearInterval(this.timer);
        }

    }





    // ---aggiungi classe active utilizzando una funzione----

    // setActiveClass: function (index){
    //     if(index == this.counter){
    //         return 'active-t';
    //     }else{
    //         return '';
    //     }
    // }


});

