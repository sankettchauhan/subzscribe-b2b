import React from 'react';
import { NavLink } from 'react-router-dom';
import BLOGS from "../../content/blogs.json";
import { toKebabCase } from "../../helperFunctions/toKebabCase"

const Card = ({ imageSrc, subtitle, title }) => (
    <>
        <div className="card mb-3 blog-card">
            <div className="row no-gutters h-100">
                <div className="col-md-4">
                    <img src={imageSrc} className="card-img" alt="blog" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text text-muted">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)

const Blog = () => {
    return (
        <div className="my-2 my-lg-5" id="blog-section">
            <div className="container-lg">
                <div className="row">
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
    )
}

export default Blog
