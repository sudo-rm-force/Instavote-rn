import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HeaderLanding from '../components/landing/headerlanding'
import Login from '../components/landing/login'
//import Carousel from '../components/landing/carousel'

class Landing extends Component {
    render() {
        return (
            <View>
                <View>
                    <HeaderLanding />
                </View>
                {/* <Carousel /> */}
                <View>
                    <Login />
                </View>
            </View>
        )
    }
}

export default Landing
