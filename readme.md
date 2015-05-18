# tmpl.js

The easiest string templating.

## Features

- Easy data replacement in the string.
- No dependency on jQuery.
- Compatible with all browsers.
- Nanoweight helper.

## Use

Use keys in double brackets to replace your data.

### Simple example
```javascript
'These {{something}} are so {{adjective}}!'.tmpl({
    something: 'diamonds',
    adjective: 'shiny'
});

// These diamonds are so shiny!
```

### With jQuery.ajax
```javascript

var myTmpl = '...'; // Some template

$.ajax({
    url: 'path/to/data.json',
    success: function (data) {
        var tmpl = myTmpl.tmpl(data);
        $('#portfolio').append(tmpl);
    },
    error: function (data) {
        // Error
    }
})
```

## License

Released under the MIT license.
