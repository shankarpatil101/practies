import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscriber } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BookService {
    url = "http://localhost:4200/pages/Observables/books.json";
    
    constructor(private http:Http) { }
    //Returns Observable<Book[]>
    // getBooksWithObservable(): Observable<Book[]> {
    //     return this.http.get(this.url).pipe(map((res: Response) => res.json()));
    // }
    
    //Returns Observable<string>
    getCurrentTime(): Observable<string> {
	return new Observable<string>((observer: Subscriber<string>) => {
	    //1 second interval
	    setInterval(() => observer.next(new Date().toString()), 1000);
	  });
    }
   
}