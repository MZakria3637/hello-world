import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
         <h1>{{getTitle()}}</h1>
         <ul>
         <h3><li *ngFor="let course of courses">{{course}}</li></h3>
         </ul>

  `
})
export class CourseComponent {
  title = "i am going to  build 1st Angular app"
  courses=["course1","course2","course3","course4"]
  getTitle() {
    return this.title
  }
}
