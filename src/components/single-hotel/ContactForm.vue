<script setup lang="ts">
import FormLabel from "@/components/form/FormLabel.vue";
import InputComponent from "@/components/form/InputComponent.vue";
import ButtonComponent from "@/components/form/ButtonComponent.vue";
import {computed, ref} from "vue";
import {toast} from "vue3-toastify";

const emits = defineEmits(['onFormSubmit'])

const name = ref('');
const email = ref('');
const cardNumber = ref('');
const cvv = ref('');
const checkIn = ref('');
const checkOut = ref('');


const isFormValid = computed(() => {
  return name.value !== '' && email.value !== '' && cardNumber.value !== '' && cvv.value !== '' && checkIn.value !== '' && checkOut.value !== '';
});

const submitForm = () => {
  if (isFormValid.value) {
    toast.success('Agendamento de reserva feito com sucesso!', {
      autoClose: 2000,
      theme: 'dark'
    });
    emits('onFormSubmit');
  } else {
    emits('onFormSubmit');
  }
};

</script>

<template>
  <form class="flex flex-col gap-[20px]" @submit.prevent="submitForm">
    <div class="flex gap-[20px]">
      <div class="form-group">
        <FormLabel>Nome</FormLabel>
        <InputComponent v-model="name" placeholder="Jon Doe" type="text" variant="secondary" />
      </div>

      <div class="form-group">
        <FormLabel>E-mail para contato</FormLabel>
        <InputComponent v-model="email" placeholder="jondoe@email.com" type="text" variant="secondary" />
      </div>

      <div class="form-group">
        <FormLabel>Check-in</FormLabel>
        <InputComponent v-model="checkIn" placeholder="Jon Doe" type="date" variant="secondary" />
      </div>

      <div class="form-group">
        <FormLabel>Check-out</FormLabel>
        <InputComponent v-model="checkOut" placeholder="jondoe@email.com" type="date" variant="secondary" />
      </div>
    </div>

    <div class="flex gap-[20px]">
      <div class="form-group">
        <FormLabel>Número do cartão</FormLabel>
        <InputComponent v-model="cardNumber" placeholder="xxxx xxxx xxxx xxxx" type="text" variant="secondary" />
      </div>

      <div class="form-group">
        <FormLabel>CVV</FormLabel>
        <InputComponent v-model="cvv" className="max-w-[60px]" placeholder="004" type="text" variant="secondary" />
      </div>
    </div>

    <ButtonComponent type="submit" :className="`w-full max-w-[400px] h-[50px] ${!isFormValid ? 'opacity-[0.2] cursor-not-allowed' : ''}`">Agendar Reserva</ButtonComponent>
  </form>
</template>

<style lang="css" scoped>
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>
