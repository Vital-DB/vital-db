import React, {Component} from 'react'

class DashboardStatsAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidUpdate(prevProps){

    }

    hideModal(e){
        e.stopPropagation();
        document.querySelector('.add-vital-outer-container').style.display = "";
    }

    handleSubmit(e){
        // debugger
        e.preventDefault();
        switch (this.props.vital) {
            case cholesterolLevel:
                this.props.createCholesterolLevel(this.state);
                break;
        
            default:
                break;
        }
    }

    handleChange(e){
        e.preventDefault();
        // debugger
        this.setState({[e.currentTarget.getAttribute('subDataKey')]: e.currentTarget.value})
    }
    
    render() {
        const { vital, subVitals, errors } = this.props;

        const input = (
            subVitals.map(sub => <label>{sub}<input subDataKey={sub} type="number" value={this.state.sub} onChange={this.handleChange} /></label>)
        )

        const errorList = [];
        for (let i = 0; i < subVitals.length; i++){
            if (errors[subVitals[i]]) errorList.push(<li>{`${subVitals[i]}: ${errors[subVitals[i]].properties.message}`}</li>)
        }
        return (
            <div className="add-vital-outer-container">
                <div onClick={this.hideModal}className="add-vital-modal"></div>
                <div className="add-vital-container">
                    <form className="add-vital-form" onSubmit={this.handleSubmit}>
                        <h1>Add {vital}</h1>
                        {input}
                        <button>Add</button>
                        <ul className="vitals-error-list">
                            {errorList}
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default DashboardStatsAdd;