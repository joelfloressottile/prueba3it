import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return moment(value).format('DD-MM-YYYY');
  }

}
