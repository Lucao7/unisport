import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardSubtitle: string = 'Ver'

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserRole();
  }

  getUserRole() {
    if(this.userService.getCurrentUser().admin)
      this.cardSubtitle = 'Gerenciar';
  }

}
