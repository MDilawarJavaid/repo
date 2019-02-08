import React, { Component } from 'react';


class App extends Component {
    render() {

        // arr = [{
        //     "name": "Fern Ritchie",
        //     "username": "Vladimir.Feest",
        //     "email": "Llewellyn_Robel@gmail.com",
        //     "address": {
        //       "streetA": "Ratke Street",
        //       "streetB": "431 Terry Prairie",
        //       "streetC": "027 Tyler Plaza Apt. 166",
        //       "streetD": "Apt. 095",
        //       "city": "Crooksstad",
        //       "state": "New Hampshire",
        //       "country": "Ukraine",
        //       "zipcode": "53303",
        //       "geo": {
        //         "lat": "-5.9355",
        //         "lng": "20.5942"
        //       }
        //     },
        //     "phone": "477-849-4756 x71564",
        //     "website": "emile.org",
        //     "company": {
        //       "name": "Stehr Inc",
        //       "catchPhrase": "Universal 6th generation contingency",
        //       "bs": "granular whiteboard bandwidth"
        //     },
        //     "posts": [{
        //       "words": ["voluptatem", "quia", "ipsam"],
        //       "sentence": "maxime et nemo et sed",
        //       "sentences": "blanditiis sint molestiae facilisnet molestiae velit consequatur sit aut iure nihilneaque quo voluptatibus",
        //       "paragraph": "reiciendis exercitationem assumenda provident odionasperiores fugit officianperferendis exercitationem annam et eana ex autem ducimusnsint tenetur officia ratione nesciunt impedit qui"
        //     }, {
        //       "words": ["voluptatem", "fugiat", "laborum"],
        //       "sentence": "quis vel consequatur placeat eum voluptas laboriosam",
        //       "sentences": "natus ut assumenda esse rerum repudiandaentempore excepturi nemo et velit inventore minus nihil officiisnexcepturi corrupti enim explicabo quaerat",
        //       "paragraph": "sint eum tenetur id occaecatinitaque veritatis aperiam libero quibusdam repudiandae explicabo accusamus rerum inventorenet placeat enimndolor sit dolores nulla doloribus"
        //     }, {
        //       "words": ["illum", "quia", "voluptas"],
        //       "sentence": "libero eos quia velit qui sint aut",
        //       "sentences": "eligendi esse blanditiis magni perferendis cumque quibusdam qui iste vitaenaliquam odio aut quaeratnveritatis consequatur qui consequuntur",
        //       "paragraph": "qui facere ex et consequaturnut iusto maxime quia deleniti sint autnut inventore magni ipsum necessitatibus et numquam qui consectetur aperiamnnam non quisquam tempore corporis adipisci nobis remnqui doloribus inventore itaque est corrupti modi vero quidem quaerat"
        //     }],
        //     "accountHistory": [{
        //       "amount": "435.13",
        //       "date": "2012-02-02T08:00:00.000Z",
        //       "business": "Dare Inc",
        //       "name": "Home Loan Account 4225",
        //       "type": "payment",
        //       "account": "69883581"
        //     }, {
        //       "amount": "993.77",
        //       "date": "2012-02-02T08:00:00.000Z",
        //       "business": "Yundt, VonRueden and Marks",
        //       "name": "Credit Card Account 2737",
        //       "type": "withdrawal",
        //       "account": "32957725"
        //     }, {
        //       "amount": "844.46",
        //       "date": "2012-02-02T08:00:00.000Z",
        //       "business": "Sipes-Boyer",
        //       "name": "Investment Account 5882",
        //       "type": "deposit",
        //       "account": "50708763"
        //     }]
        //    }];

        return (
          <div>
            <div className="section-left">
      <div className="section intro">
        <div className="logo"></div>
        <h1>Wadood Azhar</h1>
        <div className="content">
          <span>3 Oct 2006</span> <br></br>
          <span>Graphics</span> <br></br>
          <span>Designer</span>
        </div>
        <hr></hr>
        <div className="contact">

          <span>+923224554956</span>

          <div className="email">
            <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
            <p>wadoodazhar799@example.com</p>
          </div>
        </div>
      </div>
    </div>

    <div className="section-right">
      <div className="wrapper">
        <div className="section">
          <div className="title">
            <i className="fa fa-user" aria-hidden="true"></i>
            Profile
          </div>
          <p></p>
        </div>

        <div className="section">
          <div className="title">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            Experience
          </div>
          <div className="content">
            <h2>Web Developer</h2>
            <h3>Company | AUG 2016 &raquo; Current</h3>
            <ul>
              <li>Develop feature for the platform</li>
              <li>Develop feature for the platform</li>
            </ul>
          </div>

          <div className="content">
            <h2>Web Developer</h2>
            <h3>Company | AUG 2016 &raquo; Current</h3>
            <ul>
              <li>Develop feature for the platform</li>
              <li>Develop feature for the platform</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="title">
            <i className="fa fa-book" aria-hidden="true"></i>
            Education
          </div>
          <p>Full stack "Developer" soon and Graphics Designer , Logo Designer.</p>

        </div>

        <div className="section">
          <div className="title">
            <i className="fa fa-book" aria-hidden="true"></i>
            Skills
          </div>
          <ul>
            <li>Programming</li>
            <li>Photoshop</li>
            <li>Illustrator expert</li>
          </ul>
        </div>

        <div className="section">
          <div className="title">
            <i className="fa fa-trophy" aria-hidden="true"></i>
            Awards
          </div>
          <div className="content">
            <h2>Null</h2>
            <h3>soon</h3>
            <span className="date">2019</span>
          </div>
        </div>
      </div>
    </div>
          </div>     
        );
    }
}


export default App;