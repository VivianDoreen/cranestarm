import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainLoanProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleServices: [
        {
          id: 1,
          title: "What We Can Offer You",
          description:
            "Loan products have been classified in different ways based on various characteristics. Below is a description of different loan categories.",
        },
      ],
      imagebox: [
        {
          id: "1",
          imgsrc: "images/imagebox/loan1.jpeg",
          title: "SME Loans",
          description:
            "SME Loans is for business people. It deals with mainly small and medium enterprise economy,is both retail and wholesale shops,bars, restaurants,market vendors etc.",
        },
        {
          id: "2",
          imgsrc: "images/imagebox/loan4.jpeg",
          title: "Salary Loans",
          description:
            "This form of loan products is specifically for those clients who expect to receive money at the end of the month( salary earners).There4 their repayment is expected at the end of the month.",
        },
        {
          id: "11",
          imgsrc: "images/imagebox/loan5.jpeg",
          title: "Emergency Loans",
          description:
            "This kind of loans products is quick ,secure and instant. IT is disbursed depending on the nature of emergency one has experienced.  It is the quickest form.",
        },

        {
          id: "4",
          imgsrc: "images/imagebox/joint.jpeg",
          title: "Group Loans",
          description:
            "This is given to members in a group. Here, members self select themselves and form a group of 5_10 members and it is also paid in a group.",
        },
        {
          id: "5",
          imgsrc: "images/imagebox/loan6.jpg",
          title: "Home Improvement Loans",
          description:
            "This deals with home repairs and maintenance,i.e when one wants to construct a house or make a repair or buy house holds.",
        },
        {
          id: "3",
          imgsrc: "images/imagebox/joint8.jpeg",
          title: "School fees loan",
          description:
            "This is basically to help your child have a bright future. It is secure sine it gives chance to every parent to achieve the best of his or her children ever",
        },
      ],
    };
  }
  render() {
    return (
      <section className="flat-row pd-services-post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.titleServices.map((data) => (
                <div className="title-section center s1" key={data.id}>
                  <h2>{data.title} </h2>
                  <p className="sub-title-section">{data.description} </p>
                </div>
              ))}
              <div className="dividers dividers-imagebox"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-imagebox-grid">
                {this.state.imagebox.map((data) => (
                  <div
                    className="flat-imagebox services-grid item"
                    key={data.id}
                  >
                    <div className="flat-imagebox-inner">
                      <div className="flat-imagebox-image">
                        <img src={data.imgsrc} alt="img" />
                      </div>
                      <div className="flat-imagebox-header">
                        <h3 className="flat-imagebox-title">
                          <Link to="#">{data.title}</Link>
                        </h3>
                      </div>
                      <div className="flat-imagebox-content">
                        <div
                          className="flat-imagebox-desc"
                          style={{ textAlign: "justify" }}
                        >
                          {data.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainLoanProducts;
