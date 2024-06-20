import React from 'react'
import { toast } from 'react-toastify';

const useCreateGroup = () => {
    const [loading, setLoading] = React.useState(false);

    const createGroup = async (groupName, owner, selectedPeople, icon) => {
        if (groupName.length < 3) {
            toast.error('Group name must be at least 3 characters');
            return;
        }
        if (selectedPeople.length === 0) {
            toast.error('Please select at least one contact');
            return;
        }
        setLoading(true);
        try {
            let members = [owner]
            members.push(...selectedPeople);
            let body = {
                name: groupName,
                owner,
                members,
                icon
            }
            let token = localStorage.getItem('token');
            const result = await fetch('/api/groups/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(body)
            });
            const data = await result.json();
            if (result.status === 201) {
                toast.success('Group created successfully');
            }
            if (result.status === 400) {
                toast.error('Invalid group data');
            }
            if (result.status === 500) {
                toast.error('Internal Server Error');
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            toast.error('Internal Server Error');

        }
    }
    return { createGroup, loading }
}

export default useCreateGroup