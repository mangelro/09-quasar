<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Formularios</span>
    <q-separator spaced />

    <div class="row justify-center">
      <div class="col-12 col-sm-6 q-pt-xl">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-y-sm q-pa-md">
          <q-input
            type="email"
            v-model="userForm.email"
            label="Su direccion de email"
            hint="escribe tu dirección de email"
            no-error-icon
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Este campo es obligatorio', isValidEmail]"
          />

          <q-input
            type="password"
            v-model="userForm.password1"
            label="Tu contraseña"
            lazy-rules
            no-error-icon
            :rules="[(val) => (val !== null && val !== '') || 'Este campo es obligatorio']"
          />
          <q-input
            type="password"
            v-model="userForm.password2"
            label="Repite tu contraseña"
            lazy-rules
            no-error-icon
            :rules="[
              (val) => (val !== null && val !== '') || 'Este campo es obligatorio',
              isSamePassword,
            ]"
          />

          <q-checkbox
            left-label
            v-model="userForm.conditions"
            label="Acepto las condiciones"
            :style="userForm.errorInConditions && !userForm.conditions && 'color:red'"
          />

          <div class="row justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-mr-sm" />
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { reactive } from 'vue'

const $q = useQuasar()

const userForm = reactive({
  email: '',
  password1: '',
  password2: '',
  conditions: false,
  errorInConditions: false,
})

const onSubmit = () => {
  if (userForm.conditions !== true) {
    console.log('debe aceptar')
    userForm.errorInConditions = true
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'las la-exclamation-circle',
      message: 'Debe aceptar las condiciones',
    })
  } else {
    userForm.errorInConditions = false
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'las la-check-circle',
      message: 'Enviado',
    })
  }
}

const onReset = () => {
  userForm.email = null
  userForm.password1 = null
  userForm.password2 = null
  userForm.conditions = false
  userForm.errorInConditions = false
}

const isValidEmail = (val) => {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
  return emailPattern.test(val) || 'El correo no parece ser válido'
}

const isSamePassword = (val) => {
  return val === userForm.password1 || 'El password no es igual'
}
</script>
