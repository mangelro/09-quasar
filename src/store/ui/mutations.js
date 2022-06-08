// export function someMutation (/* state */) {
// }

/*
 * Cambia el estado
 */
export function toggleSideName(state) {
  state.isSideMenuOpen = !state.isSideMenuOpen;
}
