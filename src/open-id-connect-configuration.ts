import { UserManagerSettings } from 'oidc-client';

export default class OpenIdConnectConfiguration {
  [key: string]: any;
  public loginRedirectRoute: string = '';
  public logoutRedirectRoute: string = '';
  public unauthorizedRedirectRoute: string = '';
  public logLevel: number = 0;
  public userManagerSettings: UserManagerSettings = {};
}
