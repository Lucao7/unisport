import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {

  constructor(
    private toast: ToastrService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  @Input() cardTitle: string = '';
  @Input() cardImagePath: string = '';
  @Input() cardRouterLink: string = '';
  @Input() cardDialogLink: string = '';

  onClick() {
    if(this.cardRouterLink != '')
      this.router.navigate([this.cardRouterLink])
    else
    this.toast.error("Função ainda não implementada", 'Register')

  }

}
