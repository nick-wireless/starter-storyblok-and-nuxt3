<template>
  <div v-editable="blok" class="w-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden">
    <div>This is the main feature of the home page.</div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>
