import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-hello-none',
	template: `
	  <p class="hello other-hello">
	    <code>None / .other-hello:</code>
	    Hello World
	  </p>`,
	styles: [`
    .other-hello {
      color: white;
      background-color: red;
      padding: 5px;
    }	  
	`],
	encapsulation: ViewEncapsulation.None
})
export class HelloNoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}