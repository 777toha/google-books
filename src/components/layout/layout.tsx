import React, { FC, ReactNode } from 'react';
import Header from '../header/header';

interface LayoutProps {
    children: ReactNode;
  }

const Layout: FC<LayoutProps> = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
