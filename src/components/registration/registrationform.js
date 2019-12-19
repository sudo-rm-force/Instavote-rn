import React, { Component } from 'react'
// import election from '../../web3/web3-config'
import registerApi from '../../api/registerApi'
import back from '../../assets/back.svg'
//import '../../styles/main.scss'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            VoterID: '',
            Gender: '',
            MobileNo: '',
            FaceID: props.faceID
        }

        this.return = this.return.bind(this);
    }

    return() {
        window.location = '/'
    }

    onVoterIdChange(event) {
        //this.props.voterIdChanged_reg(event);
        this.setState({ VoterID: event.target.value })
    }

    onNameChange(event) {
        //this.props.nameChanged(text);
        this.setState({ Name: event.target.value })
    }

    onMobileNumChange(event) {
        //this.props.mobileNumChanged(text);
        this.setState({ MobileNo: event.target.value })
    }

    onGenderSelect(event) {
        //this.props.genderSelect(text)
        this.setState({ Gender: event.target.value })
    }

    onButtonPress(event) {
        event.preventDefault()
        const { voterId, name, mobile_no, gender, pic } = this.props;

        //this.props.register({ voterId, name, mobile_no, gender, pic })

        // this.props.register({ voterId, name, mobile_no, gender });
        // Election.methods.register(this.state.VoterID).call().then((res) => {
        //     Election.methods.assignCandidateToConstituency(this.state.VoterID, this.state.MobileNo).call().then((res) => {
        //         Election.methods.getCandidateByConstituency(this.state.MobileNo).call().then((res) => {
        //             console.log(res)
        //         })
        //     })
        // }) 
        // console.log(this.props.faceName)
        registerApi(this.state.VoterID, this.state.Gender, this.state.MobileNo, this.state.FaceID, this.props.faceName).then((res) => {
            console.log(res)
            window.alert('Registration complete for ' + this.state.Name)
            window.location = '/'
        })

    }

    componentWillReceiveProps(props) {
        if (props.faceID !== this.state.FaceID) {
            this.setState({ FaceID: props.faceID })
        }
    }

    render() {
        return (
            <div className='registrationform'>
                <div className='registrationform--back' onClick={this.return}>
                    <img className='registrationform--back-image' src={back} alt='back' />
                    <span className='registrationform--back-text'>Back to Main Menu</span>
                </div>
                <div className='registrationform--form'>
                    <form onSubmit={this.onButtonPress.bind(this)}>
                        <div className='registrationform--heading-name'>Name:</div>
                        <input
                            className='registrationform--input-name'
                            type='text'
                            onChange={this.onNameChange.bind(this)}
                            required />
                        <div className='registrationform--heading-voterid'>VoterID:</div>
                        <input
                            className='registrationform--input-voterid'
                            type='text'
                            onChange={this.onVoterIdChange.bind(this)}
                            required />
                        <div className='registrationform--heading-gender'>Gender:</div>
                        <input
                            className='registrationform--input-gender_male'
                            type='radio'
                            name='gender'
                            value='Male'
                            onChange={this.onGenderSelect.bind(this)}
                            required /><span className='registrationform--heading-gender_male'>Male</span>
                        <input
                            className='registrationform--input-gender_female'
                            type='radio'
                            name='gender'
                            value='Female'
                            onChange={this.onGenderSelect.bind(this)}
                            required /><span className='registrationform--heading-gender_female'>Female</span>
                        <input
                            className='registrationform--input-gender_other'
                            type='radio'
                            name='gender'
                            value='Other'
                            onChange={this.onGenderSelect.bind(this)}
                            required /><span className='registrationform--heading-gender_other'>Other</span>
                        <div className='registrationform--heading-mobile'>Mobile Number:</div>
                        <input
                            className='registrationform--input-mobile'
                            type='text'
                            onChange={this.onMobileNumChange.bind(this)}
                            required />
                        <button
                            className='registrationform--button'
                            type='submit'>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegistrationForm
