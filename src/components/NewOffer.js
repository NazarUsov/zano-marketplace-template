import React from "react";
import tshirt from "./../img/Tshirt-design.jpg";

const NewOffer = () => {
  return (
    <div className="popup-container">
      <form className="offer-form">
        <div>
          <label for="offer-title">Title</label>
          <input type="text" id="offer-title" required />
        </div>
        <div>
          <label for="offer-description">Description</label>
          <input type="text" id="offer-description" />
        </div>
        <div>
          <label for="offer-category">Category</label>
          <input type="text" id="offer-category" />
        </div>
        <div>
          <label for="offer-price">Price</label>
          <input type="text" id="offer-price" />
        </div>
        <div>
          <label for="offer-img">Image link</label>
          <input type="text" id="offer-img" />
        </div>
        <div>
          <label for="offer-contact">Contact details</label>
          <input type="text" id="offer-contact" />
        </div>
        <div>
          <label for="offer-comment">Comments</label>
          <input type="text" id="offer-comment" />
        </div>
      </form>
      <div className="offer-preview">
        <p className="offer-preview-text">Preview:</p>
        <div className="offer-card">
          <img className="offer-img" src={tshirt} alt="Marketplace offer pic" />
          <div className="offer-content">
            <h3 className="offer-title">Title</h3>
            <p className="offer-categories">Category</p>
            <p className="offer-price">
              <strong>100</strong> $ZANO
            </p>
            <p className="offer-description">Comments</p>

            <p className="offer-contact">Contacts</p>
          </div>

          <div className="offer-buttons">
            <a href="#" className="btn-primary">
              Respond
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="btn-popup">
          Submit offer
        </a>
      </div>
    </div>
  );
};

export default NewOffer;

// title – offer title
// description – detailed offer description
// category – store defined category
// price – price in ZANO
// img-url – ipfs/arweave link to offer image
// contact – preferred way of communication (telegram, email, zano alias)
// comments -additional comments about the offer
