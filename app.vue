<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
const store = useTestStore();

await useAsyncData("todos", () => store.fetchIconsData());

store.getIcons;
</script>
