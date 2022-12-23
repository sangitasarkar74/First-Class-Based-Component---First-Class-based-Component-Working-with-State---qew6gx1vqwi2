import React from 'react'
import '../styles/App.css';

class App extends React.Component {

    constructor() {
        super()
        this.state = { name: "Sam Lee", enrollmentNo: "457885", age: 25 }
    }


    render() {
        const handleBtn = () => {
            let changeState = this.state.age;
            this.setState({
                age: changeState + 1
            })
        }
        return (
            <>
                <h1>{`Hello, my name is ${this.state.name}`}</h1>
                <p>{`I am ${this.state.age} years old and my enrollment no is ${this.state.enrollmentNo}`}</p>
                <button onClick={handleBtn}>Submit</button>

            </>
        )
    }
}


export default App;
