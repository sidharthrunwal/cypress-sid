import React from "react";

const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? (<div>
          <h2>You haven't selected any class.</h2>
          <p>Please click on the card to select a class.</p>
        </div>)
      : (<div>
            <h2>You selected:</h2>
            { selected.map(course => (
                <div key={course.term[0] + course.number}>
                    {course.term} CS {course.number}: {course.title} {course.meets}
                </div>
                ))
            }
        </div>)
    }
  </div>
);

export default Cart;
