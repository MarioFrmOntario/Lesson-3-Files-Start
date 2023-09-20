
var output = document.querySelector('body p:nth-of-type(2)');
			console.log(output);



/* STEP 1: Creating an array
			When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
			let myArray=['string', 18, true, [1,3,5]];
            output.textContent=myArray;

		
			/* STEP 2: Reading and changing array elements
			You can refer to a particular element in an array with it's index number */

            output.textContent=myArray[3][2];

			// You can also change a particular element
            myArray[2]=false;
            output.textContent=myArray;

			// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it

			/* STEP 3: Determining array length
			Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */

            output.textContent=myArray.length;
			// In particular, looping through arrays
            for(var i=0;i<myArray.length;i++)
            {
                console.log(myArray[i]);
                output.textContent+=',' + myArray[i];
            }
            


			/* STEP 4: Convert a string to an array
			If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
            var origsix='Toronto Maple Leafs, Chicago Black Hawks, Detroit Red Wings, Boston Bruins, Montreal Canadians, my Ass'

            var origSixArray=origsix.split(',');
            console.log(origSixArray);
            output.textContent=origSixArray[0];
            console.log(typeof(origSixArray));

			// Output one of the array items
            
            
			
			// Output the last element of the array
            console.log(origSixArray.length-1);
            output.textContent=origSixArray.length[origSixArray.length-1];
		
			/* STEP 5: Convert an array back to a string
			Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
            var origSixString=origSixArray.join(' - ');
            output.textContent=origSixString;
            origSixString=origSixArray.toString();
            output.textContent=origSixString;

			/* STEP 6: Adding and removing items from an array
			Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */
            var origSixLength= origSixArray.push('New York Rangers', 'Philly Flyers');
            output.textContent=origSixLength + ' items and they are' + origSixArray;

			// Adding one or more items to an array with push()

			// If you would like to capture how many elements are in the array after you have edited it, then…

			// Removing an item from an array with pop()

			// pop() returns the item that was removed, rather than the length of the updated array, so…
            var itemRemoved=origSixArray.pop();
            output.textContent=itemRemoved;
			// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
            var itemShift=origSixArray.unshift('Whoa');
            output.textContent= origSixLength + ' ' + origSixArray;

            itemRemoved=origSixArray.shift();
            
			/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */
            