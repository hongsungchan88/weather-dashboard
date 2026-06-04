import { useState, useEffect } from 'react';

export default function useDebounce(value: string, delay: number = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // delay 시간 후에 value를 업데이트하는 타이머 설정
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // useEffect가 다시 실행되거나 컴포넌트가 언마운트될 때 이전 타이머 취소
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}