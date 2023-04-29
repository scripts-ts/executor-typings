interface DataModel extends Instance {
	HttpGet(url: string): string;
}

interface Services {
	CoreGui: BasePlayerGui & {
		Version: number;
		SelectionImageObject: GuiObject;
	};
	VirtualInputManager: Instance & {
		SendKeyEvent(isPressed: boolean, keyCode: Enum.KeyCode, isRepeatedKey: boolean, pluginGui: GuiObject): void;
		SendMouseWheelEvent(x: number, y: number, isForwardScroll: boolean, pluginGui: GuiObject): void;
		SendMouseButtonEvent(x: number, y: number, mouseButton: number, isDown: boolean, pluginGui: GuiObject): void;
		SendMouseMovementEvent(x: number, y: number, pluginGui: GuiObject): void;
		SendTextInputCharacterEvent(character: string, gui: GuiObject): void;
	};
	VirtualUser: Instance & {
		Button1Down(position?: Vector2, camera?: CFrame): void;
		Button1Up(position?: Vector2, camera?: CFrame): void;
		Button2Down(position?: Vector2, camera?: CFrame): void;
		Button2Up(position?: Vector2, camera?: CFrame): void;
		ClickButton1(position?: Vector2, camera?: CFrame): void;
		ClickButton2(position?: Vector2, camera?: CFrame): void;
		MoveMouse(position?: Vector2, camera?: CFrame): void;
		KeyDown(key: string): void;
		KeyUp(key: string): void;
		TypeKey(key: string): void;
	};
}

declare module "@rbxts/services" {
	export const CoreGui: Services["CoreGui"];
	export const VirtualInputManager: Services["VirtualInputManager"];
	export const VirtualUser: Services["VirtualUser"];

	export const AnalyticsService: AnalyticsService;
	export const AnimationClipProvider: AnimationClipProvider;
	export const AssetService: AssetService;
	export const AvatarEditorService: AvatarEditorService;
	export const BadgeService: BadgeService;
	export const Chat: Chat;
	export const CollectionService: CollectionService;
	export const ContentProvider: ContentProvider;
	export const ContextActionService: ContextActionService;
	export const ControllerService: ControllerService;
	export const DataStoreService: DataStoreService;
	export const Debris: Debris;
	export const GamepadService: GamepadService;
	export const GamePassService: GamePassService;
	export const GroupService: GroupService;
	export const GuiService: GuiService;
	export const HapticService: HapticService;
	export const HttpService: HttpService;
	export const InsertService: InsertService;
	export const JointsService: JointsService;
	export const KeyframeSequenceProvider: KeyframeSequenceProvider;
	export const Lighting: Lighting;
	export const LocalizationService: LocalizationService;
	export const LogService: LogService;
	export const MarketplaceService: MarketplaceService;
	export const MaterialService: MaterialService;
	export const MemoryStoreService: MemoryStoreService;
	export const MessagingService: MessagingService;
	export const PathfindingService: PathfindingService;
	export const PhysicsService: PhysicsService;
	export const Players: Players;
	export const PolicyService: PolicyService;
	export const ProximityPromptService: ProximityPromptService;
	export const ReplicatedFirst: ReplicatedFirst;
	export const ReplicatedStorage: ReplicatedStorage;
	export const RunService: RunService;
	export const ScriptContext: ScriptContext;
	export const ServerScriptService: ServerScriptService;
	export const ServerStorage: ServerStorage;
	export const SocialService: SocialService;
	export const SoundService: SoundService;
	export const StarterGui: StarterGui;
	export const StarterPack: StarterPack;
	export const StarterPlayer: StarterPlayer;
	export const Stats: Stats;
	export const Teams: Teams;
	export const TeleportService: TeleportService;
	export const TextChatService: TextChatService;
	export const TextService: TextService;
	export const TweenService: TweenService;
	export const UserInputService: UserInputService;
	export const UserService: UserService;
	export const VoiceChatService: VoiceChatService;
	export const VRService: VRService;
	export const Workspace: Workspace;
}
