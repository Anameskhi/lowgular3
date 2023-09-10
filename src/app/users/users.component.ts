import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  selectedUserId: number | null = null;
  selectedUserEmail: string | null = null;
  getAllUsers$ = this.usersSrvc.getAllUsers();

  constructor(private usersSrvc: UsersService) {}

  ngOnInit(): void {
    this.getAllUsers$.subscribe((res) => console.log(res));
  }

  toggleBox(userId: number): void {
    if (this.selectedUserId === userId) {
      // If the same user is clicked, close the comment box
      this.selectedUserId = null;
      this.selectedUserEmail = null;
    } else {
      // If a different user is clicked, open the comment box for that user
      this.selectedUserId = userId;
      this.usersSrvc.getUserById(userId).subscribe(res=>{
        this.selectedUserEmail = res.email
      })
    }
  }

}
