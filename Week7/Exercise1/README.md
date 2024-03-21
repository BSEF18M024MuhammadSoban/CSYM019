## Week 7 Exercises

### Exercise 1
We need a structure capable of holding rare animal sighting data for the National 
University of Exland. In this session, we will create a JSON structure capable of 
holding such data, and a JSON Schema against which we can validate our rare 
animal sighting data.

1. Create a JSON Data File
  * Create a new file in your chosen editor (e.g. Sublime). Save it as 
    'sightings.json'.
  * You will recall that a sighting report requires the following data:
    id, animal, number, location, date, time, observer (name, email), and 
    observations.
  * We need to make sure that our JSON structure accounts for each of these data 
    elements.
  * Start by adding the basic structure for the data: an outer containing object and an 
    array to hold sightings.
  * Inside the inner curly brackets {. . .} add key/value pairs.
  * The observer data element contains two sub-elements: name and email. To 
    account for this nested structure we will use a nested JavaScript object that 
    contains two data items.
  * Add two or three additional sightings (e.g. Hare, Snowy Owl, Otter, Beaver, 
    Osprey, etc.) to sightings.json. Remember that each object in a JSON array must 
    be separated by a comma.
  * Save sightings.json. Go to JSON Formatter and Validator. Check your JSON for 
    well- formedness. Alternatively, use Oxygen for the checking. Note the results. Fix 
	any errors shown.


2. Create a JSON Schema
  * We will create a JSON Schema to validate sighting data. The schema will also 
    be written in JSON.
  * Open your editor and create a new file. Save it as sightingschema.json.
  * Create the structure for the JSON Data
  * First, create the outer container object. Inside this object, add a JSON Schema 
    declaration, and a title and description for sighting data.
  * The outer container for sighting report data is a JavaScript object. We first need to 
    declare this object and its properties. The object properties will consist of an array 
    of sightings. We use the type keyword to show the data type of the collection 
    being used. We use the properties keyword to show what the object will contain; in 
    this case an array of sighting data items.
  * The items contained within the sighting array will be objects. We use the items 
	keyword to show the contents of the array, and the type keyword to show the data 
	type of the data items in the array.
  * The objects within the array will contain a set of data elements which will be a 
	mixture of simple and complex JavaScript types.
  * Start by adding the simple data types: id, animal, number, location, date, time and 
	observations.
  * The final piece of JSON data that we need to add to our schema is for the 
	observer.
  * An observer data item is complex; it has two parts: a name and an email. We thus 
	need a JS collection to store the data effectively. In this case, a JS object.
  * We will restrict data in sighting reports so that only certain, rare, animals can be 
	reported. These animals are: Beaver, Hare, Pine Martin, Otter and Snowy Owl. To 
	do this we will use an enumerated list (enum). Add the following code to the 
	animal data item in your schema.
  * Save sightingschema.json. Validate the JSON using Oxygen or the JSON 
	Formatter and Validator. Fix any errors the validator finds.
  * Open sightings.json and sightingschema.json. Go to JSON Schema Validator. 
	Paste your schema code in the left window, and your JSON code in the right 
	window. The software will automatically produce a conformance report for the 
	JSON. Address any errors indicated by the validator