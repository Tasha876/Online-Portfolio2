export default 
    [
        {
          title: "novelty",
          image: '/assets/images/NOVELty.png',
          url: "https://novelty.herokuapp.com/",
          description: function () {
              return (
              <div className="col-md-6 my-auto call mx-auto mx-5 text-dark px-md-5 font-weight-normal">
              <p>Working with a team, we created <a className="sm-text-decoration-none" href={this.url} target="_blank" rel="noreferrer">{this.title.toTitleCase()} </a>. It allows you to add books that you have read or have finished reading, then recommends books to you based on your input.</p>
              <div className="text-center">
                  <a href={this.url} target="_blank" rel="noreferrer">Check it out here</a>
              </div>
              </div>
          )}
        },
        {
          title: "eat da burger",
          image: '/assets/images/eat-da-burger.png',
          url: "https://tasha876-burger.herokuapp.com/",
          description: function () {
              return (
                <div className="col-md-6 my-auto call mx-auto mx-5 text-dark px-md-5 font-weight-normal">
                  <p>I created a burger logger called <a className="sm-text-decoration-none" href={this.url} target="_blank" rel="noreferrer">{this.title.toTitleCase()}</a>. It allows you to add, eat, and delete (virtual!) burgers! It also saves your current burgers and loads them for the next time.</p>
                  <div className="text-center">
                    <a href={this.url} target="_blank" rel="noreferrer">Check it out here</a>
                  </div>
                </div>
            )}
        },
        {
          title: "password generator",
          image: '/assets/images/password-generator.png',
          url: "https://tasha876.github.io/Password-Generator/",
          description: function () {
            return (
            <div class="col-md-6 my-auto call mx-auto mx-5 text-dark px-md-5 font-weight-normal">
            <p>I created a simple <a href={this.url} target="_blank" el="noreferrer">{this.title.toTitleCase()}.</a> It generates strong passwords using Javascript.</p>
              <div class="text-center">
                  <a href={this.url} target="_blank" el="noreferrer">Check it out here</a>
              </div>
            </div>
          )}
        },
        {
            title: "servicely",
            image: '/assets/images/Servicely.png',
            url: "https://tasha876.github.io/Servicely",
            description: function () {
                return (
                <div className="col-md-6 my-auto call mx-auto mx-5 text-dark px-md-5 font-weight-normal">
                <p>Working with a team, we created <a className="sm-text-decoration-none" href={this.url} target="_blank" rel="noreferrer">{this.title.toTitleCase()}</a> &mdash; an app that helps you either find help when your in need or help if you're feeling generous.</p>
                <div className="text-center">
                    <a href={this.url} target="_blank" rel="noreferrer">Check it out here</a>
                </div>
                </div>
            )}
        }
        
      ]
