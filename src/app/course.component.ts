import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
    selector:'course',//css selector to ref a element <course> "course" <div class="course"> ".course" <div id="course"> "#course"
    template:'<h2>Course</h2>'
})
export class CourseComponent {

}
//where the element course is find angular will render the templete for this component inside that element