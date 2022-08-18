import { describe, expect, test } from 'vitest';

import { FormConfig } from '@tmagic/form';

import createForm from '../../../src/utils/createForm';

describe('createForm', () => {
  test('正常创建', () => {
    const config: FormConfig = [{ type: 'time' }, { type: 'colorPicker' }];
    expect(createForm(config)).toEqual(config);
  });

  test('参数为空数组', () => {
    expect(createForm([])).toEqual([]);
  });
});
