import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { OccupancyDetailComponent  } from './occupancy-detail/occupancy-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  // title = 'Occupancy';

  openModal() {
    this.modalRef = this.modalService.show(OccupancyDetailComponent,  {
      initialState: {
        title: 'Occupancy Selection',
        data: {}
      }
    });
  }

}
