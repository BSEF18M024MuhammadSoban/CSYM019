## Week 5 Exercises

### Exercise 5
1. Change the code for the click event to this 
		```javascript
		var element = document.getElementById('circle');
		var circleOpacity = parseFloat(element.style.opacity);
		element.style.opacity = circleOpacity + 0.1;
		```
	Each time you click on the circle it should get slightly less transparent until it becomes completely opaque
2. Change the code so that clicking on the circle makes it become more and more transparent. If you click enough times it should become invisible.
