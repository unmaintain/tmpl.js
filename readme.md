# tmpl.js

The easiest string templating

## Features

- Easy data replacement in the string
- No dependency
- Compatible with all browsers
- Nanoweight helper

## Use

Use keys in double brackets to replace your data

### Simple example
```js
'These {{something}} are so {{adjective}}!'.tmpl({
    something: 'diamonds',
    adjective: 'shiny'
});

// These diamonds are so shiny!
```

### With fetch
```js
// define a project template here
const projectTmpl = '...'

// fetch a project data
const data = await (await fetch('path/to/data.json')).json()

// apply a project data to the template
const project = projectTmpl.tmpl(data);

// and append it
const projects = document.getElementById('projects')
projects.append(project)
```

## License

Released under the MIT license
