module.exports = (path, obj) =>
    path.reduce((acc, curr) => (acc && acc[curr] ? acc[curr] : undefined), obj);
