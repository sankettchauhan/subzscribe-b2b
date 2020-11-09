import React from 'react';
import { NavLink } from 'react-router-dom';
import BLOGS from "../../content/blogs.json";
import { toKebabCase } from "../../helperFunctions/toKebabCase"

const Card = ({ imageSrc, title }) => (
    <>
        <div>
            <div className="my-3">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imageSrc} alt="blog" className="img-fluid img-blog" />
                    </div>
                    <div className="col-8">
                        <div className="ml-3">
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

const Blog = () => {
    return (
        <div id="blog-section">
            <div className="row no-gutters my-3">
                <div className="col-10 offset-1">
                    <div><h2 className="subheading">featured blog posts</h2></div>
                    <div className="row no-gutters">
                        {BLOGS.map((blog, index) => (
                            <div className="col-12 col-md-6" key={blog + "-" + index}>
                                <NavLink to={`/blogs/${toKebabCase(blog.title)}`}>
                                    <Card imageSrc={`${process.env.PUBLIC_URL}/assets/images/${blog.imageSrc}`} subtitle={blog.subtitle} title={blog.title} />
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
