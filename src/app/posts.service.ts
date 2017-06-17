import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Post} from './post';

@Injectable()
export class PostsService {
  private endPoint = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]>{
    return this.http.get(this.endPoint)
            .map(posts => posts.json())
            .catch(this.logError)
  }

  private logError(err){
    console.log(err);
    return Observable.throw(err);
  }
}
