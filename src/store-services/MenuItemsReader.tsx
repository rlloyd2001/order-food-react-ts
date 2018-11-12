import { Observable, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as data from './orderMenuExample.json';

export class MenuItemsReader {
  public static find(categoryId: string): Observable<IMenuItem[]> {
    return timer(300).pipe(
      map(() => {
        return (data as any).items;
      }),
      map((items: IMenuItem[]) => {
        return items.filter(item => item.categoryId === categoryId);
      }),
      take(1),
    );
  }
}
