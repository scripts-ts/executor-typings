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
