import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article';
import { ArticleService } from '../../services/article.service';
import {
  faEdit,
  faInfoCircle,
  faTrashAlt,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/Categorie';
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss'],
})
export class ListArticlesComponent implements OnInit {
  articles: Article[] = [];
  faEdit = faEdit;
  faInfoCircle = faInfoCircle;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  //for filter
  categories: Categorie[] = [];
  term: any;
  termTwo: any;

  constructor(
    private articleService: ArticleService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.fetchArticles();
    this.fetchCategories();
  }

  fetchArticles() {
    this.articleService
      .fetchArticles()
      .subscribe((data) => (this.articles = data));
  }

  fetchCategories() {
    this.categorieService
      .fetchCategories()
      .subscribe((data) => (this.categories = data));
  }

  onDelete(id: any) {
    this.articleService.delete(id).then(() => this.ngOnInit());
  }
}
