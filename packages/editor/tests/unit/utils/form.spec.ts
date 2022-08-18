import { describe, expect, test, vi } from 'vitest';

import * as props from '@editor/utils/props';

vi.mock('@editor/utils/logger', () => ({
  log: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  debug: vi.fn(),
  error: vi.fn(),
}));

describe('util form', () => {
  test('fillConfig', () => {
    const defaultConfig = props.fillConfig();

    const config = props.fillConfig([
      {
        text: 'text',
        name: 'text',
        type: 'text',
      },
    ]);

    expect(config[0].items[0].items.length - defaultConfig[0].items[0].items.length).toBe(1);
  });
});
