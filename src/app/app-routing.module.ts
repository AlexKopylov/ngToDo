import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsListComponent} from './component/projects-list/projects-list.component';
import {ProjectPageComponent} from './component/project-page/project-page.component';
import {ProjectTodoComponent} from './component/project-todo/project-todo.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'projects', component: ProjectsListComponent},
  {path: 'projects/:id', component: ProjectPageComponent},
  {path: 'add', component: ProjectTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
