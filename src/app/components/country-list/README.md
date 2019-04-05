### CountryList

Updates current country when it's changed via the selector on the top right.
This information is retrieved from `consts/countryCodes` which holds all available countries. 

Further currency information is mapped to a country based on its price zone,
  as defined in Product API's `getOfferItems` method :
``` js
  return productData
    .filter(i => i.Price_Zone_Country_Limit__c.includes(country))
    .map(mapOldToNew);
```
