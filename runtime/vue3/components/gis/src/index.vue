<template>
  <ol-map
    v-if="visible"
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    style="height: 400px; width: 100%"
    @click="onClick"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import Core from '@tmagic/core';

import useApp from '../../useApp';

export default defineComponent({
  name: 'MagicUiGis',
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const visible = ref(true);
    const center = ref([120, 30]);
    const projection = ref('EPSG:4326');
    const zoom = ref(8);
    const rotation = ref(0);
    const app: Core | undefined = useApp(props);

    return {
      visible,
      center,
      projection,
      zoom,
      rotation,

      log() {
        console.log('map');
      },

      onClick() {
        console.log('map:click');
        app?.emit('map:click');
      },
    };
  },
});
</script>
