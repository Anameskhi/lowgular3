import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
   animations: [
    trigger('boxAnimation', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      transition(':enter', [
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
  showBox: { [userId: number]: boolean } = {}; // Initialize with an empty object
  getAllUsers$ = this.usersSrvc.getAllUsers()

  constructor(
    private usersSrvc: UsersService
  ){}

  ngOnInit(): void {
    this.getAllUsers$.subscribe(res=>console.log(res))
  }

  toggleBox(userId: number): void {
    this.showBox[userId] = !this.showBox[userId];
  }
  
  
  
  getBoxState(user: any): string {
    return user.showBox ? 'open' : 'closed';
  }
  
}
