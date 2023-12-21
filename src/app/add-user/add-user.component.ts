import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user: User = new User();

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.addUser(this.user).subscribe((user) => {
      
    });
  }
}
