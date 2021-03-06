# AJAX
Used for async javascript. Make requests to your backend and third party frameworks. It's not a library, framework, or technology. AJAX is an approach to web development.

<br />
Usually to return JSON data. Can send/request data in the background without disturbing the current page. This has lead to the development of Single Page Applications

## Making Requests
- XMLHTTP Request
- Fetch API
- 3rd Party Libraries (jQuery and axios)

## XML & JSON

Represents data formats that can be returned from async requests. JSON is the standard now. APIs should return pure data, devoid of HTML and CSS

XML is like markdown

```
<pin>
  <author>Person</author>
  <likes>10</likes>
</pin>
```

JSON would look like

```
{ 'pin': {
    'author': 'Person',
    'likes': 10
   }
}
```

## Fetch

XHR is older, was built before service workers or streaming. Fetch is the update to XHR. Fetch is not supported in IE.

```
fetch(url)
.then(function(res) {

})
.catch(function(error){

});
```

Can even fetch with options

```
fetch(url, {
  method: 'POST',
  body: JSON.stringify({ name: 'Blah', email: 'blah'})
 }).then(function(res) {
   // Do something
 })
```
