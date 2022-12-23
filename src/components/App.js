import React from 'react'
import '../styles/App.css';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { name: "Sam Lee", enrollmentNo: "457885", age: 25 }
    }

    handleBtn() {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        return (
            <>
                <h1>{`Hello, my name is ${this.state.name}`}</h1>
                <p>{`I am ${this.state.age} years old and my enrollment no is ${this.state.enrollmentNo}`}</p>
                <button onClick={() => this.handleBtn()}>Submit</button>

            </>
        )
    }
}


export default App;
