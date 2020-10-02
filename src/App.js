import React from 'react';
import './App.css';
import Header from './components/header/component';
import Item from './components/list-item/component';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.onDeleted = this.onDeleted.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
       todoList: []      
    }
  }

  onDeleted = (id) => {
    const { todoList } = this.state;
    const searchingIndex = todoList.findIndex((el) => el.id === id);
    const beforeIndex = todoList.slice(0, searchingIndex);
    const afterIndex = todoList.slice(searchingIndex + 1);
    const newTodoList = [...beforeIndex, ...afterIndex];

    this.setState({todoList: newTodoList})
  }

  
  onSubmit = (e) => {
    e.preventDefault();
    const { todoList } = this.state;
    const itemTemplate = {
      content: e.target.childNodes[0].value, id: todoList.length
    }
    const newTodoList = [...todoList, itemTemplate];
    this.setState({todoList: newTodoList})
    e.target.reset();
}


render() {

  const elements = this.state.todoList.map((item) => {
    return <Item onDeleted={this.onDeleted} content={item.content} id={item.id} key={item.id} />;
  });

  return (
    <div className='site'>
      <div className='container'>
      <Header onSubmit={this.onSubmit}/>
      <div className="main">
        <div className="task-list-wrapper">{elements}</div>
      </div>
      </div>
    </div>
  );
}
}

export default App;
