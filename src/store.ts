import { BehaviorSubject, distinctUntilChanged, Observable, pluck } from 'rxjs';

export interface State {
  orders: any[];
  [key: string]: any;
}

const state: State = {
  user: undefined,
  orders: undefined,
  date: undefined,
  workouts: undefined,
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
