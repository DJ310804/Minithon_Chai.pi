

import React, { useState } from "react";

const LibraryPage = () => {
    // Dummy data for books with number of copies
    const initialBooks = [
        { title: "Introduction to Algorithms", author: "Thomas H. Cormen", available: true, copies: 3 },
        { title: "Clean Code", author: "Robert C. Martin", available: true, copies: 0 },
        { title: "The Pragmatic Programmer", author: "Andrew Hunt", available: true, copies: 5 },
        { title: "Design Patterns", author: "Erich Gamma", available: true, copies: 2 },
        { title: "You Don’t Know JS", author: "Kyle Simpson", available: true, copies: 1 },
        { title: "Computer Networking", author: "Andrew S. Tanenbaum", available: true, copies: 4 },
        { title: "Operating System Concepts", author: "Abraham Silberschatz", available: true, copies: 3 },
        { title: "Database System Concepts", author: "Silberschatz, Korth, and Sudarshan", available: true, copies: 6 },
        { title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell and Peter Norvig", available: true, copies: 2 },
        { title: "Introduction to the Theory of Computation", author: "Michael Sipser", available: false, copies: 0 },
    ];

    const [books, setBooks] = useState(initialBooks);

    const issueBook = (index) => {
        const updatedBooks = [...books];
        if (updatedBooks[index].available && updatedBooks[index].copies > 0) {
            updatedBooks[index].copies -= 1; // Decrease the number of copies
            if (updatedBooks[index].copies === 0) {
                updatedBooks[index].available = false; // Mark as not available if no copies left
            }
            setBooks(updatedBooks);
        }
    };

    return (
        <div className="font-sans p-4 flex justify-center items-center min-h-screen bg-base">
            <div className="bg-base shadow-lg rounded-lg overflow-hidden w-full max-w-4xl p-6">
                <h1 className="text-base-content text-4xl font-bold text-center mb-8">Library</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Status</th>
                                <th>Copies</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="text-base-content">{book.title}</td>
                                    <td className="text-base-content">{book.author}</td>
                                    <td className={`font-bold ${book.available ? 'text-green-500' : 'text-red-500'}`}>
                                        {book.available ? 'Available' : 'Not Available'}
                                    </td>
                                    <td>{book.copies}</td>
                                    <td>
                                        {book.available && book.copies > 0 ? (
                                            <button 
                                                className="btn btn-primary btn-xs" 
                                                onClick={() => issueBook(index)}
                                            >
                                                Issue
                                            </button>
                                        ) : (
                                            <button className="btn btn-disabled btn-xs">Issued</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Syllabus Link moved below the table */}
                <div className="mt-8 text-center">
                    <a 
                        href="https://library.spit.ac.in/syllabus.html" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 underline"
                    >
                        View Syllabus
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LibraryPage;
