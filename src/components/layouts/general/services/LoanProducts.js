import React, { Component } from "react";
import { Header, TopBar, Footer, Loader } from "..";
import { Link } from "react-router-dom";
import MainLoanProducts from "./MainLoanProducts";

class LoanProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          names: "Pages",
        },
      ],
      titleheading: [
        {
          id: "1",
          title: "Services Grid",
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
          title: "Services",
          classicon: "fa fa-angle-right",
          aria: "true",
        },
        {
          id: 3,
          title: "Savings",
          classicon: "",
          aria: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="bg-body3">
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
                    <h1 className="h1-title">Loan Products</h1>
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

          <MainLoanProducts />

          <Footer />
        </div>
      </div>
    );
  }
}

export default LoanProducts;
