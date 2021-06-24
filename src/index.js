/**
 * Slider function factory
 */
const bestSlider = (args = {}) => {
  let config = {
    thing: "Thing",
    initialSlide: 1,
  };

  let state = {
    activeSlide: null,
  };

  let callbacks = [];

  const setSlide = (slide = config.initialSlide) => {
    state.activeSlide = Math.random();

    doCallbacks();
  };

  // Initialize
  const init = () => {
    // Merge passed options with default configuration
    config = { ...config, ...args };

    doCallbacks();
    return state;
  };

  const addCallback = (newCallback) => {
    callbacks.push(newCallback);
  };

  const doCallbacks = () => {
    if (callbacks.length) {
      callbacks.forEach((callback) => callback(state));
    }
  };

  if (!init()) return false;

  return {
    config,
    state,
    callbacks,
    addCallback,
    init,
    setSlide,
  };
};

export default bestSlider;
