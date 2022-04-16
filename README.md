# Card-Validator
Created by me, the card validator will check if your card number is correct. Program is divided into two sections, first one checking the provider by the requirements inside the code.
If u want add another provider u just need to add him inside the "cardsRequirementsArray" with form:
```
{
"name: "string",
numberLength: [n, n],
startNumbers: [n, n],
}
```
code is very abstract so u dont need to worry about anything more, and rest the code will aplicate your provider.
Second part of code is Luhn algorithm which will calculate if ur number is correct, mode about this algorithm below:
https://en.wikipedia.org/wiki/Luhn_algorithm


### Open Card Validator
u can open Card-Validator.js by ur browser by  creating any .hmtl file add aplicate the reference to js file by adding the line
```
<script src="Card-Validator.js"></script>
```
u will see output in ur browser console.

also i upload this code into Replity platform:
https://replit.com/@LukaszBelka/Card-Validator#index.js
you can check how it works just by press run.


### Open Card Validator Node
Card-Validator-Node.js is created to open in NodeJS on ur terminal. This code is little different, because prompt in Node.js (i used v14.18.3) don't work the same as on replity or your browser.
to open this one u need download repo by:
```
git clone https://github.com/Belkacz/Card-Validator
```
install NodeJS from https://nodejs.org/en/download/package-manager/
i recommend you to use the same version as me v14.18.3
now u can open this by command
```
node Card-Validator-Node.js
```
