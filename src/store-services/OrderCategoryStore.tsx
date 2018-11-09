import { BehaviorSubject, merge, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OrderCategoriesReader } from './OrderCategoriesReader';

export class OrderCategoryStore {
  public static get categories(): Observable<IOrderCategory[]> {
    return OrderCategoryStore.categoriesSubject.asObservable();
  }
  public static selectedCategoryId: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public static get selectedCategory(): Observable<IOrderCategory> {
    return OrderCategoryStore.selectedCategorySubject.asObservable();
  }

  public static initialize() {
    OrderCategoriesReader.find().subscribe((categories) => {
      this.categoriesSubject.next(categories);
    });

    merge(OrderCategoryStore.selectedCategoryId, OrderCategoryStore.categories).pipe(
      filter(() => OrderCategoryStore.categoriesSubject.getValue().length > 0),
      filter(() => !!OrderCategoryStore.selectedCategoryId.getValue()),
      map(() => {
       return OrderCategoryStore.categoriesSubject.getValue()
        .find((value) => value.id === OrderCategoryStore.selectedCategoryId.getValue());
      }),
      filter(category => !!category)
    ).subscribe((category: IOrderCategory) => {
      OrderCategoryStore.selectedCategorySubject.next(category);
    });
  }

  private static selectedCategorySubject: BehaviorSubject<IOrderCategory> = new BehaviorSubject<IOrderCategory>({} as any);
  private static categoriesSubject: BehaviorSubject<IOrderCategory[]> = new BehaviorSubject<IOrderCategory[]>([]);
}
