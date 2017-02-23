import React, { Component } from 'react';
import { connect } from 'react-redux';

import addNumber from '../actions/addNumber';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PROPS');
    console.log(this.props.numbers);
    return (
      <div>
        LIST!!!!
        <br/>
        <button onClick={ this.props.push } >Redux</button>
        {
          this.props.numbers.map(number => (
            <div key={ number } >{ number }</div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  numbers: state.list
})

const mapDispatchToProps = dispatch => ({
  push: () => {
    dispatch(addNumber())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);