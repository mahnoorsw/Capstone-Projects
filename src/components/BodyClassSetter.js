import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function BodyClassSetter() {
    const location = useLocation();

    useEffect(() => {
        // Clear existing body classes
        document.body.className = '';
        if (location.pathname === '/firstpage') {
            document.body.classList.add('firstpage-body');
        } else if (location.pathname === '/secondpage') {
            document.body.classList.add('secondpage-body');
        } else if (location.pathname === '/thirdpage') {
            document.body.classList.add('thirdpage-body');
        } else if (location.pathname === '/tenzies') {
            document.body.classList.add('tenzies-body');
        }
    }, [location]);

    return null;
}
