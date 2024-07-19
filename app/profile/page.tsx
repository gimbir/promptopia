'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import ProfileComponent from '@components/Profile';

const Profile = () => {
    const { data: session } = useSession();
    const [prompts, setPrompts] = useState([]);
    useEffect(() => {
        const fetchPrompts = async () => {
            const response = await fetch(`/api/users/${session.user?.id}/prompts`);
            const data = await response.json();
            setPrompts(data);
        };

        if (session?.user.id) {
            fetchPrompts();
        }
    }, []);

    const handleEdit = () => {

    };

    const handleDelete = async () => {
        // const hasConfirmed = confirm('Are you sure you want to delete this prompt?');

        // if (hasConfirmed) {
        //     try {
        //         const response = await fetch(`/api/prompt/${prompt._id.toString()}`, { method: 'DELETE' });
        //         const data = await response.json();
        //         console.log(data);
        //         location.reload();

        //     } catch (error) {

        //     }
        // }
    };

    return (
        <>
        <ProfileComponent
            name="My"
            desc="Welcome to your profile page"
            data={prompts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
            anan
        </>
    );
};

export default Profile;
