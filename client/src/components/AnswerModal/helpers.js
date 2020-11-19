export const handleChange = function(event, setter) {
  const { name, value } = event.target;
  setter(prev => {
    let newAnswer = Object.assign({}, prev);
    newAnswer[name] = value;
    return newAnswer;
  });
};