namespace Primitives {
    type Point3D = { readonly x: number, readonly y: number, readonly z: number };
    export createPoint3D = (x:number, y:number, z:number): Point3D => {
        return {x: x, y: y, z: z };
    };

    type Vector3D = { readonly x: number, readonly y: number, readonly z: number };
    let createVector3D = (x:number, y:number, z:number): Vector3D => {
        return {x: x, y: y, z: z };
    };

    type Ray = { readonly origin: Point3D, readonly direction: Vector3D };
    let createRay = (origin:Point3D, direction: Vector3D): Ray => {
        return { origin: origin, direction: direction };
    }

    type PositiveNumber = { readonly n: number };
    let createPositiveNumber = (n:number): PositiveNumber => {
        if (n <= 0.0) {
            throw 'Number must be positive.';
        }

        return {n: n};
    }

    type Sphere = { readonly origin: Point3D, radius: PositiveNumber }
    let createSphere = (origin: Point3D, radius: PositiveNumber): Sphere => {
        return { origin: origin, radius: radius };
    };

    type Normal = { readonly x:number, readonly y:number, readonly z:number };
    let createNormal = (x:number, y:number, z:number): Normal => {
        // todo: validate
        return { x: x, y: y, z:z };
    };

    type Plane = { readonly origin: Point3D, readonly normal: Normal };
    let createPlane = (origin:Point3D, normal:Normal): Plane => {
        return { origin: origin, normal: normal };
    };
}
