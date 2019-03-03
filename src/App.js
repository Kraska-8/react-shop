import React, { Component } from 'react'; // importing react
import Products from './containers/products'; // importing products component
import Product from './containers/product'; // importing product component
import Basket from './containers/basket'; // importing basket component
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ScrollToTop from './hoc/ScrollToTop'
//Using CSS modules
import classes from './App.css';

class App extends Component {
  state = {

  };
  render() {
    return (
      <Router>
        {/* Using Scroll To top HOC */}
        <ScrollToTop>
          <Container className={classes.App}> {/* Using CSS modules */}
            <Row>
              <Col md={3}>
                <Sidebar/>
              </Col>
              <Col md={9}>
                <Route exact path='/' component={Products} />
                <Route  path='/products/:id' component={Product} />
                <Route  path='/basket' component={Basket} />
              </Col>
            </Row>
          </Container>
          </ScrollToTop>
      </Router>
      );
    }
  }
  
  export default App;
  