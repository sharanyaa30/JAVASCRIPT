# projects related to DOM

## Project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jhnjqc8r?file=index.html)

# Solution code

## Project 1


``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});


```
## Project 2 
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if ('bmi' <= 18.6) results.innerHTML = ` Under weight ${bmi}`;
    else if (18.6 < 'bmi' <= 24.9) results.innerHTML = `Normal range ${bmi}`;
    else results.innerHTML = `over weight ${bmi}`;
    // results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## project 3

```javascript
const clock = document.getElementById('clock');
// const clock =  document.querySelector('clock')

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```