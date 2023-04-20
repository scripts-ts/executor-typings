/*
	===============
	File System API
	Functions to read, write, and list files and folders.

*/
/**
 * Returns if `path` is a file or not.
 * @param path The path to check.
 */
declare const isfile: (path: string) => boolean;

/**
 * Returns the contents of the file located at path. If the file does not exist, it errors.
 * @param path The path to the file to read.
 */
declare const readfile: (path: string) => string;

/**
 * Loads in the contents of a file as a chunk and returns it if compilation is successful. Otherwise, if an error has occurred during compilation, `nil` followed by the error message will be returned.
 * @param path The path to the file to load.
 * @returns A tuple containing the chunk and an error message if compilation failed.
 */
declare const loadfile: (
	path: string,
) => LuaTuple<[(...args: any[]) => any, undefined]> | LuaTuple<[undefined, string]>;

/**
 * Writes contents to the supplied path.
 *
 * Certain extensions are not allowed, calling the function with these extensions will error:
 *
 * `.exe, .scr, .bat, .com, .csh, .msi, .vb, .vbs, .vbe, .ws, .wsf, .wsh, .ps1, .psy.`
 * @param path The path to the file to write to.
 * @param contents The contents to write to the file.
 */
declare const writefile: (path: string, contents: string) => void;

/**
 * Appends content to the file contents at path. If the file does not exist, it errors.
 * @param path The path to the file to append to.
 * @param contents The contents to append to the file.
 */
declare const appendfile: (path: string, contents: string) => void;

/**
 * Deletes the file at `path`.
 * @param path The path to delete the file at.
 */
declare const delfile: (path: string) => void;

/*
	=================
	Folder System API
	Functions to list, create, and delete folders.

*/
/**
 * Returns if `path` is a folder or not.
 * @param path The path to check.
 */
declare const isfolder: (path: string) => boolean;

/**
 * Returns a table of files in the folder located at `path`.
 * @param path The path to the folder to list.
 */
declare const listfiles: (path: string) => string[];

/**
 * Creates a folder at `path`.
 * @param path The path to create the folder at.
 */
declare const makefolder: (path: string) => void;

/**
 * Deletes the folder at `path`.
 * @param path The path to delete the folder at.
 */
declare const delfolder: (path: string) => void;
