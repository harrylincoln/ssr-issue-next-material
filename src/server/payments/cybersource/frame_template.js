const serialize = require('serialize-javascript');

/*
 Note: `serialize` for strings returns value in quotes (eg. serialize('test') === '"test"')
 We do not include double quotes in value attributes of hidden inputs for serialised data
*/

module.exports = (data) => `<html>
<head>
    <title>Secure Acceptance - Payment Form</title>
</head>
<body>

<form id="payment_form" action="${data.paymentEmbeddedURL}" method="post">
    <input type="hidden" name="access_key" value="${data.access_key}">
    <input type="hidden" name="profile_id" value="${data.profile_id}">
    <input type="hidden" name="transaction_uuid" value="${
        data.transaction_uuid
    }">
    <input type="hidden" name="signed_field_names" value="${
        data.signed_field_names
    }">
    <input type="hidden" name="signed_date_time" value="${
        data.signed_date_time
    }">
    <input type="hidden" name="locale" value="${data.locale}">
    <input type="hidden" name="unsigned_field_names" value="${
        data.unsigned_field_names
    }">

    <input type="hidden" name="signature" value="${data.signature}">
    <input type="hidden" name="bill_to_forename" value=${serialize(
        data.bill_to_forename
    )}>
    <input type="hidden" name="bill_to_surname" value=${serialize(
        data.bill_to_surname
    )}>
    <input type="hidden" name="bill_to_email" value=${serialize(
        data.bill_to_email
    )}>
    <input type="hidden" name="bill_to_address_line1" value=${serialize(
        data.bill_to_address_line1
    )}>
    <input type="hidden" name="bill_to_address_city" value=${serialize(
        data.bill_to_address_city
    )}>
    <input type="hidden" name="bill_to_address_country" value=${serialize(
        data.bill_to_address_country
    )}>
    <input type="hidden" name="bill_to_address_state" value="">
    <input type="hidden" name="bill_to_address_postal_code" value=${serialize(
        data.bill_to_address_postal_code
    )}>

    <input type="hidden" name="transaction_type" value="${
        data.transaction_type
    }">
    <input type="hidden" name="reference_number" value="${
        data.reference_number
    }">
    <input type="hidden" name="amount" value=${serialize(data.amount)}>
    <input type="hidden" name="currency" value=${serialize(data.currency)}>
</form>


<script>
    document.getElementById('payment_form').submit();
</script>

</body>
</html>
`;
