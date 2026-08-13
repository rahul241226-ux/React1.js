import conf from '../config.js'

import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {


    client = new Client();
    databases;
    bucket;

    constructor() {

        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid)
        this.account = new Account(this.client)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)

    }
    async createPost(slug, { title, content, featuredImage, status, userId }) {

        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug, {

                title,
                constent,
                featuredImage,
                status,
                userId,
            })
        } catch (error) {

            console.log(":appwrite service:: createPost::error", error);




        }
    }



    async updatePost(slug, { title, content, featuredImage, status }) {

        try {
            return await this.databases.updateDocument(

                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug, {

                title,
                content,
                featuredImage,
                status,



            })

        }
        catch (error) {
            console.log(":appwrite service:: createPost::error", error);

        }


    }
    async deletePost(slug) {
        try {

            await this.databases.deletePost(


                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug


            )
            return true

        } catch (error) {
            console.log(":appwrite service:: createPost::error", error);
            return false
        }
    }
    async getPost(slug) {

        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug

            )


        } catch (error) {
            console.log(":appwrite service:: createPost::error", error);
            return false

        }


    }
    async getPosts(queries = [Query.equal("status", "active")]) {

        try {


            return await this.databases.listDocuments(

                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                queries,


            )

        } catch (error) {
            console.log(":appwrite service:: createPost::error", error);
            return false

        }


    }

    //file upload services

    async uploadFile(file) {



        try {
            return await this.bucket.createFile(

                conf.appwritebucketid,
                ID.unique(),
                file


            )

        } catch (error) {
            console.log(":appwrite service:: createPost::error", error);
            return false


        }

    }
    async deleteFile(fileId) {

        try {
            await this.bucket.deleteFile(
                conf.appwritebucketid,
                fileId



            )

        } catch (error) {
            console.log(":appwrite service:: createPost::error", error);
            return false
        }


    }
    getFilePreview(fileId){

        return this.bucket.getFilePreview(

            conf.appwritebucketid,
            fileId
        )
    }
}


const service = new Service()

export default Service



