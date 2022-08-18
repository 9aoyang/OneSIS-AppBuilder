import { describe, expect, test } from 'vitest';

import ui from '@editor/services/ui';

describe('events', () => {
  test('init', () => {
    ui.set('uiSelectMode', true);
    expect(ui.get('uiSelectMode')).toBeTruthy();
    expect(ui.get('showSrc')).toBeFalsy();
  });
});
