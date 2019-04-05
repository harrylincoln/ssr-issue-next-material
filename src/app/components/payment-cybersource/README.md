### Cybersource

Constructs the payment URL from data contained in the iframe.  
This data holds :
  - payment details (amount, currency)
  - customer details (email, forename, surname, addressLine1, city, country, postalCode)

It redirects to the Cybersource payment gateway in the background, displaying the callback URL as set in the config instead. 

A payment token for payment validation is generated and a `decision` is sent back from Cybersource :
     - `ACCEPT`: payment is successful
     - `ERROR`: something went wrong