import discountMetaobject from '../fragments/discount-metaobject';

export const getDiscountMetaobjectsQuery = /* GraphQL */ `
  query getDiscountMetaobjects($type: String!) {
    metaobjects(type: $type, first: 10) {
      edges {
        node {
          ...metaobject
        }
      }
    }
  }
  ${discountMetaobject}
`;
