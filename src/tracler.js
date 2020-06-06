import { TrackerManager } from '@zcong/js-tracker-manager';

export default new TrackerManager({
  commonData: { app: 'tracker-example-vue' },
  pusher: {
    pushFn: async (trackers) => console.log(JSON.stringify(trackers)),
    interval: 10000,
    sizeThreshold: 5,
  },
});
