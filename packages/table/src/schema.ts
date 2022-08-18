import { FormConfig, FormValue } from '@tmagic/form';

export interface ColumnActionConfig {
  type?: 'delete' | 'copy' | 'edit';
  display?: (vm: any, row: any) => boolean;
  text: string;
  name: string;
  handler?: (row: any) => Promise<any> | any;
  before?: (row: any) => void;
  after?: (row: any) => void;
  action?: (data: { data: any }) => void;
}

export type ColumnConfig = {
  form?: FormConfig;
  rules?: any;
  values?: FormValue;
  selection?: boolean | 'single';
  selectable?: (row: any, index: number) => boolean;
  label: string;
  fixed?: 'left' | 'right' | boolean;
  width?: number | string;
  actions?: ColumnActionConfig[];
  type: 'popover' | 'expand' | string | ((value: any, row: any) => string);
  text: string;
  prop: string;
  showHeader: boolean;
  table?: ColumnConfig[];
  formatter?: 'datetime' | ((item: any, row: Record<string, any>) => any);
  popover: {
    placement: '';
    width: '';
    trigger: '';
    tableEmbed: '';
  };
  sortable?: boolean | 'custom';
  action?: 'tip' | 'actionLink' | 'img' | 'link' | 'tag';
  handler: (row: any) => void;
};
