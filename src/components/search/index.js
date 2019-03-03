import React, {Component} from 'react';
import classes from './Search.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchProduct } from  '../../actions';

class Search extends Component{
    state = {
    }

    handleChange = event =>{
        this.props.searchProduct(event.target.value)
    }

    handleSubmit = event =>{
        event.preventDefault()
    }

    render(){
         return(
            <div className={classes.Search}>
                <p>Search product:</p>
                <div className={classes.SearchForm}>
                <form onSubmit={this.handleSubmit} action=""> 
                    <input onKeyUp={this.handleChange}  type="text" placeholder="Type your query..."/> 
                    <Button variant='dark' type="submit" className={classes.SearchBtn}>
                        Search
                    </Button>
                </form>           
                </div>
            </div>
        )
    }
   
}

const mapDispatchToProps = {
    searchProduct
}

export default connect(null, mapDispatchToProps)(Search);