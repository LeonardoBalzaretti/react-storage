import React from 'react'

class Loading extends React.Component {
    render() {
        if (this.props.refreshing === true) {
            return (
                <img alt="aa" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" />
            );
        }
        return null;
    }
}

export default Loading;