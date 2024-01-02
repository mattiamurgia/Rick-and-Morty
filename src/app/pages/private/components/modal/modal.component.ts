import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Card } from 'src/app/model/Card';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  descriptionCardModal!: Card;
  modalService = inject(NgbActiveModal);
  verified: boolean = false;
  modal!: NgbModalRef;

  closedModal() {
    this.modalService.close();
  }

  verifiedName(description: Card) {
    //? !this.verified && (this.verified = true);
    this.modalService.close(' (Verified ✔️)');
  }
}
