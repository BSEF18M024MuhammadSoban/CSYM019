## Week 5 Exercises

### Exercise 6
1. Change the load event so that the button starts with an opacity of 1 (completely visible).
	_Hint: you will need to set the initial value when the page loads or it won’t work._
2. Change the click event so that when the button is clicked, it starts a timer using setInterval with an interval of 1 second
3. Each time the timer is called, reduce the opacity of the button by 0.1 (It should take 10 seconds for the button to disappear completely)
	_Hint: The timer function will contain the exact same code as you used in the click event in Exercise 5, you get the timer to call the function!_
4. Adjust the timer from every second (1000) to every hundredth of a second (10)
5. Adjust the timer function so that it only removes 0.01 from the opacity each time. This will add more 'steps' to the transition and the animation will look smoother
