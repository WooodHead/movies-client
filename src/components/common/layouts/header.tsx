import React from 'react';

import { Affix } from 'antd';
import Link from 'next/link';

export default function Header() {
  return (
    <Affix offsetTop={0}>
      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header logo">
              <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <Link passHref href="/" legacyBehavior>
                <a>
                  <img className="logo" src="/images/logo1.png" alt="" width="119" height="58" />
                </a>
              </Link>
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li className="dropdown first">
                  <Link passHref href="/" legacyBehavior>
                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                      Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    movies<i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        Movie grid<i className="ion-ios-arrow-forward"></i>
                      </a>
                    </li>
                    <li>
                      <a href="movielist.html">Movie list</a>
                    </li>
                    <li>
                      <a href="moviesingle.html">Movie single</a>
                    </li>
                    <li className="it-last">
                      <a href="seriessingle.html">Series single</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    celebrities <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    news <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    community <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav flex-child-menu menu-right">
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li className="loginLink">
                  <a href="#">LOG In</a>
                </li>
                <li className="btn signupLink">
                  <a href="#">sign up</a>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </nav>
        </div>
      </header>
    </Affix>
  );
}
