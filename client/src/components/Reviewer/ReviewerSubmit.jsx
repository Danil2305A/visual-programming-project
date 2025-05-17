import { useState } from 'react';
import Input from '../Common/Input';
import Button from '../Common/Button';
import RatingStars from '../Common/RatingStars';
import FileUpload from '../Common/FileUpload';

export default function ReviewerSubmit({ onClose }) {
    const [formData, setFormData] = useState({
        rating: 0,
        category: 'Hzshka',
        technical: '',
        originality: '',
        quality: '',
        commentToAuthor: '',
        commentToEditor: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTextareaChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingChange = (rating) => {
        setFormData(prev => ({
            ...prev,
            rating
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Review submitted:', formData);
        onClose();
    };

    const handleSaveDraft = (e) => {
        e.preventDefault();
        console.log('Draft saved:', formData);
        onClose();
    };

    return (
        <div className="reviewer__submit">
            <div className="reviewer__submit-title">Review submission</div>
            <div className="reviewer__submit-subtitle">Machine Learning Application</div>

            <form onSubmit={handleSubmit}>
                <div className="reviewer__submit-block">
                    <div className="reviewer__submit-title-block">Review Summary</div>
                    <div className="input">
                        <RatingStars
                            rating={formData.rating}
                            onRatingChange={handleRatingChange}
                        />
                    </div>
                    <div className="input">
                        <div className="input__title">Category</div>
                        <select
                            className="input__text input__text_bold"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        >
                            <option value="Hzshka">Hzshka</option>
                        </select>
                    </div>
                </div>

                <div className="reviewer__submit-block">
                    <div className="reviewer__submit-title-block">Detailed Review</div>
                    <Input
                        title="Technical Merit"
                        name="technical"
                        value={formData.technical}
                        onChange={handleTextareaChange}
                        placeholder="Evaluate the technical quality of the research..."
                        type="textarea"
                        big
                    />
                    <Input
                        title="Originality"
                        name="originality"
                        value={formData.originality}
                        onChange={handleTextareaChange}
                        placeholder="Assess the novelty and originality of the work..."
                        type="textarea"
                        big
                    />
                    <Input
                        title="Presentation Quality"
                        name="quality"
                        value={formData.quality}
                        onChange={handleTextareaChange}
                        placeholder="Comment on the clarity and organization..."
                        type="textarea"
                        big
                    />
                </div>

                <div className="reviewer__submit-block">
                    <div className="reviewer__submit-title-block">Additional Comments</div>
                    <Input
                        title="Comments to editor"
                        name="commentToAuthor"
                        value={formData.commentToAuthor}
                        onChange={handleTextareaChange}
                        placeholder="Comments to editor"
                        type="textarea"
                        big
                    />
                    <Input
                        title="Confidential Comments to editor"
                        name="commentToEditor"
                        value={formData.commentToEditor}
                        onChange={handleTextareaChange}
                        placeholder="Confidential Comments to editor"
                        type="textarea"
                        big
                    />
                    <div className="input">
                        <div className="input__title">Attachments</div>
                        <FileUpload />
                    </div>
                </div>

                <div className="reviewer__submit-buttons">
                    <Button secondary onClick={handleSaveDraft}>
                        Save Draft
                    </Button>
                    <Button primary type="submit">
                        Submit Review
                    </Button>
                </div>
            </form>
        </div>
    );
}