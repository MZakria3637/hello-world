import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  template: `
         <h1>{{title}}</h1>
         <ul>
         <h3><li *ngFor="let course of courses">{{course}}</li></h3>
         </ul>

  `
})
export class CourseComponent {
  title = "i am going to  build 1st Angular app"
courses=[]
 
}
