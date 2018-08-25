import { ICartItem } from 'src/app/interfaces/cart-item.interface';

export class CartItemModel implements ICartItem {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public shipDate?: Date,
  ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.shipDate = shipDate;
  }
}
