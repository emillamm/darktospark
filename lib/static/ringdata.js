'use strict';

exports.ringdata = function(req, res) {
  res.json([
    {
    	name: 'PHASE 1', 
    	file: '1.png', 
    	title: 'BIRTH',
    	subtitle: 'A ring appears from the dark', 
    	body: 'Darkness  - ( the dark cement )  - encircles a ring on its way from the depth.'
    },
    {
    	name: 'PHASE 2', 
    	file: '2.png', 
    	title: 'STRUGGLE',
    	subtitle: '', 
    	body: 'The ring tries to wiggle out  of the dark – ( the cement ).'
    },
    {
    	name: 'PHASE 3', 
    	file: '3.png', 
    	title: 'CONTROL',
    	subtitle: 'Encapsulation of the darkness.', 
    	body: 'The ring is now in control of the darkness.'
    },
    {
    	name: 'PHASE 4', 
    	file: '4.png', 
    	title: 'STRUCTURE',
    	subtitle: 'Creation of value.', 
    	body: 'The ring tries to find its form and value. ( Glass is incorporated.)'
    },
    {
    	name: 'PHASE 5', 
    	file: '5.png', 
    	title: 'TRANSFORMATION',
    	subtitle: 'in progress', 
    	body: 'The ring is ready for the last metamorphosis.'
    },
    {
    	name: 'Spark', 
    	file: '6.png', 
    	title: 'SPARK',
    	subtitle: 'Transformation completed', 
    	body: 'The ring SPARK is created  in 14 carat gold with a 0,05ct diamond. This  is the last phase of the metamorphosis of the ring. This gold ring can be worn in two positions, horizontal  or vertical, -  just  as you feel like!'
    }
  ]);
};