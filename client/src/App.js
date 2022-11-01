import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         clients: {
//           merge(existing, incoming) {
//             return incoming;
//           },
//         },
//         projects: {
//           merge(existing, incoming) {
//             return incoming;
//           },
//         },
//         // listings_and_reviews: {
//         //   merge(existing, incoming) {
//         //     return incoming;
//         //   },
//         // },
//       },
//     },
//   },
// });

const cache = new InMemoryCache();

console.log('process2', process.env.REACT_APP_SERVER_PORT);

const client = new ApolloClient({
  uri: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/graphql`,
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
