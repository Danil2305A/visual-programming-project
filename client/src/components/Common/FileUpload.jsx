import { useState } from 'react';

export default function FileUpload({ setFile }) {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
        setFile(e.target.files[0])
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setFiles([...e.dataTransfer.files]);
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]);
    };

    return (
        <div className="input__files-wrapper">
            <label
                htmlFor="fileInput"
                className="input__files"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
                <input
                    id="fileInput"
                    type="file"
                    className="input__invisible"
                    onChange={handleFileChange}
                    accept=".pdf,.docx"
                    multiple
                />
                <img src="/images/iconUpload.svg" className="input__files-image" alt="" />
                <span className="input__files-text">
          Drag and drop your PDF or DOCX file here or click to upload
        </span>
                <span className="input__files-button">
          <span className="button button_primary">Browse File</span>
        </span>
            </label>
            <div className="input__files-selected">
                {files.map((file, index) => (
                    <div key={index} className="file-item">
                        <span className="file-name">{file.name}</span>
                        <span className="file-size">{formatFileSize(file.size)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}