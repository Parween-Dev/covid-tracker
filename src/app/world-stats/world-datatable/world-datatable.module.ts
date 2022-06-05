import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorldDatatableComponent } from './world-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxDatatableModule
    ],
    declarations: [
        WorldDatatableComponent
    ],
    exports: [WorldDatatableComponent]
})
export class WorldDatatableModule { }
