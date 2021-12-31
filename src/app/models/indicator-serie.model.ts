import { ɵBrowserDomAdapter } from '@angular/platform-browser';

export class IndicatorSerie {
    date!: string;
    value!: number;

    constructor(apiObject:any) {
        this.date=apiObject.fecha;
        this.value=apiObject.valor;
     }
}
