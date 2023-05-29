import axios from "axios";
import { APIkeys } from "./Constants";
import { Utils } from "./Utils";
import { Values } from "./Values";


export async function loginDatabaseService(data) {
    console.log('rootURL Endpoint');
    // const Header = new Headers();
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5faWQiOiJCSDM0MjkiLCJwYXNzd29yZCI6IkFCSEkyMDAwQENTSVQuSU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0wNFQwNzo1NjozNS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMDRUMDc6NTg6MjUuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjgyNTg5MjEyfQ.0xNINNuH9jjv3xPieT-EUlWpLIkQIw4eUh0JO7OB1lY'
    // Header.append("Authorization", token)
    // console.log('headersssssss', Header)
    // console.log('wddddddddddddddddd') 

    let configOptions = {
        method: 'POST',
        url: APIkeys.url + APIkeys.login,
        data: data
    }
    try {
        let response = await axios(configOptions);
        console.log('response', response);
        return response;

        // Work with the response...
    } catch (err) {
        console.log(err);
        return err;
    }

}

export async function getAllQuiz() {
    const authToken = await Utils.getData(Values.AUTH_TOKEN);
    const Header = new Headers();
    Header.append("Authorization", authToken)
    let configOptions = {
        method: 'GET',
        url: APIkeys.url + APIkeys.getAllQuiz,
        headers: { "Authorization": `Bearer ${authToken}` },
    }
    try {
        const response = await axios(configOptions);
        // console.log(response.data);
        return response;

        // Work with the response...
    } catch (err) {
        console.log(err);
        return err;
    }

}

export async function getQuizQuestions(data) {

    let configOptions = {
        method: 'GET',
        url: APIkeys.url + APIkeys.getAllquestions + data + '/getAllQuestions'
    }
    console.log('configOptions', configOptions);
    try {
        const response = await axios(configOptions);
        // console.log(response.data);
        return response;

        // Work with the response...
    } catch (err) {
        console.log(err);
        return err;
    }




}

