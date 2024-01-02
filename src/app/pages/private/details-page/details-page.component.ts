import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { UserManagementService } from 'src/app/services/user-management.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],

})
export class DetailsPageComponent implements OnInit {
  activedRoute = inject(ActivatedRoute);
  service = inject(UserManagementService);
  location = inject(Location);
  router = inject(Router);
  descriptionCharacter!: Card;
  idParams!: number;
  isLoading: boolean = true;

  ngOnInit(): void {
    // *Navigation Path*
    this.activedRoute.paramMap.subscribe((params) => {
      const idPath = Number(params.get('id'));
      idPath && idPath <= 826
        ? (this.idParams = idPath)
        : this.router.navigate(['/home']);
    });

    this.service.getCharacterID(this.idParams).subscribe({
      next: (value) => {
        this.descriptionCharacter = value;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  goBack() {
    this.location.back();
  }
}

//*Subscribe Card id*
// this.service.getAllCharacter().subscribe({
//   next: (value) => {
//     this.descriptionCharacter = value.results.filter(
//       ({ id }) => id === Number(this.idParams)
//     );
//   },
//   //*Loader*
//   complete: () => {
//     this.isLoading = false;
//   },
// });
