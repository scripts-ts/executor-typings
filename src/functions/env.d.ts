/**
 * Returns the environment that will be applied to all executor scripts.
 * @returns The environment.
 */
declare const getgenv: () => ExecutorGlobals;

interface ExecutorGlobals {}

/**
 * Returns the game's client global environment.
 * @returns The environment.
 */
declare const getrenv: () => RobloxEnv;

interface RobloxEnv {
	_G: _G;
}

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

/**
 * Gets a list of connections to the specified signal.
 * @param signal The signal to get connections from.
 */
declare function getconnections(obj: RBXScriptSignal): RBXScriptConnection;

/**
 * Fires all the connections connected to the signal Signal with Args.
 * @param signal The signal to fire.
 * @param args The arguments to pass to the signal.
 */
declare function firesignal(signal: RBXScriptSignal, ...args: unknown[]): void;

/**
 * Fires the designated ClickDetector with provided Distance.
 * If Distance isn't provided, it will default to 0.
 * @param detector The ClickDetector to fire.
 * @param distance The distance to fire the ClickDetector from.
 */
declare function fireclickdetector(detector: ClickDetector, distance?: number): void;

/**
 * Fires the designated `ProximityPrompt`.
 * @param prompt
 * @param distance
 */
declare function fireproximityprompt(prompt: ProximityPrompt, distance: number): void;

/**
 * Fakes a .Touched event to `toTouch` with `part`. The Toggle argument must be either 0 or 1 (for fire/un-fire).
 * **Note:** The ToTouch argument must have a child with class `TouchTransmitter` in order for this function to work.
 * @param part The part to fire the event from.
 * @param toTouch The part to fire the event to.
 */
declare function firetouchinterest(part: Instance, toTouch: BasePart, Toggle: 1 | 0): void;

/**
 * Returns true if the Part is owned by the player.
 * @param part The part to check.
 * @returns Whether the part is owned by the player.
 */
declare function isnetworkowner(part: BasePart): boolean;

/**
 * Returns the hidden `property` from Object. Errors if the property does not exist.
 * @param object The object
 * @param property The property to get.
 * @returns The hidden property.
 */
declare function gethiddenproperty(object: Instance, property: string): any;

/**
 * Sets the hidden `property` with `value` in `object`. Errors if the property does not exist.
 * @param object The object
 * @param property The property to set.
 * @param value The value to set the property to.
 */
declare function sethiddenproperty(object: Instance, property: string, value: any): void;

/**
 * Sets the player's SimulationRadius. If `maxSimulationRadius` is specified, it will set that as well.
 * @param simulationRadius The simulation radius
 * @param maxSimulationRadius The maximum radius
 */
declare function setsimulationradius(simulationRadius: number, maxSimulationRadius?: number): void;
