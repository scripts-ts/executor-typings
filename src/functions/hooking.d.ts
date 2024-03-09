/**
 * Hooked Callback.
 * @hidden
 */
type HookedCallback<F extends (...args: any[]) => any> = (...args: Parameters<F>) => ReturnType<F>;

/**
 * Hooks function `old`, replacing it with the function `hook`.
 * The old function is returned, you *must* use this function in order to call the original function.
 * @param func The function to hook.
 * @param hook The function to call instead of the original function.
 * @returns The original function.
 */
declare const hookfunction: <F extends (...args: any[]) => any>(func: F, hook: HookedCallback<F>) => F;

/**
 * Hooks the metamethod passed in the `object`'s metatable with `hook`.
 * A function to call the original metamethod is returned, you *must* use this function in order to call the original metamethod.
 *
 * This function will error if an object without a metatable is passed or a invalid metamethod is passed.
 * @param object The object to hook the metamethod of.
 * @param metamethod The metamethod to hook.
 * @param hook The function to call instead of the original metamethod.
 * @returns The original metamethod.
 */
declare const hookmetamethod: <M extends Metamethods>(
	object: any,
	metamethod: M,
	hook: MetamethodFunctions[M],
) => MetamethodFunctions[M];

/**
 * Metamethods are special methods that are called when certain operations are performed on a table.
 */
type Metamethods = "__index" | "__newindex" | "__namecall";

/**
 * Metamethod functions are the functions that are called when certain operations are performed on a table.
 * @hidden
 */
type MetamethodFunctions = {
	__index: (this: any, key: string) => any;
	__newindex: (this: any, key: string, value: any) => void;
	__namecall: (this: any, ...args: any[]) => any;
	__call(this: any, ...args: any[]): any;
	__tostring(this: any): string;
	__len(this: any): number;
};

/**
 * Creates a new C Closure that invokes function f upon call
 * @param func The function to invoke
 */
declare const newcclosure: <F extends (...args: any[]) => any>(func: F) => F;

/**
 * Returns the namecall method if the function is called in an `__namecall` metatable hook.
 * @returns The namecall method
 */
declare const getnamecallmethod: () => string;

/**
 * Sets the current namecall method to the new namecall `method`.
 * Must be called in a `__namecall` metatable hook.
 * @param method The new namecall method
 */
declare const setnamecallmethod: (method: string) => void;
