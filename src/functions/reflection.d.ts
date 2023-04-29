/**
 * Loads chunk as a Lua function with optional `chunk_name` and returns it if compilation is successful.
 * Otherwise, if an error has occurred during compilation, `nil` followed by the error message will be returned.
 */
declare const loadstring: (chunk: string, chunk_name?: string) => (...args: any[]) => any;

/**
 * Returns true if the current thread is a Synapse thread.
 *
 * **Note:** *Checkcaller does NOT check the call stack of the function,*
 * if you call a game function then it calls out to checkcaller, the result will be true! Be careful.
 * @returns True if the current thread is a Synapse thread.
 */
declare const checkcaller: () => boolean;

/**
 * Returns if the function is a Luau closure.
 * @param func The function to check.
 * @returns True if the function is a Luau closure.
 */
declare const islclosure: (func: (...args: any[]) => any) => boolean;

/**
 * Decompiles Script and returns the decompiled script with timeout.
 * If the decompilation fails, then the return value will be an error message.
 */
declare const decompile: (
	script: Script | ModuleScript | ((...args: any[]) => any) | string,
	timeout?: number,
) => string;
