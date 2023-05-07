import { BehaviorSubject, distinctUntilChanged, Observable, pluck } from 'rxjs';

export interface State {
  [key: string]: any;
}

const state: State = {};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  // private store = this.subject.asObservable().distinctUntilChanged(); ERROR

  get value() {
    return this.subject.value;
  }

  // select<T>(name:string):Observable<T>{
  //   return this.store.pluck(name);
  // }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
