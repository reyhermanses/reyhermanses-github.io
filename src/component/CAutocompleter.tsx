// src/components/Autocompleter.tsx
import React, { useEffect, useRef, useState } from 'react';

export interface AutocompleterProps {
    suggestions: string[];
    backgroundColor?: boolean;
    multipleSelection?: boolean;
}

const CAutocompleter: React.FC<AutocompleterProps> = ({ suggestions, backgroundColor, multipleSelection }) => {
    const [query, setQuery] = useState('');
    const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [onSearch, setOnSearch] = useState(false);
    const node = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (node.current && !node.current.contains(e.target as Node)) {
                setShowSuggestions(false);
                setOnSearch(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const toggleSelection = (suggestion: string) => {
        if (selectedSuggestions.includes(suggestion)) {
            setSelectedSuggestions(selectedSuggestions.filter((item) => item !== suggestion));
        } else {
            setSelectedSuggestions([...selectedSuggestions, suggestion]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setQuery(suggestions[activeSuggestionIndex]);
            setShowSuggestions(false);
            e.preventDefault(); // Prevent form submission on Enter key
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveSuggestionIndex(prevIndex =>
                prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
            );
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveSuggestionIndex(prevIndex =>
                prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
            );
        }
    };

    const fnOnSearch = () => {
        setOnSearch(!onSearch);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleDelete = (suggestion: string) => {
        setSelectedSuggestions(selectedSuggestions.filter((item) => item !== suggestion));
    };

    const handleItemClick = (index: number) => {
        setQuery(suggestions[index]);
        setShowSuggestions(false);
        toggleSelection(suggestions[index]);
    };

    const highlightText = (text: string) => {
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? <strong key={index}>{part}</strong> : part
        );
    };

    return (
        <div ref={node} className="flex items-center w-full">
            <label className="block text-sm font-medium text-gray-700 mr-4 w-1/4">Label</label>
            <div className="relative w-3/4">
                <div onClick={fnOnSearch} style={{ backgroundColor: backgroundColor ? '#5c4033' : '#fff'}} className="border border-gray-300 rounded-md p-2 flex items-center justify-between">
                    <div className="cursor-pointer flex items-center">
                        {selectedSuggestions.map((suggestion) => (
                            <div key={suggestion} className="inline-flex items-center bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                                {suggestion}
                                <svg onClick={() => handleDelete(suggestion)} className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                        ))}
                    </div>
                    {onSearch && (<span className="cursor-pointer flex items-center">
                        <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </span>)}
                    {!onSearch && (
                        <span className="cursor-pointer flex items-center">
                            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                            </svg>
                        </span>)}
                </div>
                {onSearch && (
                    <div>
                        <br />
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type="text"
                                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                value={query}
                                placeholder="Search..."
                            />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.99-4.99m-.02-4.99a7.5 7.5 0 11-13.47-4.76 7.5 7.5 0 018.91 8.91 7.5 7.5 0 014.75 13.47zM15 15l6 6" />
                                </svg>
                            </span>
                        </div>
                        <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={suggestion}
                                    className={"px-4 py-2 cursor-pointer"}
                                    onClick={() => handleItemClick(index)}
                                >
                                    {highlightText(suggestion)}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CAutocompleter;
