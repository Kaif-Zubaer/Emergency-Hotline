1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 
getElementById
getElementById('id name')
example: document.getElementById('id')
return : single element

getElementsByClassName
getElementsByClassName('class name')
example: document.getElementsByClassName('class')
return : HTMLCollection

querySelector
querySelector('css selector')
example: document.querySelector('body')
example: document.querySelector('.myClass')
example: document.querySelector('#myClass')
return : single element (first element that matches)

querySelectorAll
querySelectorAll('css selector')
example: document.querySelectorAll('body')
example: document.querySelectorAll('.myClass')
example: document.querySelectorAll('#myClass')
return : NodeList

2. How do you create and insert a new element into the DOM?

// create new element and set innerText or innerHTML -->
const newElement = document.createElement('li');
newElement.innerText = '    ';
or newElement.innerHTMl = `  `

// select the parent -->
const parentElement = document.getElementById('parent');

// append the child to the parent -->
parentElement.appendChild(newElement); 

3. What is Event Bubbling and how does it work?

Event Bubbling হলো DOM event-এর একটি প্রক্রিয়া।
Event Bubbling --> যখন একটা child element-এ event ঘটে, সেটা উপরের দিকের parent এলিমেন্টগুলোতেও ধাপে ধাপে পৌঁছে যায়। এটি চলতে থাকে যতক্ষণ না Document Object (HTML)-এ পৌঁছায়।

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation --> এখানে একটি parent element-এ eventListener বসিয়ে তার child element-গুলোর event handle করা যায়। এর করে ফলে child-এ আলাদা আলাদা eventListener দেওয়ার প্রয়োজন হয় না।

এটি Event Bubbling-এর উপর ভিত্তি করে কাজ করে।

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() --> Prevents the default action that would occur for the event.
example:
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from being submitted
    console.log('Form submission prevented!');
});

stopPropagation() --> Prevents the event from continuing to bubble or capture in the DOM.
