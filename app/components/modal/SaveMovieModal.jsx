import { Dialog } from "@headlessui/react";
import { SaveMovieForm } from "@/app/components/form/SaveMovieForm";
import './styles.css';

export const SaveMovieModal = ({ isOpen, onClose, onSubmit }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="modal-overlay">
            <div className="modal-container">
                <Dialog.Panel className="modal-panel">
                    <button 
                        className="modal-close-button"
                        onClick={onClose}
                    >
                        ×
                    </button>
                    <Dialog.Title className="modal-title">
                        Adicionar Novo Filme
                    </Dialog.Title>
                    <SaveMovieForm onSubmit={(data) => {
                        onSubmit(data);
                        onClose();
                    }} />
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};