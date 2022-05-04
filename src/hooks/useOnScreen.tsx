import React, { useState, useEffect, useRef } from 'react';

export default function useOnScreen(target:React.MutableRefObject<HTMLDivElement | null>) {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [isOnScreen, setIsOnScreen] = useState(false);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(([entry]) =>
        setIsOnScreen(entry.isIntersecting)
        );
    }, []);

    useEffect(() => {
        if (!target.current) {
            return
        }
        observerRef.current?.observe(target.current);

        return () => {
        observerRef.current?.disconnect();
        };
    }, [target]);

    return isOnScreen;
}
