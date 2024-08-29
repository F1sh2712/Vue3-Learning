// create a router and then export
import {createRouter, createWebHistory} from 'vue-router'

// import components
import HomePage from '@/components/HomePage.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'
import Details from '@/components/NewsDetails.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {   
            name:'homePage',
            path:'/',
            component:HomePage
        },
        {   
            name:'news',
            path:'/news',
            component:News,
            children:[
                {
                    path:'detail',
                    component:Details
                }
            ]
        },
        {   
            name:'about',
            path:'/about',
            component:About
        }
    ]
})

export default router