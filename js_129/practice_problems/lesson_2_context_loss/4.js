// Will this code produce the following output? Why or why not?

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

/*
ANSWER:
No, because the callback function passed into forEach loses its
execution context and this refers to the global object.
logs:

undefined: Arena
undefined: Daggerfall
undefined: Morrowind
undefined: Oblivion
undefined: Skyrim
*/