export const log = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('magic editor: ', ...args);
  }
};

export const info = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.info('magic editor: ', ...args);
  }
};

export const warn = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('magic editor: ', ...args);
  }
};

export const debug = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.debug('magic editor: ', ...args);
  }
};

export const error = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('magic editor: ', ...args);
  }
};
