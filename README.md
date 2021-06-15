# Credit Card Checker

The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

To find out if a credit card number is valid or not, use the Luhn algorithm.

## Explanation of the Luhn Algorithm

- Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
- As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after - doubling, subtract 9 from its value.
- Sum up all the digits in the credit card number.
- If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.


After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers.
