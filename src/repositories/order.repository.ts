import { OrderDto } from 'src/dtos/order.dto';
import { IJewel } from 'src/entities/Jewel';
import Order, { IOrder } from 'src/entities/Order';
import { IAddress } from 'src/entities/User';

export function create(
  userId: string,
  jewels: IJewel[],
  total: number,
  shippingAddress: IAddress,
  status: string
) {
  return new Order({ userId, jewels, total, shippingAddress, status });
}

export async function findOrders(): Promise<IOrder[]> {
  return Order.find({ deletedAt: null }).sort({ _id: -1 });
}

export async function findOrdersByUserId(userId: string): Promise<IOrder[]> {
  return Order.find({ userId });
}

export async function findOrderByIdAndUpdate(
  id: string,
  orderDto: OrderDto
): Promise<IOrder> {
  return Order.findByIdAndUpdate(
    id,
    {
      $set: {
        ...orderDto,
        updatedAt: new Date(),
      },
    },
    { new: true }
  );
}

export async function findOrderByIdAndSoftDelete(id: string): Promise<IOrder> {
  return Order.findByIdAndUpdate(
    id,
    {
      $set: {
        deletedAt: new Date(),
      },
    },
    { new: true }
  );
}

export async function findOrderByIdAndHardDelete(id: string): Promise<void> {
  return Order.findByIdAndDelete(id);
}
