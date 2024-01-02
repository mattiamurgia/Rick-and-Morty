import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  service = inject(UserManagementService);
  page: number = 1;

  @Output() pageNumber = new EventEmitter<number>();

  ngOnInit(): void {
    this.pageNumber.emit(0);
  }

  selectPage(page: string) {
    this.page = Number(page);
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  clickNumber() {
    setTimeout(() => {
      this.pageNumber.emit(this.page + 1);
    });
  }
}
