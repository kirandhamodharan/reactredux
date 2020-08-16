import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Page2 extends Component {
    render() {
      return (
        <div>
            <div style={{background: '#dcdcdc'}}>
            <h1>Links:</h1>
              <Link to='/'>Home</Link> <br />
              <Link to='/page1'>Page 1</Link> <br />
            </div>

            <h1>Page 2</h1>

            <p style={{'fontSize':'70px'}}>&#128519;</p>
            <h3>Home page Data</h3>
            <div>Input 1: {this.props.homepagedata.input1}</div>
            <div>Input 2: {this.props.homepagedata.input2}</div>
            <div>Computed Val: {this.props.homepagedata.computedval}</div>

            <h3>Page1 Data</h3>
            <div>Input 1: {this.props.page1data.input1}</div>
            <div>Input 2: {this.props.page1data.input2}</div>
            <div>Computed Val: {this.props.page1data.computedval}</div>

        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  return state;
}

export default connect(mapStateToProps, null)(Page2)