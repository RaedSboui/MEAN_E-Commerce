import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Article } from '../../models/Article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  form: FormGroup;
  id = this.activatedRoute.snapshot.params.id;
  article!: Article;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    let formControls = {
      reference: new FormControl('', [Validators.required]),
      designation: new FormControl('', []),
      marque: new FormControl('', []),
      categorie: new FormControl('', []),
      souscategorie: new FormControl('', []),
      prixAchat: new FormControl('', []),
      prixVente: new FormControl('', []),
      prixSolde: new FormControl('', []),
      caracteristiques: new FormControl('', []),
      qteStock: new FormControl('', []),
    };
    this.form = this.fb.group(formControls);
    this.patchFormValue();
  }

  ngOnInit(): void {}

  patchFormValue() {
    return this.articleService.getArticleById(this.id).subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  updateArticle() {
    let data = this.form.value as Article;
    data._id = this.id;
    this.articleService.update(data).then(() => {
      this.route.navigateByUrl('admin/articles');
    });
  }
}
