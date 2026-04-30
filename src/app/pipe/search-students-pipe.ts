import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStudents',
})
export class SearchStudentsPipe implements PipeTransform {
  transform(students: any[], args: string): any {
    return students.filter((stu) => stu.name.includes(args));
  }
}
