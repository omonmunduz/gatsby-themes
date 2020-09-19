import React from 'react';

const Layout = ({children}) => {
    return(
        <React.Fragment>
            <header>gatsby-theme-docs</header>
            <main>{children}</main>
        </React.Fragment>
    )
};
export default Layout;