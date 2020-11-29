import React, {Component} from "react";

function App() {
    const [inputText, setinputText] = React.useState("");
    const [todoItems, setTodoItems] = React.useState([]);

    function changeinputText(event) {
        let value = event.target.value;
        setinputText(value);
    }

    function addTodoListItem() {
        setTodoItems((prevItems) => {
            return [
                ...prevItems,
                inputText
            ];
        });
        // todoItems.push(inputText);
        setinputText("");
    }

    function Todo() {
        return todoItems.map((todoItem) => <li key={todoItem}>{todoItem}</li>);
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={changeinputText} value={inputText}/>
                <button onClick={addTodoListItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    <Todo/>
                </ul>
            </div>
        </div>
    );
}

export default App;
