import { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import './Dropdown.css'; // Import the CSS file for styles

// Reusable AnimatedUnderlineButton component with NavLink support
export function AnimatedUnderlineButton({ 
    children, 
    to, 
    onClick, 
    className = '', 
    ...props 
}: React.PropsWithChildren<{ to?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>>) {
    
    if (to) {
        return (
            <NavLink
                to={to}
                className={({ isActive }) => `animated-underline-btn${isActive ? ' active' : ''}${className ? ' ' + className : ''}`}
            >
                {children}
                <span className="underline-anim" />
            </NavLink>
        );
    }
    
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
}

export function Dropdown({ options }: DropdownProps){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
    const timeoutRef = useRef<number | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    // Reset selected animal on Home or About navigation
    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/about') {
            setSelectedAnimal(null);
        }
    }, [location.pathname]);
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
        setIsOpen(false);
        setSelectedAnimal(option);
        // Navigate to the selected option's route
        navigate(`/animals/${option.toLowerCase()}`);
    };    return (
        <div
            className="dropdown-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <AnimatedUnderlineButton 
                className={isOpen ? 'active' : ''}
                style={{ width: '100%', padding: '6px 0', fontSize: '15px' }}
            >
                Animals ▼
            </AnimatedUnderlineButton>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={option === selectedAnimal ? 'selected' : ''}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Home and About buttons using the reusable AnimatedUnderlineButton with NavLink integration
export function HomeButton() {
    return (
        <AnimatedUnderlineButton to="/">Home</AnimatedUnderlineButton>
    );
}

export function AboutButton() {
    return (
        <AnimatedUnderlineButton to="/about">About</AnimatedUnderlineButton>
    );
}