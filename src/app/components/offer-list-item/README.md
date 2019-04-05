### OfferListItem

`convertCurrency` method :
- updates the currency symbols and values listed within the product selection :
  ie, € (euro) for France, $ (dollar) for the United States.
- These should mirror the currently selected country and update accordingly.

If a product offer is selected, proceed to checkout :
```js
Router.pushRoute('checkout', {
	offerId: offer.offerItemId,
});
```
