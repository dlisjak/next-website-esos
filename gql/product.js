import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query Products {
    products {
      items {
        slug
      }
    }
  }
`;

export const SINGLE_PRODUCT_QUERY = gql`
  query Product ($slug: String) {
    product(slug: $slug) {
      name
      slug
      description
      optionGroups {
        name
        code
      }
      variants {
        price
        options {
          name
          group {
            code
          }
        }
      }
      featuredAsset {
        source
      }
    }
  }
`;