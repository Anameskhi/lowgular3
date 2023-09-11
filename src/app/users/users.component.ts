import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '150px', 
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('300ms ease-out')]),
      transition('closed => open', [animate('300ms ease-in')]), 
    ]),
  ],
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

      this.selectedUserId = null;
      this.selectedUserEmail = null;
    } else {

      this.selectedUserId = userId;
      this.usersSrvc.getUserById(userId).subscribe(res=>{
        this.selectedUserEmail = res.email
      })
    }
  }

}
