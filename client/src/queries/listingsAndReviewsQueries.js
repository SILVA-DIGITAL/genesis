import { gql } from '@apollo/client';

const GET_LISTINGS_AND_REVIEWS = gql`
  query getListingsAndReviews {
    listings_and_reviews(first: 10) {
      _id
      listing_url
      name
      summary
    }
  }
`;

export { GET_LISTINGS_AND_REVIEWS };
