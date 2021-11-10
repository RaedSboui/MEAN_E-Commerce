import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss'],
})
export class NavCategoriesComponent implements OnInit {
  url: any;
  faPlusSquare = faPlusSquare;

  constructor(private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.routeConfig?.path;
  }

  ngOnInit(): void {}
}
