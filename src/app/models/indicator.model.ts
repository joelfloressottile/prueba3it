// import { IndicatorSerie } from './indicator-serie.model'

import { IndicatorSerie } from './indicator-serie.model';

export class Indicator {
    code!: string;
    lastUpdate!: string;
    unit!: string;
    name!: string;
    value!: number;
    series: Array<IndicatorSerie> = [];
    
    constructor(apiObject:any) {
        this.code=apiObject.codigo || null;
        this.unit=apiObject.unidad_medida || null;
        this.lastUpdate= apiObject.fecha || null;
        this.name=apiObject.nombre || null;
        this.value=apiObject.valor || null;
        if(apiObject.hasOwnProperty('serie'))
            apiObject.serie.forEach((s: any) => {
                this.series.push({
                    date: s.fecha,
                    value: s.valor,
                })
            })
     }
}
