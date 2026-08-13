import conf from '../config.js'

import { Client, Account } from "appwrite";

export class AuthService {

    Client = new Client()
    account;
    constructor() {

        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid)
        this.account = new Account(this.client)



    }

    async createAccount({ email, password, name }) {

        try {
            const userAccount = await this.account.create(ID.unique().email, password, name)

            if (userAccount) {
                //call another account
                return this.login({ email, password })


            } else {
                return userAccount;

            }

        } catch (e) {
            throw e;

        }
    }
    async login({ email, password }) {


        try {
            return await this.account.createEmailSession(email, password)

        } catch (e) {
            throw e;

        }
    }
    async getCurrentUser() {

        try {
            return await this.account.get();

        } catch (e) {
            console.log(":appwrite service:: this.getCurrentUser::error", e);


        }

        return null;

    }
    async logout() {

        try {
            await this.account.deleteSession()

        } catch (error) {
            console.log("appwrite service:: logout:: error", error);

        }


    }
}
const authservice = new AuthService();

export default AuthService;

export default authservice;



