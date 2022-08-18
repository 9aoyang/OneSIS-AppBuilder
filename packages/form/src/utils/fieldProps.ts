import { PropType } from 'vue';

export default {
  model: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  name: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: String as PropType<'mini' | 'small' | 'medium'>,
  prop: String,
  initValues: Object,
  values: Object,
};
