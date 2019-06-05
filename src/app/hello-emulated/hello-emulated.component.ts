import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-hello-emulated',
	template: `
	  <p class="hello">
	    <code>Emulated / .hello:</code>
      Hello World
    </p>`,
	styles: [`
    .hello { color: blue; }	  
	`],
	encapsulation: ViewEncapsulation.Emulated
})
export class HelloEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}