class Product {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  getProductPrice(): number {
    return this.price;
  }
}

class Box {
  private contents: (Box | Product)[] = [];

  add(item: Box | Product): void {
    this.contents.push(item);
  }

  remove(item: Box | Product): void {
    const index = this.contents.indexOf(item);

    if (index !== -1) {
      this.contents.splice(index, 1);
    }
  }

  calculatePrice(): number {
    let total: number = 0;

    for (const item of this.contents) {
      if (item instanceof Product) {
        total += item.getProductPrice();
      } else if (item instanceof Box) {
        total += item.calculatePrice();
      }
    }

    return total;
  }
}

const product1: Product = new Product(20);
const product2: Product = new Product(30);

const box1: Box = new Box();

box1.add(product1);
box1.add(product2);

console.log("The total price of box1's assets: " + box1.calculatePrice());

const product3: Product = new Product(10);

const box2: Box = new Box();

box2.add(box1);
box2.add(product3);

console.log("The total price of box2's assets: " + box2.calculatePrice());
