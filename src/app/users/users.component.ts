import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  getAllUsers$ = this.usersSrvc.getAllUsers()

  constructor(
    private usersSrvc: UsersService
  ){}

  ngOnInit(): void {
    this.getAllUsers$.subscribe(res=>console.log(res))
  }



}
