const serialize = require('serialize-javascript');

module.exports = (data) => `<html>
<head>
<title>Secure Acceptance - Payment Confirmation</title>
</head>
<body>

<script>
window.parent.postMessage({type: 'PAYMENT_CONFIRMATION', data: ${serialize(
    data.response,
    { isJSON: true }
)} });
</script>

</body>
</html>
`;
