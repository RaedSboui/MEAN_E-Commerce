import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/Categorie';
import { SCategorie } from 'src/app/models/SCategorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { ScategorieService } from 'src/app/services/scategorie.service';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
})
export class AddArticleComponent implements OnInit {
  form: FormGroup;
  categories: Categorie[] = [];
  scategories: SCategorie[] = [];
  formData: FormData = new FormData();

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private categorieService: CategorieService,
    private scategorieService: ScategorieService,
    private route: Router
  ) {
    let formControls = {
      reference: new FormControl('', [Validators.required]),
      designation: new FormControl('', []),
      marque: new FormControl('', []),
      categorie: new FormControl('', []),
      scategorie: new FormControl('', []),
      prixAchat: new FormControl('', []),
      prixVente: new FormControl('', []),
      prixSolde: new FormControl('', []),
      caracteristiques: new FormControl('', []),
      qteStock: new FormControl('', []),
      imageartpetitf: [''],
    };
    this.form = this.fb.group(formControls);
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  handleFile(event: any) {
    const file = event.target.files[0];
    this.formData.append('imageartpetitf', file);
    this.form.patchValue({ imageartpetitf: file.name });
    this.form.updateValueAndValidity();
  }

  addArticle() {
    let data = this.form.value;
    this.formData.append('reference', data.reference!);
    this.formData.append('designation', data.designation!);
    this.formData.append('marque', data.marque!);
    this.formData.append('categorie', data.categorie!);
    this.formData.append('scategorie', data.scategorie!);
    this.formData.append('prixAchat', data.prixAchat?.toString()!);
    this.formData.append('prixVente', data.prixVente?.toString()!);
    this.formData.append('prixSolde', data.prixSolde?.toString()!);
    this.formData.append('caracteristiques', data.caracteristiques!);
    this.formData.append('qteStock', data.qteStock?.toString()!);
    // this.formData.append(
    //   'imageartpetitf',
    //   this.form.get('imageartpetitf')?.value
    // );
    //this.articleService.sendFile(this.formData);
    this.articleService.add(this.formData).subscribe(() => {
      this.route.navigateByUrl('admin/articles');
    });
  }

  fetchCategories() {
    this.categorieService
      .fetchCategories()
      .subscribe((data) => (this.categories = data));
  }

  fetchSCategoriesByCat() {
    this.scategories.length = 0;

    let categorieId = this.form.get('categorie')?.value;
    this.scategorieService
      .fetchSCategoriesByCat(categorieId)
      .subscribe((data) => {
        data.forEach((s) => {
          // if (s.categorie.nomCategorie == 'aa')
          this.scategories.push(s);
        });
      });
  }
}
