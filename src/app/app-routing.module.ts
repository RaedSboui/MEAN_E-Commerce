import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { AddCategoriesComponent } from './categories/add-categories/add-categories.component';
import { ArticleComponent } from './articles/article/article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { HomeComponent } from './home/home.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { EditCategoriesComponent } from './categories/edit-categories/edit-categories.component';
import { AddScategoriesComponent } from './categories/add-scategories/add-scategories.component';
import { EditScategoriesComponent } from './categories/edit-scategories/edit-scategories.component';
import { ListScategoriesComponent } from './categories/list-scategories/list-scategories.component';
import { CardArticlesComponent } from './articles/card-articles/card-articles.component';
import { ListeCommandesComponent } from './commandes/liste-commandes/liste-commandes.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: 'find', redirectTo: 'search'},
  { path: 'home', component: HomeComponent },
  // {path: 'search', component: SearchComponent},
  {
    path: 'admin/articles',
    children: [
      { path: 'add', component: AddArticleComponent },
      { path: ':id/edit', component: EditArticleComponent },
      { path: ':id', component: ArticleComponent },
      { path: '', component: ListArticlesComponent },
    ],
  },
  {
    path: 'categories',
    children: [
      { path: 'add', component: AddCategoriesComponent },
      { path: ':id/edit', component: EditCategoriesComponent },
      { path: '', component: ListCategoriesComponent },
      { path: 'addscat', component: AddScategoriesComponent },
      { path: ':id/editscat', component: EditScategoriesComponent },
      { path: 'scat', component: ListScategoriesComponent },
    ],
  },
  { path: 'articles', component: CardArticlesComponent },
  {
    path: 'commandes',
    children: [
      // { path: 'add', component: AddCategoriesComponent },
      // { path: ':id/edit', component: EditCategoriesComponent },
      { path: '', component: ListeCommandesComponent },
      // { path: 'addscat', component: AddScategoriesComponent },
      // { path: ':id/editscat', component: EditScategoriesComponent },
    ],
  },
  {
    path: 'users',
    children: [
      { path: 'add', component: AddUserComponent },
      { path: ':id/edit', component: EditUserComponent },
      { path: '', component: ListUsersComponent },
    ],
  },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
