export interface RGBColor { r: number, g: number, b: number }
export class RGBColors {
    public static readonly Black = { r: 0, g: 0, b: 0 };
    
    public static readonly Red = { r: 255, g: 0, b: 0 };
    public static readonly Green = { r: 0, g: 255, b: 0 };
    public static readonly Blue = { r: 0, g: 0, b: 255 };

    public static readonly Yellow = { r: 255, g: 255, b: 0 };
    public static readonly Magenta = { r: 255, g: 0, b: 255 };
    public static readonly Cyan = { r: 0, g: 255, b: 255 };

    public static readonly White = { r: 255, g: 255, b: 255 };
}