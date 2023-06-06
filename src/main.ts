import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app-routing.module';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
