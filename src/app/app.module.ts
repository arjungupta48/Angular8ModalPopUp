import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OccupancyDetailComponent } from './occupancy-detail/occupancy-detail.component';
import { FormsModule } from '@angular/forms';
import { OccupancyService } from './occupancy.service';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OccupancyDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [OccupancyService],
  bootstrap: [AppComponent],
  entryComponents: [ OccupancyDetailComponent ]
})
export class AppModule { }
