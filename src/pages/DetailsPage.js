import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";

import itemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "house Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
      </>
    );
  }
}
