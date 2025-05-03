import React, { useEffect, useState } from "react";

import BlogPostItem from "../../components/BlogPostItem/BlogPostItem.jsx";

import { Wrapper, Container, Header } from "./styles.js";

import axios from "../../api/axios";

const DEFAULT_PAGE_SIZE = 6;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(DEFAULT_PAGE_SIZE);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    axios
      .get(`/blog/posts?page=0&size=${size}`)
      .then((response) => {
        const data = response.data;

        setPage(data.page);
        setSize(data.size);
        setTotalItems(data.total);

        const postsList = data.result;
        const size = postsList.length;

        if (size % 3 != 0) {
          var x = size - (size % 3) + 3 - size;

          for (let i = 0; i < x; i++) {
            postsList.push({ slug: "empty" });
          }
        }

        setPosts(postsList);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Wrapper>
      <Header>Najnoviji uvidi</Header>
      <Container>
        {posts.map((item, index) => (
          <BlogPostItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            timestamp={item.timestamp}
            slug={item.slug}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Blog;
