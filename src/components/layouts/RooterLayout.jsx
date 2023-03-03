import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../exporter';
import './index.scss';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <span className="tags top-tags">&lt; body &gt;</span>
        <Outlet />
      </main>
      <footer>
        <span className="tags bottom-tags">
          &lt;/ body &gt; <br />
          <span className="bottom-tag-html">&lt; footer &gt; </span> <br />
          <span className="bottom-tag-html">&lt;/ footer &gt; </span>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
