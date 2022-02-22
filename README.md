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
## Available components

* **Button**

  > Properties:
    - **size :**
      - **description :** *size of the button* 
      - **type :** *string* 
      - **default :** *large*
      - **available values :** *small, medium, large*
    - **color :**
      - **description :** *color of the button* 
      - **type :** *string* 
      - **default :** *"blue"*
      - **available values :** *blue, red, green*
    - **text :**
      - **description :** *text of the button* 
      - **type :** *string* 
      - **default :** *-*
    - **buttonStyle :**
      - **description :** *style of the button* 
      - **type :** *string* 
      - **default :** *-*
      - **available values :** *basic*
    
* **Login form**
  
    > Properties:
    - **title :**
      - **description :** *title of the form* 
      - **type :** *string* 
      - **default :** *-*
    - **subtitle :**
      - **description :** *subtitle of the form* 
      - **type :** *string* 
      - **default :** *-*
    - **buttonColor :**
      - **description :** *color of the submit button* 
      - **type :** *string* 
      - **default :** *"blue"*
      - **available values :** *blue, red, green*
    - **buttonText :**
      - **description :** *text of the submit button* 
      - **type :** *string* 
      - **default :** *"Log In"*
    - **placeHolderOne :**
      - **description :** *placeholder of the first input* 
      - **type :** *string* 
      - **default :** *"username"*
    - **placeHolderTwo :** 
      - **description :** *placeholder of the second input* 
      - **type :** *string* 
      - **default :** *"password"*
 
