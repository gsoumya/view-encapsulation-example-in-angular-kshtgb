import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HelloEmulatedComponent } from './hello-emulated/hello-emulated.component';
import { HelloNativeComponent } from './hello-native/hello-native.component';
import { HelloNoneComponent } from './hello-none/hello-none.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HelloEmulatedComponent, HelloNativeComponent, HelloNoneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
