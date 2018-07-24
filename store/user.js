export const state = () => ({
  username: "",
  email: "",
  avatar: "",
  role: "guest",
  token: ""
});

export const getters = {
  isLogin(state) {
    return state.role && state.role !== "guest";
  }
};

export const mutations = {};

export const actions = {};
// @todo
