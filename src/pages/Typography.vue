<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Typography</span>
    <span class="text-h2">Typography</span>
    <span class="text-h3">Typography</span>
    <span class="text-h4">Typography</span>
    <span class="text-h5">Typography</span>
    <span class="text-h6">Typography</span>

    <q-separator></q-separator>

    <span class="text-subtitle1">subtitle 1</span>
    <span class="text-subtitle2">subtitle 2</span>

    <q-separator></q-separator>
    <p class="text-body-1 q-mt-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
      architecto eaque quae eveniet, culpa illum non, autem veritatis rem iste
      in itaque aperiam accusantium soluta quam quibusdam hic. Dicta?
    </p>
    <p class="text-body-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
      architecto eaque quae eveniet, culpa illum non, autem veritatis rem iste
      in itaque aperiam accusantium soluta quam quibusdam hic. Dicta?
    </p>
    <q-separator></q-separator>

    <q-btn
      color="primary"
      icon="la la-external-link-square-alt"
      :label="buttonLabel"
      class="q-mt-md"
      :loading="loading"
      :percentage="percentage"
      @click="toggleSideMenu">

      <template v-slot:loading>
        <q-spinner-gears class="on-left"></q-spinner-gears>
        Computing...
      </template>
      
      </q-btn>
  </q-page>
</template>

<script>
import { useDrawer } from "../composables/useDrawer";
import { computed, watch  } from "vue";
import { ref } from "vue";



export default {
  name: "typography-page",

  setup() {
    const percentage=ref(0)
    const interval=setInterval(() => {
      percentage.value += 10
    }, 700);


    const loading=ref(false)
 
    setTimeout(() => {
      loading.value=true
    }, 1500);


    const fin= watch(percentage,(newValue)=> {

        if (newValue>=100){
          loading.value=false 
          clearInterval(interval)
        }

    })


    const { sideMenuOpen, toggleSideMenu } = useDrawer();



    return {
      loading,
      percentage,
      toggleSideMenu,
      buttonLabel: computed(() =>sideMenuOpen.value ? "Cerrar menú lateral" : "Abrir menú lateral"),
    };
  },
};
</script>
