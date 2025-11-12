<template>
    <div class="flex flex-col items-center justify-center bg-white min-h-screen pt-10">
        
        <RouterLink to="/company" class="w-full max-w-5xl mb-16 hover:opacity-90 transition">
            <img src="@/assets/intro1.png" alt="회사소개서" class="w-full h-auto rounded-2xl shadow-lg" />
        </RouterLink>

        <RouterLink to="/ebook" class="w-full max-w-5xl mb-8 hover:opacity-90 transition">
            <img src="@/assets/intro2.png" alt="꾸럼e BOOK" class="w-full h-auto rounded-2xl shadow-lg" />
        </RouterLink>

        <div class="mt-6 mb-32 text-center">
            <img src="@/assets/footer.png" alt="MINERVA EDU 로고" class="w-56 mx-auto mb-2" />
            <p class="text-gray-500 text-sm">
                Copyright © 2024 | minervaedu
            </p>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
