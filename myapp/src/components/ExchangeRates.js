import React from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

export const ExchangeRates = () => (
  <Query
    query={gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Errror :(</p>;
      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);
