import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ICustomer } from '../../shared/interface';

import { TrackByService } from '../../services/trackby.service';


@Component({
    moduleId: module.id,
    selector: 'customers-grid',
    templateUrl: 'customers-grid.component.html',
    //use onpush detectors, framework check an onpush component
    //when any input properties changes, or it fires event, or when an observable
    // fires an event
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomersGridComponent implements OnInit {
    @Input() customers: ICustomer[] = [];

    constructor() { }

    ngOnInit() { }

    sort(prop: string) {

    }
}