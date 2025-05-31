import React from 'react';

export default function ImageModal({ isOpen, image, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="relative w-full max-w-4xl">
                <img
                    src={image}
                    alt="Agrandissement"
                    className="w-full h-auto max-h-[90vh] object-contain"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
}
