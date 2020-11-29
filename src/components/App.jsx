import React from "react";

function App() {
    const [name, setName] = React.useState("");
    const [displayName, setDisplayName] = React.useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setDisplayName(name);
        setName("");
    }

    return (
        <div className="container">
            <h1>Hello {displayName}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your name?"
                    value={name}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
