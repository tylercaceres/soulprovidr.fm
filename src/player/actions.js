import { getQualifiedStreamUrl } from '@/soundcloud';

export function play(streamUrl) {
  if (streamUrl.includes('soundcloud')) {
    streamUrl = getQualifiedStreamUrl(streamUrl);
  }
  return { type: 'PLAY', payload: { streamUrl } };
}

export function pause() {
  return { type: 'PAUSE' };
}

export function updateProgress(progress) {
  return { type: 'UPDATE_PROGRESS', payload: { progress } };
}

export function updateStatus(status) {
  return { type: 'UPDATE_STATUS', payload: { status } };
}