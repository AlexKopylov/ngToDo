import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProjectsListComponent} from './component/projects-list/projects-list.component';
import {ProjectTodoComponent} from './component/project-todo/project-todo.component';
import {MainScreenComponent} from './component/main-screen/main-screen.component';
import {SearchFormComponent} from './shared/search-form/search-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProjectPageComponent } from './component/project-page/project-page.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectTodoComponent,
    MainScreenComponent,
    SearchFormComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
