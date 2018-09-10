<template>
    <table class="table">
        <tr class="row">
            <td class="table-heading" v-for="(field, index) in tableFields" :key=index>{{ field }}</td>
        </tr>
        <appTableRow v-for="(task, index) in tasks" :task=task  :key=index :index=index></appTableRow>
    </table>
</template>

<script>
import TableRow from "./TableRow";
export default {
  name: "TableGrid",
  data() {
    return {
      tableFields: [
        "Название",
        "Исполнитель",
        "Затраченное время (в часах)",
        "Стоимость работ (в рублях)",
        "Действия"
      ]
    };
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasks;
      }
    }
  },
  components: {
    appTableRow: TableRow
  }
};
</script>

<style>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table-heading {
  font-weight: bold;
}

td {
  padding: 15px;
  border-top: 1px solid grey;
}
</style>
