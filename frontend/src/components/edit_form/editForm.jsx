import React from 'react';
import './edit_form.css';

class EditForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.currentUser;
        // this.state = {
        //     firstName: '',
        //     lastName: '',
        //     birthday: '',
        //     bloodType: '',
        //     weight: '',
        //     height: '',
        //     organDonor: '',
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(){
    //     
    //     this.setState(this.props.currentUser)
    // }

    update(field){
        
        return e => this.setState( { [field]: e.currentTarget.value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ _id: this.props.currentUser._id })
        this.props.editUser(this.state)
    }

    render(){
        
        return(
            <div className='whole-edit-page'>
                <div id='my-edit-form' className='edit-board'>
                    <div className='edit-form'>
                        <div className='edit-form-profile'>Profile Picture</div>
                        <form onSubmit={this.handleSubmit} className='edit-info'>
                            <div className='edit-form-col-1'>
                                <div className='edit-form-header'>EDIT FORM</div>
                                <label><div>First Name</div>
                                    <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
                                </label>
                                <label><div>Last Name</div>
                                    <input type="text" value={this.state.lastName} onChange={this.update('lastName')}/>
                                </label>
                                <label><div>Birthdate</div>
                                    <input type="date" value={this.state.birthday} onChange={this.update('birthday')}/>
                                </label>
                                <label><div>Weight</div>
                                    <input type="text" value={this.state.weight} onChange={this.update('weight')}/>
                                </label>
                            </div>
                            <div className='edit-form-col-2'>
                            <label><div>Height</div>
                                <select className='edit-user-height' onChange={this.update('height')}>
                                    <option selected disabled></option>
                                    <option value={59}>4'11</option>
                                    <option value={60}>5'</option>
                                    <option value={61}>5'1</option>
                                    <option value={62}>5'2</option>
                                    <option value={63}>5'3</option>
                                    <option value={64}>5'4</option>
                                    <option value={65}>5'5</option>
                                    <option value={66}>5'6</option>
                                    <option value={67}>5'7</option>
                                    <option value={68}>5'8</option>
                                    <option value={69}>5'9</option>
                                    <option value={70}>5'10</option>
                                    <option value={71}>5'11</option>
                                    <option value={72}>6'</option>
                                    <option value={73}>6'1</option>
                                    <option value={74}>6'2</option>
                                    <option value={75}>6'3</option>
                                    <option value={76}>6'4</option>
                                    <option value={77}>6'5</option>
                                </select>
                                </label>
                                <label className='edit-form-organ-donor'><div>Organ Donor</div>
                                    <label>
                                        <input type="radio" value={true} name='organDonor' onChange={this.update('organDonor')}/>
                                    true</label>
                                    <label>
                                        <input type="radio" value={false} name='organDonor' onChange={this.update('organDonor')}/>
                                    false</label>
                                </label>
                                <label className='edit-form-blood-type'><div>Blood Type</div>
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
                    <div className='pencil'>
                        <div className='pencil-eraser'></div>
                        <div className='pencil-body'></div>
                        <div className='pencil-tip'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditForm;