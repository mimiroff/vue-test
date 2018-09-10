<template>
    <div class="container">
        <h2></h2>
        <label for="task_name">Наименование задачи</label>
        <input v-model="task.name" class="form-item" id="task_name" type="text" required>
        <label for="executor">Исполнитель</label>
        <select v-model="task.user_id" class="form-item" name="executor" id="executor" required>
            <option v-for="(user, index) in users" :value=user.id :key=index>{{ user.name }}</option>
        </select>
        <label for="time">Время выполнения</label>
        <input v-model="task.time" class="form-item" id="time" type="number" required>
        <router-link to="/"><appButton @clickButton="saveTask" class="button" name="Сохранить"></appButton></router-link>
    </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Edit",
  data() {
    return {
      task: {
        name: "",
        user_id: "",
        time: ""
      }
    };
  },
  props: ["id"],
  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  methods: {
    saveTask() {
      this.task.time = Number.parseInt(this.task.time);
      this.$store.dispatch("updateTask", this.task, this.id);
      this.$router.push("/");
    }
  },
  components: {
    appButton: Button
  },
  created() {
    this.task = this.$store.getters.tasks[this.id];
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
