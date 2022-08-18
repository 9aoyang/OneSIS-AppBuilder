import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

describe('config.ts', () => {
  let mockModule: any;

  beforeEach(() => {
    // 重置后重新获取模块
    mockModule = require('../../../src/utils/config');
  });

  // 在测试后都重置mock模块
  afterEach(() => {
    vi.resetModules();
  });

  test('设置获取属性', () => {
    mockModule.setConfig({ text: 'form', model: { config: { text: 'test' } } });
    expect(mockModule.getConfig('model')).toEqual({ config: { text: 'test' } });
  });

  test('获取不存在的属性', () => {
    expect(mockModule.getConfig('model')).toBeUndefined();
    mockModule.setConfig({ text: 'form', model: { config: { text: 'test' } } });
    expect(mockModule.getConfig('config')).toBeUndefined();
  });

  test('修改已经存在的form', () => {
    mockModule.setConfig({ text: 'form', model: { config: { text: 'test' } } });
    expect(mockModule.getConfig('text')).toMatch('form');
    mockModule.setConfig({ text: 'new-form', model: { config: { text: 'test' } } });
    expect(mockModule.getConfig('text')).toMatch('new-form');
  });

  test('在未设置时获取Config', () => {
    expect(mockModule.getConfig('model')).toBeUndefined();
  });
});
