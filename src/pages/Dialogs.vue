<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Dialogos</span>
    <q-separator spaced />

    <template v-if="name">
      <span class="text-h5">{{ name }}</span>
      <q-separator spaced />
    </template>

    <div class="q-pa-md q-gutter-sm">
      <q-btn :unelevated="true" label="Alert" color="primary" @click="alert" />
      <q-btn
        :unelevated="true"
        label="Confirm"
        color="primary"
        @click="confirm"
      />
      <q-btn
        :unelevated="true"
        label="Prompt"
        color="primary"
        @click="prompt"
      />
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "index-page",

  setup() {
    const name = ref();

    const $q = useQuasar();

    function alert() {
      $q.dialog({
        title: "Alert",
        message: "Some message",
        position: "top",
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    function confirm() {
      $q.dialog({
        title: "Confirm",
        message: "Would you like to turn on the wifi?",
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          //console.log('>>>> OK' + data);
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    function prompt() {
      $q.dialog({
        title: "Prompt",
        message: "What is your name?",
        prompt: {
          model: "",
          type: "text", // optional
        },
        cancel: true,
        persistent: true,
      })
        .onOk((data) => {
          console.log(">>>> OK, received", data);
          name.value = data;
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return { name, alert, confirm, prompt };
  },
};
</script>
