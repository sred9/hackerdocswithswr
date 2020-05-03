import classNames from "classnames";
import React from "react";
import Link from "gatsby-link";
import Search from "../search/search";
import Status from "../status/status";
import logo from "./logo.svg";
import hamburgerIcon from "./menu.svg";
import clearIcon from "./clear.svg";

import "./mobile-navigation.scss";
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import "./navigation.scss";

const MobileNavigationMenu = handleClick => {
  return (
    <div>
      <div className="mobile-navigation__separator" />

      <ul className="mobile-navigation__list">
        <NavItem
          linkTo="/hackers.html"
          title="Hackers"
          handleClick={handleClick}
        />
        <NavItem
          linkTo="/programs.html"
          title="Programs"
          handleClick={handleClick}
        />
        <NavItem
          linkTo="/glossary"
          title="Glossary"
          handleClick={handleClick}
        />
        <li className="mobile-navigation__item">
          <a
            className="mobile-navigation__link"
            href="https://api.hackerone.com"
            target="_blank"
          >
            API
          </a>
        </li>
        <NavItem
          linkTo="/changelog"
          title="Changelog"
          handleClick={handleClick}
        />
        <NavItem
          linkTo="/accessibility"
          title="Accessibility"
          handleClick={handleClick}
        />
      </ul>

      <div className="mobile-navigation__separator" />

      <Status />
     
    </div>
  );
};

const NavItem = ({ linkTo, title, handleClick }) => {
  const linkProps = to => ({ location }) => {
    return {
      className: classNames("navigation__link", {
        "navigation__link--active": location.pathname.includes(to)
      })
    };
  };

  return (
    <li className="navigation__item">
      <Link
        to={linkTo}
        onClick={handleClick}
        getProps={linkProps(`/${title.toLowerCase()}`)}
      >
        {title}
      </Link>
    </li>
  );
};

class MobileNavigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isMenuVisible: false
    };
  }

  handleClick() {
    return () => {
      if (this.state.isMenuVisible) {
        document.body.style.overflowY = "auto";
      } else {
        document.body.style.overflowY = "hidden";
      }

      this.setState({ isMenuVisible: !this.state.isMenuVisible });
    };
  }

  render() {
    const classes = classNames("navigation__wrapper", {
      "mobile-navigation__wrapper--active": this.state.isMenuVisible
    });

    return (
      <div role="navigation" className={classes}>
       
		      <Link to="/" className="navigation__logo">
        <img src="https://1vg0qaibabjd.wpcdn.shift8cdn.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/07/finalmenulogo_bsvmyk1.png.webp" className="navigation__logo-image" alt="" />
      </Link>






      <ul className="navigation__list">
        <NavItem linkTo="/html.html" title="HTML" />
		<NavItem linkTo="/bootstrap.html" title="CSS" />
        <NavItem linkTo="/programs.html" title="Javascript" />
       
        <NavItem linkTo="/changelog" title="Bootstrap" />
        <NavItem linkTo="/accessibility" title="React" />
		
		

		
		
		
		 <li className="navigation__item drop-down-parent">
          <a
            className="navigation__link"
            href="#">API
          </a>
		  <ul className="drop-down"> 
		  <li>Elephant</li>
		  		  <li>Tiger</li>

		  </ul>
		  
		 
		  
        </li>
		
<li class="join-us navigation__item"><a class="navigation__link navigation__link--active" href="/accessibility">Join us</a></li>
		
		
		
		

		
		
		
      </ul>


	  
	   <Search />
	  
	  
	  
	  
	  
	  <ul className="mobile-navigation__list__toggle">
	  
	  		
	  
	  
	  
	  <li class="navigation__item dark-toggle">
			
			<ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label class="dark-toggle">
            <input class="dark-toggle"
              type="checkbox" id="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />  <label for="checkbox" ></label>
{' '}
            <svg version="1.1" width="27" height="27" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z" class="dark-toggle"></path></svg>
          </label>
        )}
      </ThemeToggler>
	  
	  
	  
	  
	  
	  
	  
	  
		</li>
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  <li class="navigation__item">
	  
        <img
          src={this.state.isMenuVisible ? clearIcon : hamburgerIcon}
          className="mobile-navigation__menu"
          alt=""
          onClick={this.handleClick()}
        />
		</li>
		</ul>


        {this.state.isMenuVisible && (
          <MobileNavigationMenu handleClick={this.handleClick()} />
        )}
      </div>
    );
  }
}

export default MobileNavigation;
