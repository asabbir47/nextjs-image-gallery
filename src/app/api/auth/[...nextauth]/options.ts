import type {NextAuthOptions} from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialProvider({
            name : 'Credentials',
            credentials: {
                username: {
                    label : 'User Name: ',
                    type : 'text',
                    placeholder: 'username',
                },
                password: {
                    label : 'Password: ',
                    type : 'password',
                    placeholder: 'pass',
                }
            },
            async authorize(credentials) {
                // need to fetch real user here
                const user = {id:1,username:'sabbir','password':'123456'};
                if(credentials?.username == user.username && credentials?.password == user.password)
                {
                    return user;
                }else{
                    return null;
                }
            }
        })
    ]
}