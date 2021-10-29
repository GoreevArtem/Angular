import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {RecordComponent} from './record/record.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'main', component: MainComponent},
      {path: 'about', component: AboutComponent},
      {path: 'record', component: RecordComponent}
    ]
      }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
