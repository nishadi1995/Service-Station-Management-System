import { Component } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService]
})

export class AppComponent {
  title = 'service-station';

  posts:Post[];
  id='5cae8f916a2ef812e87929b1';

  constructor(private _postservice: PostService) {
  }

  getItem() {
    this. _postservice.getposts()
      .subscribe((respost:Post[])=>{
        this.posts=respost
      });
  }

  addItem(post:Post){
    this. _postservice.addposts(post);
  }

  deleteItem(){
    this._postservice.deleteposts(this.id).subscribe(res=>{
      console.log("deleted");
    });
  }
}