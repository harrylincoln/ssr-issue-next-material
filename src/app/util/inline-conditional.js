export default (condition, truthy, falsy = null) => {
    if (condition) return [truthy];
    if (falsy === null) return [];
    return [falsy];
};
