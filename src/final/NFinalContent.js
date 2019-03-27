import React, {Component} from 'react';

class NFinalContent extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="container-content"
                 style={{height: document.documentElement.clientHeight - 106 - 1}}>
                {this.props.children}
            </div>
        );
    }
}

NFinalContent.propTypes = {

};

NFinalContent.defaultProps = {

};

export default NFinalContent