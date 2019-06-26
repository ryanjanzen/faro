import { Either } from "./either";

export interface Point3D { x: number, y: number, z: number };
export let createPoint3D = (x: number, y: number, z: number): Point3D => {
    return { x: x, y: y, z: z };
};

export interface Vector3D { x: number, y: number, z: number };
export let createVector3D = (x: number, y: number, z: number): Vector3D => {
    return { x: x, y: y, z: z };
};

export interface Ray { origin: Point3D, direction: Vector3D };
export let createRay = (origin: Point3D, direction: Vector3D): Ray => {
    return { origin: origin, direction: direction };
}

export interface PositiveNumber { n: number };
export let createPositiveNumber = (n: number): Either.Either<string, PositiveNumber> => {
    if (n <= 0.0) {
        return Either.createLeft ('Number must be positive.');
    }

    return Either.createRight ({ n:n });
}

export interface Normal { x: number, y: number, z: number };
export let createNormal = (x: number, y: number, z: number): Normal => {
    // todo: validate
    return { x: x, y: y, z: z };
};