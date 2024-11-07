import React from 'react';
import TinyMCEEditor from '../TinyMCEEditor/TinyMCE.js'
import { useState } from "react";

const Home = (props) => {
    const style = {
        fontWeight: 'bold'
    }

    const [editorValue, setEditorValue] = useState('');

    const handleEditorChange = (content) => {
        setEditorValue(content);
    };

    return (
        <div className="container">
            <div className="mt-3 fs-1 text-center text-primary" style={style}>
                LÝ CAO NGUYÊN
            </div>
            <h3 className="text-center">Xin chào các bạn mình là Lý Cao Nguyên</h3>
            <div className="container-login">
                <TinyMCEEditor value={editorValue} onChange={handleEditorChange} />
            </div>
        </div >
    );
}

export default Home;