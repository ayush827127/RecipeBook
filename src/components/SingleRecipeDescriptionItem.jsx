import React from "react";

const SingleRecipeDescriptionItem = ({ recipe }) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img id="main-image" src={recipe.image} width="250" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="mt-4 mb-3">
                    <h5 className="text-uppercase">{recipe.title}</h5>
                  </div>
                  <div>
                    <h6>Steps:</h6>
                    <ul>
                      {recipe.analyzedInstructions[0].steps.map((item) => (
                        <li key={item.number} >{item.step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeDescriptionItem;
