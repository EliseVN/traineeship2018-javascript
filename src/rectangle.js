import Shape from './shape';

export default class Rectangle extends Shape { 
    constructor (color, x, y, width, height) { 
        super(color, x, y);
        this.width  = width;
        this.height = height;
    } 

    rotate90Degrees(){
        let newWidth = this.height;
        let newHeight = this.width;

        this.width = newWidth;
        this.height = newHeight;
    }

    enlarge(additionalWidth, additionalHeight){
        if (additionalWidth >= 0 && additionalHeight >= 0){
            this.width = this.width + additionalWidth;
            this.height = this.height + additionalHeight;
        }
    }

    shrink(minusWidth, minusHeight){
        if (minusWidth >= 0 && minusHeight >= 0){
            this.width = this.width - minusWidth;
            this.height = this.height - minusHeight;
        }
    }

    isSquare(){
        if (this.width === this.height){
            return true;
        } else {
            return false;
        }
    }
}