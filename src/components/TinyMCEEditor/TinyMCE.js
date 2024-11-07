// TinyMCEEditor.js
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'prismjs/themes/prism-tomorrow.css'; // Import CSS cho Prism.js

const TinyMCEEditor = ({ value, onChange }) => {
    const [editorContent, setEditorContent] = useState(value || '');

    const handleEditorChange = (content) => {
        setEditorContent(content);
        onChange(content);
    };

    return (
        <div className="tinymce-editor-container">
            <Editor
                apiKey='o6ofaxdljkxy2c1etf2syu7hwrvb16oe5h07h4tvo0gg1gvh' // API key của bạn
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'codesample', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar:
                        'undo redo | bold italic underline | link image table | codesample blockquote | alignleft aligncenter alignright alignjustify',
                    toolbar_mode: 'floating',
                    content_style: 'body { font-size: 16px; }',
                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    file_picker_callback: (callback, value, meta) => {
                        if (meta.filetype === 'image') {
                            const input = document.createElement('input');
                            input.setAttribute('type', 'file');
                            input.setAttribute('accept', 'image/*');
                            input.onchange = function () {
                                const file = this.files[0];
                                const reader = new FileReader();
                                reader.onload = function () {
                                    callback(reader.result, { alt: file.name });
                                };
                                reader.readAsDataURL(file);
                            };
                            input.click();
                        }
                    },
                }}
                value={editorContent}
                onEditorChange={handleEditorChange}
            />
        </div>
    );
};

export default TinyMCEEditor;
