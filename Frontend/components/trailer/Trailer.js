import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import './Trailer.css';


const Trailer = () => {

     const params = useParams();
    const key = params.ytTrailerId;

    // Use the official YouTube EMBED URL format for better compatibility
    const embedUrl = `https://www.youtube.com/embed/${key}?autoplay=1&controls=1`;

    return (
        // The container already has the class "react-player-container"
        <div className="react-player-container">
            {key ? (
                // Use a standard responsive iframe to embed the YouTube video
                // We use the new class "video-wrapper" for responsiveness (to be added to Trailer.css)
                <div className="video-wrapper"> 
                    <iframe
                        title="Movie Trailer"
                        src={embedUrl}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        // Removed style={styles.iframeStyle}
                        className="trailer-iframe" // New class for iframe styling (to be added to Trailer.css)
                    ></iframe>
                </div>
            ) : (
                <div className="trailer-missing-message">Trailer key is missing.</div>
            )}
        </div>
    );
}

export default Trailer
