import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(error => {
      console.error('HTTP error:', error);
      alert('Помилка при завантаженні даних! Перевірте консоль для деталей.');
      return throwError(() => error);
    })
  );
};
