/**
 * Slider function factory
 */
const bestSlider = (args = {}) => {
  // Internal Objects
  let config = {
    initialSlide: 1,
    slider: null,
    slides: null,
    previousButton: null,
    nextButton: null,
    wrapAround: false,
  };

  let state = {
    activeSlide: null,
    totalSlides: null,
  };

  let callbacks = [];

  const newIndexIsOutsideOfRange = (newIndex) => {
    const { totalSlides } = state;

    return newIndex < totalSlides || newIndex > totalSlides;
  };

  const getSlideIndex = (changeAmount) => {
    const { activeSlide, totalSlides } = state;
    const { wrapAround } = config;

    let tempIndex = activeSlide + changeAmount;
    let newIndex = activeSlide;

    console.log(tempIndex);

    if (newIndexIsOutsideOfRange(tempIndex) && wrapAround) {
      if (tempIndex < 1) {
        newIndex = totalSlides;
      } else {
        newIndex = 1;
      }
    } else if (!wrapAround) {
      newIndex = tempIndex;
    }

    return newIndex;
  };

  const isElement = (element) => {
    return element instanceof Element || element instanceof HTMLDocument;
  };

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
    updateInitialState();
    doCallbacks();

    return state;
  };

  // Update initial state
  const updateInitialState = () => {
    const { slider, initialSlide } = config;

    if (!slider || !isElement(slider)) return;

    const totalSlides = slider.childElementCount;
    state.totalSlides = totalSlides;
    setSlide();
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
