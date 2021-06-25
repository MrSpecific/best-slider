/**
 * Slider function factory
 */
const bestSlider = (args = {}) => {
  // Internal Objects
  let config = {
    initialSlide: 1,
    totalSlides: null,
    slider: null,
    slides: null,
    previousButton: null,
    nextButton: null,
  };

  let state = {
    activeSlide: null,
    previousSlide: null,
  };

  let callbacks = [];

  //
  const getSlideIndex = (changeAmount) => {};

  // Set the slider to a specific slide
  const setSlide = (slide = config.initialSlide) => {
    state.activeSlide = slide;

    doCallbacks();
  };

  const previous = () => {
    setSlide(getSlideIndex(-1));
  };

  const next = () => {
    setSlide(getSlideIndex(1));
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
  const doCallbacks = () =>
    callbacks.length && callbacks.forEach((callback) => callback(state));

  if (!init()) return false;

  return {
    config,
    state,
    callbacks,
    addCallback,
    init,
    setSlide,
    previous,
    next,
  };
};

export default bestSlider;
