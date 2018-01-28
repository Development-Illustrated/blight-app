import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import { Container } from '../components/Container'
import { Clicker } from '../components/Clicker'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import { Register } from '../components/Register'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            auth: false,
            virionBalance: 1,
            virionPerClick: 1
        }
    }

    componentDidMount() {
        console.log(Constants.deviceId)

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
            console.log(response.status)
            return response.json()
        }).then(responseJson => {
            console.log(responseJson)
            this.setState({
                virionBalance: responseJson.balance
            })
        })
    }

    static propTypes = {
        navigation: PropTypes.object
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

    handleVirionClick() {
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
                    barStyle="light-content"b
                />
                <Header onPress={this.handleMapsPress} />
                <Logo />
                <Clicker virionBalance={this.state.virionBalance} virionPerClick={this.state.virionPerClick} updateVirionBalance={() => {this.handleVirionClick()}}/>
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