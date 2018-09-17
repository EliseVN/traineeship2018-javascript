export default class Item {
    id: string;
    name: string;
    price: number;
    purchasePrice: number;
    category: ItemCategory;

    constructor(id:string, name:string, price:number, purchasePrice:number, category:ItemCategory) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.purchasePrice = purchasePrice;
        this.category = category;
    }
}