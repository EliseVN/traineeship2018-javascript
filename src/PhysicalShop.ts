import Shop from "./Shop";
import Person from "./Person";

export default class PhysicalShop extends Shop {
    constructor(name:string, owner:Person, creationDate:Date) {
        super(name, owner, creationDate);
    }
}