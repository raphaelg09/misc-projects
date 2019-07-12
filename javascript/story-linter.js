// From the Mini Linter project on Codecademy's Introduction to JavaScript

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

function linter(story, overusedWords, unnecessaryWords) {
  // Stores the story split into separate words as elements of an array
	const storyWords = story.split(' ');

	// Stores the number of elements in storyWords
	const wordCount = storyWords.length;

	// Stores the elements of storyWords that are not in unnecessaryWords
	const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

	// Stores the amount of times elements of unnecessaryWords appear in storyWords
	const overusedWordCount = storyWords.filter(word => overusedWords.includes(word)
).length;

	// Stores the number of sentences based on the number of elements in storyWords that end in "." or "!"
	const sentenceCount = storyWords.filter(word =>  word[word.length - 1] === '.' || word[word.length - 1] === '!'
).length;

  console.log(`Your story has ${wordCount} words.`);
  console.log(`Your story has ${sentenceCount} sentences.`);
  console.log(`Overused words appear in your story ${overusedWordCount} times.`);
  
  console.log("\nHere's a better version of your story without unnecessary words:\n");
  console.log(betterWords.join(' '));
}

linter(story, overusedWords, unnecessaryWords);
