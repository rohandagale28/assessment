import React, { useState } from 'react';

const EditUserForm = ({ user, updateUser }) => {
    const [formData, setFormData] = useState(user);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Update User
            </button>
        </form>
    );
};

export default EditUserForm;
