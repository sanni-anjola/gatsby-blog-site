import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
const BlogPage = ({ data }) => {
  

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>

      {data.allFile.nodes.map((el, ind) => {
        return <li key={ind}>{el.name}</li>;
      })}
      </ul>
    </Layout>
  );
};

export const query  = graphql`
    query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }`;
export default BlogPage;
