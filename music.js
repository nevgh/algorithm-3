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

// celebs older than 50 //

let oldCelebs = [];
for (let i = 0; i < list.length; i++) {
  if (list[i].age > 50) {
    oldCelebs.push(list[i].name);
  }
}

console.log(oldCelebs);

// celebs who are alive and speak arabic //

let aliveArabs = [];
for (let i = 0; i < list.length; i++) {
  if (list[i].language === "arabic" && list[i].is_alive === true) {
    aliveArabs.push(list[i].name);
  }
}

console.log(aliveArabs);

// celebs who are singers and actors //
let singerActor = [];
for (let i = 0; i < list.length; i++) {
  if (list[i].occupation.includes("singer", "actor")) {
    singerActor.push(list[i].name);
  }
}

console.log(singerActor);
