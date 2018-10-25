import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Retrieve } from './<%= dasherize(name) %>.actions';

@Injectable()
export class <%= classify(name) %>Store {

  constructor(private store: Store<State>) {}

  public retrieve() {
    this.store.dispatch(new Retrieve());
  }

}
