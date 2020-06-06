<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p></p>
    <button @click="clickA">btn A</button>
    <p>open console check tracker logs</p>
  </div>
</template>

<script>
import { createClickTracker } from '@zcong/js-tracker-manager';
import tm from '../tracker';

export default {
  name: 'Home',
  methods: {
    clickA() {
      const ct = createClickTracker({
        eventName: 'clickBtnA',
      });
      tm.addClickTracker(ct);
      console.log('a click');
    },
  },
};
</script>
