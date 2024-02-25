
import Head from 'next/head';
import { styled } from '@mui/system';
import UserToolbar from "../../components/userToolbar";


const getUser = async (userID) => {
    // Simulating fetching user data from an API
    // const response = await fetch(`/api/users/${userID}`);
    // if (!response.ok) {
    //     throw new Error('Failed to fetch user');
    // }
    return {
        userId: "12234",
        name: "Robbie",
        email: "el_presidente@gmail.com"
    }
};

export default async function ProfilePage({ params }) {
    // useEffect(() => {
    //     document.title = `User Profile - ${user.name}`;
    // }, [user.name]);
    const user = await getUser(params.userID);
    return (
        <div sx={{ display: 'flex' }}>
            <Head>
                <title>User Profile - {user.userID}</title>
            </Head>
            <UserToolbar user={user}/>
        </div>
    );
};
