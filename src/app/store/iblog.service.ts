import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IblogStoreService {

  constructor() { }

  saveBloglistStore(data: any){
    localStorage.setItem('blogList', JSON.stringify(data));
  }

  getBlogListStore(){
   
    return localStorage.getItem('blogList');
  }
}
