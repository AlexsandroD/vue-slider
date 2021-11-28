const app = new Vue({
    el: '#root',
    data: {

        slides: [{
                images: "https://www.nerdevil.it/wp-content/uploads/2021/11/resident-evil-welcome-to-raccoon-city-recensione-nerdevil.jpg",
                title: "Svezia",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'",
                link: 'https://www.youtube.com/watch?v=IQqqAWMIIAQ&ab_channel=SonyPicturesEntertainment'
            },
            {
                images: "https://cdn.corrieredellosport.it/img/990/495/2021/11/25/155647579-612ac94f-5870-4e4d-87bd-7666e54ea867.jpg",
                title: "Svizzera",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'",
                link: 'https://www.callofduty.com/it'
            },

            {
                images: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEATHLOOP_ArkaneStudios_S1_2560x1440-bf6d342edbd2411ccf24e326852fca93",
                title: "Gran Bretagna",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'",
                link: 'https://bethesda.net/it/game/deathloop'
            },
            {
                images: "https://compass-ssl.xbox.com/assets/9c/94/9c944d9c-7ef1-4b46-9f68-9b02966d3993.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg",
                title: "Germania",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'",
                link: 'https://store.steampowered.com/app/1240440/Halo_Infinite/'
            },
            {
                images: "https://compass-ssl.xbox.com/assets/1c/80/1c80258b-70a2-49b9-b209-81c0e377862c.jpg?n=The-Medium_GLP-Page-Hero-1084_1920x1080_03.jpg",
                title: "Paradise",
                description: "'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'",
                link: 'https://www.youtube.com/watch?v=PJi-7Ue_7ms&ab_channel=BlooberTeam'
            }
        ],


        counter: 0,
        timer: 0,

    },

    created: function () {
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

        stopSlider: function () {
            clearInterval(this.timer);
        }

    }

});
