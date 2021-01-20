import React from 'react';

class TodoForm extends React.Component{
    state = {
        inputText: ""
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.handleAddTodo();
    }
    handleChange = (e)=>{
        this.setState({
            inputText:e.target.value
        });
    }

    render() {
        return (
            <div className="todoForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title: 
            <input onChange={this.handleChange} value={this.state.inputText} />
          </label>
        </form>
      </div>
        )
    }
}

export default TodoForm;