import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indicatorValue'
})
export class IndicatorValuePipe implements PipeTransform {

  transform(value: number|string, method:string, type: string): string {
    let newStr = String(value);

    if(type === 'Pesos'){
      if(method === 'htmlOutput')
        newStr = '<abbr>$</abbr>&nbsp' + newStr;

      if(method === 'valueOutput')
        newStr = '$' + newStr;

      if(method === 'currencyOutput')
        newStr = '$';
    }

    if(type === 'Dólar'){
      if(method === 'htmlOutput')
        newStr = '<abbr>$</abbr>&nbsp' + newStr;

      if(method === 'valueOutput')
        newStr = 'US$' + newStr;

      if(method === 'currencyOutput')
        newStr = 'US$';
    }

    if(type === 'Porcentaje'){
      if(method === 'htmlOutput')
        newStr = newStr + '&nbsp;<abbr>%</abbr>'

      if(method === 'valueOutput')
        newStr = newStr + '%'

      if(method === 'currencyOutput')
        newStr = '%'
    }

    return newStr;
  }
}
