import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {error : null}
    }

    static getDeriveStateFromError(error){
        return {error}
    }

    render(){
        if(this.state.error){
            return (
                <div>
                    <h1>An error was detected!</h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary