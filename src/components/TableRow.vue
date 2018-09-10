<template>
    <tr class="row">
        <td class="task-name">
            {{ taskName }}
        </td>

        <td class="executor">
            {{ userName }}
        </td>

        <td class="time">
            {{ taskTime }}
        </td>

        <td class="price">
            {{ taskPrice }}
        </td>

        <td class="manage">
            <router-link :to=link>
                <appButton name="Изменить"></appButton>
            </router-link>
            <appButton @clickButton="removeTask" name="Удалить" :index=index></appButton>
        </td>
    </tr>
</template>

<script>
import Button from "./Button";

export default {
  name: "TableRow",
  data() {
    return {
      user: {},
      time: this.task.time,
      link: {
        name: "edit",
        params: { id: this.index }
      }
    };
  },
  components: {
    appButton: Button
  },
  props: ["task", "index"],
  computed: {
    taskPrice() {
      return this.userPrice * this.taskTime;
    },
    taskTime() {
      return this.task.time;
    },
    taskName() {
      return this.task.name;
    },
    userName() {
      const users = this.$store.getters.users;
      const user = users.filter(el => {
        if (el.id === this.task.user_id) {
          return el;
        }
      });
      return user[0].name;
    },
    userPrice() {
      const users = this.$store.getters.users;
      const user = users.filter(el => {
        if (el.id === this.task.user_id) {
          return el;
        }
      });
      return user[0].price;
    }
  },
  methods: {
    removeTask() {
      const total = this.$store.getters.total;
      total.tasks--;
      total.time -= this.task.time;
      total.cost -= this.taskPrice;
      this.$store.dispatch("updateTotal", total);
      this.$store.dispatch("removeTask", this.index);
    }
  },
  created() {
    const total = this.$store.getters.total;
    total.tasks++;
    total.time += this.task.time;
    total.cost += this.taskPrice;
    this.$store.dispatch("updateTotal", total);
  }
};
</script>

<style>
.manage {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
