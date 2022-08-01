import React, { Component } from "react";
import { Header, TopBar, Footer, Loader } from "../layouts/general";
import { Link } from "react-router-dom";
import axios from 'axios'

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
        info: "Call us: +256 200914551 or 0393224668",
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

  //   const smtpjs = window.Email;

  //   smtpjs.send({
  //     Host : "smtp.elasticemail.com",
  //     Username : "nabulovivian2014@gmail.com",
  //     Password : "4B24A2FF6EB82F5D9019A367B0FE2A1CDDCB",
  //     To : 'nabulovivian2014@gmail.com',
  //     From : this.state.email,
  //     Subject : this.state.subject,
  //     Body : this.state.message
  // }).then(
  //   message => alert(message)
  // );

    const API_PATH = 'http://localhost:8888/demo-react/api/demo.php';

    axios({
        method: 'post',
        url: API_PATH,
        headers: {
            'content-type': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
        },
        mode:'no-cors',
        data: this.state
    })
    .then(result => {
        console.log(result.data)
        this.setState({
            dataSent: result.data.sent,
        })
        console.log(this.state)
    })
    .catch(error => this.setState({
        error: error.message
    }));
  
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
