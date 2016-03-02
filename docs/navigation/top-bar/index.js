import React, { Component } from 'react';

import { TopBar, TopBarContent, TopBarItem, TopBarTitle } from '../../../src/top-bar';
import {
  TopBar as FlexTopBar,
  TopBarContent as FlexTopBarContent,
  TopBarItem as FlexTopBarItem,
  TopBarTitle as FlexTopBarTitle,
} from '../../../src/top-bar/flex';
import { Menu, MenuItem } from '../../../src/menu';
import { Menu as FlexMenu, MenuItem as FlexMenuItem } from '../../../src/menu/flex';
import { Button } from '../../../src/button';
import { MenuIcon } from '../../../src/menu-icon';
import { ShowForScreenSize, HideForScreenSize } from '../../../src/visibility';

export default class TopBarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleToggle = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>
        <TopBar>
          <TopBarTitle>
            <Menu>
              <MenuItem text>Site Title</MenuItem>
            </Menu>
          </TopBarTitle>
          <TopBarContent>
            <TopBarItem position="left">
              <Menu>
                <MenuItem><a href="#">One</a></MenuItem>
                <MenuItem><a href="#">Two</a></MenuItem>
                <MenuItem><a href="#">Three</a></MenuItem>
              </Menu>
            </TopBarItem>
            <TopBarItem position="right">
              <Menu>
                <MenuItem><input type="search" placeholder="Search"/></MenuItem>
                <MenuItem><Button>Search</Button></MenuItem>
              </Menu>
            </TopBarItem>
          </TopBarContent>
        </TopBar>
        <br/>
        <TopBar stack="large">
          <TopBarTitle>
            <Menu>
              <MenuItem text>Site Title</MenuItem>
            </Menu>
          </TopBarTitle>
          <TopBarContent>
            <TopBarItem position="left">
              <Menu>
                <MenuItem><a href="#">One</a></MenuItem>
                <MenuItem><a href="#">Two</a></MenuItem>
                <MenuItem><a href="#">Three</a></MenuItem>
              </Menu>
            </TopBarItem>
            <TopBarItem position="right">
              <Menu>
                <MenuItem><input type="search" placeholder="Search"/></MenuItem>
                <MenuItem><Button>Search</Button></MenuItem>
              </Menu>
            </TopBarItem>
          </TopBarContent>
        </TopBar>
        <br/>
        <TopBar stack="medium">
          <TopBarTitle>
            <Menu>
              <HideForScreenSize size="large">
                <MenuItem><MenuIcon dark onClick={this.handleToggle}/></MenuItem>
              </HideForScreenSize>
              <MenuItem text>Site Title</MenuItem>
            </Menu>
          </TopBarTitle>
          <ShowForScreenSize size={this.state.show ? 'medium' : 'large'}>
            <TopBarContent>
              <TopBarItem position="left">
                <Menu vertical horizontal="large">
                  <MenuItem><a href="#">One</a></MenuItem>
                  <MenuItem><a href="#">Two</a></MenuItem>
                  <MenuItem><a href="#">Three</a></MenuItem>
                </Menu>
              </TopBarItem>
              <TopBarItem position="right">
                <Menu>
                  <MenuItem><input type="search" placeholder="Search"/></MenuItem>
                  <MenuItem><Button>Search</Button></MenuItem>
                </Menu>
              </TopBarItem>
            </TopBarContent>
          </ShowForScreenSize>
        </TopBar>
        <br/>
        <FlexTopBar>
          <FlexTopBarTitle>
            <FlexMenu>
              <FlexMenuItem text>Site Title</FlexMenuItem>
            </FlexMenu>
          </FlexTopBarTitle>
          <FlexTopBarContent>
            <FlexTopBarItem position="left">
              <FlexMenu>
                <FlexMenuItem><a href="#">One</a></FlexMenuItem>
                <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
                <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
              </FlexMenu>
            </FlexTopBarItem>
            <FlexTopBarItem position="right">
              <FlexMenu>
                <FlexMenuItem><input type="search" placeholder="Search"/></FlexMenuItem>
                <FlexMenuItem><Button>Search</Button></FlexMenuItem>
              </FlexMenu>
            </FlexTopBarItem>
          </FlexTopBarContent>
        </FlexTopBar>
        <br/>
        <FlexTopBar stack="large">
          <FlexTopBarTitle>
            <FlexMenu>
              <FlexMenuItem text>Site Title</FlexMenuItem>
            </FlexMenu>
          </FlexTopBarTitle>
          <FlexTopBarContent>
            <FlexTopBarItem position="left">
              <FlexMenu>
                <FlexMenuItem><a href="#">One</a></FlexMenuItem>
                <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
                <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
              </FlexMenu>
            </FlexTopBarItem>
            <FlexTopBarItem position="right">
              <FlexMenu>
                <FlexMenuItem><input type="search" placeholder="Search"/></FlexMenuItem>
                <FlexMenuItem><Button>Search</Button></FlexMenuItem>
              </FlexMenu>
            </FlexTopBarItem>
          </FlexTopBarContent>
        </FlexTopBar>
        <br/>
        <FlexTopBar stack="medium">
          <FlexTopBarTitle>
            <FlexMenu>
              <HideForScreenSize size="large">
                <FlexMenuItem><MenuIcon dark onClick={this.handleToggle}/></FlexMenuItem>
              </HideForScreenSize>
              <FlexMenuItem text>Site Title</FlexMenuItem>
            </FlexMenu>
          </FlexTopBarTitle>
          <ShowForScreenSize size={this.state.show ? 'medium' : 'large'}>
            <FlexTopBarContent>
              <FlexTopBarItem position="left">
                <FlexMenu vertical horizontal="large">
                  <FlexMenuItem><a href="#">One</a></FlexMenuItem>
                  <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
                  <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
                </FlexMenu>
              </FlexTopBarItem>
              <FlexTopBarItem position="right">
                <FlexMenu>
                  <FlexMenuItem><input type="search" placeholder="Search"/></FlexMenuItem>
                  <FlexMenuItem><Button>Search</Button></FlexMenuItem>
                </FlexMenu>
              </FlexTopBarItem>
            </FlexTopBarContent>
          </ShowForScreenSize>
        </FlexTopBar>
      </div>
    );
  }
}
