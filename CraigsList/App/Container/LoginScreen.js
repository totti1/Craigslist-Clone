import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, StatusBar, AsyncStorage } from 'react-native'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import Firebase from '../Config/firebase'

// Styles
import styles from './Styles/LoginScreenStyle'

import Header from '../Components/Reusable/Header'
import Button from '../Components/Reusable/Button'
import UserInput from '../Components/Reusable/UserInput'
import FooterButton from '../Components/Reusable/FooterButton'

const initialState = {
  credentials:{
      email:'',
      password:'',
  },
  isSubmitting: false,
  errors: {
      // passwordErr: '',
      // emailErr: '',
  }
}

class LoginScreen extends Component {

  constructor(props){
    super(props)
    this.state = initialState
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

  login = async () => {

    if (!this.state.credentials){
      alert('Please add your credentials')
    }
    else{

    // alert (this.state.credentials)
    // console.log(this.state.credentials)

    if(this.state.isSubmitting){
      return;
  }
  this.setState({ isSubmitting: true })
  const response = await this.props.mutate({
      variables: this.state.credentials
  });
//   const {payload, error} = response.data.login;
//   if (payload){
//       console.log(payload.token)
//       await AsyncStorage.setItem('@CraigslistApp/token', payload.token)
//       this.setState(initialState)
//       // alert('user logged in')
      this.props.navigation.navigate('Country')
//   }
//   else{
//       this.setState({
//           errors:{
//               [error.field]: error.msg,
//           },
//           isSubmitting: false,
//       })
//       return;
//   }
}

    // console.log('clicking');
  //   const {email, password} = this.state;
  //   if (this.state.email.length < 1 && this.state.password.length < 1){
  //     alert('Please click the create an account button to create an account')
  //     return
  // }
  // else{
  //   Firebase.auth().signInWithEmailAndPassword(email, password)
  //       .then((user) => {
          // this.props.navigation.navigate('Country')
            // alert ('login enabled');
            // this.setState({error: '', loading: false});
    //     })
    //     .catch((error) => {
    //         const {code, message} = error;
    //         alert ('Email or Password must be false');
    //         // this.setState({error: 'Authentication failed.', loading: false});
    //     });
    // }
    // alert(this.state.password)
    // this.props.navigation.navigate('Country')
  }

  render () {
    const { credentials: { email, password }, errors, isSubmitting } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Header />
        <KeyboardAvoidingView   style={styles.inputCont}
                                behavior="padding">
            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
            <UserInput  placeholder='Email'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        onChangeText = {input => this._handleTextInput('email', input)}
            />
            {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
            <UserInput  secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor='#99A3A4'
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText = {input => this._handleTextInput('password', input)}
            />
        </KeyboardAvoidingView>
        <View style={{flex: 1}}>
            <Button onPress={this.login} text="Login"/>
            <View style={{flexDirection: 'row'}}>
                <FooterButton onPress={() => this.props.navigation.navigate('SignupScreen')} text="Create An Account"/>
                <FooterButton onPress={() => alert('Forgot Password?')} text="Forgot Password?"/>
            </View>
        </View>
      </View>
    )
  }
}
const loginMutation = gql`
    mutation ($email: String!, $password: String!) {
        signinUser(email: { email: $email, password: $password }){
            token
          }
    }
    `;


// const loginMutation = gql`
//     mutation ($email: String!, $password: String!) {
//         loginUser(email: $email, password: $password) {
//           payload {
//             token
//         }
//         error {
//             field
//             message
//         }
//         }
//     }
// `;

export default graphql(loginMutation)(LoginScreen);
// export default LoginScreen
