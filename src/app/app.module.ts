import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { HeaderComponent } from './static/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AdminBlogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
