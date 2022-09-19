import { useQuery } from '@apollo/client';
import ListingsAndReviewsRow from './ListingsAndReviewsRow';
import Spinner from './Spinner';
import { GET_LISTINGS_AND_REVIEWS } from '../queries/listingsAndReviewsQueries';

export default function ListingsAndReviews() {
  const { loading, error, data } = useQuery(GET_LISTINGS_AND_REVIEWS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong with listings and reviews</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>URL</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {data.listings_and_reviews.map((listing_and_review) => (
              <ListingsAndReviewsRow
                key={listing_and_review._id}
                listings_and_reviews={listing_and_review}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
