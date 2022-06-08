<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleSideMenu"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <!-- TODO <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="sideMenuOpen"
      side="left"
      :overlay="false"
    >
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
    <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useDrawer } from "../composables/useDrawer";
import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "src/router/link-list";

export default {
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const { sideMenuOpen, toggleSideMenu } = useDrawer();

    return {
      linksList,
      sideMenuOpen,
      toggleSideMenu,
    };
  },
};
</script>
