import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of } from 'rxjs';
import { UserService } from 'src/app/_services/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  users$: Observable<User[]>;
  displayedColumns = ['id', 'name', 'idFaculdade', 'faculdade']

  constructor(
    private toast: ToastrService,
    private userService: UserService,
  ) {
    this.users$ = this.userService.getUsers()
    .pipe(
      catchError(error => {
        this.toast.error(error, "Erro");
        return of([]);
      })
    );
  }

}
