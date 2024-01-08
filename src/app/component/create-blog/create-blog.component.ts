import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent {
  blogId: string = '';
  blogDetails:any;
  BlogForm!:FormGroup;
  constructor(private blogService: BlogService, private route: ActivatedRoute
    ,private fb:FormBuilder, private snackBar: MatSnackBar,private router: Router) { 
      this.BlogForm = this.fb.group({
        title: ['',Validators.required ],
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        gender: ['',Validators.required],
        email: ['',[Validators.required,Validators.pattern("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$")]],       
      });
    }


    submitBlogForm(){
      this.blogService.createUser(this.BlogForm.value).subscribe((res)=>{
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
