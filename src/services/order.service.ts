import { OrderDto } from 'src/dtos/order.dto';
import { IJewel } from 'src/entities/Jewel';
import { IOrder } from 'src/entities/Order';
import { IAddress } from 'src/entities/User';
import orderRepository from 'src/repositories/order.repository';

class OrderService {

  createOrderEntity(
    userId: string,
    jewels: IJewel[],
    total: number,
    shippingAddress: IAddress,
    status: string
  ) {
    return orderRepository.create(userId, jewels, total, shippingAddress, status);
  }
  
  async getOrders(): Promise<IOrder[]> {
    return orderRepository.findOrders();
  }
  
  async getOrdersByUserId(userId: string): Promise<IOrder[]> {
    return orderRepository.findOrdersByUserId(userId);
  }
  
  async getOrderByIdAndUpdate(
    id: string,
    orderDto: OrderDto
  ): Promise<IOrder> {
    return orderRepository.findOrderByIdAndUpdate(id, orderDto);
  }
  
  async getOrderByIdAndSoftDelete(id: string): Promise<IOrder> {
    return orderRepository.findOrderByIdAndSoftDelete(id);
  }
  async getOrderByIdAndHardDelete(id: string): Promise<void> {
    return orderRepository.findOrderByIdAndHardDelete(id);
  }
}

const orderService = new OrderService();

export default orderService;

