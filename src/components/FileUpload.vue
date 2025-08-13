<template>
    <div>
        <label @dragover.prevent="dragActive = true" @dragleave.prevent="dragActive = false" @drop.prevent="handleDrop"
            class="relative cursor-pointer border-2 border-dashed rounded-lg p-8 text-center transition-colors
             hover:border-blue-500
             focus:outline-none focus:ring-4 focus:ring-blue-300
             " :class="dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'" tabindex="0">
            <input type="file" ref="fileInput" class="hidden" @change="handleFileChange" />

            <div class="space-y-2">
                <svg class="mx-auto h-12 w-12 text-blue-400" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <p class="text-gray-600 font-semibold">
                    Drag & drop your file here or
                    <button type="button" @click="openFileDialog" class="text-blue-600 underline hover:text-blue-800">
                        browse
                    </button>
                </p>
                <p class="text-gray-400 text-sm">Supported: any file</p>
            </div>
        </label>

        <!-- Preview -->
        <div v-if="file"
            class="mt-4 flex items-center justify-between bg-blue-50 border border-blue-200 rounded px-4 py-2">
            <div class="truncate max-w-xs" title="file.name">
                <span class="font-medium text-blue-700">{{ file.name }}</span>
            </div>
            <button @click="clearFile" aria-label="Remove file" class="text-red-500 hover:text-red-700 font-bold">
                &times;
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            file: null,
            dragActive: false,
        };
    },
    methods: {
        openFileDialog() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                this.file = selectedFile;
            }
        },
        handleDrop(event) {
            this.dragActive = false;
            const droppedFile = event.dataTransfer.files[0];
            if (droppedFile) {
                this.file = droppedFile;
            }
        },
        clearFile() {
            this.file = null;
            this.$refs.fileInput.value = null;
        },
    },
};
</script>

<style scoped>
/* optional additional styles if needed */
</style>
