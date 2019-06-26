import { Point3D, PositiveNumber, Normal, Ray } from "./primitives.js";
import { RGBColor, RGBColors } from "./graphics.js";

// Geometric Types
export interface Sphere { kind: "sphere", origin: Point3D, radius: PositiveNumber, color: RGBColor }
export let createSphere = (origin: Point3D, radius: PositiveNumber): Sphere => {
    return { kind: "sphere", origin: origin, radius: radius, color: RGBColors.White };
};

export interface Plane { kind: "plane", origin: Point3D, normal: Normal, color: RGBColor };
export let createPlane = (origin: Point3D, normal: Normal): Plane => {
    return { kind: "plane", origin: origin, normal: normal, color: RGBColors.Red };
};

export interface ShadeRectangle { kind: "shadeRectangle" };

export let hit = (ray: Ray, tMin: number, shadeRec: ShadeRectangle): boolean => {
    return false;
};