import { OrderDto } from 'src/dtos/order.dto';
import { IJewel } from 'src/entities/Jewel';
import { IOrder } from 'src/entities/Order';
import { IAddress } from 'src/entities/User';
import {
  create,
  findOrderByIdAndHardDelete,
  findOrderByIdAndUpdate,
  findOrdersByUserId,
  findOrders,
  findOrderByIdAndSoftDelete,
} from 'src/repositories/order.repository';

export function createOrderEntity(
  userId: string,
  jewels: IJewel[],
  total: number,
  shippingAddress: IAddress,
  status: string
) {
  return create(userId, jewels, total, shippingAddress, status);
}

export async function getOrders(): Promise<IOrder[]> {
  return findOrders();
}

export async function getOrdersByUserId(userId: string): Promise<IOrder[]> {
  return findOrdersByUserId(userId);
}

export async function getOrderByIdAndUpdate(
  id: string,
  orderDto: OrderDto
): Promise<IOrder> {
  return findOrderByIdAndUpdate(id, orderDto);
}

export async function getOrderByIdAndSoftDelete(id: string): Promise<IOrder> {
  return findOrderByIdAndSoftDelete(id);
}

export async function getOrderByIdAndHardDelete(id: string): Promise<void> {
  return findOrderByIdAndHardDelete(id);
}
