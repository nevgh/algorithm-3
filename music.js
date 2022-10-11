let list = [
  {
    name: "michael jordan",
    net_worth: 2200000000,
    gender: "male",
    nationality: "us",
    occupation: [
      "basketball_player",
      "athlete",
      "spokesperson",
      "entrepreneur",
      "actor",
    ],
    height: 1.98,
    birthday: "1963-02-17",
    age: 59,
    is_alive: true,
  },
  {
    name: "brad pitt",
    net_worth: 300000000,
    gender: "male",
    nationality: "us",
    occupation: [
      "actor",
      "film_producer",
      "voice_actor",
      "television_producer",
    ],
    height: 1.8,
    birthday: "1963-12-18",
    age: 58,
    is_alive: true,
  },
  {
    name: "haifa wehbe",
    net_worth: 65000000,
    gender: "female",
    nationality: "lb",
    occupation: ["singer", "model", "designer", "actor"],
    height: 1.63,
    birthday: "1976-03-10",
    age: 46,
    is_alive: true,
    language: "arabic",
  },
  {
    name: "jennifer lopez",
    net_worth: 400000000,
    gender: "female",
    nationality: "us",
    occupation: [
      "singer",
      "record_producer",
      "television_producer",
      "entrepreneur",
      "actor",
      "songwriter",
      "music_video_director",
      "presenter",
      "dancer",
      "fashion_designer",
    ],
    height: 1.64,
    birthday: "1969-07-24",
    age: 53,
    is_alive: true,
    language: "spanish",
  },
  {
    name: "lionel messi",
    net_worth: 400000000,
    gender: "male",
    nationality: "ar",
    occupation: ["football_player"],
    height: 1.69,
    birthday: "1987-06-24",
    age: 35,
    is_alive: true,
    language: "spanish",
  },
  {
    name: "barack obama",
    net_worth: 70000000,
    gender: "male",
    nationality: "us",
    occupation: ["politician", "lawyer", "writer", "author", "law_professor"],
    height: 1.85,
    birthday: "1961-08-04",
    age: 61,
    is_alive: true,
    language: "english",
  },
  {
    name: "omar sharif",
    net_worth: 2000000,
    gender: "male",
    nationality: "eg",
    occupation: ["actor", "screenwriter"],
    height: 1.8,
    birthday: "1932-04-10",
    age: 83,
    is_alive: false,
    death: "2015-07-10",
    language: "arabic",
  },
  {
    name: "bashar al-assad",
    net_worth: 1500000000,
    gender: "male",
    nationality: "sy",
    occupation: ["politician", "physician"],
    height: 1.89,
    birthday: "1965-09-11",
    age: 57,
    is_alive: true,
    language: "arabic",
  },
  {
    name: "michael jordan",
    net_worth: 2200000000,
    gender: "male",
    nationality: "us",
    occupation: [
      "basketball_player",
      "athlete",
      "spokesperson",
      "entrepreneur",
      "actor",
    ],
    height: 1.98,
    birthday: "1963-02-17",
    age: 59,
    is_alive: true,
    language: "english",
  },
];

// names and ages //

function nameAndAge(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name, arr[i].age);
  }
}
nameAndAge(list);

// highest net-worth //

let netWorth = [];
for (let i = 0; i < list.length; i++) {
  netWorth.push(list[i].net_worth);
}

let highest = netWorth[0];
for (let i = 0; i < list.length; i++) {
  if (netWorth[i] > highest) {
    highest = netWorth[i];
  }
}
console.log(highest);

// highest net-worth as function //
function findHighest(arr) {
  let netWorth = [];
  for (let i = 0; i < arr.length; i++) {
    netWorth.push(arr[i].net_worth);
  }

  let highest = Math.max(...netWorth);
  console.log(highest);
}

findHighest(list);

// celebs older than 50 //

let oldCelebs = [];
for (let i = 0; i < list.length; i++) {
  if (list[i].age > 50) {
    oldCelebs.push(list[i].name);
  }
}

console.log(oldCelebs);
// celebs older than 50 as function //
function oldCelebs(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 50) {
      console.log(arr[i].name);
    }
  }
}

oldCelebs(list);

// celebs who are alive and speak arabic //

let aliveArabs = [];
for (let i = 0; i < list.length; i++) {
  if (list[i].language === "arabic" && list[i].is_alive === true) {
    aliveArabs.push(list[i].name);
  }
}

console.log(aliveArabs);
// celebs who are alive and speak arabic as function //

function aliveArabs(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].language === "arabic" && arr[i].is_alive === true) {
      console.log(arr[i].name);
    }
  }
}

aliveArabs(list);

// celebs who are singers and actors //
let singerActor = [];
for (let i = 0; i < list.length; i++) {
  if (list[i].occupation.includes("singer", "actor")) {
    singerActor.push(list[i].name);
  }
}

console.log(singerActor);
// celebs who are singers and actors as function //
function singerActor(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].occupation.includes("singer", "actor")) {
      console.log(list[i].name);
    }
  }
}

singerActor(list);

// females occupations//
let femaleJobs = [];
for (let i = 0; i < list.length; i++) {
  if (list[i].gender === "female") {
    femaleJobs.push(list[i].occupation);
  }
}
//bonus point to remove duplicate occupations//
let positions = femaleJobs.join().split(",");
let distinctPositions = [];
for (let j = 0; j < positions.length; j++) {
  if (!distinctPositions.includes(positions[j])) {
    distinctPositions.push(positions[j]);
  }
}

console.log(distinctPositions);
// females occupations as function//
function femaleOccupations(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "female") {
      console.log(arr[i].occupation);
    }
  }
}
femaleOccupations(list);

// which celebrity is taller//

function whichTaller(celeb1, celeb2) {
  for (i = 0; i < list.length; i++) {
    if (list[i].name === celeb1) {
      var height1 = list[i].height;
    } else if (list[i].name === celeb2) {
      var height2 = list[i].height;
    }
  }
  if (height1 > height2) {
    console.log(celeb1);
  } else {
    console.log(celeb2);
  }
}

whichTaller("jennifer lopez", "brad pitt");
// which celebrity is taller using filter //
function whichTaller(celeb1, celeb2) {
  let celebs = list.filter(
    (object) => object.name == celeb1 || object.name == celeb2
  );

  if (celebs[0].height > celebs[1].height) {
    console.log(celebs[0].name);
  } else {
    console.log(celebs[1].name);
  }
}
whichTaller("brad pitt", "jennifer lopez");
