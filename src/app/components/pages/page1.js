import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { p1DataChanged } from '../../util/redux/actions';

class Page1 extends Component {
  constructor(props) {
    super(props);
    //props.btnTxt = "Send Data to store";

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
          Data1: <input name="input1" onChange={this.handleDataEntry} /><br /><br />
          Data2: <input name="input2" onChange={this.handleDataEntry} />
          <br /><br /><br /><br />
          <div>
            <button disabled={this.props.proccessingInd == "Y"} onClick={this.sendDataToStore}>{ (this.props.proccessingInd == "Y")? "Processing...":"OK" }</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return (state.page1data)
}

export default connect(mapStateToProps, {p1DataChanged})(Page1)