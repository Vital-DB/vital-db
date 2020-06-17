import React, {Component} from 'react'

class DashboardStatsAdd extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){

    }
    
    render() {
        const { vital, subVitals } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                {subVitals.map(sub => <input type="number" />)}
            </form>
        )
    }
}

export default DashboardStatsAdd;