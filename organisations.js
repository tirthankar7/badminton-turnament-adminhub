import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

const Organisations = () => {
    const [organisations, setOrganisations] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [editingOrg, setEditingOrg] = useState(null);

    useEffect(() => {
        fetch('/data/organisation_master.json')
            .then((response) => response.json())
            .then((data) => setOrganisations(data));
    }, []);

    const handleAdd = () => {
        const newOrg = { id: Date.now(), name, description };
        setOrganisations([...organisations, newOrg]);
        setName('');
        setDescription('');
        // Here you would typically save the newOrg to the JSON file or API
    };

    const handleEdit = (org) => {
        setName(org.name);
        setDescription(org.description);
        setEditingOrg(org);
    };

    const handleUpdate = () => {
        setOrganisations(
            organisations.map((org) =>
                org.id === editingOrg.id ? { ...org, name, description } : org
            )
        );
        setName('');
        setDescription('');
        setEditingOrg(null);
        // Here you would typically update the org in the JSON file or API
    };

    const handleDelete = (id) => {
        setOrganisations(organisations.filter((org) => org.id !== id));
        // Here you would typically delete the org from the JSON file or API
    };

    return (
        <Layout>
            <h2>Organisations</h2>
            <ul>
                {organisations.map((org) => (
                    <li key={org.id}>
                        {org.name}
                        <button onClick={() => handleEdit(org)}>Edit</button>
                        <button onClick={() => handleDelete(org.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <h3>{editingOrg ? 'Edit Organisation' : 'Add Organisation'}</h3>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={editingOrg ? handleUpdate : handleAdd}>
                {editingOrg ? 'Update' : 'Add'}
            </button>
        </Layout>
    );
};

export default Organisations;
