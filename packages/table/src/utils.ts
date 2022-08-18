import { datetimeFormatter } from '@tmagic/utils';

import { ColumnConfig } from './schema';

export const formatter = (item: ColumnConfig, row: any) => {
  if (item.formatter) {
    if (item.formatter === 'datetime') {
      // eslint-disable-next-line no-param-reassign
      item.formatter = (value: string) => datetimeFormatter(value);
    }
    try {
      return item.formatter(row[item.prop], row);
    } catch (e) {
      return row[item.prop];
    }
  } else {
    return row[item.prop];
  }
};
