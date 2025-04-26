import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BrandedDate from "../../components/BrandedDate/BrandedDate.jsx";
import BlogPostItem from "../../components/BlogPostItem/BlogPostItem.jsx";

import axios from "../../api/axios";

import {
  Wrapper,
  BackLink,
  LeftArrow,
  LinkText,
  TopContainer,
  Title,
  Poster,
  OtherArticlesParagraph,
  OtherArticlesContainer,
  BorderLine,
} from "./styles.js";

const BackLinkLink = () => (
  <BackLink to={"/blog"}>
    <LeftArrow />
    <LinkText>Nazad na članke</LinkText>
  </BackLink>
);

const BlogPost = () => {
  const { slug } = useParams();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [htmlContent, setHtmlContent] = useState(null);

  const [otherArticles, setOtherArticles] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const getRandomArticles = () => {
    axios
      .get(`/blog/posts/random?size=3&excludeSlug=${slug}`)
      .then((response) => {
        const data = response.data;

        if (data.length === 0) {
          return;
        }

        const generatedArticles = [];

        for (let i = 0; i < 3; i++) {
          if (i in data) {
            generatedArticles.push(data[i]);
          } else {
            generatedArticles.push({ slug: "empty" });
          }
        }

        setOtherArticles(generatedArticles);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const getData = () => {
    axios
      .get(`/blog/post/${slug}`)
      .then((response) => {
        const data = response.data;

        setTitle(data.title);
        setImage(data.image);
        setHtmlContent(data.contentHTML);
        setTimestamp(data.timestamp);
      })
      .catch(() => setNotFound(true));
  };

  useEffect(() => {
    getData();
    getRandomArticles();
  }, []);

  useEffect(() => {
    getData();
    getRandomArticles();

    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <Wrapper>
      <BackLinkLink />

      {notFound ? (
        <h1>Not Found</h1>
      ) : (
        <>
          <TopContainer>
            <Title>{title}</Title>
            <BrandedDate timestamp={timestamp} />
          </TopContainer>

          <Poster src={image} />

          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

          {otherArticles.length > 0 ? (
            <>
              <BorderLine />
              <OtherArticlesParagraph>Ostali članci</OtherArticlesParagraph>

              <OtherArticlesContainer>
                {otherArticles.map((item, index) => (
                  <BlogPostItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    timestamp={item.timestamp}
                    slug={item.slug}
                  />
                ))}
              </OtherArticlesContainer>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default BlogPost;
