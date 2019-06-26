import { RGBColor } from "./graphics";
import { Sphere } from "./geometric";
import { Tracer } from "./tracers";

export interface ViewPlane {
    horizontalResolution: number
    verticalResolution: number
    pixelSize: number
    gamma: number
};
export interface World {
    viewPlane: ViewPlane
    backgroundColor: RGBColor
    sphere: Sphere
    tracer: Tracer
};