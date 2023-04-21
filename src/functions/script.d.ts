/**
 * Returns the environment of `Script`.
 * Errors if the script is not loaded in memory.
 * @param script The script to get the environment of.
 * @returns The environment of the script.
 */
declare const getsenv: (script: Script | ModuleScript) => { [key: string]: any };

/**
 * Gets the script that is calling this function.
 * @returns script
 */
declare const getcallingscript: () => Script | ModuleScript;

/**
 * Gets a bare function from the script passed.
 * Please note this is not the original function of the script and will not have upvalues/enviornment correctly defined.
 * @param script The script to get the function of.
 * @returns The function of the script.
 */
declare function getscriptclosure(script: LocalScript | ModuleScript): (...args: any[]) => any;

/**
 * Returns a SHA384 hash of the scripts bytecode. You can use this to detect changes of a script.
 * @param script The script to get the hash of.
 * @returns The hash of the script.
 */
declare function getscripthash(script: LocalScript | ModuleScript): string;
