import React, {Component} from 'react'
import Loading from './loader'

class DashboardStatsAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidUpdate(prevProps){
        debugger
        if (prevProps.vital !== this.props.vital){
            for (let i = 0; i < this.props.subVitals.length; i++){
                this.setState({[this.props.subVitals[i]]: ""})
            }
        } 
    }

    hideModal(e){
        e.stopPropagation();
        document.querySelector('.add-vital-outer-container').style.display = "";
    }

    handleSubmit(e){
        // debugger
        e.preventDefault();
        switch (this.props.vital) {
            case 'cholesterolLevels':
                this.props.createCholesterolLevel(this.state);
                break;
            case 'weights':
                this.props.createWeight(this.state);
                break;
            case 'vitaminDLevels':
                this.props.createVitaminDLevel(this.state);
                break;
            case 'temperatures':
                this.props.createTemperature(this.state);
                break;
            case 'restingHeartRates':
                this.props.createRestingHeartRate(this.state);
                break;
            case 'bloodPressureLevels':
                this.props.createBloodPressureLevel(this.state);
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
        const { vitalLoading, vital, subVitals, errors } = this.props;
        if (vitalLoading) return <Loading />
        if (!vital || !subVitals) return null;
        const input = (
            subVitals.map(sub => <label key={sub}>{sub}<input key={sub} subdatakey={sub} type="number" value={this.state[sub]} onChange={this.handleChange} /></label>)
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