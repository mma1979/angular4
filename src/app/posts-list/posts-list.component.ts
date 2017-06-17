import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [ PostsService ]
})
export class PostsListComponent implements OnInit {

  posts: Post[];
  constructor(private postSrv: PostsService) { }

  ngOnInit() {
    this.postSrv.getPosts().subscribe(
      posts => this.posts = posts,
      err => console.log(err)
    );
  }

}
