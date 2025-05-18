import React, { useState } from 'react';
import FileUpload from '../Common/FileUpload';
import Input from "../Common/Input";
import axios from "axios";

const SERVER_URL = "https://localhost:7239/articles";

export default function AuthorSubmit({ AutorId }) {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Hzshka',
        description: '',
        tags: '',
        agree: false
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // сабмитка

        try {
            let articleId;

            axios.post(SERVER_URL, {
                title: formData.title,
                category: formData.category,
                description: formData.category,
                tags: null,
                articleName: file.name,
                userId: AutorId
            }).then(res => { articleId = res.data });

            axios.post(`${SERVER_URL}/file/${articleId}`, file);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="author__submit">
            <div className="author__submit-title">Submit Article for Review</div>
            <div className="author__submit-subtitle">
                Please fill in the details below to submit your article for review.
            </div>
            <div className="input qwq">
                <div className="input__title">Article Title</div>
                <input
                    className="input__text"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Article Title"
                />
            </div>
            <div className="input qwq">
                <div className="input__title">Category</div>
                <select
                    className="input__text input__text_bold"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="Hzshka">Hzshka</option>
                </select>
            </div>
            <div className="input qwq">
                <div className="input__title">Description</div>
                <Input
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    type="textarea"
                    big
                />
            </div>
            <div className="input qwq">
                <div className="input__title">Featured Document</div>
                <FileUpload setFile={setFile} />
            </div>
            <div className="input qwq">
                <div className="input__title">Tags</div>
                <input
                    className="input__text"
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Enter tags separated by commas"
                />
            </div>
            <div className="input input_checkbox qwq">
                <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                />
                <div className="input__checkbox-text">
                    I confirm that this article is my original work and I have read and agree to the submission guidelines
                </div>
            </div>
            <div className="author__buttons">
                <button className="button button_primary" onClick={handleSubmit}>
                    Submit for Review
                </button>
                <button className="button button_secondary">
                    Save Draft
                </button>
            </div>
        </div>
    );
}