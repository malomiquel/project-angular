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
  users: User[] = [
    {
      "id": 1,
      "name": "Ivy",
      "occupation": "Designer",
      "email": "user1@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 2,
      "name": "Grace",
      "occupation": "Manager",
      "email": "user2@example.com",
      "bio": "Science lover"
    },
    {
      "id": 3,
      "name": "Jack",
      "occupation": "Analyst",
      "email": "user3@example.com",
      "bio": "Science lover"
    },
    {
      "id": 4,
      "name": "Alice",
      "occupation": "Scientist",
      "email": "user4@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 5,
      "name": "Alice",
      "occupation": "Consultant",
      "email": "user5@example.com",
      "bio": "Science lover"
    },
    {
      "id": 6,
      "name": "Alice",
      "occupation": "Consultant",
      "email": "user6@example.com",
      "bio": "Loves coding"
    },
    {
      "id": 7,
      "name": "Alice",
      "occupation": "Manager",
      "email": "user7@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 8,
      "name": "Bob",
      "occupation": "Analyst",
      "email": "user8@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 9,
      "name": "Jack",
      "occupation": "Manager",
      "email": "user9@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 10,
      "name": "Bob",
      "occupation": "Architect",
      "email": "user10@example.com",
      "bio": "Loves coding"
    },
    {
      "id": 11,
      "name": "Eve",
      "occupation": "Developer",
      "email": "user11@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 12,
      "name": "Carol",
      "occupation": "Designer",
      "email": "user12@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 13,
      "name": "Eve",
      "occupation": "Manager",
      "email": "user13@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 14,
      "name": "Ivy",
      "occupation": "Scientist",
      "email": "user14@example.com",
      "bio": "Loves coding"
    },
    {
      "id": 15,
      "name": "Dave",
      "occupation": "Manager",
      "email": "user15@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 16,
      "name": "Frank",
      "occupation": "Manager",
      "email": "user16@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 17,
      "name": "Frank",
      "occupation": "Developer",
      "email": "user17@example.com",
      "bio": "Loves coding"
    },
    {
      "id": 18,
      "name": "Carol",
      "occupation": "Manager",
      "email": "user18@example.com",
      "bio": "Science lover"
    },
    {
      "id": 19,
      "name": "Alice",
      "occupation": "Architect",
      "email": "user19@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 20,
      "name": "Hank",
      "occupation": "Developer",
      "email": "user20@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 21,
      "name": "Grace",
      "occupation": "Consultant",
      "email": "user21@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 22,
      "name": "Alice",
      "occupation": "Developer",
      "email": "user22@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 23,
      "name": "Carol",
      "occupation": "Developer",
      "email": "user23@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 24,
      "name": "Ivy",
      "occupation": "Architect",
      "email": "user24@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 25,
      "name": "Hank",
      "occupation": "Designer",
      "email": "user25@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 26,
      "name": "Eve",
      "occupation": "Analyst",
      "email": "user26@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 27,
      "name": "Eve",
      "occupation": "Architect",
      "email": "user27@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 28,
      "name": "Frank",
      "occupation": "Manager",
      "email": "user28@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 29,
      "name": "Grace",
      "occupation": "Engineer",
      "email": "user29@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 30,
      "name": "Eve",
      "occupation": "Scientist",
      "email": "user30@example.com",
      "bio": "Science lover"
    },
    {
      "id": 31,
      "name": "Frank",
      "occupation": "Architect",
      "email": "user31@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 32,
      "name": "Ivy",
      "occupation": "Analyst",
      "email": "user32@example.com",
      "bio": "Science lover"
    },
    {
      "id": 33,
      "name": "Eve",
      "occupation": "Developer",
      "email": "user33@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 34,
      "name": "Alice",
      "occupation": "Engineer",
      "email": "user34@example.com",
      "bio": "Science lover"
    },
    {
      "id": 35,
      "name": "Carol",
      "occupation": "Developer",
      "email": "user35@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 36,
      "name": "Bob",
      "occupation": "Developer",
      "email": "user36@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 37,
      "name": "Dave",
      "occupation": "Developer",
      "email": "user37@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 38,
      "name": "Frank",
      "occupation": "Designer",
      "email": "user38@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 39,
      "name": "Frank",
      "occupation": "Scientist",
      "email": "user39@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 40,
      "name": "Frank",
      "occupation": "Developer",
      "email": "user40@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 41,
      "name": "Jack",
      "occupation": "Consultant",
      "email": "user41@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 42,
      "name": "Bob",
      "occupation": "Designer",
      "email": "user42@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 43,
      "name": "Bob",
      "occupation": "Architect",
      "email": "user43@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 44,
      "name": "Ivy",
      "occupation": "Developer",
      "email": "user44@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 45,
      "name": "Ivy",
      "occupation": "Manager",
      "email": "user45@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 46,
      "name": "Jack",
      "occupation": "Consultant",
      "email": "user46@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 47,
      "name": "Eve",
      "occupation": "Developer",
      "email": "user47@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 48,
      "name": "Frank",
      "occupation": "Manager",
      "email": "user48@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 49,
      "name": "Bob",
      "occupation": "Architect",
      "email": "user49@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 50,
      "name": "Bob",
      "occupation": "Architect",
      "email": "user50@example.com",
      "bio": "Loves coding"
    },
    {
      "id": 51,
      "name": "Ivy",
      "occupation": "Architect",
      "email": "user51@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 52,
      "name": "Frank",
      "occupation": "Scientist",
      "email": "user52@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 53,
      "name": "Bob",
      "occupation": "Manager",
      "email": "user53@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 54,
      "name": "Grace",
      "occupation": "Analyst",
      "email": "user54@example.com",
      "bio": "Science lover"
    },
    {
      "id": 55,
      "name": "Carol",
      "occupation": "Engineer",
      "email": "user55@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 56,
      "name": "Hank",
      "occupation": "Architect",
      "email": "user56@example.com",
      "bio": "Loves coding"
    },
    {
      "id": 57,
      "name": "Carol",
      "occupation": "Developer",
      "email": "user57@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 58,
      "name": "Dave",
      "occupation": "Scientist",
      "email": "user58@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 59,
      "name": "Hank",
      "occupation": "Designer",
      "email": "user59@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 60,
      "name": "Jack",
      "occupation": "Engineer",
      "email": "user60@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 61,
      "name": "Bob",
      "occupation": "Designer",
      "email": "user61@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 62,
      "name": "Eve",
      "occupation": "Scientist",
      "email": "user62@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 63,
      "name": "Frank",
      "occupation": "Developer",
      "email": "user63@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 64,
      "name": "Hank",
      "occupation": "Designer",
      "email": "user64@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 65,
      "name": "Frank",
      "occupation": "Developer",
      "email": "user65@example.com",
      "bio": "Science lover"
    },
    {
      "id": 66,
      "name": "Alice",
      "occupation": "Engineer",
      "email": "user66@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 67,
      "name": "Ivy",
      "occupation": "Developer",
      "email": "user67@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 68,
      "name": "Dave",
      "occupation": "Analyst",
      "email": "user68@example.com",
      "bio": "Loves coding"
    },
    {
      "id": 69,
      "name": "Dave",
      "occupation": "Analyst",
      "email": "user69@example.com",
      "bio": "Science lover"
    },
    {
      "id": 70,
      "name": "Grace",
      "occupation": "Scientist",
      "email": "user70@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 71,
      "name": "Carol",
      "occupation": "Developer",
      "email": "user71@example.com",
      "bio": "Science lover"
    },
    {
      "id": 72,
      "name": "Eve",
      "occupation": "Consultant",
      "email": "user72@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 73,
      "name": "Grace",
      "occupation": "Consultant",
      "email": "user73@example.com",
      "bio": "Science lover"
    },
    {
      "id": 74,
      "name": "Carol",
      "occupation": "Architect",
      "email": "user74@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 75,
      "name": "Bob",
      "occupation": "Manager",
      "email": "user75@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 76,
      "name": "Eve",
      "occupation": "Architect",
      "email": "user76@example.com",
      "bio": "Science lover"
    },
    {
      "id": 77,
      "name": "Jack",
      "occupation": "Engineer",
      "email": "user77@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 78,
      "name": "Carol",
      "occupation": "Consultant",
      "email": "user78@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 79,
      "name": "Frank",
      "occupation": "Manager",
      "email": "user79@example.com",
      "bio": "Science lover"
    },
    {
      "id": 80,
      "name": "Grace",
      "occupation": "Consultant",
      "email": "user80@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 81,
      "name": "Frank",
      "occupation": "Architect",
      "email": "user81@example.com",
      "bio": "Loves coding"
    },
    {
      "id": 82,
      "name": "Grace",
      "occupation": "Consultant",
      "email": "user82@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 83,
      "name": "Bob",
      "occupation": "Developer",
      "email": "user83@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 84,
      "name": "Frank",
      "occupation": "Scientist",
      "email": "user84@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 85,
      "name": "Grace",
      "occupation": "Developer",
      "email": "user85@example.com",
      "bio": "Engineering geek"
    },
    {
      "id": 86,
      "name": "Dave",
      "occupation": "Designer",
      "email": "user86@example.com",
      "bio": "Enjoys design"
    },
    {
      "id": 87,
      "name": "Hank",
      "occupation": "Developer",
      "email": "user87@example.com",
      "bio": "Data enthusiast"
    },
    {
      "id": 88,
      "name": "Jack",
      "occupation": "Architect",
      "email": "user88@example.com",
      "bio": "Science lover"
    },
    {
      "id": 89,
      "name": "Carol",
      "occupation": "Engineer",
      "email": "user89@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 90,
      "name": "Hank",
      "occupation": "Designer",
      "email": "user90@example.com",
      "bio": "Science lover"
    },
    {
      "id": 91,
      "name": "Jack",
      "occupation": "Analyst",
      "email": "user91@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 92,
      "name": "Dave",
      "occupation": "Analyst",
      "email": "user92@example.com",
      "bio": "Science lover"
    },
    {
      "id": 93,
      "name": "Grace",
      "occupation": "Consultant",
      "email": "user93@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 94,
      "name": "Carol",
      "occupation": "Consultant",
      "email": "user94@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 95,
      "name": "Carol",
      "occupation": "Developer",
      "email": "user95@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 96,
      "name": "Carol",
      "occupation": "Engineer",
      "email": "user96@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 97,
      "name": "Ivy",
      "occupation": "Engineer",
      "email": "user97@example.com",
      "bio": "Passionate about management"
    },
    {
      "id": 98,
      "name": "Jack",
      "occupation": "Consultant",
      "email": "user98@example.com",
      "bio": "Architectural wizard"
    },
    {
      "id": 99,
      "name": "Jack",
      "occupation": "Analyst",
      "email": "user99@example.com",
      "bio": "Consulting expert"
    },
    {
      "id": 100,
      "name": "Bob",
      "occupation": "Analyst",
      "email": "user100@example.com",
      "bio": "Engineering geek"
    }
  ]

  displayedColumns: string[] = ['id', 'name', 'occupation', 'email', 'bio', 'actions'];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/user', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['/update', id]);
  }

  deleteUser(id: number) {
    alert('You deleted user with id: ' + id);
  }

}
