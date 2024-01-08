import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogDetailComponent } from './component/blog-detail/blog-detail.component';
import { CreateBlogComponent } from './component/create-blog/create-blog.component';
import { EditBlogComponent } from './component/edit-blog/edit-blog.component';

const routes: Routes = [{
  path: '', redirectTo: '/home', pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'add-blog',
  component: CreateBlogComponent
},

{ path: 'blog-details/:id',
 component: BlogDetailComponent 
},
{ path: 'edit-blog/:id',
 component: EditBlogComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
