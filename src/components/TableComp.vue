<template>
    <table class="w-full">
        <thead>
            <tr    
            :class="tableClass">
                <th  v-for="(head , index) in Headers" :key="index"
                :class="tableheadClass">{{ head }}</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in Rows" :key="index"
            :class="rowClass">
                <td v-for="(value, key) in row" :key="key"
                :class="tabledataClass">{{ value }}</td>

                </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props:{
    Headers: {
      type: Object,
      required: true
    },
    Rows: {
      type: Object,
      required: true
    },
    rowClass: {
      type: String,
      default: ""
    },
    tableClass: {
      type: String,
      default: ""
    },
    tableheadClass: {
      type: String,
      default: ""
    },
    tabledataClass: {
      type: String,
      default: ""
    }
  },

});
</script>