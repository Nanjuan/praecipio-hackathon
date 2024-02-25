
import Head from 'next/head';
import UserToolbar from "../../components/userToolbar";


const getUser = async (userID) => {
    return {
        userId: "12234",
        name: "Robbie",
        email: "el_presidente@gmail.com"
    }
};

export default async function ProfilePage({ params }) {
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
