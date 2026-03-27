import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './app/shared/interceptors/base-url.interceptor';
import { errorHandlerInterceptor } from './app/shared/interceptors/error-handler.interceptor';
import { authInterceptor} from './app/shared/interceptors/auth-interseptor';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor,
        errorHandlerInterceptor,
        authInterceptor
      ])
    )
  ]
}).catch(err => console.error(err));
