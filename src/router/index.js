import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Ebook from '@/views/Ebook.vue'
import Company from '@/views/Company.vue'
import CompanyEng from '@/views/CompanyEng.vue'
import EbookEng from '@/views/EbookEng.vue'

const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/company',
        component : Company
    },
    {
        path : '/ebook',
        component : Ebook
    },
    {
        path : '/company-eng',
        component : CompanyEng
    },
    {
        path : '/ebook-eng',
        component : EbookEng
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;