import axios from "axios";
import { APIkeys } from "./Constants";
import { Utils } from "./Utils";
import { Values } from "./Values";


export async function loginDatabaseService(data) {
    console.log('rootURL Endpoint');


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
    const authToken = await Utils.getData(Values.AUTH_TOKEN);
    let configOptions = {
        method: 'GET',
        url: APIkeys.url + APIkeys.getAllquestions + data + '/getAllQuestions',
        headers: { "Authorization": `Bearer ${authToken}` }
    }
    // console.log('configOptions', configOptions);
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

export async function getAllNotices(data) {
    const authToken = await Utils.getData(Values.AUTH_TOKEN);
    let configOptions = {
        method: 'GET',
        url: APIkeys.url + APIkeys.getNotices,
        headers: { "Authorization": `Bearer ${authToken}` }
    }
    // console.log('configOptions', configOptions);
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

