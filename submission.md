# Submission Notes

These notes will be read by HubSpot developers. Drop us a line!

## Given more time, what would you have done differently?

* I'd like to figure out a way to debounce the controlled input for the search filter - as you can't use lodash in the typical way for controlled inputs, and I didn't have time to figure out an appropriate workaround. But I think this would improve the performance of the app whilst searching a lot, as right now it's triggering a lot of unnecessary renders which could slow down the experience for users on lower-end devices.
* I think a range slider may have been a better way to select dates than multiple checkboxes, so I would've liked to have explored that option
* I think spending a bit more time to map out a style structure could've been better, to consider how it could fit into a wider project
* I would complete writing unit tests and jest-axe tests; I ran into trouble with Parcel's config conflicting with React Testing Library/jest config conflicting, and I was going down a rabbit hole trying to figure out how to properly configure it

## How did you deviate from the directions, if at all, and why?

* For exercise 1, I changed the button color to a WCAG AA-adhering shade of blue. The color in the spec did not meet the contrast criteria
* For exercise 1, I adjusted the design of the testimonial border on mobile devices to maximize readability on smaller screens
* For exercise 2, I made filters additive. I'm not sure if this was an implied requirement, but it made sense to me that the filters should work together. The 'genre' filter is the primary filter, then 'year' filters on top of that. 
* For exercise 2, I moved the search icon to the left. Having it on the right would indicate it's a button, and the search updates on input, so I thought it would make more sense on the left from a UX perspective

## Is there anything else you'd like to let us know?

I had lots of fun with this exercise! I liked the mix of style and functional problems.

I saw the setup mentioned that we could add/remove packages as needed, but I wasn't sure how much this extended to using e.g. prebuilt dropdown or search components. As a result, I've tried to do everything from scratch, but I think it's often practical to consider what already exists in React's rich ecosystem and take advantage of that where appropriate.

There's a bug in the search filters; if you set a genre, then select any year filter other than the first item in the list, the state goes haywire. It's an issue with the DropdownSelect component setting it's checkbox state array I think, but I didn't have time to fix it!