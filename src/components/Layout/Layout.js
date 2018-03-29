import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }

  render () {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}/>
        <main className="Content">
          {this.props.children}
        </main>
      </Aux>
    );
  }
} //end
export default Layout;
