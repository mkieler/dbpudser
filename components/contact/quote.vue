<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { faList, faAddressCard, faEye } from '@fortawesome/free-solid-svg-icons'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
// import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { Check, Circle, Dot } from 'lucide-vue-next'
import { h, ref } from 'vue'
import * as z from 'zod'

const formSchema = [
  z.object({
    fullName: z.string(),
    email: z.string().email(),
  }),
  z.object({
    password: z.string().min(2).max(50),
    confirmPassword: z.string(),
  }).refine(
    (values) => {
      return values.password === values.confirmPassword
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    },
  ),
  z.object({
    favoriteDrink: z.union([z.literal('coffee'), z.literal('tea'), z.literal('soda')]),
  }),
]

const stepIndex = ref(1)
const steps = [
  {
    step: 1,
    title: 'Oplysninger',
    icon: faAddressCard,
  },
  {
    step: 2,
    title: 'Services',
    icon: faList,
  },
  {
    step: 3,
    title: 'Bekræft og send',
    icon: faEye,
  },
]

const { serviceItems } = useServices();
const services = serviceItems.map((service) => {
  return {
    name: service.name.toLocaleLowerCase().replace(' ', '-'),
    title: service.name,
  }
})

function onSubmit(values: any) {
//   toast({
//     title: 'You submitted the following values:',
//     description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
//   })

console.log('Form submitted!', values)
}
</script>

<template>
  <Form
    v-slot="{ meta, values, validate }"
    as="" keep-values :validation-schema="toTypedSchema(formSchema[stepIndex - 1])"
  >
    <Stepper v-slot="{ isNextDisabled, isPrevDisabled, nextStep, prevStep }" v-model="stepIndex" class="block w-full">
      <form
        @submit="(e) => {
          e.preventDefault()
          validate()

          if (stepIndex === steps.length && meta.valid) {
            onSubmit(values)
          }
        }"
      >
        <div class="flex w-full flex-start gap-2">
          <StepperItem
            v-for="step in steps"
            :key="step.step"
            v-slot="{ state }"
            class="relative flex w-full flex-col items-center justify-center"
            :step="step.step"
          >
            <StepperSeparator
              v-if="step.step !== steps[steps.length - 1].step"
              class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
            />

            <StepperTrigger as-child>
              <Button
                :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                size="icon"
                class="z-10 rounded-full rshrink-0"
                :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                :disabled="state !== 'completed' && !meta.valid"
              >
                <font-awesome :icon="step.icon"/>
              </Button>
            </StepperTrigger>

            <div class="mt-5 flex flex-col items-center text-center">
              <StepperTitle
                :class="[state === 'active' && 'text-primary']"
                class="text-sm font-semibold transition lg:text-base"
              >
                {{ step.title }}
              </StepperTitle>
            </div>
          </StepperItem>
        </div>

        <div class="grid grid-cols-2 gap-5 mt-4">
          <template v-if="stepIndex === 1">
            <FormField v-slot="{ componentField }" name="fullName">
              <FormItem class="col-span-2">
                <FormLabel>Navn</FormLabel>
                <FormControl>
                  <Input type="text" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email " v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="phone">
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input type="tel" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </template>

          <template v-if="stepIndex === 2">
            <div class="row-span-2">
              <p class="text-sm font-semibold mb-3">Services</p>
              <FormField v-for="service in services" v-slot="{ componentField }" :key="service.name" :name="service.name">
                <FormItem class="flex flex-row items-start space-x-3 space-y-0 mb-2">
                  
                <FormControl>
                  <Checkbox

                  />
                </FormControl>
                <FormLabel class="font-normal">
                  {{ service.title }}
                </FormLabel>
                </FormItem>
              </FormField>
            </div>

            <FormField v-slot="{ componentField }" name="interval">
              <FormItem>
                <FormLabel>Hvor ofte?</FormLabel>

                <Select v-bind="componentField">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Interval" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="once">
                        En gang
                      </SelectItem>
                      <SelectItem value="1-month">
                        Hver måned
                      </SelectItem>
                      <SelectItem value="2-month">
                        Hver anden måned
                      </SelectItem>
                      <SelectItem value="3-month">
                        Hver tredje måned
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="interval">
              <FormItem>
                <FormLabel>Hvor ofte?</FormLabel>

                <Select v-bind="componentField">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Interval" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="once">
                        En gang
                      </SelectItem>
                      <SelectItem value="1-month">
                        Hver måned
                      </SelectItem>
                      <SelectItem value="2-month">
                        Hver anden måned
                      </SelectItem>
                      <SelectItem value="3-month">
                        Hver tredje måned
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </FormField>
            
          </template>

          <template v-if="stepIndex === 3">
            
          </template>
        </div>

        <div class="flex items-center justify-between mt-4">
          <Button :disabled="isPrevDisabled" variant="outline" size="sm" @click="prevStep()">
            Back
          </Button>
          <div class="flex items-center gap-3">
            <Button v-if="stepIndex !== 3" :type="meta.valid ? 'button' : 'submit'" :disabled="isNextDisabled" size="sm" @click="meta.valid && nextStep()">
              Next
            </Button>
            <Button
              v-if="stepIndex === 3" size="sm" type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Stepper>
  </Form>
</template>