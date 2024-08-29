// create a router and then export
import {createRouter, createWebHistory} from 'vue-router'

// import components
import HomePage from '@/components/HomePage.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'
import Details from '@/components/NewsDetails.vue'

const router = createRouter({
    // work module for route
    history: createWebHistory(),
    // path for route
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
                    name:'detail',
                    // for params route
                    path:'detail/:id/:title/:content',
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