import { ComponentInternalInstance, getCurrentInstance, inject, watch } from 'vue';

import { FormState } from '../schema';

export const useAddField = (prop?: string) => {
  if (!prop) return;
  const mForm = inject<FormState | null>('mForm');
  const instance = getCurrentInstance() as ComponentInternalInstance;
  watch(
    () => instance?.proxy,
    (vm) => {
      if (vm) {
        mForm?.setField(prop, vm);
      } else {
        mForm?.deleteField(prop);
      }
    },
    {
      immediate: true,
    }
  );
};
