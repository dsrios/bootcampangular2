import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DashboardGuardGuard implements CanActivate {

  constructor (private http: HttpClient, private route: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }

  isAuthenticated() {
    const url = 'https://yesno.wtf/api';
    return this.http.get(url).pipe(
      map(
        (answer: any) => {
          console.log(answer);
          if ( answer.answer === 'no' ) {
              this.route.navigate(['/login']);
          }
          return answer.answer === 'yes' ? true : false;
        }
      )
    );
  }
}
