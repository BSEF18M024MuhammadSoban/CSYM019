## Week 5 Exercises

### Exercise 9
1. Add the if statement so that the button moves left when the left arrow key is pressed
2. Add an if statement and relevant code to allow the up arrow to move the button up 10px, the down arrow to move the button down 10px and the right arrow to move the button right 10px
	_Hint: You can get the keyCodes for each key in the same way you did for the left arrow using the code from exercise 8 and printing the number in the console_
	_Hint: One if statement can directly follow another_
3. Instead of moving the button 10px, use an interval when the relevant key is pressed and have the button slide off the screen in the direction of the arrow pressed
	* Pressing up should start a timeout that moves the button upwards 1px at a time
	* The animation should look smooth
	_Note: Do not use a loop for this, use a timeout!_
	_Hint: Each arrow should trigger a different timer and each timer will need its own function, you’ll end up with at least 5 functions! One for the keyPress event and one for each fo the four direction timers
