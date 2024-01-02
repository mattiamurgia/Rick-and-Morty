import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { UserManagementService } from 'src/app/services/user-management.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  modalService = inject(NgbModal);
  service = inject(UserManagementService);
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  characters: Card[] = [];
  copyCharacters: Card[] = [];
  isLoading: boolean = true;
  modal!: NgbModalRef;
  counter: number = 0;
  disableDecrement: boolean = false;
  errorImage: boolean = false;

  getValueSlice(endValue: number) {
    this.characters = !endValue
      ? this.copyCharacters
      : this.copyCharacters.slice(0, endValue);
  }

  getCharacter(page: number) {
    this.service
      .getAllCharacter(page - 1)
      .pipe(take(1))
      .subscribe({
        next: (value) => {
          this.characters = value.results;
          this.copyCharacters = value.results;
        },
        error: () => {},
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  searchName(name: string) {
    this.service
      .searchNameCharacter(name)
      .pipe(take(1))
      .subscribe({
        next: (value) => {
          this.characters = value;
          this.errorImage = false;
          this.service.errorState.next(false);
        },
        error: () => {
          this.errorImage = true;
          this.characters = [];
          this.service.errorState.next(true);
        },
      });
  }
}
//?: GetCharacter with single Button
//getNewCharacter(operation: string) {
// this.counter = operation === '+' ? this.counter + 1 : this.counter - 1;
// this.counter = this.counter < 0 ? 0 : this.counter;
// this.disableDecrement = this.counter === 1;
// this.getCharacter(this.counter);
//}
//*cardName viene passato da @Output()nameCard con $event*//
// nameCardClick(cardName: Card) {
// this.modal = this.modalService.open(ModalComponent, {
//   centered: true,
//   size: 'lg',
// });
// //** Passaggio oggetto card alla modale */
// this.modal.componentInstance.descriptionCardModal = cardName;
// }
