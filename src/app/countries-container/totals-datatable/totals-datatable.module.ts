import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalsDatatableComponent } from './totals-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        CommonModule,
        NgxDatatableModule
    ],
    declarations: [
        TotalsDatatableComponent
    ]
})
export class TotalsDatatableModule { }
