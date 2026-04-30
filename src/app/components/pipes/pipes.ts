import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ShortenTextPipe } from '../../pipe/shorten-text-pipe';
import { FilterStudentsPipe } from '../../pipe/filter-students-pipe';
import { SearchStudentsPipe } from '../../pipe/search-students-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  imports: [FormsModule, CommonModule, ShortenTextPipe, FilterStudentsPipe, SearchStudentsPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  name = 'manrit';
  date = new Date();

  searchText = ""
  students = [
    {
      name: 'mani',
      marks: 70,
    },
    {
      name: 'rahul',
      marks: 40,
    },
    {
      name: 'rajni',
      marks: 50,
    },
  ];
}
