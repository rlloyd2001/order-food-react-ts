import { BehaviorSubject, merge, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MenuItemsReader } from './MenuItemsReader';
import { OrderCategoriesReader } from './OrderCategoriesReader';

export class OrderCategoryStore implements IStoreInitializer {
  public get categories(): Observable<IOrderCategory[]> {
    return this.categoriesSubject.asObservable();
  }

  public selectedCategoryId: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get selectedCategory(): Observable<IOrderCategory> {
    return this.selectedCategorySubject.asObservable();
  }

  public get menuItems(): Observable<IMenuItem[]> {
    return this.menuItemsSubject.asObservable();
  }

  private selectedCategorySubject: BehaviorSubject<IOrderCategory> = new BehaviorSubject<IOrderCategory>({} as any);
  private categoriesSubject: BehaviorSubject<IOrderCategory[]> = new BehaviorSubject<IOrderCategory[]>([]);
  private menuItemsSubject: BehaviorSubject<IMenuItem[]> = new BehaviorSubject<IMenuItem[]>([]);

  public initialize() {
    OrderCategoriesReader.find().subscribe((categories) => {
      this.categoriesSubject.next(categories);
    });

    merge(this.selectedCategoryId, this.categories).pipe(
      filter(() => this.categoriesSubject.getValue().length > 0),
      filter(() => !!this.selectedCategoryId.getValue()),
      map(() => {
       return this.categoriesSubject.getValue()
        .find((value) => value.id === this.selectedCategoryId.getValue());
      }),
      filter(category => !!category)
    ).subscribe((category: IOrderCategory) => {
      this.selectedCategorySubject.next(category);
    });

    this.selectedCategoryId.subscribe((categoryId) => {
      if (!categoryId) {
        this.menuItemsSubject.next([]);
      }
      MenuItemsReader.find(categoryId).subscribe((items) => {
        this.menuItemsSubject.next(items);
      });
    });
  }
}
