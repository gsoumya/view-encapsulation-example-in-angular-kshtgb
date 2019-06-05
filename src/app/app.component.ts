import { Component, ViewChild, TemplateRef, Renderer2, ElementRef } from '@angular/core';

@Component({
  
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`
	  .hello { text-decoration: underline; }
	`]
})
export class AppComponent {
  name = 'Angular';
  currentDate = new Date();
  data = [{
    name: 'krishna',
    company: 'nascent info'
  }, {
    name: 'user 2',
    company: 'nascent info solution'
  }]

  @ViewChild('myCom') myCom: Renderer2;

  ngOnInit() {
    console.log(this.myCom)
  }
}
