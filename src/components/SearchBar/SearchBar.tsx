import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [inputValue, setInputValue] = useState('');
    // 0.5초(500ms) 딜레이를 가진 디바운스 값
    const debouncedSearchTerm = useDebounce(inputValue, 500);

    // 디바운스된 검색어가 변경될 때만 부모 컴포넌트의 onSearch 함수 실행
    useEffect(() => {
        if (debouncedSearchTerm.trim() !== '') {
            onSearch(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm, onSearch]);

    return (
        <div style={{ margin: '20px 0' }}>
            <input
                type="text"
                placeholder="도시 이름을 영어로 입력하세요 (예: Seoul, Tokyo)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                    padding: '12px',
                    width: '300px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                }}
            />
        </div>
    );
}