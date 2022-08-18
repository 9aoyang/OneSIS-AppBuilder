let $MAGIC_FORM = {} as any;

const setConfig = (option: any): void => {
  $MAGIC_FORM = option;
};

const getConfig = (key: string): unknown => $MAGIC_FORM[key];

export { getConfig, setConfig };
