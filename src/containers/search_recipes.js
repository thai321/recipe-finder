import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = { // local state
      ingredients: '',
      dish: ''
    }
  }

  search() {
    const { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        this.props.setRecipes(json.results);
      });
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="onions, garlic"
            onChange={event => this.setState({ingredients: event.target.value})}
            />
        </FormGroup>

        {' '}

        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="Omelet"
            onChange={event => this.setState({dish: event.target.value})}
            >
          </FormControl>
        </FormGroup>
        {' '}
        <Button onClick={ () => this.search() } className="btn btn-primary">Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { setRecipes }) (SearchRecipes);
