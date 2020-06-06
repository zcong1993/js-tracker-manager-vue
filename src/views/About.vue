<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="clickB">btn B</button>
  </div>
</template>

<script>
import { createClickTracker } from '@zcong/js-tracker-manager';
import tm from '../tracler';

export default {
  name: 'About',
  methods: {
    clickB() {
      const ct = createClickTracker({
        eventName: 'clickBtnB',
      });
      tm.addClickTracker(ct);
      console.log('b click');
    },
  },
};
</script>
