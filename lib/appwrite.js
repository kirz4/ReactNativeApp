import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.lrp.aora',
    projectId: '6787dd1b001d7835e286',
    databaseId: '6787de8f0032dd6f4e8c',
    userCollectionId: '6787df0c001e989f6749',
    videoCollectionId: '6787df2c001cc81fa570',
    storageId: '6787e03b001ad94012f9'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

export const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
            }
        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }

}

export const getCurrentSession = async () => {
    try {
        const session = await account.getSession('current');
        console.log('Current session:', session);
        return session;
    } catch (error) {
        if (error.message.includes('missing scope')) {
            console.log('No active session. The user is a guest.');
        } else {
            console.error('Error fetching current session:', error.message);
        }
        throw error; // Ou trate o erro de acordo com sua lógica
    }
};


export async function signIn(email, password){
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error.message || "Error during sign in")
    }
}
