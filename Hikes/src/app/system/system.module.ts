import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import {DropdownDirective} from './shared/directive/dropdown.directive';
import {FooterComponent} from './shared/component/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RecordComponent } from './record/record.component';
import { AddRecordComponent } from './record/add-record/add-record.component';
import { EditRecordComponent } from './record/edit-record/edit-record.component';
import {RecordService} from './shared/services/record.service';
import {SearchPipe} from './shared/pipes/search.pipe';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule
    ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
    declarations: [
        MainComponent,
        SidebarComponent,
        HeaderComponent,
        DropdownDirective,
        FooterComponent,
        AboutComponent,
        RecordComponent,
        AddRecordComponent,
        EditRecordComponent,
        SearchPipe
    ],
  providers: [
    RecordService
  ]
})
export class SystemModule {}
