/**
 * Gestion del menú lateral
 *
 */

import { computed } from "vue";
import { useStore } from "vuex";

export function useDrawer() {
  const $store = useStore();

  //console.log($store.state.ui.isSideMenuOpen)
  //console.log($store.getters["ui/isSideMenuOpen"]);

  return {
    //sideMenuOpen: computed(() => $store.getters["ui/isSideMenuOpen"]),

	/*
	 * Por defecto las propiedades computadas son gettetes pero es posible establecer 
	 * un setter si es necesario
	 */
    sideMenuOpen: computed({
      get() {
        return $store.getters["ui/isSideMenuOpen"];
      },

      set(value) {
        console.log(value)
		$store.commit("ui/toggleSideName")
      },

	}),

    toggleSideMenu: () => {
		$store.commit("ui/toggleSideName")
    },
  };
}
