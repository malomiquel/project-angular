import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = []

  displayedColumns: string[] = ['id', 'name', 'occupation', 'email', 'bio', 'actions'];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/user', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['/update', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((user) => {
      this.users = this.users.filter((u) => u.id !== id);
    });
  }

}
