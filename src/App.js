import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature as nixFeature } from "./actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const { state, addFeature, nixFeature } = props;

  const removeFeature = item => {
    // dispatch an action here to remove an item
    nixFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} buyItem={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ state });

export default connect(
  mapStateToProps,
  { addFeature, nixFeature }
)(App);
