<template>
    <div class="total">
        <div class="total__data">
            <p>Всего задач: <span>{{ total.tasks }}</span></p>
            <p>Общее время: <span>{{ total.time }}</span></p>
            <p>Общая стоимость: <span>{{ total.cost }}</span></p>
        </div>
        <div class="total__controls">
            <router-link to="/new"><appButton class="total__new" name="Новая задача"></appButton></router-link>
        </div>

    </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Total",
  computed: {
    total() {
      return this.$store.getters.total;
    }
  },
  components: {
    appButton: Button
  },
  destroyed() {
    this.$store.dispatch("resetTotal");
  }
};
</script>

<style lang="scss" scoped>
.total {
  display: flex;
  width: 100%;
  font-weight: bold;
  justify-content: space-between;
  border-top: 2px solid black;

  &__data {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }

  &__new {
    align-self: center;
  }

  &__save {
  }
}

span {
  font-size: 20px;
}
</style>
