<template>
    <header :class="['group', 'fixed top-0', 'left-0 w-full', 'z-50', 'py-0', '[&.transparent]:py-5', 'bg-white', { 'transparent': transparent }, '[&.transparent]:bg-transparent']" class="transition ease-in-out duration-500">
        <div class="container mx-auto">
            <div class="flex items-center justify-between py-4">
                <div>
                    <a href="/">
                        <span v-if="transparent" class="text-white text-2xl font-bold">Logo Placeholder</span>
                        <span v-else class="text-black text-2xl font-bold">Logo Placeholder</span>
                    </a>
                </div>
                <nav>
                    <Navigation/>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const transparent = ref( false );

    const handleScroll = () => {
        if (window.scrollY > 100) {
            transparent.value = false;
        } else {
            transparent.value = true;
        }
    };

    onMounted(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    });
</script>
