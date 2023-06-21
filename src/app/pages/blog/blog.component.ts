import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/iblog';
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogs: IBlog[] = []
  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.db.getAll().subscribe({
      next: data => {
        this.blogs = data;
      },
      error: e => {
        console.error(e)
      }
    })
  }

}
