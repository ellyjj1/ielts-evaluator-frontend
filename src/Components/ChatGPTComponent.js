import React, {useState} from 'react';
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './ChatGPTComponent.css'
import {BaseUrl} from "../consistents";

const ChatGPTComponent = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const apiKey = process.env.CHATGPT_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = JSON.stringify({
            "content": input,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + "api/chatgpt/", //后端部署链接可以上传啊
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + apiKey //存在环境变量里面
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                const formattedResponse = response.data.response.replace(/\n\n/g, '<br /><br />');
                setResponse(formattedResponse);
                // setResponse(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <div className="chatgpt-container">
            <h1>Magic 7+</h1>
            <p>Let's Evaluate Your Writing:</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="input-textarea"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter Your Wirtig Here"
                />
                <button className="submit-button" type="submit">Submit</button>
            </form>
            <div className="response-container">
                <h3>Feedback of your writing:</h3>
                <ReactQuill
                    value={response}
                    readOnly={true}
                    theme="bubble"
                    className="response-textarea"
                />
            </div>
        </div>
);
};

export default ChatGPTComponent;
