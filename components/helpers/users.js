import { useMutation,gql } from "@apollo/client";


// Define mutation
const ACTIVATION_MAIL_USER = gql`
    mutation ActivationMailToUser($name:String!,$email:String!,$password:String!){
      activationMailToUser(name:$name,email:$email,password:$password)
    {
        id 
        name 
        email 
        password
    }
  }`;
const ACTIVATE_USER = gql`
    mutation ActivateUser($OTP:AddOTP!){
      activateUser(OTP:$OTP)
    {
        id 
        name 
    }
  }`;

const LOGIN_USER = gql`
    mutation LogInUser($email:String!,$password:String!){
        logInUser(email:$email,password:$password){
            token
            user{
                id 
                name 
                email 
                role
                access
            }

    }
  }
`
  const RESETPASS_MAIL_USER = gql`
    mutation RestePassMail($email:String!,$password:String!){
        resetPassMail(email:$email,password:$password){ 
            email 
    }
  }
`
  const NEW_PASS_USER = gql`
    mutation newPass($token:String!,$password:String!){
        newPass(token:$token,password:$password){ 
            email 
    }
  }
`
  const RESEND_OTP = gql`
    mutation ResendOtp($email:String!){
        resendOtp(email:$email){ 
            name 
    }
  }
`
const CURRENT_USER = gql`
  query CurrentUser{
    currentUser{
      name
      email
      role
      id
      access
    }
  }
`
const AUTH_USER = gql`
  query AuthenticateUser{
    authenticateUser{
      name
      email
      role
      id
      access
    }
  }

`
const AUTH_ADMIN= gql`
  query AuthenticateAdmin{
    authenticateAdmin{
      name
      email
      role
      id
      access
    }
  }

`



export { ACTIVATION_MAIL_USER, LOGIN_USER,ACTIVATE_USER,RESEND_OTP,RESETPASS_MAIL_USER,NEW_PASS_USER,CURRENT_USER,AUTH_USER,AUTH_ADMIN};