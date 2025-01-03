<template>
    <Hero bg="/img/contact.jpg">
        <div class="container flex flex-col justify-end h-full z-10 relative">
            <h1 class="text-3xl md:text-6xl font-bold">Kontakt os</h1>
            <p class="mb-10 mt-5 text-slate-300">Vi sidder altid klar til at hjælpe</p>
        </div>
    </Hero>

    <div class="container flex flex-col md:flex-row pb-20">
        <div class="flex-1 flex flex-col gap-5 py-10 md:py-20">
            <div>
                <h2 class="text-2xl font-bold">[Din virksomhed]</h2>
                <p class="text-slate-600">CVR: 12345678</p>
            </div>
            <h3 class="text-xl font-bold">Kontaktinformation</h3>
            <div class="flex items-center gap-4">
                <font-awesome :icon="faPhone" class="text-primary text-lg" />
                <a href="tel:+4512345678" class="text-slate-600 text-lg">+45 12 34 56 78</a>
            </div>
            <div class="flex items-center gap-4">
                <font-awesome :icon="faEnvelope" class="text-primary text-lg" />
                <a href="mailto:test@test.dk" class="text-slate-600 text-lg">test@test.dk</a>
            </div>
            <div class="flex items-center gap-4">
                <font-awesome :icon="faMapLocationDot" class="text-primary text-lg" />
                <p class="text-slate-600 text-lg">Testvej 1, 1234 Testby</p>
            </div>
            <div class="flex items-center gap-4">
                <font-awesome :icon="faClock" class="text-primary text-lg" />
                <p class="text-slate-600 text-lg">Mandag - Fredag: 08:00 - 16:00</p>
            </div>
        </div>
        <Tabs default-value="quote" class="flex-1 bg-white drop-shadow rounded md:-mt-32 z-10">
            <TabsList class="grid w-full grid-cols-2 mb-2 p-2">
                <TabsTrigger value="quote" class="p-5">
                    <div class="flex flex-col">
                        <span class="text-lg">Få et tilbud</span>
                        <span class="text-sm text-slate-600 font-normal">Få en samlet pris med vores tilbudsformular</span>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="message" class="p-5">
                    <div class="flex flex-col">
                        <span class="text-lg">Send en besked</span>
                        <span class="text-sm text-slate-600 font-normal">Vi sidder klar til at hjælpe</span>
                    </div>
                </TabsTrigger>
            </TabsList>
            <div class="p-10">
                <TabsContent value="quote">
                    <ContactQuote />
                </TabsContent>
                <TabsContent value="message">
                    <h2 class="text-2xl font-bold mb-5">Send os en besked</h2>
                    <ContactMessage />
                </TabsContent>
            </div>
        </Tabs>
    </div>
</template>

<script setup>
    import { faPhone, faEnvelope, faMapLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
</script>