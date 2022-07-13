<template>
  <img
    class="absolute w-full h-full object-cover"
    :src="src"
    :alt="alt"
  />
</template>

<script lang="ts">
export default defineComponent({
  name: 'Image',
  props: {
    src: String,
    alt: String
  }
})
</script>
