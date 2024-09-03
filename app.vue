<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
//const store = useTestStore();

await useAsyncData(fetchData);

async function fetchData() {
  const data = await $fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  });
  console.log(data);
  return data;
}
</script>
