# m-5-scheduler
Work Day Scheduler

##Because I have a busy lifestyle, I found that it would be best to schedule my time efficiently.  Therefore, following the Day.js scheduler format I began to create a scheduler

##To begin, I will need to create my repository and use the starter code provided.  I then needed to make adjustments to the code so that my scheduler would do the following:
1. It will open showing the current day at the top
2. When I scroll down, it will show me time slots, it will be color coded to show the past, present and future.
3. When I click on a time slot, it will allow me to enter data and save it to my scheduler on my local storage

##Creation - researching the past examples, using W3, Chatgpt.  I created the jsscript using chatgpt only to find it only gave me 3 time slots, one hour past, one current and one future.  I had to look at the code provided more indepth to figure out how I could code the calendar to show a full 24 hour day.  I had to add 0-23 time slots by copying the current html code for the past, current and future and then remove the past, current and future from the line code so it would coordinate properly.

##Correction - I went back and read the User Story and realized, they only wanted a day to represent standard business hours and not a full 24 hours.  To correct, I deleted the html "Div's" that were not relevant