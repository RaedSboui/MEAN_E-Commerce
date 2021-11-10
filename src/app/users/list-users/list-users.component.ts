import { Component, OnInit } from '@angular/core';
import {
  faEdit,
  faInfoCircle,
  faPlusSquare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  faEdit = faEdit;
  faInfoCircle = faInfoCircle;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  constructor(private userService: UserService) {}
  term: string = '';

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles() {
    this.userService.fetchUsers().subscribe((data) => (this.users = data));
  }

  onDelete(id: any) {
    this.userService.delete(id).then(() => this.ngOnInit());
  }
}
