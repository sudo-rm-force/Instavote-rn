import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import logo from '../../assets/logo.png'
// import '../../styles/main.scss'

class HeaderLanding extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.navigation.push("Registration", { state: this.state })
    }

    render() {
        return (
            <View className='headerlanding'>
                {/* <div className='headerlanding--logo'>
                    <img className='headerlanding--logo-image' src={logo} alt='logo' />
                </div> */}
                <Text className='headerlanding--heading'>
                    InstaVote
                </Text>
                <Button title="Register" className='headerlanding--register' onPress={this.handleClick} />
            </View>
        )
    }
}


export default HeaderLanding
