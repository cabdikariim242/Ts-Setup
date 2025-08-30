<!-- src/views/TomSelectView.vue -->
<template>
    <div
        class=" w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[385px]  2xl:mr-[270px]">
        <BaseCard>
            <h1 class="text-2xl mt-4 ml-8 text-gray-900 dark:text-gray-100">DIFERENT ATOM SELECTORS</h1>
            <hr class="mt-[20px] mb-4 border-gray-300 dark:border-gray-600">
            <h2 class="px-4 mb-4 text-xl text-gray-800 dark:text-gray-200">Examples of tom selector</h2>
            <p class="px-5 text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad incidunt inventore aliquam dignissimos.
                Deleniti repellat praesentium ad ratione enim aperiam!
            </p>

            <div class="p-10">
                <h2 class="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">1. Basic Select</h2>
                <h2 class="mb-4 text-gray-700 dark:text-gray-300">Converts a standard HTML select element into a modern,
                    searchable dropdown.</h2>
                <!-- start -->
                <BaseSelectSearch v-model="country" :options="countries" placeholder="Dooro waddan" />
            </div>

            <div class="p-10">
                <h2 class="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">2. Multi Select Tags</h2>
                <h3 class="mb-4 text-gray-700 dark:text-gray-300">Allows selecting multiple options and optionally
                    creating new tags dynamically.</h3>
                <!-- start -->
                <BaseSelectSearch v-model="tags" :options="['frontend', 'backend', 'devops', 'uiux']" multiple
                    placeholder="Dooro tags" />
            </div>

            <div class="p-10">
                <h2 class="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">3. Disabled Selected</h2>
                <h3 class="mb-4 text-gray-700 dark:text-gray-300">Supports categorized options using group headers
                    inside the dropdown.</h3>
                <!-- start -->
                <BaseSelectSearch class="mb-[120px]" v-model="x" :options="['A', 'B', 'C']" :disabled="false" :placeholder="Dooro" />
            </div>
        </BaseCard>
    </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import BaseSelectSearch from '@/components/BaseSelectSearch.vue';

export default {
    components: {
        BaseCard, BaseSelectSearch
    },
    data() {
        return {
            tags: [],
            country: null,
            countries: [
                { label: "Somalia", value: "SO" },
                { label: "Kenya", value: "KE" },
                { label: "Ethiopia", value: "ET", disabled: false },
                { label: "Djibouti", value: "DJ" }
            ]
        };
    }
}
</script>
