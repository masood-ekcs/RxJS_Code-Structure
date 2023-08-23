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
import { InplaceModule } from 'primeng/inplace';
import { LoginComponent } from './components/login/login.component';
import { PasswordModule } from 'primeng/password';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    ButtonsComponent,
    LogComponent,
    InputFormComponent,
    LogListComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InplaceModule,
    PasswordModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
