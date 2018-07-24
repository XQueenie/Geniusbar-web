export const state = () => ({
  menu: [],
  isOpen: true
});

export const mutations = {
  MENU_SET(state, menu) {
    state.menu = menu;
  },
  MENU_CLEAR(state) {
    state.menu = [];
  },
  MENU_OPEN(state, status = true) {
    state.isOpen = status;
  }
};
