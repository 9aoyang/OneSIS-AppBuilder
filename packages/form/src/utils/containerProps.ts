import { PropType } from 'vue';

import { ChildConfig, FormValue } from '../schema';

export default {
  labelWidth: String,
  expandMore: Boolean,

  model: {
    type: [Object, Array] as PropType<FormValue>,
    required: true,
  },

  config: {
    type: Object as PropType<ChildConfig>,
    required: true,
  },

  prop: {
    type: String,
    default: () => '',
  },

  stepActive: {
    type: [String, Number],
  },

  size: {
    type: String,
    default: 'small',
  },
};
