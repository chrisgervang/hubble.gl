/* eslint-disable no-void */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cameraKeyframes: undefined, // keyframe object
  filterKeyframes: undefined, // keyframe object
  tripLayerKeyframes: undefined, // keyframe object
  layerKeyframes: {}, // name: keyframe object
  frame: {}
};

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    updateCameraKeyframes: (state, action) => void (state.cameraKeyframes = action.payload),
    updateFilterKeyframes: (state, action) => void (state.filterKeyframes = action.payload),
    updateTripLayerKeyframes: (state, action) => void (state.tripLayerKeyframes = action.payload),
    updateLayerKeyframes: (state, action) =>
      void (state.layerKeyframes = {...state.layerKeyframes, ...action.payload}),
    updateFrame: (state, action) => void (state.frame = action.payload)
  }
});

export const {
  updateCameraKeyframes,
  updateFilterKeyframes,
  updateLayerKeyframes,
  updateTripLayerKeyframes,
  updateFrame
} = timelineSlice.actions;

export default timelineSlice.reducer;

/**
 * Selectors
 */

export const cameraKeyframeSelector = state => state.hubbleGl.timeline.cameraKeyframes;
export const filterKeyframeSelector = state => state.hubbleGl.timeline.filterKeyframes;
export const tripLayerKeyframeSelector = state => state.hubbleGl.timeline.tripLayerKeyframes;
export const layerKeyframeSelector = state => state.hubbleGl.timeline.layerKeyframes;
export const frameSelector = state => state.hubbleGl.timeline.frame;
