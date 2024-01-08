import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditBlogComponent } from './component/edit-blog/edit-blog.component';
import { CreateBlogComponent } from './component/create-blog/create-blog.component';
import { BlogDetailComponent } from './component/blog-detail/blog-detail.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './shared/material-ui/material-ui/material-ui.module';
import { SharedModule } from './shared/material-ui/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    EditBlogComponent,
    CreateBlogComponent,
    BlogDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
