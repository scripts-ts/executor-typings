declare const setclipboard: (clipboard: string) => void;
declare const setfflag: (flag: string, value: string) => void;
declare const getsynasset: (path: string) => string;

/**
 * Saves the current game into your workspace folder. You can use `config` to customize options for this.
 * @param config The configuration for the save.
 */
declare const saveinstance: (config?: {
	mode?: "optimized" | "full" | "scripts";
	noscripts?: boolean;
	scriptcache?: boolean;
	timeout?: number;
}) => void;
