import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "../login/service/login.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild
{
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean
  {
    console.log("chackLogin");

    this.loginService.redirectUrl = url;

    if(this.loginService.isLogged())
    {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/login']);

    return false;
  }

}
