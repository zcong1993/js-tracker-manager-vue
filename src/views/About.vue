<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="clickB">btn B</button>
  </div>
</template>

<script>
import { createEventTracker } from '@zcong/js-tracker-manager';
import tm from '../tracker';

export default {
  name: 'About',
  methods: {
    clickB() {
      const ct = createEventTracker({
        eventName: 'clickBtnB',
      });
      tm.addEventTracker(ct);
      console.log('b click');
    },
  },
};
</script>
