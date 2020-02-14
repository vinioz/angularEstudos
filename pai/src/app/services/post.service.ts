import { Injectable } from '@angular/core';
import { Post } from '../models/post.models';


@Injectable()
export class PostService{

  constructor() { }

  salvar(post: Post){
    const posts = this.buscarTodos();
    posts.push(post);
    // console.log(post);
    window.localStorage.setItem('posts', JSON.stringify(posts));
  }

  buscarTodos(): Post [] {
    return JSON.parse(window.localStorage.getItem('posts')) || [];
  }

  retornaPost(): Post  {
    //const posts = this.buscarTodos();
    // console.log(posts[24])
    return this.buscarTodos()[2];

  }

  retornaPostSecundario(): Post[] {
    const post = this.buscarTodos();
    return post;
  }
}
