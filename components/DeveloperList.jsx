import React from 'react'
import {data} from "../DeveloperData"

const DeveloperList = () => {
  return (
    <div className="container developers-list">
      <div className="row">
        {data.map(function (developer) {
          const {
            id,
            bio,
            first,
            last,
            favorite,
            twitterHandle,
            company,
            projects,
          } = developer;

          return (
            <div
              key={id} 
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
              <div className="card card-height p-4 mt-4">
                <div className="developer-img d-flex flex-row justify-content-center align-items-center h-300">
                  <img
                    className="contain-fit"
                    src={`/images/developer-${id}.jpg`}
                    width="300"
                    alt={`${first} ${last}`}
                  />
                </div>
                <div className="developer-info">
                  <div className="d-flex justify-content-between mb-3">
                    <h3 className="text-truncate w-200">
                      {first} {last}
                    </h3>
                  </div>
                  <div>
                    <p>
                      {bio} {company} {twitterHandle} {favorite}
                    </p>
                  </div>
                </div>
              </div>
              <div className="sessionBox card h-250">
                <span className="session w-100">
                  {projects[0].title}{" "}
                  <strong>Platform: {projects[0].platform.name}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeveloperList;