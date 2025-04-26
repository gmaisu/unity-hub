import React from "react";

import BrandedDate from "../../components/BrandedDate/BrandedDate.jsx";

import {
  Container,
  PostImage,
  Title,
  Description,
  BottomContainer,
  ReadRedirectLink,
} from "./styles.js";

const BlogPostItem = ({ image, title, description, slug, timestamp }) => {
  return (
    <Container>
      {slug === "empty" ? (
        <></>
      ) : (
        <>
          <PostImage src={image} />
          <Title>{title}</Title>
          <Description>{description}</Description>

          <BottomContainer>
            <BrandedDate timestamp={timestamp} />
            <ReadRedirectLink to={`/blog/${slug}`}>Read</ReadRedirectLink>
          </BottomContainer>
        </>
      )}
    </Container>
  );
};

export default BlogPostItem;
