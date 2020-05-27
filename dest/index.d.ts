/**
* 禁止背景滑动，dom里面可以滑动
* @param element 滑动的dom
*/
export declare function disableDodyScroll(element: HTMLElement): void;
/**
 * 移除禁止背景滑动的事件
 * @param element dom
 */
export declare function enableBodyScroll(element: HTMLElement): void;
/**
* 移除所有监听
*/
export declare function clearAllBodyScrollLocks(): void;
/**
 * 禁止dom滑动
 * @param element 要禁止的dom
 */
export declare function lockScroll(element: HTMLElement): void;
/**
 * 允许dom滑动
 * @param element 允许的dom
 */
export declare function allowScroll(element: HTMLElement): void;
