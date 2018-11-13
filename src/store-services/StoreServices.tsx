import { OrderCategoryStore } from './OrderCategoryStore';

export class StoreServices {
  public static store = new StoreServices();
  public static get stores(): IStoreInitializer[] {
    return [this.store.orderCategory];
  }
  public orderCategory = new OrderCategoryStore();
}
