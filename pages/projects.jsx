import React from "react";
import { AiOutlineFolder, AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

const project = ({ data: { items } }) => {
  console.log(items);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repea(1,1fr)",
          gap: "15px",
          padding: "0 15px",
        }}
      >
        {items.map((data) => (
          <div
            style={{
              padding: "10px",
            }}
            key={Date.now()}
          >
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <AiOutlineFolder fontSize={20} />
              {data.name}
            </h3>
            <p>{data.description}</p>
            <div style={{ dispay: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <AiOutlineStar fontSize={14} />
                  {data.stargazers_count}
                </div>
                <div>
                  <BiGitRepoForked fontSize={14} />
                  {data.forks}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const result = await fetch(
    `https://api.github.com/search/repositories?q=user:kali2498+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const data = await result.json();

  return { props: { data } };
}
export default project;
