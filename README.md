# Mr. Robogers' Neighborhood
A simple application that replaces the numbers 1, 2, and 3 with various phrase from Mr. Roboger
#### By _**Dylan Allison-Damitz**_

## Technologies Used

* HTML
* Bootstrap
* JavaScript
* JQuery

## Description

This application takes you into Mr. Roboger's neighborhood, the futuristic version of the late Mr. Rogers himself. The application allows a user to enter numbers and returns those numbers as a customized string, filtered through Mr. Roboger's advanced logic system. If user types in a 1, 2, or a 3, Mr. Roboger's returns "Beep!" for 1, "Boop!" for 2, and "Won't you be my neighbor?" for the number 3. The purpose of this application is to display the full power of looping in JavaScript. 

## Setup/Installation Requirements

* Navigate to GitHub.com and search for profile "Dylan-Allison-Damitz"
* Once you've navigated to "Dylan-Allison-Damitz" select repository named "mr-robogers-neighborhood"
* Inside of "mr-robogers-neighborhood," click on the green "CODE" badge on the right side of the page and then copy the code by clicking on the clipboard icon
* Once the code has been copied to your clipboard, navigate to your terminal and type command "cd ~" to return to your local drive. Next, navigate to your desktop by typing "cd desktop"
* Once succesfully at your desktop in command terminal, you'll clone a copy of the project to your desktop by typing in terminal "git clone" and then copying https://github.com/Dylan-Allison-Damitz/mr-robogers-neighborhood.git from your clipboard exactly one space after "git clone" in your command terminal
* When your terminal command line says "git clone https://github.com/Dylan-Allison-Damitz/mr-robogers-neighborhood.git" hit enter to copy the project to your desktop
* Navigate to your desktop and click on the folder titled "mr-robogers-neighborhood" to open up the directory. Double-click on the file titled "index.html," which will launch the portfolio webpage on your default browser

## Testing Process

*Describe: mrRoboger();

*Test: "It should return the string "0" if the number "0" is inputted."
Expect: (mrRoboger(0).toEqual("0"));

*Test: "It should return a string with all numbers that include number 1, and will be replaced with "Beep!".
Expect: (mrRoboger(1).toEqual("0 Beep!"))

*Test: "It should return a string with all numbers that include numeral 1 replaced by "Beep!" and all numbers that include numeral 2 replaced by "Boop!"
Expect: (mrRoboger(2).toEqual("0 Beep! Boop!"))

*Test: "It should return a string with all numbers that include numeral 1 replaced by "Beep!" all numbers that include the numeral 2 replaced by "Boop!" and all numbers that include numeral 3 replaced by "Won't you be my neighbor?"
Expect: (mrRoboger(3).toEqual("0 Beep! Boop! Won't you be my neighbor?"))

## Known Bugs

* No known bugs at this time

## License

MIT

Copyright (c) 2021 Dylan Allison-Damitz

## Contact Information

dylandamitz@gmail.com



