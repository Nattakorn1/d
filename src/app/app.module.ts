import { hostViewClassName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Topban } from './topban/topban';
import { Category } from './category/category' ;
import { Searchbar } from './searchbar/searchbar';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Navbar,
    Topban,
    Category,
    Searchbar,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
