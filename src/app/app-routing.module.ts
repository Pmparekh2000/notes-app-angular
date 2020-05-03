import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
    {path: '', component: NotesListComponent},
    {path: 'new', component: NoteDetailsComponent},
    {path: ':id', component: NoteDetailsComponent}
  ]}
  // Over here nesting of components is done.
  // An empty string '' will load this componenet when app is started
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
