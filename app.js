//angular//

angular.module('superheroApp', [])
.controller('SuperheroController', [SuperheroController])


function SuperheroController () {
  this.superheroes = [
    {
      name: "Spiderman",
      phoneNumber: "1-800-Spidey",
      comicsAffiliation: "Marvel",
      img_url: "http://cdn.smosh.com/sites/default/files/bloguploads/spider-meme-12.jpg"
    },
    {
      name: "Superman",
      phoneNumber: "1-800-Superman",
      comicsAffiliation: "DC Comics",
      img_url: "https://s-media-cache-ak0.pinimg.com/736x/5d/a8/38/5da838b7c748a9c637d14b6fbec1f5dc--superman-meme-glasses.jpg"
    },
    {
      name: "Aquaman",
      phoneNumber: "1-800-Aquaman",
      comicsAffiliation: "DC Comics",
      img_url: "http://weknowmemes.com/wp-content/uploads/2012/10/aquaman-meme-im-useless-they-said.jpg"
    },
    {
      name: "Antman",
      phoneNumber: "1-800-Antman",
      comicsAffiliation: "Marvel",
      img_url: "http://img.memecdn.com/tada-tada-da-da-da-ant-man_o_2043617.jpg"
    }]
    this.selectHero = function (hero) {
      this.selectedHero = hero
    }



  }
