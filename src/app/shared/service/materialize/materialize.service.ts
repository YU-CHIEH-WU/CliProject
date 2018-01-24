import { Injectable } from '@angular/core';

declare let Materialize: any;
declare let $: any;

@Injectable()
export class MaterializeService {

    toast(message: string, duration: number) {
        Materialize.toast(message, duration);
    }

    collapsible(target: string) {
        $(target).collapsible();
    }
}
