const makeUser = function () {
  let evozon = "";
  return {
    evozon,
    jump: function () {
      this.evozon += "jumping, ";
      return this;
    },
    speak: function () {
      this.evozon += "speaking, ";
      return this;
    },
    run: function () {
      this.evozon += "running, ";
      return this;
    },
    swim: function () {
      this.evozon += "swimming, ";
      return this;
    },
    sleep: function () {
      this.evozon += "sleeping, ";
      return this;
    },
    exec: function () {
      console.log(this.evozon);
    },
  };
};

const user = makeUser();

user.sleep().swim().speak().jump().swim().sleep().run().run().exec();
