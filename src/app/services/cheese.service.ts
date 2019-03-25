import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class CheeseService {

  private socket;
  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor() { }

  getCheese() {
    let observable = new Observable<{ name: String, price: Number, rate: Number, variance: Number, history: Array<Number>, timeStamp: Array<any> }>(observer => {
      this.socket.on("cheese", (data) => {
        observer.next(data);
      });

      return () => this.socket.disconnect();
    });

    return observable;
  }

  connect() {
    this.socket = io("http://localhost:1337");
  }
}
