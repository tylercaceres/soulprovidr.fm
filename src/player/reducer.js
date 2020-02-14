import { PLAYER_STATUS } from './constants';
import PlayerItem from './models/PlayerItem';

const initialState = {
  progress: 0,
  playableItem: new PlayerItem({}),
  status: PLAYER_STATUS.UNSTARTED,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'PLAY': {
      const { duration, seekProgress, streamUrl } = payload;
      return {
        ...state,
        duration,
        progress: seekProgress,
        status: PLAYER_STATUS.BUFFERING,
        streamUrl
      };
    }
    case 'STOP':
      return {
        ...state,
        progress: 0,
        status: PLAYER_STATUS.UNSTARTED,
        streamUrl: null
      };
    case 'UPDATE_PROGRESS':
      const { progress } = payload;
      return { ...state, progress };
    case 'UPDATE_STATUS':
      const { status } = payload;
      return { ...state, status };
    default:
      return state;
  }
}