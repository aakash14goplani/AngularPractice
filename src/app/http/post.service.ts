import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }
  errorMessage = new Subject();

  createAndStorePost(post: Post) {
    this.http
      .post<{name: string}>('https://angular-practice-166c4.firebaseio.com/posts.json',
        post, {
          headers: new HttpHeaders({ 'Custom-Header': 'Aakash', 'Access-Control-Allow-Origin': '*'}),
          observe: 'response'
      })
      .subscribe(
        responseData => {
          console.log('POST response: ', responseData);
          console.log('POST response data: ', responseData.body);
          console.log('POST response header: ', responseData.headers);
          console.log('POST response status: ', responseData.status);
        },
        error => {
          this.errorMessage.next(error.message);
        }
      );
  }

  fetchPost() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom-param', 'aakash');

    return this.http
      .get<{[key: string]: Post}>('https://angular-practice-166c4.firebaseio.com/posts.json', {
        responseType: 'json',
        params: new HttpParams().set('print', 'pretty').set('custom-param', 'aakash')
        // method 2: params: searchParams
        /* same as: https://angular-practice-166c4.firebaseio.com/posts.json?print=pretty&custom-param=aakash */
      })
      .pipe(
        map(responseData => {
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
        }),
        catchError(errorMsg => {
          console.log('catchError: ', errorMsg.message);
          return throwError(errorMsg);
        })
      );
  }

  deleteAllPosts() {
    return this.http
    .delete('https://angular-practice-166c4.firebaseio.com/posts.json',
    {
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap(events => {
        console.log('Events from delete request: ', events);
        if (events.type === HttpEventType.Response) {
          console.log('tap response: ', events.body);
        }
        if (events.type === HttpEventType.Sent) {
          // update UI
        }
      })
    );
  }
}
