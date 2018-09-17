import Person from "./Person";
import Item from "./Item";

export default class Shop {
    name: string;
    owner: Person;
    creationDate: Date;

    stock: Item[] = [];
    sold: number[] = [];

    constructor(name:string, owner:Person, creationDate:Date) {
        this.name = name;
        this.owner = owner;
        this.creationDate = creationDate;
    }

    addItem(item:Item){
        this.stock.push(item);
    }

    getItems(){
        return this.stock;
    }

    getItemsOfCategory(category:ItemCategory){
        let categoryItems = [];

        for (let item of this.stock) {
            if (item.category === category){
                categoryItems.push(item);
            }
        }
        
        return categoryItems;
    }

    getItem(id:string){
        for (let item of this.stock) {
            if (item.id === id){
                return item;
            }
        }
    }
}