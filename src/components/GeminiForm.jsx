



import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
// import './GeminiForm.css'; // Import your CSS file

const API_KEY = "AIzaSyBPj4-7gs-PNPqoMTF51JBWH3GTzYOTuUg";
const genAI = new GoogleGenerativeAI(API_KEY);

const collegeInfo = `
  Sardar Patel Institute of Technology is located on a 47-acre campus in Andheri (W), Mumbai, housing four esteemed Bhavan’s Institutions. Founded in 1957, it officially opened as Sardar Patel College of Engineering on August 19, 1962, and later became Bharatiya Vidya Bhavan’s Sardar Patel Institute of Technology in 2005. The institute offers undergraduate courses in Computer, Electronics, Information Technology, Mechanical, and Civil Engineering. Postgraduate programs include Master of Engineering in Digital Electronics and Computer Science, along with diploma courses in various engineering streams. The college has a strong placement cell, achieving over 90% placements with average packages ranging from ₹6 to ₹10 LPA, with top recruiters like Google and Microsoft. Eligibility for undergraduate admission requires completion of 12th grade with at least 50% marks in relevant subjects, primarily based on JEE Main scores and Maharashtra CET. The campus provides state-of-the-art labs, libraries, sports facilities, hostels, and recreational areas for students. Internships are encouraged and often mandatory for certain courses to enhance practical experience. The placement cell offers workshops, mock interviews, and career counseling to support students in securing jobs. Students are encouraged to participate in various extracurricular activities including clubs and cultural events. The college maintains a student-to-faculty ratio of approximately 15:1 to ensure personalized attention. Several scholarships are available based on merit and financial need for eligible students.
`;

function isValidResponse(response) {
    return response && response.trim() !== "" && !response.toLowerCase().includes("sorry");
}

async function runGemini(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const fullPrompt = `${collegeInfo}\n\nUser Question: ${prompt}\n\nAnswer:`;

    try {
        const result = await model.generateContent(fullPrompt);
        const responseText = result.response.text().trim();
        return isValidResponse(responseText) ? responseText : "sorry";
    } catch (error) {
        console.error('Error with Gemini API:', error);
        throw error;
    }
}

const GeminiForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const geminiResponse = await runGemini(inputValue);

            // Extract the first sentence from the Gemini response
            const firstSentence = geminiResponse.split('.')[0] + '.';

            setResponse(firstSentence);
        } catch (error) {
            setResponse("Error processing your request. Please try again.");
        }
        setInputValue('');
    };

    return (
        <div className="container">
            <form id="simpleForm" onSubmit={handleSubmit} className="flex flex-col">
    <input
        type="text"
        id="inputField"
        placeholder="Enter some text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
        className="mb-2" // Adds margin below the input
    />
    
    {/* <button 
    type="submit" 
    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-auto" // Changed to 'w-auto'
>
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Submit
    </span>
</button> */}
<button type='submit' className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded">submit</button>

</form>
<div id="responseContainer">
                <p>Response: {response}</p>
            </div>
        </div>
    );
};

export default GeminiForm;
