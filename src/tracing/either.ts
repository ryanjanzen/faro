export module Either {
    // export type Either<a, b> =
    //     | Left of 'a
    //     | Right of 'b
    export interface Left<T> { kind: "left", v:T};
    export interface Right<T> { kind: "right", v:T}
    export type Either<T0,T1> = Left<T0> | Right<T1>

    // let isLeft = function
    //   | Left _ -> true
    //   | _      -> false
    export let isLeft = <T0, T1>(x:Either<T0, T1>): boolean => {
        switch (x.kind) {
            case "left":
                return true;
            case "right":
                return false;
        }
    };

    // let isRight = function
    //   | Right _ -> true
    //   | _      -> false
    export let isRight = <T0, T1>(x:Either<T0, T1>): boolean => {
        switch (x.kind) {
            case "left":
                return false;
            case "right":
                return true;
        }
    };

    // type either<'a, 'b> =
    //     Either<'a, 'b> // lower-case alias like option


    export let createLeft = <T>(v:T): Left<T> => {
        return { kind: "left", v:v };
    };

    export let createRight = <T>(v:T): Right<T> => {
        return { kind: "right", v:v };
    };
}
