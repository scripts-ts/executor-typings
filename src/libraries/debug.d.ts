declare namespace ExecutorDebug {
	function getconstants(func: (...args: any[]) => any | number): Array<any>;

	function getinfo<T extends (...args: any[]) => any>(
		func: T | number,
	): {
		name: "Lua" | "C";
		what: string;
		func: (...args: any[]) => any;
		source: string;
		short_src: string;
		currentline: number;
		nups: number;
		numparams: number;
		is_vararg: number;
	};

	/**
	 * Returns the upvalue at index in the function or level func. Throws an error if the upvalue does not exist.
	 * An upvalue is a local variable used by an inner function, and is also called an external local variable.
	 */
	function getupvalue(func: (...args: any[]) => any | number, index?: number): any;

	/**
	 * Returns a list of upvalues of the function or level `func`.
	 */
	function getupvalues(func: (...args: any[]) => any | number): Array<any>;

	/**
	 * Sets the value of the upvalue with the index `index` of the function `func` to `value`.
	 */
	function setupvalue(func: (...args: any[]) => any | number, index: number, value: any): void;
}
