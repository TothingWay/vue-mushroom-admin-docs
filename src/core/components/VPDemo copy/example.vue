<script setup lang="ts">
const props = defineProps({
  file: {
    type: Function,
    required: true,
  },
})

console.log(props.file);

</script>

<template>
  <div class="example-showcase">
    <ClientOnly>
      <component :is="file" v-if="file" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
  background-color: var(--bg-color);
}
</style>
