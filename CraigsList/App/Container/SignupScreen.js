import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, StatusBar, AsyncStorage } from 'react-native'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import Firebase from '../Config/firebase'

// Styles
import styles from './Styles/SignupScreenStyle'

import Header from '../Components/Reusable/Header'
import Button from '../Components/Reusable/Button'
import UserInput from '../Components/Reusable/UserInput'
import FooterButton from '../Components/Reusable/FooterButton'

const initialState = {
  credentials:{
      username: '',
      email:'',
      password:'',
  },
  isSubmitting: false,
  errors: {
      // passwordErr: '',
      // emailErr: '',
  }
}

class SignupScreen extends Component {

  constructor(props){
    super(props);{
    this.state = initialState
    }
  }

  _handleTextInput = (key, input) => {
    this.setState(state =>({
        credentials: {
            ...state.credentials,
            [key]: input,
        },
        // errors: {
        //     // passwordErr: '',
        //     // emailErr: '',
        // }
    }))
}

  SignUp = async () => {
    // alert(this.state.credentials)
    if(this.state.isSubmitting){
      return;
    }
    this.setState({ isSubmitting: true })
    let response;
    try {
        response = await this.props.mutate({
        variables: this.state.credentials
        });
    } catch (err) {
      console.log(err)
        this.setState({
        errors: {
            // ...state.errors,
            email: 'Email has already been used',
        },
        isSubmitting: false,
      });
      return;
    }
    // await AsyncStorage.setItem('@CraigslistApp/token', response.data.signup.token)
    this.setState({initialState})
    this.props.navigation.navigate('Country');
    // alert('user entered')

    // const {email, password} = this.state;
    //     if (this.state.password.length < 6){
    //         alert('Password must be at least 6 characters')
    //         return
    //     }
    //     else{
    //             //Login was not successful, let's create a new account
    //         Firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then((user) => {
                // this.props.navigation.navigate('Country');
                // alert ('Data inserted');
        //     })
        //     .catch((error) => {
        //         const {code, message} = error;
        //         alert ('nothing was inserted');
        //     });
        // }
  }

  render () {

    const { credentials: { username, email, password }, errors, isSubmitting } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Header />
        <KeyboardAvoidingView   style={styles.inputCont}
                                behavior="padding">
            <UserInput  placeholder='Username'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        onChangeText={input => this._handleTextInput('username', input)}
            />
            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
            <UserInput  placeholder='Email'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        onChangeText={input => this._handleTextInput('email', input)}
            />
            <UserInput  secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor='#99A3A4'
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={input => this._handleTextInput('password', input)}
            />
        </KeyboardAvoidingView>
        <View style={{flex: 1}}>
            <Button onPress={this.SignUp} text="Sign Up"/>
            <View style={{alignItems: 'center'}}>
                <FooterButton onPress={() => this.props.navigation.navigate('LoginScreen')} text="Already have An Account?"/>
            </View>
        </View>
      </View>
    )
  }
}
const singUpMutation = gql`
mutation ($email: String!, $username: String!,  $password: String!){
  createUser(name: $username, authProvider: { email: { email: $email, password: $password } }){
    id
    name
    email
    password
  }
}
  `;

// const singUpMutation = gql`
//     mutation($username: String!, $email: String!, $password: String!){
//         signup(name: $username, email: $email, password: $password){
//             token
//         }
//     }
// `;

export default graphql(singUpMutation)(SignupScreen);

// export default SignupScreen
