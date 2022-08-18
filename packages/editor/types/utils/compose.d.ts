/**
 * @param {Array} middleware
 * @return {Function}
 */
export declare const compose: (middleware: Function[]) => (args: any[], next?: Function) => Promise<void>;
