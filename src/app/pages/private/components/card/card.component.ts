import { Component,Input, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Card } from 'src/app/model/Card';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  modalService = inject(NgbModal);
  @Input() character!: Card;
  modal!: NgbModalRef;
  nameVerified: string = '';

  verifiedCard() {
    this.modal = this.modalService.open(ModalComponent, {
      centered: true,
      size: 'lg',
    });
    //** Passaggio oggetto card alla modale */
    this.modal.componentInstance.descriptionCardModal = this.character;
    this.modal.result.then((c) => (this.nameVerified = c));
  }
}






//*? Old functions for notes**//
// @Output() nameCard = new EventEmitter<Card>();
// getNameCard(id: number) {
//   this.nameCard.emit(this.arrayCharacter[id - 1]?.name);
// }

// getNameCard(character: Card) {
//   this.nameCard.emit(character);
// }
