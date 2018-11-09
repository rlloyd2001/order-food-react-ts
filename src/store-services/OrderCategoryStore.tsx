import { BehaviorSubject, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OrderCategoriesReader } from './OrderCategoriesReader';

export class OrderCategoryStore {
  public static categories: BehaviorSubject<IOrderCategory[]> = new BehaviorSubject<IOrderCategory[]>([]);
  public static selectedCategoryId: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public static selectedCategory: BehaviorSubject<IOrderCategory> = new BehaviorSubject<IOrderCategory>({} as any);

  public static initialize() {
    OrderCategoriesReader.find().subscribe((categories) => {
      this.categories.next(categories);
    });

    merge(OrderCategoryStore.selectedCategoryId, OrderCategoryStore.categories).pipe(
      filter(() => OrderCategoryStore.categories.getValue().length > 0),
      filter(() => !!OrderCategoryStore.selectedCategoryId.getValue()),
      map(() => {
       return OrderCategoryStore.categories.getValue()
        .find((value) => value.id === OrderCategoryStore.selectedCategoryId.getValue());
      }),
      filter(category => !!category)
    ).subscribe((category: IOrderCategory) => {
      OrderCategoryStore.selectedCategory.next(category);
    });
  }
}
