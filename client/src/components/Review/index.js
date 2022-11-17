import React, { useState } from "react";
import { ADD_REVIEW } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const ReviewForm = ({ productId }) => {
  const [reviewBody, setBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const changeHandler = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      await addReview({
        variables: { reviewBody, productId },
      });

      setBody("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`${characterCount === 500 || error ? "text-error" : ""}`}>
        Character Count: {characterCount}/500
        {error && <span>Something went wrong...</span>}
      </p>
      <form onSubmit={formSubmit}>
        <textarea
          placeholder="Leave a review for this product..."
          value={reviewBody}
          onChange={changeHandler}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ReviewForm;
