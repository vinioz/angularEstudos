import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-principal',
  templateUrl: './post-principal.component.html',
  styleUrls: ['./post-principal.component.css'],
  providers: [PostService]
})
export class PostPrincipalComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService) { }

  ngOnInit()  {
    this.post= this.postService.retornaPost();

    }


}
