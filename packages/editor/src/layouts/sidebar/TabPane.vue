<template>
  <el-tab-pane v-if="config" :name="config.text">
    <template #label>
      <div :key="config.text">
        <m-icon v-if="config.icon" :icon="config.icon"></m-icon>
        <div v-if="config.text" class="magic-editor-tab-panel-title">{{ config.text }}</div>
      </div>
    </template>

    <component :is="config.component" v-bind="config.props || {}" v-on="config?.listeners || {}">
      <template
        v-if="data === 'component-list' || config.slots?.componentListPanelHeader"
        #component-list-panel-header
      >
        <slot v-if="data === 'component-list'" name="component-list-panel-header"></slot>
        <component
          :is="config.slots.componentListPanelHeader"
          v-else-if="config.slots?.componentListPanelHeader"
        />
      </template>

      <template v-if="data === 'layer' || config.slots?.layerPanelHeader" #layer-panel-header>
        <slot v-if="data === 'layer'" name="layer-panel-header"></slot>
        <component :is="config.slots.layerPanelHeader" v-else-if="config.slots?.layerPanelHeader" />
      </template>

      <template v-if="config.slots?.layerNodeContent" #layer-node-content="{ data, node }">
        <component :is="config.slots?.layerNodeContent" :data="data" :node="node" />
      </template>
    </component>
  </el-tab-pane>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Coin, Files } from '@element-plus/icons-vue';

import MIcon from '../../components/Icon.vue';
import { SideComponent, SideItem } from '../../type';

import ComponentListPanel from './ComponentListPanel.vue';
import LayerPanel from './LayerPanel.vue';

export default defineComponent({
  components: { MIcon },

  props: {
    data: {
      type: [Object, String] as PropType<SideItem>,
    },
  },

  setup(props) {
    return {
      config: computed<SideComponent | undefined>(() => {
        if (typeof props.data !== 'string') {
          return props.data;
        }

        switch (props.data) {
          case 'component-list':
            return {
              type: 'component',
              icon: Coin,
              text: '组件',
              component: ComponentListPanel,
              slots: {},
            };
          case 'layer':
            return {
              type: 'component',
              icon: Files,
              text: '已选组件',
              component: LayerPanel,
              slots: {},
            };
          default:
            return undefined;
        }
      }),
    };
  },
});
</script>
