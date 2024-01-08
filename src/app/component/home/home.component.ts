import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IBlogResponse, IBlogResponseData } from 'src/app/model/IBlog';
import { BlogService } from 'src/app/services/blog.service';
import { IblogStoreService } from 'src/app/store/iblog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogList: any = [];
  constructor(private blogService: BlogService, private iblogService: IblogStoreService,
    private location: Location) { };

  ngOnInit() {
    this.iblogService.getBlogListStore() ? this.iblogService.getBlogListStore() : this.loadBlogs();
    let blog: any = localStorage.getItem('blogList');
    this.blogList = JSON.parse(blog);
  }

  loadBlogs() {
    this.blogService.GetBlogs().subscribe((res: any) => {
      this.iblogService.saveBloglistStore(res.data);
      let blog: any = localStorage.getItem('blogList');
      this.blogList = JSON.parse(blog);
    })
  };

  deleteBlog(id: string) {
    console.log(id);
    this.blogService.deleteBlogs(id).subscribe((res: any) => {
      console.log(res);
      localStorage.clear();
      this.loadBlogs();
    })
  }
}
