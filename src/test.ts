declare global {
	interface ExecutorGlobals {
		abc: string;
	}
}

getgenv().abc;
