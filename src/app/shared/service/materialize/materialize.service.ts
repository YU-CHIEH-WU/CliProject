import { Injectable } from '@angular/core';

declare let M: any;

@Injectable()
export class MaterializeService {

    toast(message: string, duration: number) {
        M.toast({ html: message, displayLength: duration });
    }

    collapsible(target: string, option?) {
        const elem = document.querySelector(target);
        console.log(M);
        const instance = M.Collapsible.init(elem, option);
    }
    openCollapsible(instance, index) {
        instance.open(index);
    }

    closeCollapsible(instance, index) {
        instance.close(index);
    }
}
