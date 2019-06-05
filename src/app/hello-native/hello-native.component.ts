import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-hello-native',
	template: `
	  <p class="hello other-hello">
	    <code>Native / .hello:</code>
	    Hello World
	  </p>`,
	styles: [` .hello { font-weight: bold;font-size: 50px } `],
	encapsulation: ViewEncapsulation.Native
})
export class HelloNativeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}