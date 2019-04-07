import * as React from "react";
import { Meta, CodeblogContextInterface, Title, Link } from "../index";
import { Post, Blog, Codeblog } from "./Codeblog";

const MetaTag = (props: any) => <Meta {...props} />;
const LinkTag = (props: any) => <Link {...props} />;

export const getBlogTitle = (blog: Blog) => {
  if (blog.title) {
    return `${blog.title} | Powered by Codeblog`;
  } else {
    return `@${blog.subdomain} | Powered by Codeblog`;
  }
};

const faviconMimeType = (photoURL: string) => {
  if (photoURL.endsWith(".png")) {
    return "image/png";
  } else if (photoURL.endsWith(".jpg") || photoURL.endsWith(".jpeg")) {
    return "image/jpeg";
  } else if (photoURL.endsWith(".gif")) {
    return "image/gif";
  } else {
    return null;
  }
};

const RawBlogPostSEOTags = ({ post, pageType }: CodeblogContextInterface) => (
  <>
    <meta itemProp="description" content={post.summary} />
    {pageType === "show" && (
      <>
        <MetaTag property="article:publisher" content="https://codeblog.com" />

        {post.title && (
          <>
            <Title>{post.title} | via Codeblog</Title>
            <MetaTag
              property="og:title"
              content={`${post.title} | via Codeblog`}
            />
            <MetaTag
              name="twitter:title"
              content={`${post.title} | via Codeblog`}
            />
          </>
        )}

        {post.summary && (
          <>
            <MetaTag property="og:description" content={post.summary} />
            <MetaTag name="description" content={post.summary} />
            <MetaTag name="twitter:description" content={post.summary} />
          </>
        )}
        <MetaTag property="og:type" content="article" />
        <MetaTag property="og:url" content={post.url} />
        {post.publishedAt && (
          <>
            <MetaTag
              property="og:article:published_time"
              content={post.publishedAt.toISOString()}
            />
            <MetaTag
              property="article:published_time"
              content={post.publishedAt.toISOString()}
            />
          </>
        )}

        {post.photoURL && (
          <>
            <MetaTag property="og:image:url" content={post.photoURL} />
            <MetaTag name="twitter:image" content={post.photoURL} />
          </>
        )}

        {post.editedAt && (
          <>
            <MetaTag
              property="og:article:modified_time"
              content={post.editedAt.toISOString()}
            />
            <MetaTag
              property="article:modified_time"
              content={post.editedAt.toISOString()}
            />
            <meta
              itemProp="dateModified"
              content={post.editedAt.toISOString()}
            />
          </>
        )}
      </>
    )}
  </>
);

export const BlogPostSEOTags = ({ post }: { post: Post }) => (
  <Codeblog>
    {({ pageType, ...otherProps }) => (
      <RawBlogPostSEOTags {...otherProps} pageType={pageType} post={post} />
    )}
  </Codeblog>
);

export const RawBlogSEOTags = ({ blog }: { blog: Blog }) => (
  <>
    <Title>{getBlogTitle(blog)}</Title>
    <LinkTag
      rel="alternate"
      type="application/rss+xml"
      title={getBlogTitle(blog)}
      href={blog.url + "/feed.atom"}
    />
    <MetaTag property="og:title" content={getBlogTitle(blog)} />
    <MetaTag name="twitter:title" content={getBlogTitle(blog)} />

    {blog.photoURL && (
      <LinkTag
        rel="icon"
        type={faviconMimeType(blog.photoURL)}
        href={blog.photoURL}
      />
    )}

    <MetaTag name="twitter:card" content="summary_large_image" />
    <MetaTag property="og:description" content={blog.description} />
    <MetaTag name="twitter:description" content={blog.description} />

    <MetaTag name="description" content={blog.description} />
    <MetaTag property="og:site_name" content={getBlogTitle(blog)} />
    <MetaTag name="viewport" content="width=device-width, initial-scale=1" />
  </>
);

export const BlogSEOTags = ({ blog }: { blog?: Blog } = {}) => {
  if (typeof blog === "object") {
    return <RawBlogSEOTags blog={blog} />;
  } else {
    return (
      <Codeblog>
        {({ blog }) => {
          return <RawBlogSEOTags blog={blog} />;
        }}
      </Codeblog>
    );
  }
};
