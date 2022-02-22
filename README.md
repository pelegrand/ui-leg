<p align="center">
  <img src="https://user-images.githubusercontent.com/75608336/155120998-556ffff3-2e01-4836-b00e-c973c0a49396.png" alt="UI-LEG logo"></img>
</p>


## UI-LEG
Simple REACT components library i made to allow me to store my components and reuse it in my REACT projects.
## Installation
```sh
npm install ui_leg_v1
```
## Use

```jsx
import React from 'react';
import { Button } from 'ui-leg';

function App() {
  return (
    <Button size="medium" color="RedButton" />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```