<template>
  <div
    v-editable="blok"
    class="py-32 text-6xl text-[#50b0ae] font-bold text-center"
  >
    {{ blok.headline }}
    <h1>Heading One - Billion Oysters</h1>
    <h2>Heading Two - Also Billion Oysters</h2>
    <h3 class=" font-feature italic font-semi ">Sub-Headings & Menus</h3>
    <div class=" font-sans ">Hello world.</div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
