const makeUser = function () {
  var evozon = null;

  return {
    jump: function () {
      this.evozon = "jumping";
      this.log();
    },
    speak: function () {
      this.evozon = "speaking";
      console.log(this.evozon);
    },
    run: function () {
      return console.log("running");
    },
    swim: function () {
      return console.log("swimming");
    },
    sleep: function () {
      return console.log("sleeping");
    },
    exec: function () {
      return console.log("");
    },
  };
};

const user = makeUser();

user.jump().speak();
