import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const EditableContentArea: React.FC = () => {
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleMouseUp = () => {
        const selection = window.getSelection();
        const selectedText = selection?.toString();

        if (selectedText) {
            const range = selection?.getRangeAt(0);
            if (range && contentRef.current?.contains(range.commonAncestorContainer)) {
                // Apply strikethrough by wrapping selected text in a <span>
                const span = document.createElement('span');
                span.style.textDecoration = 'line-through';
                span.textContent = selectedText;

                range.deleteContents();
                range.insertNode(span);
                selection?.removeAllRanges();
            }
        }
    };

    const handleInput = () => {
        if (!contentRef.current) return; // Ensure contentRef.current is not null
        const content = contentRef.current.textContent?.trim();
        if (content) {
            setIsPlaceholderVisible(false);
        } else {
            setIsPlaceholderVisible(true);
        }

        const selection = window.getSelection();
        if (!selection) return;

        const range = selection.getRangeAt(0);
        const parentElement = range.startContainer.parentElement;

        // Ensure new text is added outside the strikethrough <span>
        if (parentElement?.tagName === 'SPAN' && parentElement.style.textDecoration === 'line-through') {
            const newText = range.startContainer.textContent || '';
            const textNode = document.createTextNode(newText);

            parentElement.after(textNode); // Insert the new text node after the <span>
            range.startContainer.textContent = ''; // Clear the <span> content
            selection.collapse(textNode, 1); // Move the cursor to the new text node
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);

        // Prevent deleting existing text
        if (e.key === 'Backspace' || e.key === 'Delete') {
            if (range?.startContainer.nodeType === Node.TEXT_NODE) {
                const parentElement = range.startContainer.parentElement;
                if (parentElement === contentRef.current || parentElement?.tagName === 'SPAN') {
                    e.preventDefault(); // Disable delete/backspace for content
                }
            }
        }
    };

    const handleFocus = () => {
        if (isPlaceholderVisible && contentRef.current) {
            contentRef.current.textContent = ''; // Clear placeholder on focus
        }
    };

    const handleBlur = () => {
        if (!contentRef.current?.textContent?.trim()) {
            setIsPlaceholderVisible(true); // Show placeholder if no text is entered
            if (contentRef.current) {
                contentRef.current.textContent = '여기에 내용을 입력하세요...';
            }
        }
    };

    return (
        <ContentArea
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            onMouseUp={handleMouseUp}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            {isPlaceholderVisible ? '여기에 내용을 입력하세요...' : ''}
        </ContentArea>
    );
};

export default EditableContentArea;

const ContentArea = styled.div`
    flex: 1;
    border: 1px dashed #ccc;
    padding: 1rem;
    outline: none;
    overflow-y: auto;
    background-color: transparent; /* 배경 투명 */
    color: #000;
    user-select: text; /* Allow text selection for strikethrough */
    cursor: text;
    white-space: pre-wrap;
    word-wrap: break-word;
`;
