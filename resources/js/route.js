import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import PostComponent from "./components/PostComponent";  //importo il componente per le rotta
import ContactComponent from "./components/ContactComponent";


const router = new VueRouter({
    routes: [{ path: '/', name: 'home', component: PostComponent },
            { path:"/Contact", name:'Contact', component: ContactComponent}

        ],
})

export default router;
