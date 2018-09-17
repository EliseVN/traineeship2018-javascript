import Shop from "./Shop";
import Person from "./Person";

export default class WebShop extends Shop {
    url:string;

    constructor(name:string, owner:Person, creationDate:Date, url:string) {
        super(name, owner, creationDate);
        this.url = url;
    }
}