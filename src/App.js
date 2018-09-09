import React, {Component} from 'react';
import './App.css';

let menu = [
  {
    name: 'Fish and Chips',
    ingredients: [
      {name: 'fish', qty: 1, weight: '1 lb'},
      {name: 'chips', qty: 50, weight: '1.5 lb'}
    ]
  },
  {
    name: 'Doner Kebab',
    ingredients: [
      {name: 'lamb', qty: 1, weight: '0.5 lb'},
      {name: 'beef', qty: 1, weight: '0.25 lb'},
      {name: 'pitta', qty: 1, weight: 'large'},
      {name: 'salad', qty: 1, weight: '0.45 lb'}
    ]
  }
];

const chicken_tikka = {
  name: 'Chicken Tikka Masala',
  ingredients: [
    {name: 'chicken', qty: 1, weight: '0.5 lb'},
    {name: 'masala', qty: 1, weight: '0.5 lb'},
    {name: 'chilli', qty: 1, weight: 'medium'}
  ]
};

const recipeStyle = {
  marginTop: '10px',
  marginBottom: '20px',
  marginLeft: '20px',
  textAlign: 'left'

};

class Recipe extends Component {
  render() {
    return (
      <div style={recipeStyle}>
        <h2>Name: {this.props.name}</h2>
        <h3>Ingredients:</h3> <ul>
          {this.props.ingredients.map( item => <li key={item.name}>{item.name} - {item.qty} = {item.weight}</li>)}
        </ul>
      </div>
    )
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { items: props.items};
  }

  menuClicking(props) {
    console.log('Clicked', Date(), props);
    console.log(props.fred);
    const newMenu = menu.slice();
    newMenu.push(chicken_tikka);
    this.setState({ items: newMenu});
  }

  render() {
    return (
      <div>
        {this.state.items.map(item => <Recipe key={item.name} {...item}/>)}
        <button onClick={this.menuClicking.bind(this)}>Click Me</button>
        {/*<button onClick={this.menuClicking} fred={123} that={this}>Click Me</button>*/}
      </div>
    )
  }
}

class MenuHeader extends Component {
  render() {
    return (
      <div>
        <h1>Menu for Paul</h1>
        <h2>Date: {this.props.date.toString()} </h2>
      </div>

    )
  }
}

class App extends Component {
  clicking(props) {
    console.log('Clicked', Date(), props);

    const newMenu = menu.slice();
    newMenu.push(
      {
        name: 'Chicken Tikka Masala',
        ingredients: [
          {name: 'chicken', qty: 1, weight: '0.5 lb'},
          {name: 'masala', qty: 1, weight: '0.5 lb'},
          {name: 'chilli', qty: 1, weight: 'medium'}
        ]
      }
    );
    menu = newMenu;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuHeader date={new Date()}/>
        </header>
        <Menu items={menu}/>
        {/*<button onClick={this.clicking}>Click Me</button>*/}
      </div>
    );
  }
}

export default App;
