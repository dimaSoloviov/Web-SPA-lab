import { HttpInterceptorFn } from '@angular/common/http';

const API_BASE_URL = 'assets/databases/';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  // Якщо запит вже має повний шлях (http/https) — не змінюємо
  if (/^https?:\/\//i.test(req.url)) {
    return next(req);
  }

  const apiReq = req.clone({
    url: API_BASE_URL + req.url
  });

  return next(apiReq);
};
