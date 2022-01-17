const gql = require('graphql-tag');

module.exports = gql`

fragment NewsletterContentListFragment on Content {
  id
  type
  name(input: { mutation: Email })
  teaser(input: { mutation: Email, useFallback: false, maxLength: null })
  labels
  published
  company {
    id
    type
    name
    primaryImage {
      id
      src(input: { options: { auto: "format,compress", q: 70 } })
      alt
      isLogo
    }
    siteContext {
      path
    }
  }
  primarySection {
    id
    name
    alias
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70 } })
    alt
    isLogo
  }
  ... on ContentPromotion {
    body(input: { mutation: Email })
    linkText
    linkUrl
  }
  ...on ContentNews {
    byline
  }
  ...on Authorable {
    authors {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}
`;
