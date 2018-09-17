import Shop from "./Shop";
import Person from "./Person";

export default class PhysicalShop extends Shop {
    location:string;
    surface:number;

    constructor(name:string, owner:Person, creationDate:Date, location:string, surface:number) {
        super(name, owner, creationDate);
        this.location = location;
        this.surface = surface;
    }
}