import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/Post'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class PostsService {
  postsUrl : string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

    getPosts() : Observable<Post[]> {
      return this.http.get<Post[]>(this.postsUrl);
    }

    savePost(post: Post): Observable<Post>{
      return this.http.post<Post>(this.postsUrl, post, httpOptions);
    }

    updatePost(post: Post): Observable<Post>{
      const url = `${this.postsUrl}/${post.id}`;
      return this.http.put<Post>(url, post, httpOptions);
    }


}