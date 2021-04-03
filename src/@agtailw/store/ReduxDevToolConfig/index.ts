import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const NgRxDevToolModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25
  })
];
