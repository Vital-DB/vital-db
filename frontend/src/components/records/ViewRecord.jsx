import React, { Component } from 'react';
import axios from 'axios';

export class NewRecord extends Component {
  constructor(props){
    super(props);
    this.state = {
        key: "MOCK_DATA",
    }
  }

  download(e){
    // axios.get("http://localhost:3000/api/records/retrieve_s3"), {

    // }
  }

  handleChange = (ev) => {

  }

  handleUpload = (ev) => {
   
  }


  render() {
   
    return (
      <div className="App">
        <center>
          <h1>VIEWING FILE</h1>
          <button onClick={this.download}>Download</button>
        </center>
      </div>
    );
  }
}

