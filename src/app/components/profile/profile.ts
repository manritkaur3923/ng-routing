import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  username: string | null = '';
  constructor(private router: ActivatedRoute) {}
  //USE ngOnInit FOR HEAVY LOGIC
  ngOnInit() {
    // this.username = this.router.snapshot.paramMap.get('name');

    // this.router.queryParams.subscribe((params) => {
    //   console.log(params['name']);
    //   this.username = params['name']
    // });
    this.router.data.subscribe((data) => (this.username = data['uname']));
  }
}
