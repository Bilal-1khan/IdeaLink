import conf from "../conf/conf";
import {ID,Account,Client} from 'appwrite'

class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.
        setEndpoint(conf.appwriteUrl).
        setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client)
    }

    // create user account method
    // async createAccount ({email,password,name}){
    //     try {
    //         const userAccount = await this.account.create(ID.unique(),email,password,name)
    //         console.log(userAccount.name);
            
    //         if (userAccount) {
    //             // call another method
    //             return this.login({email,password})
    //         } else {
    //             return userAccount;
    //         }
    //     } catch (error) {
    //         console.error(`the appwrite create account error is :: ${error}`);
    //     }
    // }

    async createAccount({email, password, name}) {
        try {
          const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
          );
          if (userAccount) {
            return await this.login({email, password});
          }
        } catch (error) {
          throw error;
        }
      }

    // login user method
    // async login ({email,password}) {
    //     try {
    //         return await this.account.createEmailPasswordSession(email,password)

    //     } catch (error) {
    //         console.error(`the appwrite login user error is :: ${error}`);
    //     }
    // }

    async login({email, password}) {
        try {
          await this.account.createEmailPasswordSession(email, password);
          return await this.getCurrentUser();
        } catch (error) {
          throw error;
        }
      }

    // current user info method
    // async getCurrentUser() {
    //     try {
    //         console.log(this.account);
    //         return await this.account.get()
            
    //     } catch (error) {
    //         console.error(`the appwrite current user error is :: ${error}`);
    //     }
    //     return null
    // }

    async getCurrentUser() {
        try {
          return await this.account.get();
        } catch (error) {
          throw error;
        }
      }

    // user logout method
    async userLogout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.error(`the appwrite user logout error is :: ${error}`);
        }
    }
}

const authService = new AuthService()

export default authService;