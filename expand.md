1. It is important to put thought into your IDs & Classes when it comes to technology intersections, so your css and js can easily refrence specific elements. 
2. Data attributes allow you to store additional information in an element. This is useful as your js can access this information with '.dataset.[attributeName]'
You can also use data attributes to store mircrodata
3. A  DOM fragment is a container to hold DOM elements, and is powerfull as they can be modifed behind the scenes, and then added once your process is finished, so the page does not need to be re–rendered many times. 
4. A Virtual DOM is a JavaScript representation of a DOM. It is good as it can be rerended easily and cheaply, at the cost of some additional overhead. 
5. because class is already a keyword in js with separate meaning (as it is an Object-oriented programming language)
6. You can have multiple addEventListener but onClick only can run once.  addEventListener is better for larger projects, but is longer. 
onClick is more lightweight less verbose, but can be overwritten if you have multiple, and is less flexible. 