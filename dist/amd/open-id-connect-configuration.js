define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OpenIdConnectConfiguration = (function () {
        function OpenIdConnectConfiguration() {
            this.loginRedirectRoute = '';
            this.logoutRedirectRoute = '';
            this.unauthorizedRedirectRoute = '';
            this.logLevel = 0;
            this.userManagerSettings = {};
        }
        return OpenIdConnectConfiguration;
    }());
    exports.default = OpenIdConnectConfiguration;
});
//# sourceMappingURL=open-id-connect-configuration.js.map