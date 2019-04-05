const nextRoutes = require('next-routes')();

nextRoutes.add('builder', '/builder/:type');
nextRoutes.add('checkout', '/checkout/:offerId');
nextRoutes.add('activate', '/activate/:orderId');
nextRoutes.add('confirm', '/confirm/:orderId');
nextRoutes.add('design', '/design');

module.exports = nextRoutes;
