import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogId: string = '';
  blogDetails:any;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blogId = params['id'];
      this.getBlogById(this.blogId);
    });
  };

  getBlogById(id: string) {
    this.blogService.getABlog(id).subscribe((res) => {
      console.log(res);
      this.blogDetails = res;
    })
  }
}
