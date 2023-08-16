import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputComponent } from './components/input/input.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LogComponent } from './components/log/log.component';
import { InputFormComponent } from './Layout/input-form/input-form.component';
import { LogListComponent } from './Layout/log-list/log-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    ButtonsComponent,
    LogComponent,
    InputFormComponent,
    LogListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
