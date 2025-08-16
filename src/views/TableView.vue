<template>
  <div class="flex flex-col">
      <BaseCard>
        <h1 class="">Table View</h1>
        <TableComp :Headers="Headers" :Rows="Rows" tabledataClass="p-2 border" tableheadClass="bg-gray-200" rowClass="bg-white" />
      </BaseCard>
       <BaseCard>
        <TableComp :Headers="Headers2" :Rows="Rows2" tabledataClass="p-2 border-green border" 
        tableClass="border-2 border-blue-800" tableheadClass="bg-red-900 border" rowClass="bg-green-800 border" />
      </BaseCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableComp from '@/components/TableComp.vue';
import BaseCard from '@/components/BaseCard.vue';
export default defineComponent({
  components: {
    TableComp, BaseCard
  },
  data() {
    return {
      Headers: {
        firstName: "First Name",
        names: "Names",
        age: "Age",
      },

         Headers2: {
        firstName: "First Name",
        names: "Names",
        age: "Age",
        address: "Address"
      },
      Rows2: {
        john: {
          name: "John",
          surname: "Doe",
          age: 30,
          address: "123 Main St"
        },
        peter: {
          name: "Peter",
          surname: "Parker",
          age: 28,
          address: "456 Elm St"
        },
        doe: {
          name: "Doe",
          surname: "Smith",
          age: 39,
          address: "789 Oak St"
        }
      },
      Rows: {
        john: {
          name: "John",
          surname: "Doe",
          age: 30,
        },
        peter: {
          name: "Peter",
          surname: "Parker",
          age: 28,
        },
        doe: {
          name: "Doe",
          surname: "Smith",
          age: 39,
        }
      }
    };
  }
});
</script>

<style>

</style>
