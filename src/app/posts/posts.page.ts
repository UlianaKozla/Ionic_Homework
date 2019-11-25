import { Component, OnInit } from '@angular/core';
import { PostService} from "../services/post.service";
import {Post} from "../models/post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
posts: Post[];
  limit: number;

  constructor(
      private postService: PostService,
      private router: Router,
      private activatedRout: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRout.queryParamMap.subscribe((res: any)=> {
      if (res.params._limit) {
        this.limit = res.params._limit;
      }
      this.getPost(res.params);
    })
  }

  getPost(query: {}) {
    this.postService.getPosts(query).subscribe(res => {
      this.posts = res;
      console.log(res);
    })
  }

  addParamsToQuery(query: {}) {
    this.router.navigate([], {
          queryParams: query,
          queryParamsHandling: 'merge'
        })
  }
}
