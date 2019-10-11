import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [PostService]
})
export class HttpComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];
  addedPosts: Post[] = [];
  isFetching: boolean = false;
  title: string = '';
  content: string = '';
  errorMessage = null;
  errorSubscription: Subscription = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit(): void {
    this.errorSubscription = this.postService.errorMessage.subscribe(message => {
      console.log('POST Error: ', message);
      this.errorMessage = message;
    });
  }

  onCreatePost(postData: Post): void {
    // console.log('post data:', postData);
    // Send Http request
    /* this.http
      .post<{name: string}>('https://angular-practice-166c4.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      }); */
    this.postService.createAndStorePost(postData);
    this.addedPosts.push({title: this.title, content: this.content});
    this.title = '';
    this.content = '';
  }

  onFetchPosts(): void {
    // Send Http request
    console.log('inside onFetchPosts');
    this.fetchPost();
  }

  onClearPosts(): void {
    // Send Http request
    console.log('deleting all posts...');
    this.postService.deleteAllPosts()
    .subscribe(responseData => {
      console.log('response after delete: ', responseData);
      this.loadedPosts = [];
      this.addedPosts = [];
    });
    /* this.http
    .delete('https://angular-practice-166c4.firebaseio.com/posts.json')
    .subscribe(responseData => {
      console.log('response after delete: ', responseData);
    }); */
  }

  private fetchPost(): void {
    console.log('request invoked');
    /* this.http
      .get<{[key: string]: Post}>('https://angular-practice-166c4.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          this.isFetching = true;
          console.log('responseData: ', responseData);
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              // console.log('key: ', key);
              // console.log('value: ', responseData[key]);
              postArray.push({ id: key, ...responseData[key] });
            } else {
              console.log('no key found in: ', responseData);
            }
          }
          return postArray;
        })
      )
      .subscribe(posts => {
        console.log('data: ', posts);
        this.isFetching = false;
        this.loadedPosts = posts;
      }); */
    this.isFetching = true;
    this.postService.fetchPost()
    .subscribe(
      posts => {
        console.log('data: ', posts);
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.errorMessage = error.message;
        this.isFetching = false;
        console.log('GET Error: ', this.errorMessage);
      }
    );
  }

  handleError(): void {
    console.log('handle error');
    this.errorMessage = null;
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

}
