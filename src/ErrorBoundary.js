import React from 'react'

class ErrorBoundary extends React.Component {
    // constructor(props) {
    //     super(props);
        state = { error: '' }
   // }
    static getDerivedStateFromError(error) {
        return {
            error: error
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }
    render(){
        if(this.state.error){
            return(
                <div>
                    <h1>there an issue</h1>
                </div>
            )
        }

        return this.props.children
    }

}

export default ErrorBoundary

// import React from 'react';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { error: null };
//     }

//     static getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { error: error };
//     }

//     componentDidCatch(error, info) {
//         // You can also log the error to an error reporting service.
//         console.log(error, info);
//     }

//     render() {
//         if (this.state.error) {
//             return (
//                 <div>
//                     <h1>There is an issue</h1>
//                 </div>
//             );
//         }

//         return this.props.children;
//     }
// }

// export default ErrorBoundary;