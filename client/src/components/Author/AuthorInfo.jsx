import { useState } from 'react';
import Input from '../Common/Input';
import Button from '../Common/Button';
import axios from 'axios';
import { SERVER_URL } from '../../utils/fileUtils';

export default function AuthorInfo({ user, setUser }) {
    const [formData, setFormData] = useState({
        id: user.id,
        name: user.name,
        email: user.email,
        specialization: user.specialization,
        location: user.location,
        bio: user.bio,
        twitter: '',
        linkedin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // сабмитка
        try {
            axios.put(`${SERVER_URL}/users/${user.id}`, {
                name: formData.name,
                password: '',
                email: formData.email,
                specialization: formData.specialization,
                location: formData.location,
            });
            setUser({
                id: user.id,
                name: formData.name,
                email: formData.email,
                specialization: formData.specialization,
                location: formData.location,
                passwordHash: ''
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleCancel = () => {
        // отмена изменений
    };

    return (
        <div className="author__info active">
            <Input
                title="Full Name"
                name="name" type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                small
            />
            <Input
                title="Email"
                name="email" type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                small
            />
            <Input
                title="Specialization"
                name="specialization" type="text"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="Specialization"
                small
            />
            <Input
                title="Location"
                name="location" type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                small
            />
            <Input
                title="Bio" type="text"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
                type="textarea"
                big
            />
            <div className="input">
                <div className="input__title">Social Links</div>
                <div className="input__wrapper input__wrapper_twitter">
                    <Input
                        name="twitter" type="text"
                        value={formData.twitter}
                        onChange={handleChange}
                        placeholder="Twitter"
                    />
                </div>
                <div className="input__wrapper input__wrapper_linkedin">
                    <Input
                        name="linkedin" type="text"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="LinkedIn"
                    />
                </div>
            </div>
            <div className="author__buttons">
                <Button primary onClick={handleSubmit}>
                    Save Changes
                </Button>
                <Button secondary onClick={handleCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    );
}