import { OrderDto } from 'src/dtos/order.dto';
import { IJewel } from 'src/entities/Jewel';
import Order, { IOrder } from 'src/entities/Order';
import { IAddress } from 'src/entities/User';

class OrderRepository {
  create(
    userId: string,
    jewels: IJewel[],
    total: number,
    shippingAddress: IAddress,
    status: string
  ) {
    return new Order({ userId, jewels, total, shippingAddress, status });
  }

  async findOrders(): Promise<IOrder[]> {
    return Order.find({ deletedAt: null }).sort({ _id: -1 });
  }

  async findOrdersByUserId(userId: string): Promise<IOrder[]> {
    return Order.find({ userId });
  }

  async findOrderByIdAndUpdate(
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

  async findOrderByIdAndSoftDelete(id: string): Promise<IOrder> {
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

  async findOrderByIdAndHardDelete(id: string): Promise<void> {
    return Order.findByIdAndDelete(id);
  }
}

const orderRepository = new OrderRepository();

export default orderRepository;
