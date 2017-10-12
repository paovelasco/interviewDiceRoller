// This component handles the App Layout or template used on every page
import React, {PropTypes} from 'react';
import Header from './shared/Header';

class App extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
