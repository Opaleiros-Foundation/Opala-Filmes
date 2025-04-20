import './styles.css';

export const Alert = ({alertMessage, isSuccess}) => {
    return (
        <div className="alert-wrapper">
            <div className={`alert-container ${isSuccess ? 'alert-success' : 'alert-error'}`} role="alert">
                <div className="alert-content">
                    {isSuccess ? (
                        <svg className="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"/>
                        </svg>
                    ) : (
                        <svg className="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
                        </svg>
                    )}
                    <span className="alert-text">{alertMessage}</span>
                </div>
            </div>
        </div>
    );
};