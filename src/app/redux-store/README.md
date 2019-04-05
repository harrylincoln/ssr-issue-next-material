### List of reducers

###### Products
  - information about available product offers from Product API

   Action Types :
   `SELECT_COUNTRY`
   `SELECT_PRODUCT_TYPE`
   `SELECT_OFFER_TYPE`

(Includes reducer handler tests as well)

---
###### Order
  - payment authorization / validation 
  - submitting and confirming the actual order through Order API

  Action Types :
  `SHOW_PAYMENT_FORM`
  `SET_PAYMENT_ERROR`
  `SET_PAYMENT_AUTHORIZED`

---
###### Config
  - local / staging environment configuration

###### Form
  - Main order form details