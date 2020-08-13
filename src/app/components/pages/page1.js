import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { p1DataChanged } from '../../util/redux/actions';


class Page1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: ""
    };
    this.handleDataEntry = this.handleDataEntry.bind(this);
    this.sendDataToStore = this.sendDataToStore.bind(this);
  }

  sendDataToStore() {
    this.props.p1DataChanged(this.state);
  }

  handleDataEntry(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <div>
          <div style={{background: '#dcdcdc'}}>
          <h1>Links:</h1>
            <Link to='/'>Home</Link> <br />
            <Link to='/page2'>Page 2</Link> <br />
          </div>

          <h1>Page 1</h1>

          <p style={{'fontSize':'70px'}}>&#128513;</p><br />
          Data1: <input name="input1" onChange={this.handleDataEntry} value={this.props.input1}/><br /><br />
          Data2: <input name="input2" onChange={this.handleDataEntry} value={this.props.input2}/>
          <br /><br /><br /><br />
          <div>
            <button onClick={this.sendDataToStore}>Send data to store</button>
          </div>
      </div>
    )
  }
}

export default connect(null, {p1DataChanged})(Page1)