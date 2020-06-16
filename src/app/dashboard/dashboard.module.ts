import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    FormsModule,
    DashboardRoutingModule,
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    NgxPaginationModule,
    PaginationModule.forRoot()
    
    
  ]
})
export class DashboardModule { }
