import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';



const endpoint = process.env.EXPO_PUBLIC_ENDPOINT 
const platform = process.env.EXPO_PUBLIC_PLATFORM
const projectId = process.env.EXPO_PUBLIC_PROJECTID
const databaseId = process.env.EXPO_PUBLIC_DATABASEID
const userCollectionId = process.env.EXPO_PUBLIC_USERCOLLECTIONID
const videoCollectionId = process.env.EXPO_PUBLIC_VIDEOCOLLECTIONID
const storageId = process.env.EXPO_PUBLIC_STORAGEID
export const appwriteConfig = {
    endpoint: endpoint,
    platform: platform,
    projectId: projectId,
    databaseId: databaseId ?? '',
    userCollectionId: userCollectionId,
    videoCollectionId: videoCollectionId,
    storageId: storageId
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint ?? '') // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId ?? '') // Your project ID
    .setPlatform(appwriteConfig.platform ?? '') // Your application ID or bundle ID.
    ;


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser =  async (email : string, password : string, username : string) => {
    try{
        const newAccount = await account.create(ID.unique(), email, password, username);

        if(!newAccount) return Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId ?? '', appwriteConfig.userCollectionId ?? '', ID.unique(),{
                accountId : newAccount.$id,
                email,
                username,
                avatar : avatarUrl
            }
        )

        return newUser;
    }

    catch(err : any){
        console.error("err", err);
        throw new Error(err);
    }
}

export async function signIn(email : any, password : any){
    try{
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    }
    catch(err : any){
        console.error("err", err);
    }
}


export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();
        console.log("current Account", currentAccount);
        if(!currentAccount) throw Error;
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId ?? '',
            appwriteConfig.userCollectionId ?? '',
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        console.log("currentUser", currentUser.documents[0]);

        return currentUser.documents[0];
    }

    catch(err : any){
        console.error("err", err);
    }
}


export async function getAllPosts() {
    try{
        const posts = await databases.listDocuments(databaseId ?? '', videoCollectionId ?? '');
        console.log("posts", posts);
        return posts.documents;
    }
    catch(error){
        console.error("error", error);
    }
}




