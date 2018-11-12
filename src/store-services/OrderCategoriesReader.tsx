import { Observable, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as data from './orderMenuExample.json';

export class OrderCategoriesReader {
  public static find(): Observable<IOrderCategory[]> {
    return timer(300).pipe(
      map(() => {
        return (data as any).categories;
      }),
      take(1)
    );
  }
}
