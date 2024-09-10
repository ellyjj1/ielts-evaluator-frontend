import React, { useState } from 'react';
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './ChatGPTComponent.css'
import { BaseUrl } from "../consistents";
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";


const ChatGPTComponent = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const apiKey = process.env.CHATGPT_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);// Start loading

        let data = JSON.stringify({
            "content": input,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + "api/chatgpt/", //后端部署链接可以上传啊
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey //存在环境变量里面
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                const formattedResponse = response.data.response.replace(/\n\n/g, '<br /><br />');
                setResponse(formattedResponse);
                setIsLoading(false); // Stop loading when success
                // setResponse(response.data.response);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false); // Stop loading when error
            });

    };

    return (
        <div className="chatgpt-container">
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt="" />
            </div>
            <Navbar />
            <p className='font-sans text-xl'>Let's Evaluate Your Writing:</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="input-textarea"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter Your Wirtig Here"
                />
                <button className="bg-rose-950 text-white px-4 py-2 rounded-md hover:bg-rose-800 disabled:bg-gray-400" type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>

            </form>
            <div className="response-container mt-4" >
                <p className='font-sans text-xl'>Feedback of your writing:</p>

                {isLoading ? (
                    <div className="loading-spinner">Loading...</div> // Loading spinner
                ) : (

                    <ReactQuill
                        value={response}
                        readOnly={true}
                        theme="bubble"
                        className="response-textarea"
                    />
                )}
            </div>
        </div>
    );
};

export default ChatGPTComponent;
