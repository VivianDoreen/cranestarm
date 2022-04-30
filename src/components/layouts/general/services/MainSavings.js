import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleServices: [
        {
          id: 1,
          title: "What We Can Offer You",
          description:
            "Do Your Investments Align with Your Goals? Find a Dedicated Savings Plan Now. Life Is For Living. Let's Partner Through All Of It. Find A Dedicated Savings Plan.",
        },
      ],
      imagebox: [
        {
          id: "1",
          imgsrc: "images/imagebox/joint.jpeg",
          title: "Group/Joint savings",
          description:
            "Consists of 5 members and above. No member of the group is allowed to either withdraw nor deposit with out approval by other members of the group.",
        },
        {
          id: "2",
          imgsrc: "images/imagebox/joint2.jpeg",
          title: "Personal/ Individual savings",
          description:
            "This is done on individual basis,one agrees to save a specific amount of money depending on his or her financial status.",
        },
        {
          id: "11",
          imgsrc: "images/imagebox/joint8.jpeg",
          title: "School fees account",
          description:
            "this is specifically for school going children.one saves for his or her child purposely to catter for  a child's bills before a child reports back to school",
        },

        {
          id: "4",
          imgsrc: "images/imagebox/joint5.jpeg",
          title: "Target account",
          description:
            "Here,one saves his or her money with a purpose,ie one may have a dream of constructing a house in future,this is the best form of account because It enables you achieve your target.",
        },
        {
          id: "5",
          imgsrc: "images/imagebox/joint6.jpeg",
          title: "Fixed account",
          description:
            "Under this form of account,one fixes a specific amount of money for a specific period of time but depending on ones need .A specific amount of interest is added Incase one meets the  fixed period.",
        },
        {
            id: "3",
            imgsrc: "images/imagebox/joint3.jpeg",
            title: "Junior account",
            description:
              "This Account is for Kids under the age of 18years. This form of account enables parents to save for their children's future. It is specifically designed for the benefit of the children",
          },
        {
          id: "9",
          imgsrc: "images/imagebox/joint7.jpeg",
          title: "Current/business account",
          description:
            "This is basically for business people. With this account, you save depending on your income status. You are free to make deposits, receive money, make payments and make withdrawals.",
        },
        {
          id: "10",
          imgsrc: "images/imagebox/joint9.png",
          title: "Recurring account",
          description:
            "Here,one sets a specific amount of money  to be deposited on his account on a particular day for specific period of time.under this form of account a certain interest is also added Incase the set period is hit.",
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
                        <div className="flat-imagebox-desc" style={{textAlign:'justify'}}>
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

export default MainSavings;
