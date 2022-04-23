import React from 'react';
import FallBackComponent from './FallBackComponent'

class ErrorBoundary extends React.Component{
    state = {
        hasError: false,
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
    render(){
        if(this.state.hasError){
            return <FallBackComponent />
        }

        return (
                this.props.children
        )
    }
}

export default ErrorBoundary