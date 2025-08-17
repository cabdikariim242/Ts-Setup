<template>
  <div
    ref="dp1"
    class="p-4 w-full max-w-[400px] flex justify-center items-center"
  >
    <div class="flex w-full flex-col gap-4 justify-center items-center relative">
      <input
        class="border focus:outline-none text-[#334155] rounded-md focus:ring p-3 py-1 placeholder:text-[#717479]"
        type="text"
        placeholder="pick date & time"
        v-model="selectedDate1"
        @focus="show1 = true"
      />

      <div v-if="show1" class="bg-white x border dark:bg-black rounded mt-2 p-4 z-10">
        <!-- Month + Year Selectors -->
        <div class="flex gap-3 mb-3">
          <select class="p-2 border rounded dark:bg-black" v-model="selectedMonth1">
            <option v-for="monthName in monthNames" :key="monthName">
              {{ monthName }}
            </option>
          </select>
          <select class="p-2 border rounded dark:bg-black" v-model="selectedYear1">
            <option v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>

        <!-- Calendar -->
        <div class="grid grid-cols-7 dark:bg-black text-center font-bold mb-2">
          <div v-for="day in weekDays" :key="day">{{ day }}</div>
        </div>
        <div class="grid grid-cols-7 text-center mb-3">
          <div v-for="n in firstDayOfMonth1" :key="'empty1' + n"></div>
          <div
            v-for="day in daysInMonth1"
            :key="'day1' + day"
            class="p-2 cursor-pointer rounded hover:bg-blue-200"
            :class="{ 'bg-blue-500 text-white': selectedDay1 === day }"
            @click="selectedDay1 = day"
          >
            {{ day }}
          </div>
        </div>

        <!-- Time -->
        <div class="flex  items-center gap-3 mb-3">
          <label class="font-semibold ">Time:</label>
          <select class="p-2 border rounded dark:bg-black" v-model.number="selectedHour1">
            <option v-for="h in hours" :key="'h1' + h" :value="h">
              {{ pad(h) }}
            </option>
          </select>
          <span>:</span>
          <select class="p-2 border rounded dark:bg-black" v-model.number="selectedMinute1">
            <option v-for="m in minutes" :key="'m1' + m" :value="m">
              {{ pad(m) }}
            </option>
          </select>
        </div>

        <div class="flex justify-end gap-3">
          <button
            class="px-4 py-1 bg-[#ebeff4] text-[#68788e] border rounded"
            @click="reset1"
          >
            Clear
          </button>
          <button
            class="px-4 py-1 bg-[#334155] text-white rounded"
            :disabled="!selectedDay1"
            @click="apply1"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, "0");
    const d = String(today.getDate()).padStart(2, "0");
    const h = today.getHours();
    const mn = String(today.getMinutes()).padStart(2, "0");

    // reactive state
    const show1 = ref(false);
    const selectedDate1 = ref(`${d}-${m}-${y} ${h}:${mn}`);
    const selectedMonth1 = ref("January");
    const selectedDay1 = ref<number | null>(null);
    const selectedYear1 = ref(y);
    const selectedHour1 = ref(0);
    const selectedMinute1 = ref(0);

    const years = ref<number[]>([]);
    const monthNames = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December",
    ];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 60 }, (_, i) => i);

    return {
      years,
      monthNames,
      weekDays,
      hours,
      minutes,
      show1,
      selectedDate1,
      selectedMonth1,
      selectedDay1,
      selectedYear1,
      selectedHour1,
      selectedMinute1,
    };
  },
  computed: {
    monthIndex1(): number {
      return this.monthNames.indexOf(this.selectedMonth1 as string);
    },
    daysInMonth1(): number {
      return new Date(this.selectedYear1 as number, this.monthIndex1 + 1, 0).getDate();
    },
    firstDayOfMonth1(): number {
      return new Date(this.selectedYear1 as number, this.monthIndex1, 1).getDay();
    },
  },
  methods: {
    pad(n: number): string {
      return String(n).padStart(2, "0");
    },
    apply1(): void {
      if (!this.selectedDay1) return;
      const y = this.selectedYear1 as number;
      const m = this.pad(this.monthIndex1 + 1);
      const d = this.pad(this.selectedDay1 as number);
      const hh = this.pad(this.selectedHour1 as number);
      const mm = this.pad(this.selectedMinute1 as number);
      this.selectedDate1 = `${d}-${m}-${y} ${hh}:${mm}`;
      this.show1 = false;
    },
    reset1(): void {
      this.selectedDay1 = null;
      this.selectedHour1 = 0;
      this.selectedMinute1 = 0;
      this.selectedDate1 = "";
    },
    handleClickOutside(e: MouseEvent): void {
      if (this.show1 && this.$refs.dp1 && !(this.$refs.dp1 as HTMLElement).contains(e.target as Node)) {
        this.show1 = false;
      }
    },
    handleEsc(e: KeyboardEvent): void {
      if (e.key === "Escape") {
        this.show1 = false;
      }
    },
  },
  mounted() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const startYear = 2000;
    const endYear = currentYear + 20;
    for (let y = startYear; y <= endYear; y++) {
      (this.years as number[]).push(y);
    }
    this.selectedHour1 = now.getHours();
    this.selectedMinute1 = now.getMinutes();

    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("keydown", this.handleEsc);
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleEsc);
  },
});
</script>

<style scoped>
.relative > div.bg-white {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 9999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
