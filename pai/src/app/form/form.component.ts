import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.models';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [PostService]

})
export class FormComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

onSubmit(){
  // console.log(this.post)
  this.postService.salvar(this.post);
}
}
