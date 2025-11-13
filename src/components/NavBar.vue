<template>
    <header class="bg-white border-b shadow-sm">
        <div class="max-w-7xl mx-auto flex items-center justify-between h-20 px-10">
            <RouterLink to="/" class="flex items-center space-x-2">
                <img src="@/assets/logo.png" alt="MINERVA EDU Inc." class="h-10 w-auto" />

            </RouterLink>
            <nav class="flex items-center space-x-10 text-gray-600 font-medium text-[15px]">

                <RouterLink to="/" class="hover:text-yellow-500 transition"
                    :class="{ 'text-yellow-500 font-semibold': route.path === '/' }">
                    HOME
                </RouterLink>

                <div class="relative" @mouseenter="openMenu('company')" @mouseleave="closeMenuWithDelay">
                    <RouterLink to="/company" class="flex items-center gap-1 hover:text-yellow-500 transition"
                        :class="{ 'text-yellow-500 font-semibold': route.path.startsWith('/company') }">
                        미네르바에듀듀듀
                        <svg class="w-3 h-3 mt-[1px]" viewBox="57 35.171 26 16.043" fill="currentColor">
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg>
                    </RouterLink>

                    <transition name="fade">
                        <ul v-if="openDropdown === 'company'"
                            class="absolute right-0 mt-2 bg-white shadow-lg border rounded-md w-48 text-sm text-gray-600 z-50"
                            @mouseenter="cancelClose" @mouseleave="closeMenuWithDelay">
                            <li class="flex border-l-4 border-yellow-400 rounded-l-md">
                                <div class="flex flex-col py-2 w-full">
                                    <li v-for="(item, i) in companyLinks" :key="i" class="flex items-center transition-all duration-150">
                                        <RouterLink :to="item.to" class="flex-1 px-4 py-2 transition-colors duration-150" :class="{'text-yellow-500 font-semibold bg-yellow-50/40':route.path === item.to, 'text-gray-600 hover:text-yellow-500 hover:bg-yellow-50/20':route.path !== item.to}">{{ item.label }}</RouterLink>
                                    </li>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>

                <div class="relative" @mouseenter="openMenu('ebook')" @mouseleave="closeMenuWithDelay">
                    <RouterLink to="/ebook" class="flex items-center gap-1 hover:text-yellow-500 transition"
                        :class="{ 'text-yellow-500 font-semibold': route.path.startsWith('/ebook') }">
                        꾸럼e
                        <svg class="w-3 h-3 mt-[1px]" viewBox="57 35.171 26 16.043" fill="currentColor">
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg>
                    </RouterLink>

                    <transition name="fade">
                        <ul v-if="openDropdown === 'ebook'"
                            class="absolute right-0 mt-2 bg-white shadow-lg border rounded-md w-48 text-sm text-gray-600 z-50"
                            @mouseenter="cancelClose" @mouseleave="closeMenuWithDelay">
                            <li class="flex border-l-4 border-yellow-400 rounded-l-md">
                                <div class="flex flex-col py-2 w-full">
                                    <li v-for="(item, i) in ebookLinks" :key="i" class="flex items-center transition-all duration-150">
                                        <RouterLink :to="item.to" class="flex-1 px-4 py-2 transition-colors duration-150" :class="{'text-yellow-500 font-semibold bg-yellow-50/40':route.path === item.to, 'text-gray-600 hover:text-yellow-500 hover:bg-yellow-50/20':route.path !== item.to}">{{ item.label }}</RouterLink>
                                    </li>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const openDropdown = ref(null)
let closeTimer = null

const openMenu = (name) => {
    clearTimeout(closeTimer)
    openDropdown.value = name
}

const closeMenuWithDelay = () => {
    closeTimer = setTimeout(() => {
        openDropdown.value = null
    }, 250)
}

const cancelClose = () => {
    clearTimeout(closeTimer)
}

const companyLinks = [
    { label: '미네르바에듀', to: '/company' },
    { label: 'MINERVA EDU Inc', to: '/company-eng'}
]

const ebookLinks = [
    { label: '꾸럼e [KOR]', to: '/ebook' },
    { label: '꾸럼e [ENG]', to: '/ebook-eng' }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
    transform-origin: top;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>
