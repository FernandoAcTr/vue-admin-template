<template>
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <q-card class="fit">
      <q-card-section class="text-h6 q-pb-none">
        <q-item>
          <q-item-section avatar>
            <q-icon color="blue" name="access_time" style="font-size: 2em" />
          </q-item-section>

          <q-item-section>
            <div class="text-h6">Timeline</div>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section>
        <q-timeline color="secondary">
          <q-timeline-entry
            v-for="(timeline, index) in timeline_list"
            :key="index"
            :title="timeline.title"
            :color="timeline.color"
            :icon="timeline.icon"
            :side="(timeline.side as any)"
          >
            <div>
              {{ timeline.desc }}
            </div>
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
  const timeline_list = [
    {
      title: 'Pratik Likes your product ',
      side: 'left',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n' +
        '                  et dolore magna aliqua.',
      color: 'red',
      icon: 'thumb_up',
    },
    {
      title: 'Product Update',
      side: 'left',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n' +
        '                  et dolore magna aliqua.',
      color: 'orange',
      icon: 'done_all',
    },
    {
      title: 'Jeff Likes your product ',
      side: 'left',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n' +
        '                  et dolore magna aliqua.',
      color: 'blue',
      icon: 'thumb_up',
    },
  ]
</script>
