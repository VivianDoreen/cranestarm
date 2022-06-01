import React, { Component } from "react";
import { Header, TopBar, Footer, Loader } from "../layouts/general";
import { Link } from "react-router-dom";

class Contact01 extends Component {
  state = {
    headers: [
      {
        id: 1,
        names: "Blog",
      },
    ],
    titleheading: [
      {
        id: "1",
        title: "Contact",
      },
    ],
    breadcrumbs: [
      {
        id: 1,
        title: "Home",
        classicon: "fa fa-angle-right",
        aria: "true",
      },
      {
        id: 2,
        title: "Contact",
        classicon: "",
        aria: "",
      },
    ],
    contactinfo: [
      {
        id: "1",
        title: "Address",
        info: "P.O Box 84, Kampala",
        location: "Banda along wakalimira Lane, zig zag club",
      },
      {
        id: "2",
        title: "Phone number",
        info: "Call us: +256 39 3224668",
      },
      {
        id: "3",
        title: "E-mail address",
        info: "cranestarm.co.ug@gmail.com",
      },
    ],

    uname: "",
    email: "",
    subject: "",
    message: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formDetails = {
      uname: this.state.uname,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    console.log(formDetails);
  };

  getDetails = () => {
    fetch(`http://localhost:8888/demo-react/api/demo.php`, {
      mode: "no-cors",
      method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
      body: JSON.stringify({ content: "Test2" }),
    })
      .then((res) => {return res.json()})
      .then((response) => {
        console.log(response);
      });
    // fetch('http://localhost:8888/demo-react/api/demo.php', {
    //     mode: 'no-cors',
    //     method:'POST',
    //     headers:{
    //         Accept:'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify({
    //         content:'Test1'
    //     })
    // }).then(res=>res.json())
    // .then(response =>{
    //     console.log('Response');
    //     console.log(response,'Actual response');
    // })
    // .catch(error =>console.log(error))
  };
  render() {
    return (
      <div className="bg-body">
        <div className="boxed">
          <Loader />
          <TopBar />
          {this.state.headers.map((data) => (
            <Header data={data} key={data.id} />
          ))}

          <div className="page-title">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    {this.state.titleheading.map((data) => (
                      <h1 key={data.id} className="h1-title">
                        {data.title}
                      </h1>
                    ))}
                  </div>
                  <ul className="breadcrumbs">
                    {this.state.breadcrumbs.map((data) => (
                      <li key={data.id}>
                        <Link to="#" title="">
                          {data.title}
                          <i
                            className={data.classicon}
                            aria-hidden={data.aria}
                          ></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <section className="flat-row pd-contact-v1">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="contact-info">
                    {this.state.contactinfo.map((data) => (
                      <div className="info info-address" key={data.id}>
                        <div className="title">{data.title}</div>
                        <p>{data.info}</p>
                        <p>{data.location}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="flat-form-info">
                    <form
                      id="contactform7"
                      onSubmit={this.handleSubmit}
                      className="form-info"
                    >
                      <div className="one-half v3">
                        <p className="input-info">
                          <input
                            type="text"
                            name="uname"
                            id="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                          />
                        </p>
                        <p className="input-info">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                          />
                        </p>
                        <p className="input-info">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            onChange={this.handleChange}
                          />
                        </p>
                        <p className="input-info">
                          <button className="submit">Send Message</button>
                        </p>
                      </div>
                      <div className="one-half v4">
                        <p className="input-info">
                          <textarea
                            id="message-contact"
                            name="message"
                            placeholder="Message"
                            onChange={this.handleChange}
                          ></textarea>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flat-row pdmap">
            <div
              className="flat-maps"
              data-address="Thành phố New York, Tiểu bang New York"
              data-height="454"
              data-images="images/map/map-1.png"
              data-name="Themesflat Map"
            ></div>
            {/* <div className="gm-map">
              <div className="map"></div>
            </div> */}
          </section>
          {/* <button onClick={this.getDetails}>Go</button> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact01;
