import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {createHistory} from 'history';

import '../src/theme.scss';
import TypographyPage from './typography';
import GridPage from './grid';
import FlexGridPage from './flex-grid';
import VisibilityPage from './visibility';
import ButtonPage from './button';

const history = createHistory();

class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Link to='/typography'>Typography</Link>
        &nbsp;
        <Link to='/grid'>Grid</Link>
        &nbsp;
        <Link to='/flex-grid'>Flex Grid</Link>
        &nbsp;
        <Link to='/visibility'>Visibility</Link>
        &nbsp;
        <Link to='/button'>Button</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

class Demo extends Component {
  render() {
    return (
      <Router history={history}>
        <Route component={HomePage} path='/'>
          <Route component={TypographyPage} path='/typography'/>
          <Route component={GridPage} path='/grid'/>
          <Route component={FlexGridPage} path='/flex-grid'/>
          <Route component={VisibilityPage} path='/visibility'/>
          <Route component={ButtonPage} path='/button'/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
