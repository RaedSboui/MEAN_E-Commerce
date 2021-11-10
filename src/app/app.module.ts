import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ArticleComponent } from './articles/article/article.component';
import { HomeComponent } from './home/home.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { EditCategoriesComponent } from './categories/edit-categories/edit-categories.component';
import { AddCategoriesComponent } from './categories/add-categories/add-categories.component';
import { AddScategoriesComponent } from './categories/add-scategories/add-scategories.component';
import { EditScategoriesComponent } from './categories/edit-scategories/edit-scategories.component';
import { ListScategoriesComponent } from './categories/list-scategories/list-scategories.component';
import { NavCategoriesComponent } from './categories/nav-categories/nav-categories.component';
import { CardArticlesComponent } from './articles/card-articles/card-articles.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeCommandesComponent } from './commandes/liste-commandes/liste-commandes.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ArticleComponent,
    HomeComponent,
    ListArticlesComponent,
    NavBarComponent,
    AddArticleComponent,
    EditArticleComponent,
    ListCategoriesComponent,
    EditCategoriesComponent,
    AddCategoriesComponent,
    AddScategoriesComponent,
    EditScategoriesComponent,
    ListScategoriesComponent,
    NavCategoriesComponent,
    CardArticlesComponent,
    ListeCommandesComponent,
    ListUsersComponent,
    EditUserComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
