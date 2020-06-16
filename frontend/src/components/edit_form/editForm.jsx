import React from 'react';
import './edit_form.css';

class EditForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        debugger;
        return e => this.setState( { [field]: e.currentTarget.value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ _id: this.props.currentUser._id })
        this.props.editUser(this.state)
    }

    render(){
        // debugger;
        return(
            <div id='my-edit-form' className='edit-form'>
                <div className='edit-form-profile'>Profile Picture</div>
                <form onSubmit={this.handleSubmit} className='edit-info'>
                    <div className='edit-form-col-1'>
                        <label>First Name
                            <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
                        </label>
                        <label>Last Name
                            <input type="text" value={this.state.lastName} onChange={this.update('lastName')}/>
                        </label>
                        <label>Birthdate
                            <input type="date" value={this.state.birthday} onChange={this.update('birthday')}/>
                        </label>
                        <label>Height
                            <select onChange={this.update('height')}>
                                <option selected disabled></option>
                                <option value={68}>5'8</option>
                                <option value={69}>5'9</option>
                                <option value={70}>5'10</option>
                                <option value={71}>5'11</option>
                                <option value={72}>6'</option>
                                <option value={73}>6'1</option>
                                <option value={74}>6'2</option>
                            </select>
                        </label>
                        <label>Weight
                            <input type="text" value={this.state.weight} onChange={this.update('weight')}/>
                        </label>
                    </div>
                    <div className='edit-form-col-2'>
                        <label>Organ Donor
                            <label>
                                <input type="radio" value={true} name='organDonor' onChange={this.update('organDonor')}/>
                            true</label>
                            <label>
                                <input type="radio" value={false} name='organDonor' onChange={this.update('organDonor')}/>
                            false</label>
                        </label>
                        <label className='edit-form-blood-type'>Blood Type
                            <select  onChange={this.update('bloodType')}>
                                <option selected disabled></option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </label>
                    </div>
                    <button>EDIT FORM</button>
                </form>
            </div>
        )
    }
}

export default EditForm;