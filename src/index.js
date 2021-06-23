const config = {
  thing: "Thing",
};

const init = () => {
  console.log('TESting');
}

/**
 * Function factory
 */
 const bestSlider = () => ({
  config,
  init,
});

export default bestSlider;
