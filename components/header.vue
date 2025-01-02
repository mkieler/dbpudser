
<template>
    <header :class="['fixed top-0', 'left-0 w-full', 'z-50', headerBg, headerShadow, textColor]" class="transition ease-in-out duration-300" >
        <div class="container mx-auto">
            <div class="flex items-center justify-between py-4">
                <div>
                    <a href="/" class="text-lg font-bold">Logo</a>
                </div>
                <nav>
                    <Navigation/>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
    const headerBg = ref('bg-transparent');
    const headerShadow = ref('shadow-none');
    const textColor = ref('text-white');

    onMounted(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                headerBg.value = 'bg-white';
                headerShadow.value = 'shadow-md';
                textColor.value = 'text-black';
            } else {
                headerBg.value = 'bg-transparent';
                headerShadow.value = 'shadow-none';
                textColor.value = 'text-white';
            }
        });
    });
</script>
    