# Design Document
## Design Decisions
1. Add task at the top.
   - The text box to add tasks/items is near the top of the screen, 
   just after the header. The reason is because we noticed that a lot of the
   existing apps tend to have typing box near the top and not at the bottom.
   The only exception that we can think of is Safari, which had an update while 
   ago and now has the search box at the bottom (at least on Aoi's iphone). 
   It feels very weird to have it there - not following the convention.
   To not confuse users, we decided to put the text box at the top,
   following the convention of other apps.

2. New tasks are added to the bottom of list.
   - When a new task is added, it appears at the bottom of the list instead of top,
   middle, or something random. When we write out a list on paper, people usually
   write from top to bottom. Therefore, we decided that it would be easier for users
   if our list also added new items in the same manner - top to bottom. It
   is also better in terms of organizing tasks because the older task would be near the
   top, which is where most people focus their attention (we noticed that we tend to look the upper half of
   screen and not so much near the bottom). 
   
3. List seperated by borders.
   - Lists are seperated by borders so that the users can easily distinguish tasks.

4. Hide and Delete buttons at the bottom.
    - Hide and Delete buttons are located at the bottom of the screen. From the analysis
   of other apps for mobile, we noticed that control panels are often located at the bottom
   of screen. We decided to follow the convention of other apps and place the two
   buttons at the bottom. Since the two buttons have different functions, we made the buttons 
   big and easily distinguishable.  
   - If new items are added and it overflows, 

5. Colors mainly blue.
   - We made the colors mainly blue. It is mostly an aesthetic choice but also cool colors are 
     associated with calming and healing. We decided that we want to make our app calming, because
     having a todo list and seeing it with active colors may be a little stressful.
     
6. Completed tasks strike-through.
   - Tasks are marked completed by having a strike-through. The strike-through was added so that 
     it is very visible that a task is done, and it is one of the conventions a lot of people use:
     mark a task complete by putting a line across.

## Alternative Designs
   - We had three options for our color scheme: orange and blue. orange was our warm color
     option and blue was our cool color option. Warm color is more likely to motivate the
     users to complete the tasks (some of the todo apps we have used in the past used warm color), 
     while cool colors is more likely to make the users feel relaxed and not stress about the tasks. 
     After comparing the two colors, we decided to move on with the cool color.  
     <img src="alternative.png" alt="drawing" width="200"/>
## Challenges
   - The biggest challenge we had was making the "Hide" button and "Delete" button stick to the
     end of page. We were running into troubles where buttons would not be sized right (even when 
     set the width & height), moving as the list grows, or overlapping with the list.
     We now do have the buttons at the bottom even if items are added or deleted. We still do want
     to modify in future versions, because it sometimes does not work (since position of everything 
     else is relative while the buttons are absolute, they behave weirdly when they overlap).
   - It was challenging for us to choose a color. Since it is a todo list, we want to encourage the 
     users to finish the tasks but also not stress them. We tried different colors, both warm and 
     cool colors, and in the end decided that we want to focus on not making the users stressed (if 
     they are putting it in a todo list, it is more likely that they are already motivated to do the
     tasks.)
## Good Design
   - We think our design for adding tasks is clean and simple. For some existing todo apps, users 
     need to scroll down to the bottom of list to add a task. Instead of following that convention,
     we decided to create a text box at the top where users can add tasks. This way, steps for adding 
     a task is always consistent for users (no need to scroll different length depending on how long the
     existing list is): just type in the text box and hit add (new task automatically placed ath the end
     of list). 
   
