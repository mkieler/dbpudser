<template>
    <header :class="['group', 'fixed top-0', 'left-0 w-full', 'z-50', 'drop-shadow', '[&.transparent]:drop-shadow-none', 'bg-white', { 'transparent': transparent }, '[&.transparent]:bg-transparent']" class="transition ease-in-out duration-500">
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

    const transparent = ref( true );

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

<style scoped>
    header{
        padding: 0;
        transition: all 0.3s;

        &.transparent{
            padding: 1rem 0;
        }
    }
</style>
