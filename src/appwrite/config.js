import conf from "../conf/conf";
import {ID,Databases,Client,Storage,Query} from 'appwrite'

class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.
        setEndpoint(conf.appwriteUrl).
        setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // create post method
    async createPost ({content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.error(`the appwrite create post error is ${error}`);
        }
    }
    // update post method
    async updatePost ({content,featuredImage}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    content,featuredImage
                }
            )
        } catch (error) {
            console.error(`the appwrite update post error is ${error}`);
            
        }
    }

    // delete post method
    async deletePost () {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique()
            )
        } catch (error) {
            console.error(`the appwrite delete error is ${error} `);
            
        }
    }
    // get post method
    async getPost() {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique()
            )
        } catch (error) {
            console.error(`the appwrite get post error is ${error}`);
            
        }
    }
    // get multiple posts method
    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.error(`the appwrite get multiple posts error are ${error}`);
            
        }
    }

    // bucket file methods
    // create file method
    async uploadFile (file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error(`the appwrite create file error is ${error}`);
            
        }
    }
    // delete file method
    async deleteFileMethod(fileID) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.error(`the appwrite delete file error is ${error}`);
            
        }
    }
    // file preview method
    filePreview(fileID) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
    }
}

const service = new Service()

export default service;