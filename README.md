# Parse Drupal Facet API

## About

If you happen to want to query a Drupal facets API (https://www.drupal.org/project/facetapi) endpoint using axios or similar you may find the parameters it requires need some tweaking first

The format expected by Facets API endpoints is this
```
?f[0]=param1:value1&f[1]=param2:value2
```

If you have an object of parameters you want to pass to it that looks like this
```javascript
{
  param1: 'value1',
  param2: 'value2'
}
```
it would need to be converted to this
```javascript
{
  'f[0]': 'param1:value1',
  'f[1]': 'param2:value2'
}
```

That's what this helper does.

## Usage (with axios example)

```javascript
import axios from 'axios';
import parseDrupalFacetApi from 'parse-drupal-facet-api';

let params = {
  param1: 'value1',
  param2: 'value2'
}

axios.get('/api', {
    params: parseDrupalFacetApi.convert(params)
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```