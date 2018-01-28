import React from 'react'
import { StatusBar, View, Text, ListView } from 'react-native'
import { Container } from '../components/Container'
import { Clicker } from '../components/Clicker'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import { Register } from '../components/Register'
import { Shop } from '../components/Shop'
import { Constants } from 'expo'
import { checkAuth } from '../config/api'
import PropTypes from 'prop-types'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            auth: false,
            virionBalance: 1,
            virionPerClick: 1,
        }
    }

    static propTypes = {
        navigation: PropTypes.object
    }

    checkAuth() {
        fetch('http://35.177.182.18:5000/api/user', {
            method: 'GET',
            headers: {
                userid: Constants.deviceId
            }
        }).then(response => {
            if (response.status === 200) {
                this.setState({
                    auth: true
                })
            } else {
                this.setState({
                    auth: false
                })
            }
            return response.json()
        }).then(responseJson => {
            this.setState({
                virionBalance: responseJson.balance
            })
        })    
    }

    componentDidMount() {
        console.log(Constants.deviceId)

        this.checkAuth()
    }

    handleMapsPress = () => {
        this.props.navigation.navigate('Map')
    }

    handleVirusPress = () => {
        fetch('http://35.177.182.18:5000/api/user', {
            method: 'POST',
            headers: {
                userid: Constants.deviceId,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                team: 'virus'
            })
        }).then(response => {
            if (response.status === 200) {
                this.setState({
                    auth: true
                })
                return response.json()
            }
        }).then(responseJson => {
            console.log(responseJson)
        })
    }

    handleBacteriaPress = () => {
        fetch('http://35.177.182.18:5000/api/user', {
            method: 'POST',
            headers: {
                userid: Constants.deviceId,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                team: 'bacteria'
            })
        }).then(response => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    auth: true
                })
                return response.json()
            }
        }).then(responseJson => {
            console.log(responseJson)
        })
    }

    handleVirionPress() {
        this.setState({
            virionBalance: this.state.virionBalance + this.state.virionPerClick
        })

        fetch('http://35.177.182.18:5000/api/user/update/virion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                userid: Constants.deviceId
            },
            body: JSON.stringify({
                balance: this.state.virionBalance + this.state.virionPerClick
            })
        }).then(response => {
            console.log(response)
        })
    }

    render() {
        if (this.state.auth) {
            return this.renderPageWithAuth()
        } else {
            return this.renderPageUnauthed()
        }
    }

    renderPageWithAuth() {
        return (
            <Container>
                <StatusBar
                    translucent={false}
                    barStyle="light-content"
                />
                <Header onPress={this.handleMapsPress} />
                <Logo />
                <Clicker
                    virionBalance={this.state.virionBalance}
                    virionPerClick={this.state.virionPerClick}
                    updateVirionBalance={
                        () => { this.handleVirionPress() }
                    }
                />
            </Container>
        )
    }

    renderPageUnauthed() {
        return (
            <Container>
                <StatusBar
                    translucent={false}
                    barStyle="light-content"
                />
                <Register bacteriaClicked={this.handleBacteriaPress} virusClicked={this.handleVirusPress} />
            </Container>
        )
    }
}

export default Home