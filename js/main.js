const app = new Vue({
    el: '#root',
    data: {
        
        images: [
            './img/01.jpg',
            './img/02.jpg',
            './img/03.jpg',
            './img/04.jpg',
            './img/05.jpg',
        ],

        title: [
            'Svezia',
            'Svizzera',
            'Gran Bretagna',
            'Germania',
            'Paradise'
        ],

        description: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            'Lorem ipsum',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        ],


        counter: 0,
        timer: 0,


    },
    methods: {
        prev: function () {
            if (this.counter == 0) {
                this.counter = this.images.length - 1;
                this.resetPlay();
            } else {
                this.counter--;
            }
        },

        next: function () {
            if (this.counter == this.images.length - 1) {
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
        
        created: function () {
            this.play();
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
                