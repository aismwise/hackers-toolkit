import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HtkAppComponent } from '../app/htk.component';

beforeEachProviders(() => [HtkAppComponent]);

describe('App: Htk', () => {
  it('should create the app',
      inject([HtkAppComponent], (app: HtkAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'htk works!\'',
      inject([HtkAppComponent], (app: HtkAppComponent) => {
    expect(app.title).toEqual('htk works!');
  }));
});
