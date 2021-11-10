import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SCategorie } from 'src/app/models/SCategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';

@Component({
  selector: 'app-list-scategories',
  templateUrl: './list-scategories.component.html',
  styleUrls: ['./list-scategories.component.scss'],
})
export class ListScategoriesComponent implements OnInit {
  scategories: SCategorie[] = [];
  faEdit = faEdit;
  faInfoCircle = faInfoCircle;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  constructor(private scategorieService: ScategorieService) {}

  ngOnInit(): void {
    this.fetchSCategories();
  }

  fetchSCategories() {
    this.scategorieService
      .fetchSCategories()
      .subscribe((data) => (this.scategories = data));
  }

  onDelete(id: any) {
    this.scategorieService.delete(id).then(() => this.ngOnInit());
  }
}
