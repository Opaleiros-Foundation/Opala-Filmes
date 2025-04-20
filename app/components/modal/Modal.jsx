'use client'

import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import './styles.css'

export function Modal({isOpen, onClose, onSelectValue, images}) {
    const [hoveredRating, setHoveredRating] = useState(null);

    const getRatingMessage = (value) => {
        switch(value) {
            case 1: return "Péssimo! 😫";
            case 2: return "Fraco... 😕";
            case 3: return "Regular 😐";
            case 4: return "Muito Bom! 😊";
            case 5: return "Obra-prima! 🤩";
            default: return "";
        }
    };

    const getRatingClass = (value) => {
        switch(value) {
            case 1: return "rating-terrible";
            case 2: return "rating-bad";
            case 3: return "rating-okay";
            case 4: return "rating-good";
            case 5: return "rating-excellent";
            default: return "";
        }
    };

    return (
        <Dialog 
            open={isOpen} 
            onClose={onClose} 
            className="modal-overlay"
        >
            <div className="modal-container">
                <Dialog.Panel className="modal-panel">
                    <button 
                        onClick={onClose}
                        className="modal-close-button"
                    >
                        ×
                    </button>
                    
                    <Dialog.Title className="modal-title">
                        Avalie o Filme
                    </Dialog.Title>

                    {hoveredRating && (
                        <div className={`rating-message ${getRatingClass(hoveredRating)}`}>
                            {getRatingMessage(hoveredRating)}
                        </div>
                    )}

                    <div className="modal-rating-grid">
                        {images.map(image => (
                            <button
                                key={image.id}
                                className={`rating-button ${getRatingClass(image.value)}`}
                                onClick={() => onSelectValue(image.value)}
                                onMouseEnter={() => setHoveredRating(image.value)}
                                onMouseLeave={() => setHoveredRating(null)}
                            >
                                <div className="rating-effects-container">
                                    <div className="rating-glow"></div>
                                    <div className="rating-particles"></div>
                                    <img
                                        src={image.src}
                                        alt={`Nota ${image.value}`}
                                        className="rating-image"
                                    />
                                </div>
                                <span className="rating-value">{image.value}</span>
                            </button>
                        ))}
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}