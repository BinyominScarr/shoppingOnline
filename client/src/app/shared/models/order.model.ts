export interface Order {
  customerId: string;
  cartId: string;
  total: number;
  city: string;
  street: string;
  shippingDate: string;
  orderDate: string;
  fourLastDigits: string;
}
