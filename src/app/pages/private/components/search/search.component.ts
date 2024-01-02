import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() emitWord = new EventEmitter<string>();
  service = inject(UserManagementService);
  searchWord!: string;
  errorBoolean!: boolean;

  getWord() {
    this.emitWord.emit(this.searchWord.toLowerCase().trim());
    this.service.errorState.subscribe((result) => (this.errorBoolean = result));
  }
}
