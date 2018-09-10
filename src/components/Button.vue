<template>
    <button @click="clickButton">{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["name", "index"],
  methods: {
    clickButton() {
      this.$emit("clickButton");
    }
  }
};
</script>

<style scoped>
button {
  display: inline-block;
  padding: 10px 15px;

  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #000000;
  text-transform: uppercase;
  text-decoration: none;

  background-color: #ffffff;
  border: 2px solid black;
  border-radius: 3px;
}

button:hover,
button:focus {
  text-decoration: none;

  background-color: #78fa9f;
}

button:active {
  background-color: #53d97b;
}
</style>
