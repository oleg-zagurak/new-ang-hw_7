import { Component, OnInit } from '@angular/core';
import { IBlog, IRequestBlog } from 'src/app/shared/interfaces/iblog';
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  public blogs: IBlog[] = [];
  public title: string = '';
  public text: string = '';
  public author: string = '';
  public editable: boolean = false;
  private currentId: number = 0;
  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getBlogs()
  }
  getBlogs(): void {
    this.db.getAll().subscribe({
      next: data => {
        this.blogs = data;
      },
      error: e => {
        console.error(e)
      }
    })
  }
  deleteBlog(id: number): void {
    this.db.delete(id).subscribe({
      next: () => {
        this.getBlogs()
      },
      error: e => {
        console.error(e);
      }
    })
  }
  addBlog() {
    // console.log(this.title, this.author, this.text)
    if (this.title && this.author && this.text) {
      let blog: IRequestBlog = this.makeBlogData();
      this.db.create(blog).subscribe({
        next: () => {
          this.getBlogs();
        },
        error: e => {
          console.error(e);
        }
      });
      this.reset();
    }
  }
  edit(index: number): void {
    let { title, text, author, id } = this.blogs[index];
    this.text = text;
    this.title = title;
    this.author = author;
    this.currentId = id;
    this.editable = true;
  }
  update(): void {
    if (this.title && this.author && this.text) {
      let blog: IRequestBlog = this.makeBlogData();
      this.db.update(this.currentId, blog).subscribe({
        next: () => {
          this.getBlogs();
        },
        error: e => {
          console.error(e);
        }
      })
      this.editable = false;
      this.currentId = 0;
      this.reset();
    }
  }
  delete(id: number): void {
    this.db.delete(id).subscribe({
      next: () => {
        this.getBlogs();
      },
      error: e => {
        console.error(e);
      }
    })
  }

  private reset(): void {
    this.title = this.text = this.author = '';
  }
  private makeBlogData(): IRequestBlog {
    return {
      title: this.title,
      text: this.text,
      author: this.author
    }
  }
}
