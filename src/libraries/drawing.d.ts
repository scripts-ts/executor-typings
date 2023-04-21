interface DrawnObject {
	Visible: boolean;
	ZIndex: number;
	Transparency: number;
	Color: Color3;
	Remove(): void;
}

interface Line extends DrawnObject {
	Thickness: number;
	From: Vector2;
	To: Vector2;
}

interface Text extends DrawnObject {
	readonly TextBounds: Vector2;
	Text: string;
	Size: number;
	Font: number;
	Center: boolean;
	Outline: boolean;
	OutlineColor: Color3;
	Position: Vector2;
}

interface Image extends DrawnObject {
	Data: string;
	Size: Vector2;
	Position: Vector2;
	Rounding: number;
}

interface Circle extends DrawnObject {
	Radius: number;
	Position: Vector2;
	NumSides: number;
	Thickness: number;
	Filled: boolean;
}

interface Square extends DrawnObject {
	Size: Vector2;
	Position: Vector2;
	Thickness: number;
	Filled: boolean;
}

interface Quad extends DrawnObject {
	PointA: Vector2;
	PointB: Vector2;
	PointC: Vector2;
	PointD: Vector2;
	Thickness: number;
	Filled: boolean;
}

interface Triangle extends DrawnObject {
	PointA: Vector2;
	PointB: Vector2;
	PointC: Vector2;
	Thickness: number;
	Filled: boolean;
}

/**
 * @hidden
 */
type DrawnObjectByString = {
	Line: Line;
	Text: Text;
	Image: Image;
	Circle: Circle;
	Square: Square;
	Quad: Quad;
	Triangle: Triangle;
};

/**
 * @hidden
 */
type DrawingAPI = {
	new <T extends keyof DrawnObjectByString>(type: T): DrawnObjectByString[T];
	Fonts: { UI: 0; System: 1; Plex: 2; Monospace: 3 };
};

declare const Drawing: DrawingAPI