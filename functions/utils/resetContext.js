module.exports = function resetContext(
  agent,
  contextName,
  lifespan = 5,
  parameters = {}
) {
  const context = {
    name: contextName,
    lifespan: lifespan,
    parameters: parameters
  };

  agent.context.set(context);
};
