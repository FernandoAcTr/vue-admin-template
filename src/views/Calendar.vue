<template>
  <h5 class="q-mt-none">Calendar</h5>
  <Qalendar :events="events" style="height: 300px" />
</template>

<script setup lang="ts">
  import { Qalendar } from 'qalendar'

  const events = [
    {
      title: 'Advanced algebra',
      with: 'Chandler Bing',
      time: { start: '2022-08-04 12:05', end: '2022-08-04 13:05' },
      color: 'yellow',
      isEditable: true,
      id: '753944708f0f',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!',
    },
    {
      title: 'Ralph on holiday',
      with: 'Rachel Greene',
      time: { start: '2022-08-05 11:00', end: '2022-08-05 20:00' },
      color: 'green',
      isEditable: true,
      id: '5602b6f589fc',
    },
  ]
</script>

<style>
  .calendar-week__wrapper::-webkit-scrollbar {
    display: none;
  }
</style>
