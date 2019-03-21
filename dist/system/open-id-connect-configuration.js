System.register([], function (exports_1, context_1) {
    "use strict";
    var OpenIdConnectConfiguration;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            OpenIdConnectConfiguration = (function () {
                function OpenIdConnectConfiguration() {
                    this.loginRedirectRoute = '';
                    this.logoutRedirectRoute = '';
                    this.unauthorizedRedirectRoute = '';
                    this.logLevel = 0;
                    this.userManagerSettings = {};
                }
                return OpenIdConnectConfiguration;
            }());
            exports_1("default", OpenIdConnectConfiguration);
        }
    };
});
//# sourceMappingURL=open-id-connect-configuration.js.map