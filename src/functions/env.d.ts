/**
 * Returns the environment that will be applied to each script ran by Synapse.
 * @returns The environment.
 */
declare const getgenv: () => SynapseGlobals;

interface SynapseGlobals {
	[key: string]: any;
}

/**
 * Returns the game's client global environment.
 * @returns The environment.
 */
declare const getrenv: () => RobloxGlobals;

interface RobloxEnv {
	_G: RobloxGlobals;
}

interface RobloxGlobals {}

/**
 * Returns the Lua registry.
 */
declare const getreg: () => Array<any>;

/**
 * Returns all functions and userdata values within the GC.
 * Passing `true` will also return tables.
 * @param include_tables Whether to include tables in the returned array.
 * @returns The array of objects.
 */
declare const getgc: <T extends boolean>(include_tables?: T) => Array<T extends true ? any : (...args: any[]) => any>;

/**
 * Returns a list of all instances within the game.
 * @returns The array of instances.
 */
declare const getinstances: () => Array<Instance>;

/**
 * Returns a list of all instances parented to nil within the game.
 * @returns The array of instances.
 */
declare const getnilinstances: () => Array<Instance>;

/**
 * Returns a list of all scripts within the game.
 * @returns The array of scripts.
 */
declare const getscripts: () => Array<Script | ModuleScript>;

/**
 * Returns all ModuleScripts loaded in the game.
 * @returns The array of ModuleScripts.
 */
declare const getloadedmodules: () => Array<ModuleScript>;
