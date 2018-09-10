import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: "CAACE586-37BC-454E-8FAF-0FEC73C69969",
        name: "Разработка сервера",
        user_id: "7B1D6B3F-F986-4E5A-92FD-0CB361140A23",
        time: 42
      },
      {
        id: "A08E2244-E864-4304-BEDF-124D7A447135",
        name: "Разработка интерфейса",
        user_id: "4F0C3B4C-D8D8-4F01-9D9D-03758936EC05",
        time: 56
      },
      {
        id: "143B5AB2-C63F-4D56-880C-126BC5DFAE4A",
        name: "написание инструкции",
        user_id: "A518B7DC-6BB2-4945-AC10-06A296660BDC",
        time: 2.5
      }
    ],
    users: [
      {
        id: "4F0C3B4C-D8D8-4F01-9D9D-03758936EC05",
        name: "Иванов",
        price: 500
      },
      {
        id: "A518B7DC-6BB2-4945-AC10-06A296660BDC",
        name: "Петров",
        price: 250
      },
      {
        id: "7B1D6B3F-F986-4E5A-92FD-0CB361140A23",
        name: "Сидоров",
        price: 1000
      }
    ],
    total: {
      tasks: 0,
      time: 0,
      cost: 0
    }
  },
  mutations: {
    updateTotal(state, payload) {
      state.total = payload;
    },
    resetTotal(state) {
      state.total.tasks = 0;
      state.total.time = 0;
      state.total.cost = 0;
    },
    removeTask(state, payload) {
      state.tasks.splice(payload, 1);
    },
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    updateTask(state, payloadFirst, payloadSecond) {
      state.tasks.splice(payloadSecond, 1, payloadFirst);
    }
  },
  actions: {
    updateTotal({ commit }, payload) {
      commit("updateTotal", payload);
    },
    resetTotal({ commit }) {
      commit("resetTotal");
    },
    removeTask({ commit }, payload) {
      commit("removeTask", payload);
    },
    addTask({ commit }, payload) {
      commit("addTask", payload);
    },
    updateTask({ commit }, payloadFirst, payloadSecond) {
      commit("updateTask", payloadFirst, payloadSecond);
    }
  },
  getters: {
    users(state) {
      return state.users;
    },
    tasks(state) {
      return state.tasks;
    },
    total(state) {
      return state.total;
    }
  }
});
