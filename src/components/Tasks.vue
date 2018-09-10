<template>
    <div class="container">
        <h2>Список работ</h2>
        <appTableGrid></appTableGrid>
        <appTotal></appTotal>
    </div>
</template>

<script>
import TableGrid from "./TableGrid";
import Total from "./Total";

export default {
  name: "Tasks",
  components: {
    appTableGrid: TableGrid,
    appTotal: Total
  }
};
</script>

<style scoped>
h2 {
  text-transform: uppercase;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
