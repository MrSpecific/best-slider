/**
 * Slider function factory
 */
const bestSlider = (args = {}) => {
  let config = {
    thing: "Thing",
  };

  let state = {
    activeSlide: null,
  };


  // Initialize
  const init = () => {
    // Merge passed options with default configuration
    config = { ...config, ...args };

    return state;
  };

  if (!init()) return false;

  return {
    config,
    state,
    init,
  };
};

export default bestSlider;
