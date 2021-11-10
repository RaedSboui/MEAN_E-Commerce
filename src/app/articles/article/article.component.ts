import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/Article';
import { ArticleService } from '../../services/article.service';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public data: Article = {};
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let idArticle = this.activatedRoute.snapshot.params.id;
    this.articleService.getArticleById(idArticle).subscribe((item) => {
      this.data = item;
    });
  }
}
