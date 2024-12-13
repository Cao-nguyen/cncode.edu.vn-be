import React, { useState } from "react";
import axios from "axios";
import MonacoEditor from "@monaco-editor/react"; // Import Monaco Editor
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [language, setLanguage] = useState("python"); // Ngôn ngữ mặc định

    const runCode = async () => {
        try {
            const response = await axios.post("http://localhost:8080/run", {
                code,
                language, // Gửi ngôn ngữ tới backend
            });
            setOutput(response.data.output);
        } catch (error) {
            setOutput("Error: Unable to connect to backend.");
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center text-primary mb-4">Multi-Language Mini IDE</h1>

            {/* Dropdown chọn ngôn ngữ */}
            <div className="mb-3">
                <label htmlFor="languageSelect" className="form-label">
                    Select Language:
                </label>
                <select
                    id="languageSelect"
                    className="form-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="cpp">C++</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                </select>
            </div>

            {/* Monaco Editor */}
            <div className="mb-3">
                <label htmlFor="codeInput" className="form-label">
                    Write your code:
                </label>
                <MonacoEditor
                    height="400px"
                    language={language}
                    theme="vs-dark"
                    value={code}
                    onChange={(value) => setCode(value)} // Cập nhật code khi thay đổi
                    options={{
                        selectOnLineNumbers: true,
                        automaticLayout: true,
                        suggestOnTriggerCharacters: true, // Bật tính năng gợi ý mã
                    }}
                />
            </div>

            {/* Nút chạy code */}
            <button className="btn btn-primary" onClick={runCode}>
                Run Code
            </button>

            {/* Output */}
            <div className="mt-4">
                <h5>Output:</h5>
                <textarea
                    className="form-control"
                    rows="5"
                    value={output}
                    readOnly
                />
            </div>
        </div>
    );
};

export default App;
