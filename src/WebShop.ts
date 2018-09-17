import Shop from "./Shop";
import Person from "./Person";

export default class WebShop extends Shop {
    constructor(name:string, owner:Person, creationDate:Date) {
        super(name, owner, creationDate);
    }
}