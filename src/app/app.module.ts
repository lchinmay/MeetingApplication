import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { UserModuleComponent } from './user-module/user-module.component';
import { BookRoomComponent } from './book-room/book-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MyNavComponent,
    UserModuleComponent,
    BookRoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DemoMaterialModule,
    RouterModule.forRoot([
      // { path: 'first-page', component: FirstPageComponent},
      { path: 'user-module', component: UserModuleComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'book-room', component: BookRoomComponent },
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: '/home', pathMatch: 'prefix'}
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
