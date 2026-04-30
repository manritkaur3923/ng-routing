import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStudents',
})
export class FilterStudentsPipe implements PipeTransform {
  transform(value: any[], args: number): any[] {
    return value.filter((stu) => stu.marks >= args);
  }
}
