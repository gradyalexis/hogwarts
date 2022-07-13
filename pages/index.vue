<template>
  <div class="grid grid-cols-6 gap-8">
    <Card v-for="item in items" :key="item">
      <img
        v-if="item.image"
        class="absolute w-full h-full object-cover"
        :src="item.image"
        :alt="item.name"
      />
      <img
        v-else
        class="absolute w-full h-full object-cover"
        :src="`/assets/img/${item.gender === 'male' ? 'male-image.jpg' : 'female-image.jpg'}`"
        alt="hogwarts-image-profile-placeholder"
      />
      <div class="absolute bottom-0 p-2 bg-black w-full bg-opacity-50">
        <div class="text-white font-bold">
          {{ item.name }}
        </div>
        <div class="text-gray-200">
          {{ item.actor }}
        </div>
      </div>
    </Card>
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
