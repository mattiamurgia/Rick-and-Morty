import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPrivateRoutingModule } from './components-private-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CardColorDirective } from 'src/app/directive/card-color.directive';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDescriptionComponent } from './character-description/character-description.component';
import { SkeletonCardComponent } from './skeleton-card/skeleton-card.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    CardColorDirective,
    CharacterDescriptionComponent,
    SkeletonCardComponent,
    ModalComponent,
    PaginationComponent,
    SearchComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    ComponentsPrivateRoutingModule,
    PipeModule,
    HttpClientModule,
    NgbPaginationModule,
    FormsModule,
    NgbDropdownModule,
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    CardColorDirective,
    CharacterDescriptionComponent,
    SkeletonCardComponent,
    ModalComponent,
    PaginationComponent,
    SearchComponent,
    DropdownComponent,
  ],
})
export class ComponentsPrivateModule {}
