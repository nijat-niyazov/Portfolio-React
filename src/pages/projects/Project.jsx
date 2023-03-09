import React from 'react';

const Project = ({ data }) => {
  const { cover, url, title, description, stacks } = data;
  return (
    <div className="project">
      <img src={cover} alt="Project img" className="project-img" />
      <article className="content">
        <p className="title">{title}</p>
        <h4 className="description">{description}</h4>
        <span className="stacks">Stacks: {stacks}</span>
        <button className="view-btn" onClick={() => window.open(url)}>
          View
        </button>
      </article>
    </div>
  );
};

export default Project;
