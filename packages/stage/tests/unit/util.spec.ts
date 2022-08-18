import { beforeEach, describe, expect, test } from 'vitest';

import * as util from '../../src/util';

Object.defineProperties(globalThis.HTMLElement.prototype, {
  offsetWidth: {
    get() {
      return parseFloat(this.style.width) || 0;
    },
  },
  offsetHeight: {
    get() {
      return parseFloat(this.style.height) || 0;
    },
  },
  offsetTop: {
    get() {
      if (this.style.position === 'absolute') {
        return parseFloat(this.style.top) || 0;
      }
      return 0;
    },
  },
  offsetLeft: {
    get() {
      if (this.style.position === 'absolute') {
        return parseFloat(this.style.left) || 0;
      }
      return 0;
    },
  },
  offsetParent: {
    get() {
      let parent = this.parentNode;
      while (parent) {
        if (parent.style && parent.style.position === 'absolute') {
          return parent;
        }
        parent = parent.parentNode;
      }
    },
  },
});

const createElement = () => {
  const el = globalThis.document.createElement('div');
  el.style.cssText = `width: 100px; height: 100px; position: absolute; left: 100px; top: 100px;`;
  return el;
};

describe('getOffset', () => {
  /**
   * @jest-environment jsdom
   */
  const root = globalThis.document.createElement('div');
  const div = globalThis.document.createElement('div');

  beforeEach(() => {
    globalThis.document.body.innerHTML = '';
    globalThis.document.body.appendChild(root);
  });

  test('没有offsetParent， 没有left、top', () => {
    div.style.cssText = `width: 100px; height: 100px`;
    root.appendChild(div);
    const offset = util.getOffset(div);
    expect(offset.left).toBe(0);
    expect(offset.top).toBe(0);
  });

  test('没有offsetParent， 有left、top', () => {
    const el = createElement();
    root.appendChild(el);
    const offset = util.getOffset(el);
    expect(offset.left).toBe(100);
    expect(offset.top).toBe(100);
  });

  test('有offsetParent， 没有left、top', () => {
    const parent = createElement();
    div.style.cssText = `width: 100px; height: 100px`;
    parent.appendChild(div);
    root.appendChild(parent);

    const offset = util.getOffset(div);
    expect(offset.left).toBe(100);
    expect(offset.top).toBe(100);
  });
});

describe('getAbsolutePosition', () => {
  /**
   * @jest-environment jsdom
   */
  const root = globalThis.document.createElement('div');
  const div = globalThis.document.createElement('div');

  beforeEach(() => {
    globalThis.document.body.innerHTML = '';
    globalThis.document.body.appendChild(root);
  });

  test('有offsetParent', () => {
    const parent = createElement();
    div.style.cssText = `width: 100px; height: 100px`;
    parent.appendChild(div);
    root.appendChild(parent);
    const offset = util.getAbsolutePosition(div, { left: 100, top: 100 });
    expect(offset.left).toBe(0);
    expect(offset.top).toBe(0);
  });

  test('没有offsetParent', () => {
    const el = createElement();
    root.appendChild(el);
    const offset = util.getAbsolutePosition(el, { left: 100, top: 100 });
    expect(offset.left).toBe(100);
    expect(offset.top).toBe(100);
  });
});
