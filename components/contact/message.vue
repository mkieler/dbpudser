<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'


const formSchema = toTypedSchema(z.object({
    name: z.string().min(2, 'Mindst 2 tegn').max(50),
    email: z.string().email('Indsæt en gyldig email'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Mindst 10 tegn').max(500, 'Maks 500 tegn')
}))

function onSubmit(values) {
    console.log('Form submitted!', values)
}
</script>

<template>
    <Form :validation-schema="formSchema" @submit="onSubmit">
        <div class="grid grid-cols-2 gap-3">
            <FormField v-slot="{ componentField }" name="name">
                <FormItem class="col-span-2">
                    <FormLabel>Navn *</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="shadcn" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="example@example.com" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="phone">
                <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                        <Input type="tel" placeholder="12345678" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="message">
                <FormItem class="col-span-2">
                    <FormLabel>Besked * </FormLabel>
                    <FormControl>
                        <Textarea v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
        </div>
        
        <Button type="submit" class="w-full text-lg p-7 mt-7">
            Send besked
            <font-awesome :icon="faPaperPlane" class="ml-3" />
        </Button>
        <p class="text-slate-400 text-sm text-center mt-5">
            Vi bestræber os på at besvare alle henvendelser indenfor 24 timer.
            Felter med * skal udfyldes
        </p>
    </Form>
</template>