<template>
    <div class="flex justify-center items-center min-h-screen bg-white">
        <div class="w-full max-w-6xl">
            <Swiper :modules="[Navigation, Pagination]" navigation :pagination="{ clickable: true }" loop grabCursor
                class="rounded-2xl shadow-xl">
                <SwiperSlide v-for="(img, index) in slides" :key="index">
                    <img :src="img" alt="" class="w-full h-auto object-contain select-none" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
    new URL('@/assets/e/1-scaled-e.jpg', import.meta.url).href,
    new URL('@/assets/e/2-scaled-e.jpg', import.meta.url).href,
    new URL('@/assets/e/3-scaled-e.jpg', import.meta.url).href,
    new URL('@/assets/e/4-scaled-e.jpg', import.meta.url).href,
    new URL('@/assets/e/5-scaled-e.jpg', import.meta.url).href,
    new URL('@/assets/e/6-scaled-e.jpg', import.meta.url).href,
]
</script>

<style scoped>
.swiper-pagination {
    bottom: 10px !important;
}

.swiper-pagination-bullet {
    background-color: #bbb;
    opacity: 1;
    width: 10px;
    height: 10px;
    margin: 0 4px !important;
    transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
    background-color: #000;
    transform: scale(1.3);
}

.swiper-button-next,
.swiper-button-prev {
    color: #3b82f6;
    transition: opacity 0.2s;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    opacity: 0.7;
}
</style>
