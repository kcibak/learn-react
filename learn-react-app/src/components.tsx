import { useState, useRef, useEffect } from 'react'
import './Dropdown.css'; // Import the CSS file for styles

// Reusable AnimatedUnderlineButton component
export function AnimatedUnderlineButton({ children, onClick, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`animated-underline-btn${className ? ' ' + className : ''}`}
            {...props}
            onClick={onClick}
        >
            {children}
            <span className="underline-anim" />
        </button>
    );
}

type DropdownProps = {
    options: string[],
    optionColors?: Record<string, string>
}

export function Dropdown({ options, optionColors }: DropdownProps){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select an animal');
    const timeoutRef = useRef<number | null>(null);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Handle hover for dropdown open/close with delay
    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };
    
    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setIsOpen(false);
        }, 150); // Short delay to allow mouse movement to options
    };
    
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div
            style={{ position: 'relative', width: '200px' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <AnimatedUnderlineButton 
                className={isOpen ? 'active' : ''}
                style={{ width: '100%' }}
            >
                {selectedOption} ▼
            </AnimatedUnderlineButton>
            
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            style={{
                                color: optionColors?.[option] || 'black',
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Home and About buttons using the reusable AnimatedUnderlineButton
export function HomeButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <AnimatedUnderlineButton {...props}>Home</AnimatedUnderlineButton>
    );
}

export function AboutButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <AnimatedUnderlineButton {...props}>About</AnimatedUnderlineButton>
    );
}