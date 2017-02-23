import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: {}
    }
  }

  storeFile(e) {
    e.preventDefault;
    console.log(e.target.files);
    this.setState({
      files: e.target.files
    })
  }

  uploadFile() {
    // fetch('/upload', {
    //   method: 'POST',

    // }).then(response => {

    // }).catch(err => {
    //   console.log('Error uploading: ', err);
    // })

    var data = new FormData();
    data.append('uploads[]', this.state.files[0])

    $.ajax({
      url: '/upload',
      method: 'POST',
      data: data,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: (response, a, b) => {
        console.log('SUCCESS');
        console.log('response: ', response);
        console.log(a, b);
      },
      error: (response, a, b) => {
        console.log('ERROR');
        console.log('error: ', response);
        console.log(a, b);
      }
    })
  }

  render() {
    return (
      <div>
        <hr/>
        <form encType='multipart/form-data' method='post' action='/upload'>
          <input id='myFile' type='file' name='myFile'/>
          <input type='submit' value='submit' />
        </form>
        <br/>
        <hr/>
        <br/>
        <div>
          NOT WORKING DON'T USE<br/>
          <input id='uploadFile' type='file' name='myFile' onChange={ this.storeFile.bind(this) } />
          <button onClick={ this.uploadFile.bind(this) } >Upload!</button>
        </div>
        <hr/>
        <br/>
        <div>
          <h3>DOWNLOAD</h3>
          Similarly not working<br/>
          <form action='/download' method='get'>
            <button type='submit'>Download!</button>
          </form>
          <a href='/download' download>Download here</a>
        </div>
      </div>
    )
  }
}

export default connect()(Form);