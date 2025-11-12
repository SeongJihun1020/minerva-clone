<template>
    <div class="flex justify-center items-center py-10 bg-white">
        <div class="w-full max-w-6xl">
            <Swiper :modules="[Navigation, Pagination, Autoplay]" navigation pagination :autoplay="{ delay: 3000, disableOnInteraction: false}" loop class="rounded-xl shadow-xl">
                <SwiperSlide v-for="(img, index) in images" :key="index">
                    <img :src="img" class="w-full h-auto object-contain" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

defineProps({
    images: {
        type: Array,
        required: true
    }
})
</script>