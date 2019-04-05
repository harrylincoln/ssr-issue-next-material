## SSR issue - next / material / react-jss

1. Build a production copy and start it on localhost:3000
```
npm run build && npm start
```

2. Inspect elements to find that SSR has not generated jss classNames correctly

3. If you navigate to the next page via the buttons // then return to the first page VIA THE BACK BROWSER BUTTON // inspecting elements on the page will show the client has generated the classnames correctly
