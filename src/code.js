import { Observable } from 'rxjs';

let stream$ = new Observable((observer) => {
    observer.next(100);
});

stream$.subscribe((data) => {
    console.log("Data", data);
});
