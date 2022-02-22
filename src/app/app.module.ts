// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PRIMENG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { TabViewModule } from 'primeng/tabview';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ChipsModule } from 'primeng/chips';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { MultiSelectModule } from 'primeng/multiselect';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from "primeng/password";
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';


// HELLOTECA
import { AppRoutingModule } from './app-routing.module';

import { ApiCoreService } from './services/api-core.service';
import { NavbarService } from './services/navbar.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomValidations } from './validations/custom-validations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListPageComponent,
    ListComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    CalendarModule,
    MenubarModule,
    ToolbarModule,
    BreadcrumbModule,
    TabViewModule,
    ChipsModule,
    MessagesModule,
    MessageModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    PanelModule,
    MultiSelectModule,
    FieldsetModule,
    PasswordModule,
    ToastModule,
    MenuModule,
    CheckboxModule,
    ReactiveFormsModule,
    TooltipModule,
    DividerModule,
    DropdownModule
  ],
  providers: [ ApiCoreService, HttpClientModule, MessageService, NavbarService, CustomValidations ],
  bootstrap: [AppComponent]
})
export class AppModule { }
