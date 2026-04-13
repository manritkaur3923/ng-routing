import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router) {}
  goToProfile() {
    // this.router.navigate(['profile'], {queryParams : {name : "Nitya"}})
  }
  users = [
    {
      id: 1,
      name: 'Manrit',
    },
    {
      id: 2,
      name: 'Sanreet',
    },
    {
      id: 3,
      name: 'Nitya',
    },
    {
      id: 4,
      name: 'Kiran',
    },
  ];
}
