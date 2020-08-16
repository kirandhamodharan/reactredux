import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

const Body = () => (
    <div className='body'>
      <Switch>
        <Route exact path='/' component={() => <Home homepagedata={{'input1':"", 'input2':"", 'computedval':0}} />} />
        <Route path='/page1' component={() => <Page1 page1data={{'input1':"", 'input2':"", 'computedval':0, 'proccessingInd':'N'}} />} />
        <Route path='/page2' component={Page2}/>
      </Switch>
    </div>
  )

export default Body;