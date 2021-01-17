import React from "react";

function Note() {
  var date = new Date();
  var currentYear = date.getFullYear();

  return (
    <div className="note">
      <h1>This is Content Title</h1>
      <p>This is Content Paragraph</p>
    </div>
  );
}

export default Note;
