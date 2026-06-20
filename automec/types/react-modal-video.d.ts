declare module 'react-modal-video' {
    import * as React from 'react';

    export interface ModalVideoProps {
        channel: string;
        isOpen: boolean;
        videoId: string;
        onClose: () => void;
        autoplay?: boolean;
        ratio?: string;
        allowFullScreen?: boolean;
    }

    const ModalVideo: React.FC<ModalVideoProps>;

    export default ModalVideo;
}