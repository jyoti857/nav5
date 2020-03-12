// This context will be used for passing the authentication
// related value pass, whoever retouch the context need to be careful
// to not break the auth flow

import * as React from 'react';
const AuthContext = React.createContext();

export default AuthContext;
