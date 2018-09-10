<template>
    <div class="container">
        <h2>Новая задача</h2>
        <label for="task_name">Наименование задачи</label>
        <input v-model="task.name" class="form-item" id="task_name" type="text" required>
        <label for="executor">Исполнитель</label>
        <select v-model="task.user_id" class="form-item" name="executor" id="executor" required>
            <option v-for="(user, index) in users" :value=user.id :key=index>{{ user.name }}</option>
        </select>
        <label for="time">Время выполнения</label>
        <input v-model="task.time" class="form-item" id="time" type="number" required>
        <router-link to="/"><appButton @clickButton="addTask" class="button" name="Сохранить"></appButton></router-link>
    </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "New",
  data() {
    return {
      task: {
        id: "",
        name: "",
        user_id: "",
        time: 0
      }
    };
  },
  components: {
    appButton: Button
  },
  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  methods: {
    addTask() {
      const random_num = new Uint8Array(2048 / 8);
      const crypto = window.crypto || window.msCrypto;
      this.task.id = crypto.getRandomValues(random_num);
      this.task.time = Number.parseInt(this.task.time);
      this.$store.dispatch("addTask", this.task);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}

h2 {
  align-self: center;
  text-transform: uppercase;
}

.form-item {
  margin-bottom: 30px;
  margin-top: 20px;
  border: 2px solid black;
  border-radius: 3px;
  height: 30px;
  outline: none;
}

.button {
  align-self: center;
}
</style>
