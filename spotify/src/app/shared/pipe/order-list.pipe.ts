import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, argumento: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      if(argumento === null) {
        return value;
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[argumento] < b[argumento]) {
            return -1
          }
          else if (a[argumento] === b[argumento]) {
            return 0;
          }
          else if (a[argumento] > b[argumento]) {
            return 1;
          }
          return 1
        });

        return (sort === 'asc') ? tmpList : tmpList.reverse();
      }
    } catch (e) {
      console.log('Algo ha ido mal');
      return value; 
    }
  }

}
