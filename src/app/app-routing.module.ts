import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'admin/blogs', component: AdminBlogComponent},
  {path: '', pathMatch: 'full', redirectTo: 'admin/blogs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
