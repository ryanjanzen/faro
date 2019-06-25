import * from './js/primitives';

export class RayTracer {
    constructor(private canvasId: string, private width = 300, private height = 150) {
    }

    trace() {
        const element = document.getElementById(this.canvasId);
            if (element === null) {
                return;
            }

            const canvas = element as HTMLCanvasElement;
            const context = canvas.getContext("2d");
            if (context === null) {
                return;
            }
            const imageData = context.createImageData(this.width, this.height);
            const data = imageData.data;
            
            // TODO: Manipulate data
            const point = (1,2, 3);

            context.putImageData(imageData, 0, 0);
    }
}