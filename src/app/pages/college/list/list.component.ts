import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of } from 'rxjs';
import { CollegeService } from 'src/app/_services/college/college.service';
import { College } from 'src/app/models/college';

@Component({
  selector: 'app-college-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  colleges$: Observable<College[]>;
  displayedColumns = ['id', 'name']

  constructor(
    private toast: ToastrService,
    private collegeService: CollegeService,
  ) {
    this.colleges$ = this.collegeService.getColleges()
    .pipe(
      catchError(error => {
        this.toast.error(error, "Erro");
        return of([]);
      })
    );
  }

}
