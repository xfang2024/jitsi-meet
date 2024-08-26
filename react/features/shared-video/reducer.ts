import ReducerRegistry from '../base/redux/ReducerRegistry';

import {
    RESET_SHARED_VIDEO_STATUS,
    SET_ALLOWED_URL_DOMAINS,
    SET_DISABLE_BUTTON,
    SET_SHARED_VIDEO_STATUS
} from './actionTypes';
import { DEFAULT_ALLOWED_URL_DOMAINS } from './constants';

const initialState = {
    allowedUrlDomains: DEFAULT_ALLOWED_URL_DOMAINS
};

export interface ISharedVideoState {
    allowedUrlDomains: Array<string>;
    disabled?: boolean;
    muted?: boolean;
    ownerId?: string;
    status?: string;
    time?: number;
    videoUrl?: string;
    volume?: number;
}

/**
 * Reduces the Redux actions of the feature features/shared-video.
 */
ReducerRegistry.register<ISharedVideoState>('features/shared-video',
(state = initialState, action): ISharedVideoState => {
    const { videoUrl, status, time, ownerId, disabled, muted, volume } = action;

    switch (action.type) {
    case RESET_SHARED_VIDEO_STATUS:
        return {
            ...initialState,
            allowedUrlDomains: state.allowedUrlDomains
        };
    case SET_SHARED_VIDEO_STATUS:
        return {
            ...state,
            muted,
            ownerId,
            status,
            time,
            videoUrl,
            volume
        };

    case SET_DISABLE_BUTTON:
        return {
            ...state,
            disabled
        };

    case SET_ALLOWED_URL_DOMAINS: {
        return {
            ...state,
            allowedUrlDomains: action.allowedUrlDomains
        };
    }

    default:
        return state;
    }
});
