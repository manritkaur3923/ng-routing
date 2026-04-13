import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  username: string | null = '';
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    this.router.params.subscribe((params) => 
    this.username = params['name']);
  }
}
