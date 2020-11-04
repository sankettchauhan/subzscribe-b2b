import React from 'react'
import BLOGS from "../../content/blogs.json"
import { toKebabCase } from '../../helperFunctions/toKebabCase'

const BlogTemplate = ({ title, subtitle, author, content, blogNumber }) => (
    <>
        <div>
            <h1>
                {title}
            </h1>
        </div>
        <div>
            <h3 className="text-muted">
                {subtitle}
            </h3>
        </div>
        <div>
            <h5>
                {author}
            </h5>
        </div>
        <div>
            {content.map((para, index) => (
                <p key={"blog-" + blogNumber + "-para-" + index} > { para}</p>
            ))}
        </div>
    </>
)

const Blog = ({ blogTitle }) => {
    return (
        <div id="blog">
            <div className="row no-gutters">
                <div className="col-lg-6 col-12 mx-auto">
                    <div className="p-3 p-lg-0 py-lg-5">
                        {BLOGS.filter((blog, index) => (toKebabCase(blog.title) === blogTitle)).map((blog, index) => (
                            <BlogTemplate title={blog.title}
                                subtitle={blog.subtitle}
                                author={blog.author}
                                content={blog.content}
                                blogNumber={index + 1}
                                key={"blog-" + (index + 1)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
