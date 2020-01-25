import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input() itemsPerPage: number;
  @Input() totalItems: number;
  @Output() skip = new EventEmitter<number>();

  currentPage = 1;
  pages = [] as number[];

  constructor() {}

  ngOnInit() {
    if (this.totalItems) {
      const numberOfPages = this.totalItems / this.itemsPerPage;
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }

      this.currentPage = 1;
    }
  }

  selectPage(pageNumber: number) {
    if (
      pageNumber >= this.pages[0] &&
      pageNumber <= this.pages[this.pages.length - 1]
    ) {
      this.currentPage = pageNumber;
      this.skip.emit(this.getNumberOfItemsToSkip());
    }
  }

  getNumberOfItemsToSkip(): number {
    return this.currentPage * this.itemsPerPage - this.itemsPerPage;
  }
}
