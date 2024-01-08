import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  blogId: string = '';
  blogDetails:any;
  BlogForm!:FormGroup;
  constructor(private blogService: BlogService, private route: ActivatedRoute,private snackBar: MatSnackBar
    ,private fb:FormBuilder, private router: Router) { 
      this.BlogForm = this.fb.group({
        id: ['',Validators.required ],
        title: ['',Validators.required ],
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        gender: ['',Validators.required],
        email: ['',Validators.required],        
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blogId = params['id'];
      this.getBlogById(this.blogId);
    });
    
  };  

  getBlogById(id: string) {
    this.blogService.getABlog(id).subscribe((res) => {
      this.blogDetails = res;
      this.BlogForm.patchValue(res);
    })
  };

  submitBlogForm(){
    const formData = { ...this.BlogForm.value };
    delete formData.email;
    console.log(formData)
    this.blogService.updateBlog(formData).subscribe((res)=>{ 
      this.BlogForm.patchValue(res);
      this.snackBar.open(
        'User created',
        'Succes',
        {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: 'success-snackBar',
        }
      );    
     
      this.router.navigate(['/home']);
    })
    
  }
}
