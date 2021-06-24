/**
 * Slider function factory
 */
const bestSlider = (args = {}) => {
  // Internal Objects
  let config = {
    thing: "Thing",
    initialSlide: 1,
  };

  let state = {
    activeSlide: null,
  };

  let callbacks = [];

  // Set the slider to a specific slide
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

  // Add a callback that will be triggered on change
  const addCallback = (newCallback) => {
    callbacks.push(newCallback);
  };

  // Do all callbacks in the queue
  const doCallbacks = () => (callbacks.length && callbacks.forEach((callback) => callback(state)));

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
