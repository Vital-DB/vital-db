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

    componentDidMount(){
        if (this.props.currentSubVital) alert(this.props.currentSubVital)
    }
    
    componentDidUpdate(prevProps, prevState){

    
        const currentVital = this.props.vital;
        // clear modal values if user changes vitals from the dropdown menu, or successfully adds them
        if ((prevProps.vital !== currentVital) || this.props.vitals[currentVital].length !== prevProps.vitals[currentVital].length){
            for (let i = 0; i < this.props.subVitals.length; i++){
                this.setState({[this.props.subVitals[i]]: ""})
            }
            document.querySelector('.add-vital-outer-container').style.display = ""; // hide modal when user inputs data
            this.props.clearVitalsErrors(); 
        }


    }

    hideModal(e){
        e.stopPropagation();
        document.querySelector('.add-vital-outer-container').style.display = "";
    }

    handleSubmit(e){
     
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
            case 'allergies':
                this.props.createAllergy(this.state);
                break;
            case 'medicalConditions':
                this.props.createMedicalCondition(this.state);
                break;
            default:
                break;
        }
    }

    handleChange(e){
        e.preventDefault();
        const dataKey = e.currentTarget.getAttribute('subdatakey')
        const value = e.currentTarget.value;
        this.setState({[dataKey]: value})
    }
    
    render() {
        const { vitalLoading, vital, subVitals, errors } = this.props;
        if (vitalLoading && !errors) return <Loading />
        if (!vital || !subVitals) return null;

        const dataKeys = {
            cholesterolLevels: "Cholesterol",
            bloodPressureLevels: "Blood Pressure",
            weights: "Weight",
            vitaminDLevels: "Vitamin D",
            temperatures: "Body Temperature",
            restingHeartRates: "Resting Heart Rate",
            medicalConditions: "Checkup Details",
            allergies: "Allergy",
        }

        const input = (
            subVitals.map(sub => {
                debugger
                let inputType;
                const editSub = (this.state.current) ? this.state.current[sub] : "";
                let value;
                if (this.state[sub]){
                    value = this.state[sub];
                } else {
                    value = "";
                } 

                if (vital !== 'medicalConditions' && vital !== 'allergies'){ // vital numbers
                    inputType = <input key={sub} subdatakey={sub} type="number" value={value} placeholder="Please enter a value" onChange={this.handleChange} />;
                } else { // input[type="text"]
                    inputType = <textarea key={sub} subdatakey={sub} type="text" value={value} placeholder="Please enter a value" onChange={this.handleChange} />
                }
                return <label key={sub}>{sub}{inputType}</label>
            })
        )

        const errorList = [];

        for (let i = 0; i < subVitals.length; i++){
            const subVital = subVitals[i];
            const errorPath = (subVital !== 'allergy' && subVital !== 'condition' && errors[subVital]) ? errors[subVital].properties.message : errors[subVital];
            if (errors[subVital]) errorList.push(<li key={subVital}>{`${subVital}: ${errorPath}`}</li>)
        }
 
        return (
            <div className="add-vital-outer-container">
                <div onClick={this.hideModal}className="add-vital-modal"></div>
                <div className="add-vital-container">
                    <form className="add-vital-form" onSubmit={this.handleSubmit}>
                        <h1>Add {dataKeys[vital]}</h1>
                        {input}
                        <ul className="vitals-error-list">
                            {errorList}
                        </ul>
                        <button className="universal__button">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DashboardStatsAdd;