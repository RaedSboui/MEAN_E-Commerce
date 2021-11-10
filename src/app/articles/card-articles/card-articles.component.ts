import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-card-articles',
  templateUrl: './card-articles.component.html',
  styleUrls: ['./card-articles.component.scss'],
})
export class CardArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService
      .fetchArticles()
      .subscribe((data) => (this.articles = data));
  }
}
