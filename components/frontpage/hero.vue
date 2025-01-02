<script setup>
import { Button } from '@/components/ui/button'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

</script>

<template>
    <div class="relative text-white  h-[35rem] md:h-[95vh] md:max-h-[80rem]">
        <video 
            src="/videos/intro.mp4" 
            controls
            preload="none"
            autoplay="true" 
            loop="true" 
            muted="true" 
            class="w-full h-full object-cover absolute top-0 left-0 z-0" 
            />
        
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>
    
        <div class="container max-w-screen-md mx-auto flex flex-col items-center justify-center h-full z-10 relative text-center ">
            <p class="text-sm md:text-base text-slate-400">Professionel vinduespolering og rengøring</p>
            <h1 class="text-3xl md:text-6xl font-bold mt-2">Glasklart perfektion</h1>
            <p class="text-sm md:text-lg my-5 text-slate-400">
                Hos [Din Virksomhedsnavn] tilbyder vi professionel vinduespudsning, skånsom solcellevask og miljøvenlig rengøring. Få skinnende resultater i [Dit Område]. Kontakt os i dag for et gratis tilbud og oplev forskellen!
            </p>
            <div class="flex gap-4">
                <Button class="mt-4 md:p-6 md:text-lg">Kontakt os</Button>
                <Button variant="secondary" class="mt-4 md:p-6 md:text-lg">Læs mere</Button>
            </div>
    
            <div class="absolute bottom-20 left-0 w-full max-w-screen-md gap-5 text-white hidden md:flex">
                <div class="flex items-center text-lg gap-2">
                    <font-awesome :icon="faCheck"  />
                    <p >Professionel service</p>
                </div>
                <div class="flex items-center text-lg gap-2">
                    <font-awesome :icon="faCheck" />
                    <p >Miljøvenlige produkter</p>
                </div>
                <div class="flex items-center text-lg gap-2">
                    <font-awesome :icon="faCheck"/>
                    <p>Danske medarbejdere</p>
                </div>
                <div class="flex items-center text-lg gap-2">
                    <font-awesome :icon="faCheck"/>
                    <p>Loyalitet</p>
                </div>
    
            </div>
        </div>
    </div>
</template>