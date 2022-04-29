import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentEditorComponent } from 'src/app/pages/content-editor/content-editor.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { 
        path: 'dashboard',
        component: DashboardComponent 
      },
      { 
        path: 'content-editor',
        component: ContentEditorComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
