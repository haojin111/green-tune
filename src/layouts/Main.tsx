import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {
  Alignment,
  Button,
  Classes,
  Icon,
  IconSize,
  InputGroup,
  Menu,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Text,
} from "@blueprintjs/core";
import { Popover2, MenuItem2 } from "@blueprintjs/popover2";

import './Main.css';
import logo from '../assets/logo.svg';

type Props = {
  children: any;
  renderActionsMenu?: () => JSX.Element;
};

const GTNavbar = styled(Navbar)`
  height: 177px;
  width: 100%;
  .bp4-navbar-group {
    width: 100%;
    margin-top: 27px;
    justify-content: space-between;
    &.auto-height {
      height: auto;
    }

    .bp4-navbar-heading {
      margin-left: 98px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      color: #339D51;
    }

    img.App-logo {
      width: 93px;
      height: 138px;
    }

    .menu-icon-btn {
      border: 0px;
      background-color: transparent;
      box-shadow: unset;
    }

    &.right-menu {
      width: 228px;
      margin-top: -10px;
      .bp4-popover2-target {
        margin-right: 60px;
      }
    }
  }
`;

const SearchBox = styled.div`
  display: flex;
  width: 982px;
  flex-direction: column;
  justify-content: center;
  margin: 0px 74px;
  .bp4-input-group {
    width: 100%;
  }
  .title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    /* identical to box height */


    color: #73562B;
  }
`;

const settingMenu = (
  <Menu>
    <MenuItem2 text="My Account" />
    <MenuItem2 text="Orders" />
    <MenuItem2 text="Help" />
    <MenuItem2 text="Sign out" />
  </Menu>
);

const Main: FC<Props> = ({ children, renderActionsMenu }) => (
  <div className="App">
    <header className="App-header">
      <GTNavbar fixedToTop>
        <NavbarGroup className='auto-height' align={Alignment.LEFT}>
          <NavbarHeading>GreenTune</NavbarHeading>
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBox>
            <InputGroup
              large
              leftElement={<Icon icon="search" />}
              placeholder="Type search text..."
            />
            <Text className='title'>Your health deserves this one </Text>
          </SearchBox>
          <NavbarGroup className='right-menu'>
            <Popover2 content={settingMenu} placement="bottom">
              <Button className='menu-icon-btn' icon="cog" />
            </Popover2>
            <Popover2 content={settingMenu} placement="bottom">
              <Button className='menu-icon-btn' icon="shopping-cart" />
            </Popover2>
          </NavbarGroup>
        </NavbarGroup>
      </GTNavbar>
    </header>
    <main className="App-main">{children}</main>
  </div>
);

export default Main;
