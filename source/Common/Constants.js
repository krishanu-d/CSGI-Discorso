export const APIkeys = {
    url:'http://3.109.144.10:8000/v1',
    getAllQuiz : '/quiz',
    addQuiz : '/question/',
    deleteQuiz : '/quiz/',
    getAllquestions : '/question/',
    login : '/auth/login',

}

export const Method = {
    get:'GET',
    post:'POST'
}

export const errorMessages = { 
    incorrectEnrollment: 'Please check Enrollment Number',
    incorrectPassword: 'Please check Password',
    emptyField: 'Field cannot be empty',
 }