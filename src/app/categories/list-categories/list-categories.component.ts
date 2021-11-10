import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Categorie } from 'src/app/models/Categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  faEdit = faEdit;
  faInfoCircle = faInfoCircle;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categorieService
      .fetchCategories()
      .subscribe((data) => (this.categories = data));
  }
  onDelete(id: any) {
    this.categorieService.delete(id).then(() => this.ngOnInit());
  }
}
