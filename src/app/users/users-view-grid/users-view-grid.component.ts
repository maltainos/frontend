import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-view-grid',
  templateUrl: './users-view-grid.component.html',
  styleUrls: ['./users-view-grid.component.css']
})
export class UsersViewGridComponent{

    @Input() page : Number = 0;
    @Input() total : Number = 0;
    @Input() users : any;

    limit : Number = 10;

}
