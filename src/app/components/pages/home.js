import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { homePageInput1Changed, homePageInput2Changed } from '../../util/redux/actions';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(this.state);
    const target = event.target;
    console.log(target);
    this.setState({
      [target.name]: target.value
    });
    if (target.name == "input1") this.props.homePageInput1Changed(target.value);
    if (target.name == "input2") this.props.homePageInput2Changed(target.value);
  }

    render() {
      return (
        <div>
            <div style={{background: '#dcdcdc'}}>
            <h1>Links:</h1>
              <Link to='/page1'>Page 1</Link> <br />
              <Link to='/page2'>Page 2</Link> <br />
            </div>
            <h1>Home page </h1>
            <p style={{'fontSize':'70px'}}>&#128514;</p>
            
            <br />
              Input1: <input name="input1" onChange={this.handleInputChange} /><br /><br />
              Input2: <input name="input2" onChange={this.handleInputChange} />
            <br /><br /><br /><br />

        </div>
       
      )
    }
}
export default connect(null, {homePageInput1Changed, homePageInput2Changed})(Home)