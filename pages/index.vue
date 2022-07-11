<template>
  <div class="h-auto lg:m-auto max-w-screen-2xl">
    <div class="grid grid-cols-3">
      <Card v-for="item in items" :key="item">
        {{ item.name }}
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const items = await useBaseFetch('/characters').then(
      ({ data }) => data
    )

    return { items }
  }
})
</script>
