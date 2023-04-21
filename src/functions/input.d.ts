/**
 * Returns if the main window is in focus.
 * This must return true for any other mouse/keyboard function to work.
 * @returns True if the main window is in focus.
 */
declare const iswindowactive: () => boolean;

/**
 * Simulates a key press for the specified keycode.
 * Keycodes are listed [here](https://docs.microsoft.com/en-us/windows/desktop/inputdev/virtual-key-codes).
 */
declare const keypress: (keycode: number) => void;

/**
 * Releases a key on the keyboard for the specified keycode.
 * Keycodes are listed [here](https://docs.microsoft.com/en-us/windows/desktop/inputdev/virtual-key-codes).
 */
declare const keyrelease: (keycode: number) => void;

/**
 * Simulates a left mouse button click (Press & Release).
 */
declare const mouse1click: () => void;

/**
 * Simulates a left mouse button press.
 *
 * **Note:** This will not release the mouse button.
 */
declare const mouse1press: () => void;

/**
 * Simulates a left mouse button release.
 */
declare const mouse1release: () => void;

/**
 * Simulates a right mouse button click (Press & Release).
 */
declare const mouse2click: () => void;

/**
 * Simulates a right mouse button press.
 *
 * **Note:** This will not release the mouse button.
 */
declare const mouse2press: () => void;

/**
 * Simulates a right mouse button release.
 */
declare const mouse2release: () => void;

/**
 * Scrolls the mouse wheel virtually by `px` pixels.
 * @param px The amount of pixels to scroll.
 */
declare const mousescroll: (px: number) => void;

/**
 * Moves the mouse cursor relatively by coordinates `x` and `y`.
 * @param x The x position.
 * @param y The y position.
 */
declare const mousemoverel: (x: number, y: number) => void;

/**
 * Moves the mouse cursor absolutely to coordinates `x` and `y`.
 * @param x The x position from the top left corner of the screen.
 * @param y The y position from the top left corner of the screen.
 */
declare const mousemoveabs: (x: number, y: number) => void;
