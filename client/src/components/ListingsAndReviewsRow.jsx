export default function ListingsAndReviewsRow({ listings_and_reviews }) {
  return (
    <tr>
      <td>{listings_and_reviews._id}</td>
      <td>{listings_and_reviews.name}</td>
      <td>{listings_and_reviews.listing_url}</td>
      <td>{listings_and_reviews.summary}</td>
    </tr>
  );
}
