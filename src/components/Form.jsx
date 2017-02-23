import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form encType='multipart/form-data' method='post' action='/upload'>
          <input id='myFile' type='file' name='myFile'/>
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default connect()(Form);