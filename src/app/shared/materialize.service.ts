import { Injectable } from '@angular/core';

declare let Materialize: any;

@Injectable()
export class MaterializeService {
    getMaterialize() {
        return Materialize;
    }
}
