/// <reference types="react" />
import { Post, Blog } from "./CodeblogContext";
import { Title, Meta, Link } from "react-head";
export { Title, Meta, Link };
export declare const getBlogTitle: (blog: Blog) => string;
export declare const BlogPostSEOTags: ({ post }: {
    post: Post;
}) => JSX.Element;
export declare const RawBlogSEOTags: ({ blog }: {
    blog: Blog;
}) => JSX.Element;
export declare const BlogSEOTags: ({ blog }?: {
    blog?: Blog;
}) => JSX.Element;
